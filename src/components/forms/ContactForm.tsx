"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/data/firm";

const labels = {
  fr: {
    fullName: "Nom complet",
    email: "E-mail",
    phone: "Téléphone (facultatif)",
    message: "Votre message",
    submit: "Envoyer",
    submitting: "Envoi en cours…",
    success: "Votre message a bien été envoyé. Le cabinet vous répondra dans les meilleurs délais.",
    error: "Une erreur est survenue. Merci de réessayer ou de nous contacter par téléphone.",
  },
  en: {
    fullName: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    message: "Your message",
    submit: "Send",
    submitting: "Sending…",
    success: "Your message has been sent. The firm will get back to you as soon as possible.",
    error: "Something went wrong. Please try again or contact us by phone.",
  },
} as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="rounded-sm border border-line bg-white p-6 text-ink-soft">{t.success}</p>;
  }

  const inputClass =
    "w-full rounded-sm border border-line bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.fullName}</span>
        <input required name="fullName" type="text" className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.email}</span>
        <input required name="email" type="email" className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.phone}</span>
        <input name="phone" type="tel" className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.message}</span>
        <textarea required name="message" rows={5} minLength={10} className={inputClass} />
      </label>

      {status === "error" && <p className="text-sm text-red-700">{t.error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light disabled:opacity-60"
      >
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
