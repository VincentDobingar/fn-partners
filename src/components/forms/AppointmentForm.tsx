"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/data/firm";
import { expertiseDomains } from "@/lib/data/expertise";

const labels = {
  fr: {
    fullName: "Nom complet",
    email: "E-mail",
    phone: "Téléphone",
    domain: "Domaine juridique",
    domainPlaceholder: "Sélectionnez un domaine",
    mode: "Mode de consultation",
    modeCabinet: "Au cabinet",
    modePhone: "Par téléphone",
    modeVideo: "Par visioconférence",
    preferredDate: "Date souhaitée",
    preferredTime: "Créneau souhaité",
    fileReference: "Référence de dossier existant (facultatif)",
    description: "Décrivez brièvement votre situation",
    consent: "J’accepte que mes informations soient utilisées par FN & PARTNERS pour traiter ma demande de rendez-vous.",
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    success: "Votre demande a bien été envoyée. Le cabinet vous contactera pour confirmer le rendez-vous.",
    error: "Une erreur est survenue. Merci de réessayer ou de nous contacter directement.",
  },
  en: {
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    domain: "Legal domain",
    domainPlaceholder: "Select a domain",
    mode: "Consultation mode",
    modeCabinet: "At the office",
    modePhone: "By phone",
    modeVideo: "By video call",
    preferredDate: "Preferred date",
    preferredTime: "Preferred time slot",
    fileReference: "Existing file reference (optional)",
    description: "Briefly describe your situation",
    consent: "I agree that my information may be used by FN & PARTNERS to process my appointment request.",
    submit: "Send Request",
    submitting: "Sending…",
    success: "Your request has been sent. The firm will contact you to confirm the appointment.",
    error: "Something went wrong. Please try again or contact us directly.",
  },
} as const;

type Status = "idle" | "submitting" | "success" | "error";

export function AppointmentForm({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      domain: String(formData.get("domain") ?? ""),
      mode: String(formData.get("mode") ?? "cabinet"),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      preferredTime: String(formData.get("preferredTime") ?? ""),
      fileReference: String(formData.get("fileReference") ?? ""),
      description: String(formData.get("description") ?? ""),
      consent: formData.get("consent") === "on",
      company: String(formData.get("company") ?? ""),
      startedAt: String(startedAt.current),
    };

    try {
      const response = await fetch("/api/rendez-vous", {
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
      <div className="absolute -left-[9999px] top-0 w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Ne pas remplir / Do not fill
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">{t.fullName}</span>
          <input required name="fullName" type="text" className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">{t.email}</span>
          <input required name="email" type="email" className={inputClass} />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">{t.phone}</span>
          <input required name="phone" type="tel" className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">{t.domain}</span>
          <select required name="domain" defaultValue="" className={inputClass}>
            <option value="" disabled>{t.domainPlaceholder}</option>
            {expertiseDomains.map((domain) => (
              <option key={domain.slug} value={domain[locale].title}>{domain[locale].title}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="text-sm">
        <legend className="mb-1.5 text-ink-soft">{t.mode}</legend>
        <div className="flex flex-wrap gap-4">
          {[
            { value: "cabinet", label: t.modeCabinet },
            { value: "telephone", label: t.modePhone },
            { value: "visio", label: t.modeVideo },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input type="radio" name="mode" value={option.value} defaultChecked={option.value === "cabinet"} />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">{t.preferredDate}</span>
          <input required name="preferredDate" type="date" className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">{t.preferredTime}</span>
          <input required name="preferredTime" type="time" className={inputClass} />
        </label>
      </div>

      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.fileReference}</span>
        <input name="fileReference" type="text" className={inputClass} />
      </label>

      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.description}</span>
        <textarea required name="description" rows={5} minLength={10} className={inputClass} />
      </label>

      <label className="flex items-start gap-2.5 text-sm text-ink-soft">
        <input required name="consent" type="checkbox" className="mt-1" />
        <span>{t.consent}</span>
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
