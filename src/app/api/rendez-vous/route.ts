import { NextResponse } from "next/server";
import { z } from "zod";
import { firm } from "@/lib/data/firm";
import { sendMail } from "@/lib/mailer";

const appointmentSchema = z.object({
  fullName: z.string().trim().min(2).max(200),
  email: z.string().trim().email(),
  phone: z.string().trim().min(6).max(30),
  domain: z.string().trim().min(1).max(200),
  mode: z.enum(["cabinet", "telephone", "visio"]),
  preferredDate: z.string().trim().min(1),
  preferredTime: z.string().trim().min(1),
  fileReference: z.string().trim().max(100).optional().or(z.literal("")),
  description: z.string().trim().min(10).max(2000),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = appointmentSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const data = parsed.data;

  const summary = [
    `Nouvelle demande de rendez-vous — FN & PARTNERS`,
    ``,
    `Nom : ${data.fullName}`,
    `E-mail : ${data.email}`,
    `Téléphone : ${data.phone}`,
    `Domaine juridique : ${data.domain}`,
    `Mode souhaité : ${data.mode}`,
    `Date souhaitée : ${data.preferredDate}`,
    `Créneau souhaité : ${data.preferredTime}`,
    data.fileReference ? `Référence dossier existant : ${data.fileReference}` : null,
    ``,
    `Description :`,
    data.description,
  ]
    .filter(Boolean)
    .join("\n");

  await sendMail({
    to: firm.contactEmail,
    replyTo: data.email,
    subject: `Nouvelle demande de rendez-vous — ${data.fullName}`,
    text: summary,
  });

  return NextResponse.json({ ok: true });
}
