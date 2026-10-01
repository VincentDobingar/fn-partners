import Link from "next/link";
import type { Metadata } from "next";
import { getDb } from "@/lib/db";
import { expertiseDomains } from "@/lib/data/expertise";
import { REQUEST_STATUS_LABELS } from "@/lib/data/requestOptions";
import { requireClientSession } from "@/lib/auth/guard";

export const metadata: Metadata = { title: "Mes demandes" };

export default async function ClientDashboardPage() {
  const client = await requireClientSession();

  const db = getDb();
  const requests = await db("requests")
    .where({ client_account_id: client.id })
    .select("id", "reference", "legal_domain_slug", "status", "created_at")
    .orderBy("created_at", "desc");

  return (
    <div>
      <h1 className="font-serif text-2xl text-navy">Mes demandes</h1>
      <p className="mt-2 text-sm text-muted">{requests.length} demande(s) au total.</p>

      <div className="mt-6 overflow-x-auto rounded-sm border border-line">
        <table className="w-full text-sm">
          <thead className="bg-raised text-left text-xs font-mono uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3">Référence</th>
              <th className="px-4 py-3">Domaine</th>
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
                    <Link href={`/client/requests/${r.id}`} className="font-mono text-gold-deep hover:text-gold-light">
                      {r.reference}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{domain ? domain.fr.title : r.legal_domain_slug}</td>
                  <td className="px-4 py-3 text-ink-soft">{REQUEST_STATUS_LABELS[r.status as keyof typeof REQUEST_STATUS_LABELS] ?? r.status}</td>
                  <td className="px-4 py-3 text-muted">{new Date(r.created_at).toLocaleString("fr-FR")}</td>
                </tr>
              );
            })}
            {requests.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted">
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
