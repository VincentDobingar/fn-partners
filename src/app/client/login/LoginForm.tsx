"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Step = "credentials" | "otp";
type Status = "idle" | "submitting" | "error";

const inputClass =
  "w-full rounded-sm border border-line bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold";

export function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleCredentialsSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/client/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const body = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !body.ok) {
        setError(
          body.error === "rate_limited"
            ? "Trop de tentatives. Réessayez plus tard."
            : body.error === "account_locked"
              ? "Compte temporairement verrouillé après plusieurs échecs."
              : "E-mail ou mot de passe incorrect."
        );
        setStatus("error");
        return;
      }

      setStep("otp");
      setStatus("idle");
    } catch {
      setError("Une erreur est survenue. Merci de réessayer.");
      setStatus("error");
    }
  }

  async function handleOtpSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/client/login/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const body = (await response.json()) as { ok: boolean };

      if (!response.ok || !body.ok) {
        setError("Code incorrect ou expiré.");
        setStatus("error");
        return;
      }

      router.push("/client");
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Merci de réessayer.");
      setStatus("error");
    }
  }

  if (step === "otp") {
    return (
      <form onSubmit={handleOtpSubmit} className="space-y-5">
        <p className="text-sm text-muted">
          Un code de vérification à 6 chiffres a été envoyé à <span className="text-ink-soft">{email}</span>.
        </p>
        <label className="block text-sm">
          <span className="block mb-1.5 text-ink-soft">Code de vérification</span>
          <input
            required
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            autoFocus
            className={inputClass}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        {error && <p className="text-sm text-red-700">{error}</p>}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light disabled:opacity-60"
        >
          {status === "submitting" ? "Vérification…" : "Vérifier"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleCredentialsSubmit} className="space-y-5">
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">E-mail</span>
        <input required type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">Mot de passe</span>
        <input
          required
          type="password"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light disabled:opacity-60"
      >
        {status === "submitting" ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
