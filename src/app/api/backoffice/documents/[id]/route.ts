import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { requireStaffSessionApi } from "@/lib/auth/guard";

export const runtime = "nodejs";

// Lecture bufferisée volontairement simple (fichiers plafonnés à 10 Mo, accès staff
// authentifié uniquement) — pas de flux ni de liens signés dans cette étape, voir
// db/migrations/README.md pour le mécanisme prévu une fois l'espace client construit.
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireStaffSessionApi();
  if ("error" in auth) return auth.error;

  const { id } = await params;
  const documentId = Number(id);
  if (!Number.isInteger(documentId)) {
    return NextResponse.json({ ok: false, error: "invalid_id" }, { status: 400 });
  }

  const db = getDb();
  const doc = await db("request_documents").where({ id: documentId }).first();
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
