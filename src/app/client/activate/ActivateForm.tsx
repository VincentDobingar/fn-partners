"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full rounded-sm border border-line bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold";

export function ActivateForm({ token }: { token: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (password !== confirm) {
      setError("Les deux mots de passe ne correspondent pas.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/client/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const body = (await response.json()) as { ok: boolean };

      if (!response.ok || !body.ok) {
        setError("Ce lien d’activation n’est plus valide. Demandez à votre interlocuteur un nouveau lien.");
        setSubmitting(false);
        return;
      }

      router.push("/client");
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Merci de réessayer.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">Mot de passe</span>
        <input
          required
          type="password"
          minLength={8}
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">Confirmer le mot de passe</span>
        <input
          required
          type="password"
          minLength={8}
          className={inputClass}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </label>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light disabled:opacity-60"
      >
        {submitting ? "Activation…" : "Activer mon accès"}
      </button>
    </form>
  );
}
