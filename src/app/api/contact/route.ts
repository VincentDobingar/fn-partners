import { NextResponse } from "next/server";
import { z } from "zod";
import { firm } from "@/lib/data/firm";
import { sendMail } from "@/lib/mailer";
import { looksLikeSpam } from "@/lib/security/antiSpam";
import { getClientIp, isRateLimited } from "@/lib/security/rateLimit";

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(200),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  company: z.string().optional().or(z.literal("")),
  startedAt: z.string().optional(),
});

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

export async function POST(request: Request) {
  if (isRateLimited(`contact:${getClientIp(request)}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const data = parsed.data;

  if (looksLikeSpam(data.company, data.startedAt)) {
    return NextResponse.json({ ok: true });
  }
  const text = [
    `Nouveau message via le formulaire de contact — FN & PARTNERS`,
    ``,
    `Nom : ${data.fullName}`,
    `E-mail : ${data.email}`,
    data.phone ? `Téléphone : ${data.phone}` : null,
    ``,
    `Message :`,
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  await sendMail({
    to: firm.contactEmail,
    replyTo: data.email,
    subject: `Nouveau message de contact — ${data.fullName}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
