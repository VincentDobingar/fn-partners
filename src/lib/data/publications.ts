export interface Publication {
  slug: string;
  date: string;
  category: { fr: string; en: string };
  fr: { title: string; excerpt: string; content: string[] };
  en: { title: string; excerpt: string; content: string[] };
  isDemo: true;
}

export const publications: Publication[] = [
  {
    slug: "creer-une-entreprise-au-tchad-etapes-cles",
    date: "2026-01-15",
    category: { fr: "Droit des affaires", en: "Business Law" },
    isDemo: true,
    fr: {
      title: "Créer une entreprise au Tchad : les étapes clés",
      excerpt: "Un aperçu des principales étapes juridiques à anticiper pour constituer une société au Tchad.",
      content: [
        "Ceci est un contenu de démonstration destiné à illustrer le futur espace Publications du cabinet.",
        "La version définitive de cet article sera rédigée et validée par NF & PARTNERS avant mise en ligne.",
      ],
    },
    en: {
      title: "Setting Up a Business in Chad: Key Steps",
      excerpt: "An overview of the main legal steps to anticipate when incorporating a company in Chad.",
      content: [
        "This is demonstration content illustrating the firm’s future Publications section.",
        "The final version of this article will be written and validated by NF & PARTNERS before publication.",
      ],
    },
  },
  {
    slug: "ohada-ce-qui-change-pour-les-entreprises",
    date: "2026-02-03",
    category: { fr: "Droit OHADA", en: "OHADA Law" },
    isDemo: true,
    fr: {
      title: "Droit OHADA : ce qui change pour les entreprises",
      excerpt: "Points de vigilance pour les entreprises soumises aux Actes uniformes OHADA.",
      content: [
        "Ceci est un contenu de démonstration destiné à illustrer le futur espace Publications du cabinet.",
        "La version définitive de cet article sera rédigée et validée par NF & PARTNERS avant mise en ligne.",
      ],
    },
    en: {
      title: "OHADA Law: What Changes for Businesses",
      excerpt: "Key points of attention for companies subject to the OHADA Uniform Acts.",
      content: [
        "This is demonstration content illustrating the firm’s future Publications section.",
        "The final version of this article will be written and validated by NF & PARTNERS before publication.",
      ],
    },
  },
  {
    slug: "proteger-les-droits-humains-devant-la-cour-africaine",
    date: "2026-02-20",
    category: { fr: "Droits humains", en: "Human Rights" },
    isDemo: true,
    fr: {
      title: "Protéger les droits humains devant la Cour africaine des droits de l’homme et des peuples",
      excerpt: "Comprendre les conditions de saisine de la Cour africaine, à Arusha.",
      content: [
        "Ceci est un contenu de démonstration destiné à illustrer le futur espace Publications du cabinet.",
        "La version définitive de cet article sera rédigée et validée par NF & PARTNERS avant mise en ligne.",
      ],
    },
    en: {
      title: "Protecting Human Rights Before the African Court on Human and Peoples’ Rights",
      excerpt: "Understanding the conditions for bringing a case before the African Court, in Arusha.",
      content: [
        "This is demonstration content illustrating the firm’s future Publications section.",
        "The final version of this article will be written and validated by NF & PARTNERS before publication.",
      ],
    },
  },
];

export function getPublicationBySlug(slug: string) {
  return publications.find((p) => p.slug === slug);
}
