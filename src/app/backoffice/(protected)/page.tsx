import Link from "next/link";
import type { Metadata } from "next";
import { getDb } from "@/lib/db";
import { expertiseDomains } from "@/lib/data/expertise";
import { REQUEST_STATUS_LABELS, urgencyLabels, type UrgencyLevel } from "@/lib/data/requestOptions";

export const metadata: Metadata = { title: "Tableau de bord" };

export default async function BackofficeDashboardPage() {
  const db = getDb();
  const requests = await db("requests")
    .select("id", "reference", "full_name", "legal_domain_slug", "urgency", "status", "created_at")
    .orderBy("created_at", "desc");

  return (
    <div>
      <h1 className="font-serif text-2xl text-navy">Demandes soumises</h1>
      <p className="mt-2 text-sm text-muted">{requests.length} demande(s) au total.</p>

      <div className="mt-6 overflow-x-auto rounded-sm border border-line">
        <table className="w-full text-sm">
          <thead className="bg-raised text-left text-xs font-mono uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3">Référence</th>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Domaine</th>
              <th className="px-4 py-3">Urgence</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Reçue le</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {requests.map((r) => {
              const domain = expertiseDomains.find((d) => d.slug === r.legal_domain_slug);
              return (
                <tr key={r.id} className="hover:bg-raised/60">
                  <td className="px-4 py-3">
                    <Link href={`/backoffice/requests/${r.id}`} className="font-mono text-gold-deep hover:text-gold-light">
                      {r.reference}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{r.full_name}</td>
                  <td className="px-4 py-3 text-ink-soft">{domain ? domain.fr.title : r.legal_domain_slug}</td>
                  <td className="px-4 py-3 text-ink-soft">{urgencyLabels[r.urgency as UrgencyLevel]?.fr ?? r.urgency}</td>
                  <td className="px-4 py-3 text-ink-soft">{REQUEST_STATUS_LABELS[r.status as keyof typeof REQUEST_STATUS_LABELS] ?? r.status}</td>
                  <td className="px-4 py-3 text-muted">{new Date(r.created_at).toLocaleString("fr-FR")}</td>
                </tr>
              );
            })}
            {requests.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted">
                  Aucune demande pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
