"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/data/firm";
import { ALLOWED_MIME_TYPES, MAX_FILE_SIZE_BYTES } from "@/lib/data/requestOptions";
import { StepIndicator } from "@/components/ui/StepIndicator";
import { copy } from "./copy";
import { initialRequestFormState, type RequestFormState } from "./types";
import { Step1Identity } from "./Step1Identity";
import { Step2Domain } from "./Step2Domain";
import { Step3OpposingParty } from "./Step3OpposingParty";
import { Step4UrgencyDescription } from "./Step4UrgencyDescription";
import { Step5Documents } from "./Step5Documents";
import { Step6Consent } from "./Step6Consent";

type Status = "idle" | "submitting" | "success" | "error";

const TOTAL_STEPS = 6;

function canAdvance(step: number, state: RequestFormState): boolean {
  switch (step) {
    case 1:
      return state.fullName.trim().length >= 2 && /\S+@\S+\.\S+/.test(state.email) && state.phone.trim().length >= 6;
    case 2:
      return state.legalDomainSlug.length > 0;
    case 3:
      return true;
    case 4:
      return state.description.trim().length >= 10;
    case 5:
      return state.documents.every(
        (file) =>
          ALLOWED_MIME_TYPES.includes(file.type as (typeof ALLOWED_MIME_TYPES)[number]) &&
          file.size <= MAX_FILE_SIZE_BYTES
      );
    default:
      return true;
  }
}

export function RequestForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [step, setStep] = useState(1);
  const [state, setState] = useState<RequestFormState>(initialRequestFormState);
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function update<K extends keyof RequestFormState>(key: K, value: RequestFormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit() {
    setStatus("submitting");

    const fd = new FormData();
    fd.append("locale", locale);
    fd.append("fullName", state.fullName);
    fd.append("email", state.email);
    fd.append("phone", state.phone);
    fd.append("legalDomainSlug", state.legalDomainSlug);
    fd.append("opposingPartyName", state.opposingPartyName);
    fd.append("opposingPartyDetails", state.opposingPartyDetails);
    fd.append("urgency", state.urgency);
    fd.append("description", state.description);
    fd.append("consent", state.consent ? "true" : "false");
    fd.append("company", honeypot);
    fd.append("startedAt", String(startedAt.current));
    state.documents.forEach((file) => fd.append("documents", file));

    try {
      const response = await fetch("/api/soumettre-une-demande", { method: "POST", body: fd });
      const body = (await response.json()) as { ok: boolean; reference?: string | null };
      if (!response.ok || !body.ok) throw new Error("request_failed");
      setReference(body.reference ?? null);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-white p-6 text-center">
        <p className="text-ink-soft">{t.success}</p>
        {reference && (
          <p className="mt-3">
            <span className="text-sm text-muted">{t.successReference}</span>
            <br />
            <span className="font-mono text-lg text-navy">{reference}</span>
          </p>
        )}
        <p className="mt-3 text-sm text-muted">{t.successNote}</p>
      </div>
    );
  }

  const stepProps = { state, update, locale };

  return (
    <div className="space-y-8">
      <div className="absolute -left-[9999px] top-0 w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Ne pas remplir / Do not fill
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <StepIndicator steps={t.steps} currentStep={step} />

      {step === 1 && <Step1Identity {...stepProps} />}
      {step === 2 && <Step2Domain {...stepProps} />}
      {step === 3 && <Step3OpposingParty {...stepProps} />}
      {step === 4 && <Step4UrgencyDescription {...stepProps} />}
      {step === 5 && <Step5Documents {...stepProps} />}
      {step === 6 && <Step6Consent {...stepProps} />}

      {status === "error" && <p className="text-sm text-red-700">{t.error}</p>}

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm hover:border-gold hover:text-gold-deep disabled:opacity-40 disabled:pointer-events-none"
        >
          {t.back}
        </button>

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(TOTAL_STEPS, s + 1))}
            disabled={!canAdvance(step, state)}
            className="inline-flex items-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light disabled:opacity-40 disabled:pointer-events-none"
          >
            {t.next}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!state.consent || status === "submitting"}
            className="inline-flex items-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light disabled:opacity-60"
          >
            {status === "submitting" ? t.submitting : t.submit}
          </button>
        )}
      </div>
    </div>
  );
}
