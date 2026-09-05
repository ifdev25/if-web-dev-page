import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkRateLimit, getClientIp } from "./rate-limit";

// Équivalent du DefaultController + ContactFormType Symfony
// Reçoit le formulaire, valide, et envoie l'e-mail via nodemailer (= Symfony Mailer)

interface ContactPayload {
  fullName: string;
  email: string;
  prestation: string;
  message: string;
}

function validate(data: ContactPayload): string | null {
  if (!data.fullName || data.fullName.length < 2 || data.fullName.length > 50)
    return "Nom invalide.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "E-mail invalide.";
  if (!data.prestation) return "Prestation manquante.";
  if (!data.message || data.message.length < 50 || data.message.length > 2000)
    return "Message invalide (50–2000 caractères).";
  return null;
}

export async function POST(req: NextRequest) {
  try {
    // Anti-spam : limite les envois répétés depuis une même IP
    const { allowed, retryAfter } = checkRateLimit(getClientIp(req));
    if (!allowed) {
      const minutes = Math.ceil(retryAfter / 60);
      return NextResponse.json(
        { error: `Trop de messages envoyés. Veuillez réessayer dans ${minutes} minute${minutes > 1 ? "s" : ""}.` },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      );
    }

    const body: ContactPayload = await req.json();

    const error = validate(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // Configuration SMTP (équivalent MAILER_DSN=smtp://... dans Symfony)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false, // true pour le port 465, false pour les autres
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM ?? "contact@if-web-dev.com",
      to: process.env.MAIL_TO ?? "contact@if-web-dev.com",
      bcc: process.env.MAIL_BCC ?? "ifwebdev@hotmail.com",
      subject: `Message concernant un ${body.prestation}`,
      html: `
        <p><strong>Nom et prénom :</strong> ${body.fullName}</p>
        <p><strong>E-mail du client :</strong> ${body.email}</p>
        <p><strong>Prestation demandée :</strong> ${body.prestation}</p>
        <p><strong>Message :</strong> ${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Erreur envoi e-mail :", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
