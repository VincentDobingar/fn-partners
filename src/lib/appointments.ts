import { appointmentConfig, appointmentSlots } from "@/lib/data/firm";

/** Fuseau du cabinet (N’Djamena, UTC+1 toute l’année). */
export const FIRM_TIME_ZONE = "Africa/Ndjamena";

/** Date du jour au cabinet, au format AAAA-MM-JJ. */
export function todayAtFirm(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: FIRM_TIME_ZONE }).format(now);
}

/** Le jour (AAAA-MM-JJ) fait-il partie des jours ouverts aux rendez-vous ? */
export function isOpenDay(date: string): boolean {
  const day = new Date(`${date}T00:00:00Z`).getUTCDay();
  return Number.isFinite(day) && appointmentConfig.days.includes(day);
}

export type AppointmentDateError = "invalid" | "past" | "closed";

/** Vérifie une date de rendez-vous : format, postérieure à aujourd’hui, jour ouvert. */
export function checkAppointmentDate(date: string, now: Date = new Date()): AppointmentDateError | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`))) return "invalid";
  if (date <= todayAtFirm(now)) return "past";
  if (!isOpenDay(date)) return "closed";
  return null;
}

export function isValidSlot(time: string): boolean {
  return appointmentSlots().includes(time);
}

/** Types de fichiers acceptés en pièce jointe d’une demande de rendez-vous. */
export const APPOINTMENT_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const APPOINTMENT_MAX_FILE_BYTES = appointmentConfig.maxFileSizeMb * 1024 * 1024;
