import { NextResponse } from "next/server";
import { destroyClientSession } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function POST() {
  await destroyClientSession();
  return NextResponse.json({ ok: true });
}
