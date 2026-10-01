import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { REQUEST_STATUSES } from "@/lib/data/requestOptions";
import { requireStaffSessionApi } from "@/lib/auth/guard";

export const runtime = "nodejs";

const schema = z.object({ status: z.enum(REQUEST_STATUSES) });

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireStaffSessionApi();
  if ("error" in auth) return auth.error;

  const { id } = await params;
  const requestId = Number(id);
  if (!Number.isInteger(requestId)) {
    return NextResponse.json({ ok: false, error: "invalid_id" }, { status: 400 });
  }

  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const db = getDb();
  const existing = await db("requests").where({ id: requestId }).first();
  if (!existing) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }

  const newStatus = parsed.data.status;
  if (newStatus !== existing.status) {
    await db.transaction(async (trx) => {
      await trx("requests").where({ id: requestId }).update({ status: newStatus });
      await trx("request_status_history").insert({
        request_id: requestId,
        old_status: existing.status,
        new_status: newStatus,
        changed_by_staff_id: auth.staff.id,
      });
    });
  }

  return NextResponse.json({ ok: true });
}
