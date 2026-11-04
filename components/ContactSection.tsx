"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { PRESTATION_VALUES, type Dict } from "@/lib/i18n";

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

function validate(data: FormData, m: Dict["contact"]["errors"]): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName || data.fullName.length < 2)
    errors.fullName = m.nameMin;
  if (data.fullName.length > 50)
    errors.fullName = m.nameMax;
  if (!data.email) errors.email = m.emailRequired;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = m.emailInvalid;
  if (!data.prestation) errors.prestation = m.prestation;
  if (!data.message || data.message.length < 50)
    errors.message = m.messageMin;
  if (data.message.length > 2000)
    errors.message = m.messageMax;
  return errors;
}

export default function ContactSection({ t }: { t: Dict["contact"] }) {
  const [form, setForm] = useState<FormData>({ fullName: "", email: "", prestation: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(t.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form, t.errors);
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
        setErrorMessage(data?.error ?? t.error);
        setStatus("error");
      }
    } catch {
      setErrorMessage(t.error);
      setStatus("error");
    }
  };

  return (
    <section className="section bg-black" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="text-white">{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>
      </div>

      <div className="container text-white">
        <div className="flex flex-wrap">

          {/* Formulaire */}
          <div className="w-full lg:w-1/2 px-4 fade-in">

            {status === "success" && (
              <div className="alert alert-success my-6" role="alert">
                {t.success}
                <button type="button" className="btn-close" onClick={() => setStatus("idle")} aria-label={t.close} />
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger my-6" role="alert">
                {errorMessage}
                <button type="button" className="btn-close" onClick={() => setStatus("idle")} aria-label={t.close} />
              </div>
            )}

            <form onSubmit={handleSubmit} className="glass-card contact-form" noValidate>

              <div className="form-floating mb-6">
                <input type="text" id="fullName" name="fullName"
                  className={`form-control${errors.fullName ? " is-invalid" : ""}`}
                  placeholder=" " value={form.fullName} onChange={handleChange}
                  minLength={2} maxLength={50} required />
                <label htmlFor="fullName">{t.fullName}</label>
                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
              </div>

              <div className="form-floating mb-6">
                <input type="email" id="email" name="email"
                  className={`form-control${errors.email ? " is-invalid" : ""}`}
                  placeholder=" " value={form.email} onChange={handleChange} required />
                <label htmlFor="email">{t.email}</label>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="form-floating mb-6">
                <select id="prestation" name="prestation"
                  className={`form-control${errors.prestation ? " is-invalid" : ""}`}
                  value={form.prestation} onChange={handleChange} required>
                  <option value="" disabled>{t.choose}</option>
                  {PRESTATION_VALUES.map((value, i) => (
                    <option key={value} value={value}>{t.prestations[i]}</option>
                  ))}
                </select>
                <label htmlFor="prestation">{t.prestation}</label>
                {errors.prestation && <div className="invalid-feedback">{errors.prestation}</div>}
              </div>

              <div className="form-floating mb-6">
                <textarea id="message" name="message"
                  className={`form-control${errors.message ? " is-invalid" : ""}`}
                  placeholder=" " style={{ height: "150px" }}
                  value={form.message} onChange={handleChange}
                  minLength={50} maxLength={2000} required />
                <label htmlFor="message">{t.message}</label>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn hero-button red-button inline-flex items-center gap-2" disabled={status === "loading"}>
                {status === "loading" ? (
                  <><Loader2 size={16} className="animate-spin" />{t.sending}</>
                ) : (
                  <><Send size={16} />{t.submit}</>
                )}
              </button>

            </form>
          </div>

          {/* Image laptop */}
          <div className="w-full lg:w-1/2 flex justify-center items-center slide-in from-right">
            <Image className="w-3/4" src="/img/laptop_form_3.webp" width={500} height={400} loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
