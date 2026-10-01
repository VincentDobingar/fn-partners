export const URGENCY_LEVELS = ["low", "normal", "high", "urgent"] as const;
export type UrgencyLevel = (typeof URGENCY_LEVELS)[number];

export const REQUEST_STATUSES = ["new", "in_review", "accepted", "declined", "closed"] as const;
export type RequestStatus = (typeof REQUEST_STATUSES)[number];

export const REQUEST_STATUS_LABELS: Record<RequestStatus, string> = {
  new: "Nouvelle",
  in_review: "En cours d’examen",
  accepted: "Acceptée",
  declined: "Refusée",
  closed: "Clôturée",
};

export const urgencyLabels: Record<UrgencyLevel, { fr: string; en: string }> = {
  low: { fr: "Faible", en: "Low" },
  normal: { fr: "Normale", en: "Normal" },
  high: { fr: "Élevée", en: "High" },
  urgent: { fr: "Urgente", en: "Urgent" },
};

// Pure constants (no Node built-ins) so they can be imported from both server code
// (src/lib/storage/uploads.ts) and client components (the request form's document step)
// for matching client-side pre-validation. The server remains the sole authority.
export const MAX_FILE_SIZE_MB = Number(process.env.UPLOAD_MAX_FILE_SIZE_MB ?? 10);
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
export const MAX_FILES = Number(process.env.UPLOAD_MAX_FILES ?? 5);

export const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;
