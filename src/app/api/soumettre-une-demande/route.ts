import { randomBytes } from "crypto";
import { rm } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { z } from "zod";
import { firm } from "@/lib/data/firm";
import { expertiseDomains } from "@/lib/data/expertise";
import { URGENCY_LEVELS } from "@/lib/data/requestOptions";
import { sendMail } from "@/lib/mailer";
import { looksLikeSpam } from "@/lib/security/antiSpam";
import { getClientIp, isRateLimited } from "@/lib/security/rateLimit";
import { getDb } from "@/lib/db";
import { MAX_FILES, isAllowedFileType, saveUploadedFiles } from "@/lib/storage/uploads";

export const runtime = "nodejs";

const legalDomainSlugs = expertiseDomains.map((d) => d.slug) as [string, ...string[]];

const requestSchema = z.object({
  locale: z.enum(["fr", "en"]),
  fullName: z.string().trim().min(2).max(200),
  email: z.string().trim().email(),
  phone: z.string().trim().min(6).max(30),
  legalDomainSlug: z.enum(legalDomainSlugs),
  opposingPartyName: z.string().trim().max(200).optional().or(z.literal("")),
  opposingPartyDetails: z.string().trim().max(2000).optional().or(z.literal("")),
  urgency: z.enum(URGENCY_LEVELS),
  description: z.string().trim().min(10).max(4000),
  consent: z.literal("true"),
  company: z.string().optional().or(z.literal("")),
  startedAt: z.string().optional(),
});

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 30 * 60 * 1000;

function generateReference(): string {
  const year = new Date().getFullYear();
  const random = randomBytes(4).toString("hex").toUpperCase();
  return `REQ-${year}-${random}`;
}

export async function POST(request: Request) {
  if (isRateLimited(`soumettre-demande:${getClientIp(request)}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const parsed = requestSchema.safeParse({
    locale: formData.get("locale"),
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    legalDomainSlug: formData.get("legalDomainSlug"),
    opposingPartyName: formData.get("opposingPartyName") ?? "",
    opposingPartyDetails: formData.get("opposingPartyDetails") ?? "",
    urgency: formData.get("urgency"),
    description: formData.get("description"),
    consent: formData.get("consent"),
    company: formData.get("company") ?? "",
    startedAt: formData.get("startedAt") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const data = parsed.data;

  if (looksLikeSpam(data.company, data.startedAt)) {
    return NextResponse.json({ ok: true, reference: null });
  }

  const files = formData.getAll("documents").filter((f): f is File => f instanceof File && f.size > 0);

  if (files.length > MAX_FILES) {
    return NextResponse.json({ ok: false, error: "too_many_files" }, { status: 400 });
  }
  for (const file of files) {
    if (!isAllowedFileType(file.type)) {
      return NextResponse.json({ ok: false, error: "file_type_not_allowed" }, { status: 400 });
    }
  }

  const reference = generateReference();
  const uploadDir = process.env.UPLOAD_DIR ?? "./var/uploads";

  let storedDocuments: Awaited<ReturnType<typeof saveUploadedFiles>> = [];
  try {
    storedDocuments = await saveUploadedFiles(reference, files);
  } catch {
    return NextResponse.json({ ok: false, error: "upload_failed" }, { status: 400 });
  }

  try {
    const db = getDb();
    await db.transaction(async (trx) => {
      const [requestId] = await trx("requests").insert({
        reference,
        status: "new",
        locale: data.locale,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        legal_domain_slug: data.legalDomainSlug,
        opposing_party_name: data.opposingPartyName || null,
        opposing_party_details: data.opposingPartyDetails || null,
        urgency: data.urgency,
        description: data.description,
        consent_given: true,
        consent_at: new Date(),
        client_ip: getClientIp(request),
        user_agent: request.headers.get("user-agent") ?? null,
      });

      if (storedDocuments.length > 0) {
        await trx("request_documents").insert(
          storedDocuments.map((doc) => ({
            request_id: requestId,
            original_filename: doc.originalFilename,
            stored_filename: doc.storedFilename,
            storage_path: doc.storagePath,
            mime_type: doc.mimeType,
            size_bytes: doc.sizeBytes,
          }))
        );
      }
    });
  } catch {
    await rm(path.join(/* turbopackIgnore: true */ uploadDir, reference), { recursive: true, force: true });
    return NextResponse.json({ ok: false, error: "storage_failed" }, { status: 500 });
  }

  const domain = expertiseDomains.find((d) => d.slug === data.legalDomainSlug);

  const summary = [
    `Nouvelle demande soumise en ligne — FN & PARTNERS`,
    ``,
    `Référence : ${reference}`,
    `Nom : ${data.fullName}`,
    `E-mail : ${data.email}`,
    `Téléphone : ${data.phone}`,
    `Domaine juridique : ${domain ? domain.fr.title : data.legalDomainSlug}`,
    `Urgence : ${data.urgency}`,
    data.opposingPartyName ? `Partie adverse : ${data.opposingPartyName}` : null,
    data.opposingPartyDetails ? `Détails partie adverse : ${data.opposingPartyDetails}` : null,
    `Pièces jointes : ${storedDocuments.length}`,
    ``,
    `Description :`,
    data.description,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await sendMail({
      to: firm.contactEmail,
      replyTo: data.email,
      subject: `Nouvelle demande — ${reference} — ${data.fullName}`,
      text: summary,
    });
  } catch {
    // La demande est déjà enregistrée en base ; un souci SMTP ne doit pas faire échouer la requête.
  }

  return NextResponse.json({ ok: true, reference });
}
