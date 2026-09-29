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
  url: "https://www.nf-partners.com",
  name: "FN & PARTNERS",
  defaultLocale: "fr",
  locales: ["fr", "en"] as const,
};

export type Locale = (typeof siteConfig.locales)[number];
