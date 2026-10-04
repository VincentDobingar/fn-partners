import { notFound } from "next/navigation";
import { getDb } from "@/lib/db";
import { expertiseDomains } from "@/lib/data/expertise";
import { StatusForm } from "./StatusForm";
import { InviteClientForm } from "./InviteClientForm";
import { urgencyLabels, type UrgencyLevel } from "@/lib/data/requestOptions";

export default async function RequestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const requestId = Number(id);
  if (!Number.isInteger(requestId)) notFound();

  const db = getDb();
  const request = await db("requests").where({ id: requestId }).first();
  if (!request) notFound();

  const clientAccount = request.client_account_id
    ? await db("client_accounts").where({ id: request.client_account_id }).select("email", "activated_at").first()
    : null;

  const documents = await db("request_documents").where({ request_id: requestId }).orderBy("created_at", "asc");
  const history = await db("request_status_history as h")
    .join("staff_accounts as s", "s.id", "h.changed_by_staff_id")
    .where("h.request_id", requestId)
    .select("h.old_status", "h.new_status", "h.changed_at", "s.full_name")
    .orderBy("h.changed_at", "desc");

  const domain = expertiseDomains.find((d) => d.slug === request.legal_domain_slug);

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="kicker text-gold-deep">{request.reference}</div>
          <h1 className="font-serif text-2xl text-navy">{request.full_name}</h1>
        </div>
        <div className="flex items-start gap-4">
          <StatusForm requestId={request.id} currentStatus={request.status} />
          <InviteClientForm requestId={request.id} clientAccount={clientAccount ?? null} />
        </div>
      </div>

      <dl className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
        <div>
          <dt className="text-muted">E-mail</dt>
          <dd className="text-ink-soft">{request.email}</dd>
        </div>
        <div>
          <dt className="text-muted">Téléphone</dt>
          <dd className="text-ink-soft">{request.phone}</dd>
        </div>
        <div>
          <dt className="text-muted">Domaine juridique</dt>
          <dd className="text-ink-soft">{domain ? domain.fr.title : request.legal_domain_slug}</dd>
        </div>
        <div>
          <dt className="text-muted">Urgence</dt>
          <dd className="text-ink-soft">{urgencyLabels[request.urgency as UrgencyLevel]?.fr ?? request.urgency}</dd>
        </div>
        {request.opposing_party_name && (
          <div>
            <dt className="text-muted">Partie adverse</dt>
            <dd className="text-ink-soft">{request.opposing_party_name}</dd>
          </div>
        )}
        <div>
          <dt className="text-muted">Reçue le</dt>
          <dd className="text-ink-soft">{new Date(request.created_at).toLocaleString("fr-FR")}</dd>
        </div>
      </dl>

      {request.opposing_party_details && (
        <div className="mt-6">
          <h2 className="font-serif text-lg text-navy">Détails partie adverse</h2>
          <p className="mt-2 text-sm text-ink-soft whitespace-pre-wrap">{request.opposing_party_details}</p>
        </div>
      )}

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
                <a
                  href={`/api/backoffice/documents/${doc.id}`}
                  className="text-sm text-gold-deep hover:text-gold-light"
                >
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
                {new Date(h.changed_at).toLocaleString("fr-FR")} — {h.old_status} → {h.new_status} par {h.full_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
