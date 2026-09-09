import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "./rate-limit";

// Équivalent du DefaultController + ContactFormType Symfony
// Reçoit le formulaire, valide, et envoie l'e-mail via Resend

interface ContactPayload {
  fullName: string;
  email: string;
  prestation: string;
  message: string;
}

// Même liste que le <select> du formulaire. On la revalide côté serveur :
// la prestation part dans le sujet de l'e-mail, elle ne doit pas être libre.
const PRESTATIONS = ["Visuel ou Logo", "Site Vitrine", "Site E-commerce"];

function validate(data: ContactPayload): string | null {
  if (!data.fullName || data.fullName.length < 2 || data.fullName.length > 50)
    return "Nom invalide.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "E-mail invalide.";
  if (!data.prestation || !PRESTATIONS.includes(data.prestation))
    return "Prestation invalide.";
  if (!data.message || data.message.length < 50 || data.message.length > 2000)
    return "Message invalide (50–2000 caractères).";
  return null;
}

// Les champs du formulaire sont insérés dans du HTML : on les échappe pour
// qu'un visiteur ne puisse pas injecter de balises dans l'e-mail reçu.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.MAIL_FROM;
    const to = process.env.MAIL_TO;
    if (!apiKey || !from || !to) {
      // Mauvaise configuration serveur : on log précisément, on reste vague côté client.
      console.error(
        "Configuration e-mail incomplète :",
        [!apiKey && "RESEND_API_KEY", !from && "MAIL_FROM", !to && "MAIL_TO"].filter(Boolean).join(", ")
      );
      return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
    }

    // Instancié ici (et pas au chargement du module) pour que l'absence de clé
    // ne fasse pas échouer le build.
    const resend = new Resend(apiKey);

    const { error: sendError } = await resend.emails.send({
      from,
      to,
      // Chaine vide -> undefined : Resend rejette un bcc vide.
      bcc: process.env.MAIL_BCC || undefined,
      // Répondre à l'e-mail reçu écrit directement au visiteur
      replyTo: body.email,
      subject: `Message concernant un ${body.prestation}`,
      html: `
        <p><strong>Nom et prénom :</strong> ${escapeHtml(body.fullName)}</p>
        <p><strong>E-mail du client :</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Prestation demandée :</strong> ${escapeHtml(body.prestation)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(body.message).replace(/\n/g, "<br />")}</p>
      `,
      text: [
        `Nom et prénom : ${body.fullName}`,
        `E-mail du client : ${body.email}`,
        `Prestation demandée : ${body.prestation}`,
        "",
        "Message :",
        body.message,
      ].join("\n"),
    });

    // Resend ne lève pas d'exception sur une erreur d'API : il la renvoie.
    if (sendError) {
      console.error("Erreur Resend :", sendError);
      return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Erreur envoi e-mail :", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
