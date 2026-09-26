export interface Publication {
  slug: string;
  /** ISO date (YYYY-MM-DD), renseignée uniquement quand elle est confirmée. */
  date?: string;
  category: { fr: string; en: string };
  /** Image de couverture (ex. jaquette d'un ouvrage), fichier dans /public/images/gallery. */
  image?: string;
  imageAlt?: { fr: string; en: string };
  fr: { title: string; excerpt: string; content: string[] };
  en: { title: string; excerpt: string; content: string[] };
  isDemo: boolean;
}

export const publications: Publication[] = [
  {
    slug: "negociation-contrats-miniers-droit-tchadien",
    category: { fr: "Droit minier", en: "Mining Law" },
    image: "/images/gallery/livre-negociation-contrats-miniers.jpg",
    imageAlt: {
      fr: "Couverture de l’ouvrage « La négociation des contrats miniers en droit tchadien » de Me Frédéric NANADJINGUE",
      en: "Cover of the book “Mining Contract Negotiation under Chadian Law” by Me Frédéric NANADJINGUE",
    },
    isDemo: false,
    fr: {
      title: "La négociation des contrats miniers en droit tchadien",
      excerpt: "Un ouvrage de Me Frédéric NANADJINGUE, avec un avant-propos du Dr Achille NGWANZA (Jus AFRICA) et une préface du Dr Youssouf TOM, ancien Garde des Sceaux du Tchad.",
      content: [
        "Me Frédéric NANADJINGUE, fondateur du cabinet FN & PARTNERS, est l’auteur de l’ouvrage « La négociation des contrats miniers en droit tchadien ».",
        "L’avant-propos est signé du Dr Achille NGWANZA, associé-gérant de Jus AFRICA, et la préface du Dr Youssouf TOM, ancien Ministre de la Justice et des Droits Humains, Garde des Sceaux.",
        "Me Frédéric NANADJINGUE est Avocat-consultant inscrit au grand tableau de l’Ordre des Avocats au Barreau du Tchad et auprès de la Cour africaine des droits de l’homme et des peuples. Ancien Président de l’Union des Jeunes Avocats du Tchad (UJAT) et du Réseau des Unions et Associations des Jeunes Avocats d’Afrique Centrale (RUBAC), il est Président en exercice de la Fédération africaine des Associations et Unions des Jeunes Avocats (FA-UJA).",
      ],
    },
    en: {
      title: "Mining Contract Negotiation under Chadian Law",
      excerpt: "A book by Me Frédéric NANADJINGUE, with a foreword by Dr Achille NGWANZA (Jus AFRICA) and a preface by Dr Youssouf TOM, former Minister of Justice of Chad.",
      content: [
        "Me Frédéric NANADJINGUE, founder of FN & PARTNERS, is the author of the book “Mining Contract Negotiation under Chadian Law”.",
        "The foreword is written by Dr Achille NGWANZA, managing partner of Jus AFRICA, and the preface by Dr Youssouf TOM, former Minister of Justice and Human Rights, Keeper of the Seals.",
        "Me Frédéric NANADJINGUE is a consulting attorney registered with the Chad Bar Association and before the African Court on Human and Peoples’ Rights. Former President of the Union of Young Lawyers of Chad (UJAT) and of the Network of Central African Bar Young Lawyers’ Associations and Unions (RUBAC), he currently serves as President of the African Federation of Young Lawyers’ Associations and Unions (FA-UJA).",
      ],
    },
  },
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
        "La version définitive de cet article sera rédigée et validée par FN & PARTNERS avant mise en ligne.",
      ],
    },
    en: {
      title: "Setting Up a Business in Chad: Key Steps",
      excerpt: "An overview of the main legal steps to anticipate when incorporating a company in Chad.",
      content: [
        "This is demonstration content illustrating the firm’s future Publications section.",
        "The final version of this article will be written and validated by FN & PARTNERS before publication.",
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
        "La version définitive de cet article sera rédigée et validée par FN & PARTNERS avant mise en ligne.",
      ],
    },
    en: {
      title: "OHADA Law: What Changes for Businesses",
      excerpt: "Key points of attention for companies subject to the OHADA Uniform Acts.",
      content: [
        "This is demonstration content illustrating the firm’s future Publications section.",
        "The final version of this article will be written and validated by FN & PARTNERS before publication.",
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
        "La version définitive de cet article sera rédigée et validée par FN & PARTNERS avant mise en ligne.",
      ],
    },
    en: {
      title: "Protecting Human Rights Before the African Court on Human and Peoples’ Rights",
      excerpt: "Understanding the conditions for bringing a case before the African Court, in Arusha.",
      content: [
        "This is demonstration content illustrating the firm’s future Publications section.",
        "The final version of this article will be written and validated by FN & PARTNERS before publication.",
      ],
    },
  },
];

export function getPublicationBySlug(slug: string) {
  return publications.find((p) => p.slug === slug);
}
