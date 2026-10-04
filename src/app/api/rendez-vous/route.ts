import { NextResponse } from "next/server";
import { z } from "zod";
import { appointmentConfig, firm } from "@/lib/data/firm";
import {
  APPOINTMENT_FILE_TYPES,
  APPOINTMENT_MAX_FILE_BYTES,
  checkAppointmentDate,
  isValidSlot,
} from "@/lib/appointments";
import { sendMail, type MailAttachment } from "@/lib/mailer";
import { looksLikeSpam } from "@/lib/security/antiSpam";
import { getClientIp, isRateLimited } from "@/lib/security/rateLimit";

export const runtime = "nodejs";

const appointmentSchema = z.object({
  fullName: z.string().trim().min(2).max(200),
  email: z.string().trim().email(),
  phone: z.string().trim().min(6).max(30),
  domain: z.string().trim().min(1).max(200),
  mode: z.enum(["cabinet", "telephone", "visio"]),
  preferredDate: z.string().trim().refine((value) => checkAppointmentDate(value) === null),
  preferredTime: z.string().trim().refine(isValidSlot),
  fileReference: z.string().trim().max(100).optional().or(z.literal("")),
  description: z.string().trim().min(10).max(2000),
  consent: z.literal("true"),
  company: z.string().optional().or(z.literal("")),
  startedAt: z.string().optional(),
});

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

const modeLabels: Record<"cabinet" | "telephone" | "visio", string> = {
  cabinet: "Au cabinet",
  telephone: "Par téléphone",
  visio: "Par visioconférence",
};

/** Nom de fichier sûr pour une pièce jointe d’e-mail (pas de chemin ni de caractères de contrôle). */
function safeFilename(name: string, index: number): string {
  const cleaned = name.replace(/[\\/\u0000-\u001f]/g, "_").slice(-120).trim();
  return cleaned || `piece-jointe-${index + 1}`;
}

export async function POST(request: Request) {
  if (isRateLimited(`rendez-vous:${getClientIp(request)}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const text = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : "";
  };

  const parsed = appointmentSchema.safeParse({
    fullName: text("fullName"),
    email: text("email"),
    phone: text("phone"),
    domain: text("domain"),
    mode: text("mode"),
    preferredDate: text("preferredDate"),
    preferredTime: text("preferredTime"),
    fileReference: text("fileReference"),
    description: text("description"),
    consent: text("consent"),
    company: text("company"),
    startedAt: text("startedAt") || undefined,
  });

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const data = parsed.data;

  if (looksLikeSpam(data.company, data.startedAt)) {
    return NextResponse.json({ ok: true });
  }

  const files = formData.getAll("documents").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > appointmentConfig.maxFiles) {
    return NextResponse.json({ ok: false, error: "too_many_files" }, { status: 400 });
  }
  for (const file of files) {
    if (!(APPOINTMENT_FILE_TYPES as readonly string[]).includes(file.type)) {
      return NextResponse.json({ ok: false, error: "file_type_not_allowed" }, { status: 400 });
    }
    if (file.size > APPOINTMENT_MAX_FILE_BYTES) {
      return NextResponse.json({ ok: false, error: "file_too_large" }, { status: 400 });
    }
  }

  // Les pièces ne sont pas conservées sur le serveur : elles sont transmises au cabinet par e-mail.
  const attachments: MailAttachment[] = await Promise.all(
    files.map(async (file, index) => ({
      filename: safeFilename(file.name, index),
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
    }))
  );

  const summary = [
    `Nouvelle demande de rendez-vous — FN & PARTNERS`,
    ``,
    `Nom : ${data.fullName}`,
    `E-mail : ${data.email}`,
    `Téléphone : ${data.phone}`,
    `Domaine juridique : ${data.domain}`,
    `Mode souhaité : ${modeLabels[data.mode]}`,
    `Date souhaitée : ${data.preferredDate}`,
    `Créneau souhaité : ${data.preferredTime} (heure de N’Djamena)`,
    data.fileReference ? `Référence dossier existant : ${data.fileReference}` : null,
    `Pièces jointes : ${attachments.length}`,
    ``,
    `Description :`,
    data.description,
  ]
    .filter((line) => line !== null)
    .join("\n");

  await sendMail({
    to: firm.contactEmail,
    replyTo: data.email,
    subject: `Nouvelle demande de rendez-vous — ${data.fullName}`,
    text: summary,
    attachments,
  });

  return NextResponse.json({ ok: true });
}
