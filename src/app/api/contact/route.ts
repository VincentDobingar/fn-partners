import { NextResponse } from "next/server";
import { z } from "zod";
import { firm } from "@/lib/data/firm";
import { sendMail } from "@/lib/mailer";

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(200),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const data = parsed.data;
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
