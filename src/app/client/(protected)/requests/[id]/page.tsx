import { notFound } from "next/navigation";
import { getDb } from "@/lib/db";
import { expertiseDomains } from "@/lib/data/expertise";
import { REQUEST_STATUS_LABELS } from "@/lib/data/requestOptions";
import { requireClientSession } from "@/lib/auth/guard";

export default async function ClientRequestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const client = await requireClientSession();

  const { id } = await params;
  const requestId = Number(id);
  if (!Number.isInteger(requestId)) notFound();

  const db = getDb();
  const request = await db("requests").where({ id: requestId, client_account_id: client.id }).first();
  if (!request) notFound();

  const documents = await db("request_documents").where({ request_id: requestId }).orderBy("created_at", "asc");
  const history = await db("request_status_history")
    .where({ request_id: requestId })
    .select("old_status", "new_status", "changed_at")
    .orderBy("changed_at", "desc");

  const domain = expertiseDomains.find((d) => d.slug === request.legal_domain_slug);

  return (
    <div className="max-w-3xl">
      <div>
        <div className="kicker text-gold-deep">{request.reference}</div>
        <h1 className="font-serif text-2xl text-navy">{domain ? domain.fr.title : request.legal_domain_slug}</h1>
      </div>

      <dl className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
        <div>
          <dt className="text-muted">Statut</dt>
          <dd className="text-ink-soft">{REQUEST_STATUS_LABELS[request.status as keyof typeof REQUEST_STATUS_LABELS] ?? request.status}</dd>
        </div>
        <div>
          <dt className="text-muted">Reçue le</dt>
          <dd className="text-ink-soft">{new Date(request.created_at).toLocaleString("fr-FR")}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <h2 className="font-serif text-lg text-navy">Description</h2>
        <p className="mt-2 text-sm text-ink-soft whitespace-pre-wrap">{request.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="font-serif text-lg text-navy">Documents ({documents.length})</h2>
        {documents.length === 0 ? (
          <p className="mt-2 text-sm text-muted">Aucun document joint.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {documents.map((doc) => (
              <li key={doc.id}>
                <a href={`/api/client/documents/${doc.id}`} className="text-sm text-gold-deep hover:text-gold-light">
                  {doc.original_filename} <span className="text-muted">({Math.round(doc.size_bytes / 1024)} Ko)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {history.length > 0 && (
        <div className="mt-8">
          <h2 className="font-serif text-lg text-navy">Historique</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {history.map((h, i) => (
              <li key={i}>
                {new Date(h.changed_at).toLocaleString("fr-FR")} — Statut :{" "}
                {REQUEST_STATUS_LABELS[h.new_status as keyof typeof REQUEST_STATUS_LABELS] ?? h.new_status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
