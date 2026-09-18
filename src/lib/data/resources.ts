export interface Resource {
  slug: string;
  fr: { title: string; description: string };
  en: { title: string; description: string };
  isDemo: true;
}

export const resources: Resource[] = [
  {
    slug: "guide-creation-entreprise-tchad",
    isDemo: true,
    fr: {
      title: "Guide pratique : créer son entreprise au Tchad",
      description: "Contenu de démonstration — guide détaillé à valider par le cabinet avant publication.",
    },
    en: {
      title: "Practical Guide: Setting Up a Business in Chad",
      description: "Demonstration content — detailed guide to be validated by the firm before publication.",
    },
  },
  {
    slug: "guide-recouvrement-creances-ohada",
    isDemo: true,
    fr: {
      title: "Guide pratique : recouvrer une créance en zone OHADA",
      description: "Contenu de démonstration — guide détaillé à valider par le cabinet avant publication.",
    },
    en: {
      title: "Practical Guide: Recovering a Debt in the OHADA Area",
      description: "Demonstration content — detailed guide to be validated by the firm before publication.",
    },
  },
  {
    slug: "guide-investisseur-etranger-tchad",
    isDemo: true,
    fr: {
      title: "Guide pratique : s’implanter au Tchad en tant qu’investisseur étranger",
      description: "Contenu de démonstration — guide détaillé à valider par le cabinet avant publication.",
    },
    en: {
      title: "Practical Guide: Establishing Your Business in Chad as a Foreign Investor",
      description: "Demonstration content — detailed guide to be validated by the firm before publication.",
    },
  },
];
