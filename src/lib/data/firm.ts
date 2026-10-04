export const firm = {
  name: "FN & PARTNERS",
  legalName: "FN & PARTNERS",
  tagline: {
    fr: "Cabinet d’avocats et de conseil juridique",
    en: "Law firm and legal advisory",
  },
  founder: {
    name: "Me Frédéric NANADJINGUE",
    title: {
      fr: "Fondateur — Avocat au Barreau du Tchad — Avocat auprès de la Cour africaine des droits de l’homme et des peuples",
      en: "Founder — Attorney at the Chad Bar — Attorney before the African Court on Human and Peoples’ Rights",
    },
    foundedYear: 2021,
  },
  address: {
    line1: {
      fr: "Quartier Sabangali, Avenue de la Corniche",
      en: "Sabangali district, Avenue de la Corniche",
    },
    line2: {
      fr: "En face du Bureau de la Coopération suisse au Tchad",
      en: "Opposite the Swiss Cooperation Office in Chad",
    },
    city: "N’Djamena",
    country: {
      fr: "Tchad",
      en: "Chad",
    },
    poBox: "BP 5080 N’Djamena, Tchad",
  },
  // Coordonnées GPS du cabinet (12°05'46.4"N 15°03'14.0"E)
  geo: {
    lat: 12.096208,
    lng: 15.0538811,
  },
  phones: ["+235 66 11 43 86", "+235 91 21 49 86", "+235 66 93 39 66"],
  email: "mefredericnane@fn-partners.com",
  contactEmail: "contact@fn-partners.com",
  nif: "9040516A",
  positioning: {
    fr: "Cabinet d’envergure panafricaine, reconnu pour son expertise, son intégrité, sa proximité avec les clients et sa maîtrise des enjeux juridiques nationaux, régionaux et internationaux.",
    en: "A pan-African law firm recognised for its expertise, integrity, closeness to clients and command of national, regional and international legal matters.",
  },
  social: {
    whatsapp: "23591214986",
  },
} as const;

export const siteConfig = {
  url: "https://www.fn-partners.com",
  name: "FN & PARTNERS",
  defaultLocale: "fr",
  locales: ["fr", "en"] as const,
  /** Date de dernière mise à jour générale des contenus (sitemap) — à actualiser à chaque révision. */
  lastUpdated: "2026-10-03",
};

/**
 * Créneaux proposés dans le formulaire de prise de rendez-vous (heure de N’Djamena).
 * `days` : jours ouverts (1 = lundi … 5 = vendredi) ; créneaux d’une heure de `startHour`
 * à `endHour` (le dernier créneau commence une heure avant `endHour`).
 * En cas de changement, adapter aussi le libellé `hours` de `AppointmentForm.tsx`.
 */
export const appointmentConfig = {
  days: [1, 2, 3, 4, 5] as readonly number[],
  startHour: 8,
  endHour: 17,
  slotMinutes: 60,
  maxFiles: 3,
  maxFileSizeMb: 5,
} as const;

export function appointmentSlots(): string[] {
  const slots: string[] = [];
  const { startHour, endHour, slotMinutes } = appointmentConfig;
  for (let minutes = startHour * 60; minutes + slotMinutes <= endHour * 60; minutes += slotMinutes) {
    const h = String(Math.floor(minutes / 60)).padStart(2, "0");
    const m = String(minutes % 60).padStart(2, "0");
    slots.push(`${h}:${m}`);
  }
  return slots;
}

/** Identifiant de mesure Google Analytics 4 (G-XXXXXXXXXX). Vide = aucune mesure d’audience. */
export const analyticsId = process.env.NEXT_PUBLIC_GA_ID ?? "";

export type Locale = (typeof siteConfig.locales)[number];
