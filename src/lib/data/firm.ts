export const firm = {
  name: "NF & PARTNERS",
  legalName: "NF & PARTNERS",
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
      fr: "Quartier Sabangali, rue de la Corniche",
      en: "Sabangali district, Rue de la Corniche",
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
  phones: ["+235 66 11 43 86", "+235 91 21 49 86", "+235 66 93 39 66"],
  email: "mefredericnane@yahoo.fr",
  nif: "9040516A",
  positioning: {
    fr: "Cabinet d’envergure panafricaine, reconnu pour son expertise, son intégrité, sa proximité avec les clients et sa maîtrise des enjeux juridiques nationaux, régionaux et internationaux.",
    en: "A pan-African law firm recognised for its expertise, integrity, closeness to clients and command of national, regional and international legal matters.",
  },
  social: {
    whatsapp: "23566114386",
  },
} as const;

export const siteConfig = {
  url: "https://www.nf-partners.com",
  name: "NF & PARTNERS",
  defaultLocale: "fr",
  locales: ["fr", "en"] as const,
};

export type Locale = (typeof siteConfig.locales)[number];
