"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  prestation: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  prestation?: string;
  message?: string;
}

const PRESTATIONS = [
  { value: "", label: "--Choisissez votre prestation--" },
  { value: "Visuel ou Logo", label: "Visuel ou Logo" },
  { value: "Site Vitrine", label: "Site Vitrine" },
  { value: "Site E-commerce", label: "Site E-commerce" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName || data.fullName.length < 2)
    errors.fullName = "Votre nom et prénom doivent faire au moins 2 caractères.";
  if (data.fullName.length > 50)
    errors.fullName = "Votre nom et prénom ne doivent pas dépasser 50 caractères.";
  if (!data.email) errors.email = "L'e-mail est obligatoire.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Veuillez saisir un e-mail valide.";
  if (!data.prestation) errors.prestation = "Veuillez choisir une prestation.";
  if (!data.message || data.message.length < 50)
    errors.message = "Votre message doit faire au moins 50 caractères.";
  if (data.message.length > 2000)
    errors.message = "Votre message ne doit pas dépasser 2000 caractères.";
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ fullName: "", email: "", prestation: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Une erreur s'est produite. Veuillez réessayer."
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", email: "", prestation: "", message: "" });
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error ?? "Une erreur s'est produite. Veuillez réessayer.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
      setStatus("error");
    }
  };

  return (
    <section className="bg-black" id="contact">
      <div className="flex flex-col container">
        <h2 className="text-white mt-12 uppercase text-shadow-light">Contact</h2>
        <span className="divider-separator text-center mt-6 trait-shadow-light" />
      </div>

      <div className="container text-white">
        <div className="flex flex-wrap">

          {/* Image laptop */}
          <div className="w-full lg:w-1/2 flex justify-center items-center slide-in from-left">
            <Image className="w-3/4" src="/img/laptop_form_3.webp" width={500} height={400} loading="lazy" alt="laptop-image" />
          </div>

          {/* Formulaire */}
          <div className="w-full lg:w-1/2 py-12 px-4 fade-in">

            {status === "success" && (
              <div className="alert alert-success my-6" role="alert">
                Votre message a bien été envoyé !
                <button type="button" className="btn-close" onClick={() => setStatus("idle")} aria-label="Close" />
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger my-6" role="alert">
                {errorMessage}
                <button type="button" className="btn-close" onClick={() => setStatus("idle")} aria-label="Close" />
              </div>
            )}

            <h3 className="my-6 text-shadow-light mx-4">Améliorez votre image !</h3>

            <form onSubmit={handleSubmit} className="mx-4" noValidate>

              <div className="form-floating mb-6">
                <input type="text" id="fullName" name="fullName"
                  className={`form-control${errors.fullName ? " is-invalid" : ""}`}
                  placeholder=" " value={form.fullName} onChange={handleChange}
                  minLength={2} maxLength={50} required />
                <label htmlFor="fullName">Votre Nom et Prénom</label>
                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
              </div>

              <div className="form-floating mb-6">
                <input type="email" id="email" name="email"
                  className={`form-control${errors.email ? " is-invalid" : ""}`}
                  placeholder=" " value={form.email} onChange={handleChange} required />
                <label htmlFor="email">Votre E-mail</label>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="form-floating mb-6">
                <select id="prestation" name="prestation"
                  className={`form-control${errors.prestation ? " is-invalid" : ""}`}
                  value={form.prestation} onChange={handleChange} required>
                  {PRESTATIONS.map((p) => (
                    <option key={p.value} value={p.value} disabled={p.value === ""}>{p.label}</option>
                  ))}
                </select>
                <label htmlFor="prestation">Prestation souhaitée</label>
                {errors.prestation && <div className="invalid-feedback">{errors.prestation}</div>}
              </div>

              <div className="form-floating mb-6">
                <textarea id="message" name="message"
                  className={`form-control${errors.message ? " is-invalid" : ""}`}
                  placeholder=" " style={{ height: "150px" }}
                  value={form.message} onChange={handleChange}
                  minLength={50} maxLength={2000} required />
                <label htmlFor="message">Votre Message</label>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn hero-button red-button inline-flex items-center gap-2" disabled={status === "loading"}>
                {status === "loading" ? (
                  <><Loader2 size={16} className="animate-spin" />Envoi en cours…</>
                ) : (
                  <><Send size={16} />Envoyer</>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
