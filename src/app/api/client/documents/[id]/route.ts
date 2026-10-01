import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { requireClientSessionApi } from "@/lib/auth/guard";

export const runtime = "nodejs";

// Même lecture bufferisée simple que côté staff (fichiers plafonnés à 10 Mo), avec en plus
// une vérification de propriété : le document doit appartenir à une demande liée au client
// de la session en cours.
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireClientSessionApi();
  if ("error" in auth) return auth.error;

  const { id } = await params;
  const documentId = Number(id);
  if (!Number.isInteger(documentId)) {
    return NextResponse.json({ ok: false, error: "invalid_id" }, { status: 400 });
  }

  const db = getDb();
  const doc = await db("request_documents as d")
    .join("requests as r", "r.id", "d.request_id")
    .where("d.id", documentId)
    .where("r.client_account_id", auth.client.id)
    .select("d.original_filename", "d.storage_path", "d.mime_type")
    .first();
  if (!doc) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }

  const uploadDir = process.env.UPLOAD_DIR ?? "./var/uploads";
  const absPath = path.join(/* turbopackIgnore: true */ uploadDir, doc.storage_path);

  try {
    const buffer = await readFile(absPath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": doc.mime_type,
        "Content-Disposition": `attachment; filename="${encodeURIComponent(doc.original_filename)}"`,
        "Content-Length": String(buffer.length),
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "file_missing" }, { status: 404 });
  }
}
