"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/data/firm";
import { appointmentConfig, appointmentSlots } from "@/lib/data/firm";
import { expertiseDomains } from "@/lib/data/expertise";
import {
  APPOINTMENT_FILE_TYPES,
  APPOINTMENT_MAX_FILE_BYTES,
  checkAppointmentDate,
  todayAtFirm,
} from "@/lib/appointments";

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
    timePlaceholder: "Choisissez un créneau",
    hours: "Rendez-vous du lundi au vendredi, de 8 h à 17 h (heure de N’Djamena).",
    dateClosed: "Le cabinet reçoit du lundi au vendredi : merci de choisir un autre jour.",
    datePast: "Merci de choisir une date à partir de demain.",
    fileReference: "Référence de dossier existant (facultatif)",
    description: "Décrivez brièvement votre situation",
    documents: "Pièces jointes (facultatif)",
    documentsHint: `Jusqu’à ${appointmentConfig.maxFiles} fichiers — PDF, JPG, PNG ou Word, ${appointmentConfig.maxFileSizeMb} Mo maximum chacun. Ils sont transmis au cabinet de façon confidentielle.`,
    addFiles: "Ajouter des fichiers",
    remove: "Retirer",
    tooMany: `Vous pouvez joindre ${appointmentConfig.maxFiles} fichiers au maximum.`,
    typeNotAllowed: "Format non accepté",
    tooLarge: "Fichier trop volumineux",
    consent: "J’accepte que mes informations soient utilisées par FN & PARTNERS pour traiter ma demande de rendez-vous.",
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    success: "Votre demande a bien été envoyée. Le cabinet vous contactera pour confirmer le rendez-vous.",
    error: "Une erreur est survenue. Merci de réessayer ou de nous contacter directement.",
    filesError: "Merci de retirer les fichiers signalés avant d’envoyer votre demande.",
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
    timePlaceholder: "Choose a time slot",
    hours: "Appointments Monday to Friday, 8 am to 5 pm (N’Djamena time).",
    dateClosed: "The firm receives clients Monday to Friday: please choose another day.",
    datePast: "Please choose a date from tomorrow onwards.",
    fileReference: "Existing file reference (optional)",
    description: "Briefly describe your situation",
    documents: "Attachments (optional)",
    documentsHint: `Up to ${appointmentConfig.maxFiles} files — PDF, JPG, PNG or Word, ${appointmentConfig.maxFileSizeMb} MB maximum each. They are sent to the firm confidentially.`,
    addFiles: "Add files",
    remove: "Remove",
    tooMany: `You can attach up to ${appointmentConfig.maxFiles} files.`,
    typeNotAllowed: "Format not accepted",
    tooLarge: "File too large",
    consent: "I agree that my information may be used by FN & PARTNERS to process my appointment request.",
    submit: "Send Request",
    submitting: "Sending…",
    success: "Your request has been sent. The firm will contact you to confirm the appointment.",
    error: "Something went wrong. Please try again or contact us directly.",
    filesError: "Please remove the flagged files before sending your request.",
  },
} as const;

type Status = "idle" | "submitting" | "success" | "error";

const slots = appointmentSlots();

function fileProblem(file: File): "type" | "size" | null {
  if (!(APPOINTMENT_FILE_TYPES as readonly string[]).includes(file.type)) return "type";
  if (file.size > APPOINTMENT_MAX_FILE_BYTES) return "size";
  return null;
}

export function AppointmentForm({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [minDate, setMinDate] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [filesError, setFilesError] = useState(false);
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
    // Première date sélectionnable : demain, à l’heure du cabinet (calculé côté navigateur).
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(todayAtFirm(tomorrow));
  }, []);

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const problem = input.value ? checkAppointmentDate(input.value) : null;
    input.setCustomValidity(problem === "closed" ? t.dateClosed : problem === "past" ? t.datePast : "");
    input.reportValidity();
  }

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const incoming = Array.from(event.currentTarget.files ?? []);
    setFiles((current) => [...current, ...incoming].slice(0, appointmentConfig.maxFiles));
    setFilesError(false);
    event.currentTarget.value = "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (files.some((file) => fileProblem(file) !== null)) {
      setFilesError(true);
      return;
    }

    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("consent", formData.get("consent") === "on" ? "true" : "false");
    formData.set("startedAt", String(startedAt.current));
    formData.delete("documents");
    files.forEach((file) => formData.append("documents", file));

    try {
      const response = await fetch("/api/rendez-vous", { method: "POST", body: formData });
      if (!response.ok) throw new Error("request_failed");
      setStatus("success");
      setFiles([]);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-sm border border-line bg-white p-6 text-ink-soft">
        {t.success}
      </p>
    );
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
          <input required name="fullName" type="text" autoComplete="name" className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">{t.email}</span>
          <input required name="email" type="email" autoComplete="email" className={inputClass} />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">{t.phone}</span>
          <input required name="phone" type="tel" autoComplete="tel" className={inputClass} />
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

      <div>
        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block text-sm">
            <span className="block mb-1.5 text-ink-soft">{t.preferredDate}</span>
            <input
              required
              name="preferredDate"
              type="date"
              min={minDate || undefined}
              onChange={handleDateChange}
              className={inputClass}
            />
          </label>
          <label className="block text-sm">
            <span className="block mb-1.5 text-ink-soft">{t.preferredTime}</span>
            <select required name="preferredTime" defaultValue="" className={inputClass}>
              <option value="" disabled>{t.timePlaceholder}</option>
              {slots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-2 text-xs text-muted">{t.hours}</p>
      </div>

      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.fileReference}</span>
        <input name="fileReference" type="text" maxLength={100} className={inputClass} />
      </label>

      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.description}</span>
        <textarea required name="description" rows={5} minLength={10} maxLength={2000} className={inputClass} />
      </label>

      <div className="text-sm">
        <div className="mb-1.5 text-ink-soft">{t.documents}</div>
        <p className="text-xs text-muted">{t.documentsHint}</p>
        {files.length < appointmentConfig.maxFiles && (
          <label className="mt-3 inline-flex cursor-pointer items-center rounded-sm border border-line px-5 py-2.5 text-sm hover:border-gold hover:text-gold-deep focus-within:border-gold">
            {t.addFiles}
            <input
              type="file"
              name="documents"
              multiple
              accept={APPOINTMENT_FILE_TYPES.join(",")}
              className="sr-only"
              onChange={handleFilesSelected}
            />
          </label>
        )}
        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, index) => {
              const problem = fileProblem(file);
              return (
                <li
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between gap-3 rounded-sm border border-line px-4 py-2.5"
                >
                  <div className="min-w-0">
                    <div className="truncate text-ink-soft">{file.name}</div>
                    {problem && (
                      <div className="text-xs text-red-700">{problem === "type" ? t.typeNotAllowed : t.tooLarge}</div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setFiles((current) => current.filter((_, i) => i !== index))}
                    className="shrink-0 text-xs font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light"
                  >
                    {t.remove}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {files.length >= appointmentConfig.maxFiles && <p className="mt-2 text-xs text-muted">{t.tooMany}</p>}
        {filesError && <p role="alert" className="mt-2 text-sm text-red-700">{t.filesError}</p>}
      </div>

      <label className="flex items-start gap-2.5 text-sm text-ink-soft">
        <input required name="consent" type="checkbox" className="mt-1" />
        <span>{t.consent}</span>
      </label>

      {status === "error" && <p role="alert" className="text-sm text-red-700">{t.error}</p>}

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
