export interface Sector {
  slug: string;
  fr: { title: string; description: string };
  en: { title: string; description: string };
}

export const sectors: Sector[] = [
  {
    slug: "entreprises-pme",
    fr: { title: "Entreprises et PME", description: "Accompagnement juridique quotidien des entreprises locales et de leurs dirigeants." },
    en: { title: "Companies & SMEs", description: "Day-to-day legal support for local companies and their executives." },
  },
  {
    slug: "investisseurs-etrangers",
    fr: { title: "Investisseurs étrangers", description: "Structuration de l’implantation et sécurisation des investissements au Tchad et dans l’espace OHADA." },
    en: { title: "Foreign investors", description: "Structuring market entry and securing investments in Chad and the OHADA area." },
  },
  {
    slug: "banques-institutions-financieres",
    fr: { title: "Banques et institutions financières", description: "Conseil réglementaire et contentieux bancaire pour les acteurs du secteur financier." },
    en: { title: "Banks & financial institutions", description: "Regulatory advice and banking litigation for financial sector players." },
  },
  {
    slug: "secteur-minier-petrolier-energie",
    fr: { title: "Secteur minier, pétrolier et énergétique", description: "Accompagnement des projets extractifs et énergétiques dans le respect du cadre réglementaire." },
    en: { title: "Mining, oil & energy sector", description: "Support for extractive and energy projects in compliance with the regulatory framework." },
  },
  {
    slug: "ong-institutions-organisations-internationales",
    fr: { title: "ONG, institutions et organisations internationales", description: "Conseil juridique et défense des droits humains pour les organisations de la société civile." },
    en: { title: "NGOs, institutions & international organisations", description: "Legal advice and human rights defence for civil society organisations." },
  },
  {
    slug: "secteur-numerique-telecoms",
    fr: { title: "Secteur numérique et télécommunications", description: "Accompagnement réglementaire et contractuel des opérateurs et entreprises technologiques." },
    en: { title: "Digital & telecommunications sector", description: "Regulatory and contractual support for operators and technology companies." },
  },
  {
    slug: "administrations-secteur-public",
    fr: { title: "Administrations et secteur public", description: "Conseil sur les marchés publics et les relations contractuelles avec l’administration." },
    en: { title: "Public administrations", description: "Advice on public procurement and contractual relations with public authorities." },
  },
  {
    slug: "particuliers",
    fr: { title: "Particuliers", description: "Conseil et représentation pour les besoins juridiques personnels et familiaux." },
    en: { title: "Individuals", description: "Advice and representation for personal and family legal matters." },
  },
];
