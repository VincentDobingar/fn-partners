"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  requestId: number;
  clientAccount: { email: string; activated_at: string | null } | null;
};

export function InviteClientForm({ requestId, clientAccount }: Props) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleInvite() {
    setSending(true);
    setError("");
    try {
      const response = await fetch(`/api/backoffice/requests/${requestId}/invite-client`, { method: "POST" });
      const body = (await response.json()) as { ok: boolean };
      if (!response.ok || !body.ok) {
        setError("Une erreur est survenue. Merci de réessayer.");
        return;
      }
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1.5">
      <div className="flex items-center gap-3">
        {clientAccount && (
          <span className="text-xs text-muted">
            {clientAccount.activated_at ? "Espace client activé" : "Invitation envoyée, en attente d’activation"}
          </span>
        )}
        <button
          type="button"
          onClick={handleInvite}
          disabled={sending}
          className="rounded-sm border border-line bg-white px-4 py-2 text-sm hover:border-gold disabled:opacity-60"
        >
          {sending ? "Envoi…" : clientAccount ? "Renvoyer l’invitation" : "Inviter le client"}
        </button>
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
