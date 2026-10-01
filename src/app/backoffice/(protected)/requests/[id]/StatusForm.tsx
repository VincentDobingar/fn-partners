"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { REQUEST_STATUSES } from "@/lib/data/requestOptions";

const labels: Record<string, string> = {
  new: "Nouvelle",
  in_review: "En cours d’examen",
  accepted: "Acceptée",
  declined: "Refusée",
  closed: "Clôturée",
};

export function StatusForm({ requestId, currentStatus }: { requestId: number; currentStatus: string }) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);

  async function handleChange(newStatus: string) {
    setStatus(newStatus);
    setSaving(true);
    await fetch(`/api/backoffice/requests/${requestId}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    setSaving(false);
    router.refresh();
  }

  return (
    <select
      value={status}
      disabled={saving}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-sm border border-line bg-white px-4 py-2 text-sm disabled:opacity-60"
    >
      {REQUEST_STATUSES.map((s) => (
        <option key={s} value={s}>
          {labels[s]}
        </option>
      ))}
    </select>
  );
}
