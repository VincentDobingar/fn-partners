export interface NewsItem {
  slug: string;
  image: string;
  imageAlt: { fr: string; en: string };
  source: string;
  /** ISO date (YYYY-MM-DD), renseignée uniquement quand elle est confirmée. */
  date?: string;
  /** Vidéo hébergée sur le site (fichier dans /public/videos). */
  video?: { url: string; poster?: string };
  /** Vidéo trop volumineuse pour être hébergée : lien vers la publication d'origine. */
  externalVideoUrl?: string;
  fr: { title: string; excerpt: string; content: string[] };
  en: { title: string; excerpt: string; content: string[] };
}

export const newsItems: NewsItem[] = [
  {
    slug: "forum-ia-droit-africain-abidjan",
    image: "/images/gallery/actu-ia-avocat-forum.jpg",
    imageAlt: {
      fr: "Me Frédéric NANADJINGUE intervenant au Forum Intelligence artificielle et droit africain, à Abidjan",
      en: "Me Frédéric NANADJINGUE speaking at the Artificial Intelligence and African Law Forum, in Abidjan",
    },
    source: "Facebook — Frédéric Nanadjingue",
    date: "2026-09-19",
    video: { url: "/videos/actu-ia-avocat-forum.mp4", poster: "/images/gallery/actu-ia-avocat-forum.jpg" },
    fr: {
      title: "Intelligence artificielle et droit : « l’IA ne remplace pas l’avocat », selon Me Frédéric NANADJINGUE",
      excerpt: "Au Forum Intelligence artificielle et droit africain, à Abidjan, le fondateur de FN & PARTNERS est revenu sur la place de l’IA dans l’exercice du métier d’avocat.",
      content: [
        "Me Frédéric NANADJINGUE est intervenu au Forum Intelligence artificielle et droit africain, organisé à Abidjan (Côte d’Ivoire) les 27 et 28 août 2026, consacré à l’apport de l’intelligence artificielle à la pratique du droit.",
        "« L’IA ne remplace pas l’avocat : elle renforce son analyse, accélère sa recherche et lui permet de mieux défendre l’essentiel : le droit et son client », a-t-il déclaré à cette occasion.",
      ],
    },
    en: {
      title: "Artificial Intelligence and Law: “AI does not replace the lawyer”, says Me Frédéric NANADJINGUE",
      excerpt: "At the Artificial Intelligence and African Law Forum in Abidjan, the founder of FN & PARTNERS addressed the place of AI in legal practice.",
      content: [
        "Me Frédéric NANADJINGUE spoke at the Artificial Intelligence and African Law Forum, held in Abidjan (Côte d’Ivoire) on 27 and 28 August 2026, dedicated to the contribution of artificial intelligence to legal practice.",
        "“AI does not replace the lawyer: it strengthens their analysis, speeds up their research, and allows them to better defend what matters most: the law and their client,” he stated on the occasion.",
      ],
    },
  },
  {
    slug: "presomption-innocence-personnes-interpellees",
    image: "/images/gallery/actu-presomption-innocence.jpg",
    imageAlt: {
      fr: "Me Frédéric NANADJINGUE s’exprimant sur la présomption d’innocence",
      en: "Me Frédéric NANADJINGUE speaking on the presumption of innocence",
    },
    source: "Facebook — Frédéric Nanadjingue",
    date: "2026-09-07",
    externalVideoUrl: "https://www.facebook.com/reel/995796390140823/",
    fr: {
      title: "Présomption d’innocence : peut-on exposer les personnes interpellées dans les médias ?",
      excerpt: "Me Frédéric NANADJINGUE interroge la pratique consistant à médiatiser des personnes interpellées, au regard du principe de présomption d’innocence.",
      content: [
        "Dans une intervention consacrée à la présomption d’innocence, Me Frédéric NANADJINGUE s’est interrogé sur une pratique récurrente : l’exposition, dans les médias, de personnes interpellées par les forces de l’ordre.",
        "« Peut-on exposer les personnes interpellées sur les médias ? Une personne interpellée est-elle forcément coupable ? Ne bénéficie-t-elle pas de la présomption d’innocence ? », a-t-il demandé.",
      ],
    },
    en: {
      title: "Presumption of Innocence: Can Individuals in Custody Be Shown in the Media?",
      excerpt: "Me Frédéric NANADJINGUE questions the practice of publicising individuals taken into custody, in light of the presumption of innocence.",
      content: [
        "In remarks devoted to the presumption of innocence, Me Frédéric NANADJINGUE questioned a recurring practice: exposing, in the media, individuals taken into custody by law enforcement.",
        "“Can individuals in custody be shown in the media? Is a person taken into custody necessarily guilty? Are they not entitled to the presumption of innocence?” he asked.",
      ],
    },
  },
  {
    slug: "journee-africaine-lutte-corruption-jeunesse",
    image: "/images/gallery/actu-jeunesse-corruption.jpg",
    imageAlt: {
      fr: "Me Frédéric NANADJINGUE, panéliste devant la jeunesse tchadienne pour la journée africaine de lutte contre la corruption",
      en: "Me Frédéric NANADJINGUE, panellist before Chadian youth for the African Anti-Corruption Day",
    },
    source: "Facebook — Frédéric Nanadjingue",
    date: "2026-07-16",
    video: { url: "/videos/actu-jeunesse-corruption.mp4", poster: "/images/gallery/actu-jeunesse-corruption.jpg" },
    fr: {
      title: "Lutte contre la corruption : Me Frédéric NANADJINGUE, panéliste devant la jeunesse tchadienne",
      excerpt: "Invité par le Conseil national de la jeunesse du Tchad et l’autorité indépendante de lutte contre la corruption, le fondateur de FN & PARTNERS a exhorté la jeunesse à l’intégrité.",
      content: [
        "Me Frédéric NANADJINGUE a été convié comme panéliste par le Conseil national de la jeunesse du Tchad et l’autorité indépendante de lutte contre la corruption au Tchad, le 11 juillet 2026, en commémoration de la journée africaine de lutte contre la corruption.",
        "Le thème retenu cette année était : « intensifier la promotion de l’intégrité et la lutte contre la corruption en Afrique ». Extrait de son intervention, en guise d’exhortation à la jeunesse.",
      ],
    },
    en: {
      title: "Anti-Corruption: Me Frédéric NANADJINGUE, Panellist Before Chadian Youth",
      excerpt: "Invited by the National Youth Council of Chad and the independent anti-corruption authority, the founder of FN & PARTNERS urged young people toward integrity.",
      content: [
        "Me Frédéric NANADJINGUE was invited as a panellist by the National Youth Council of Chad and Chad’s independent anti-corruption authority on 11 July 2026, to mark African Anti-Corruption Day.",
        "This year’s theme was: “stepping up the promotion of integrity and the fight against corruption in Africa.” An excerpt from his remarks, as an exhortation to young people.",
      ],
    },
  },
  {
    slug: "week-end-africain-droit-minier-energie",
    image: "/images/gallery/actu-wadme-3eme-edition.jpg",
    imageAlt: {
      fr: "Affiche de la 3ème édition du Week-end Africain du Droit Minier et de l’Énergie, avec Me Frédéric NANADJINGUE en intervenant",
      en: "Poster for the 3rd edition of the African Mining and Energy Law Weekend, featuring Me Frédéric NANADJINGUE as speaker",
    },
    source: "Week-end Africain du Droit Minier et de l’Énergie (WADME)",
    date: "2025-05-09",
    fr: {
      title: "Me Frédéric NANADJINGUE, speaker à la 3ème édition du Week-end Africain du Droit Minier et de l’Énergie",
      excerpt: "Le fondateur de FN & PARTNERS est intervenu à la 3ème édition du Week-end Africain du Droit Minier et de l’Énergie, du 9 au 11 mai 2025.",
      content: [
        "Me Frédéric NANADJINGUE est intervenu comme speaker à la 3ème édition du Week-end Africain du Droit Minier et de l’Énergie, du 9 au 11 mai 2025, à l’Hôtel Primus Kaloum.",
        "Il y était présenté comme Avocat, Président de l’Union des Jeunes Avocats du Tchad.",
      ],
    },
    en: {
      title: "Me Frédéric NANADJINGUE, Speaker at the 3rd Edition of the African Mining and Energy Law Weekend",
      excerpt: "The founder of FN & PARTNERS spoke at the 3rd edition of the African Mining and Energy Law Weekend, held from 9 to 11 May 2025.",
      content: [
        "Me Frédéric NANADJINGUE spoke at the 3rd edition of the African Mining and Energy Law Weekend, held from 9 to 11 May 2025 at the Hôtel Primus Kaloum.",
        "He was introduced there as an attorney and President of the Union of Young Lawyers of Chad.",
      ],
    },
  },
  {
    slug: "quarantenaire-jeunes-avocats-cote-ivoire",
    image: "/images/gallery/actu-jeunes-avocats-cote-ivoire.jpg",
    imageAlt: {
      fr: "Me Frédéric NANADJINGUE distingué lors du 40e anniversaire de l’Association des jeunes Avocats de Côte d’Ivoire",
      en: "Me Frédéric NANADJINGUE honoured at the 40th anniversary of the Young Lawyers Association of Côte d’Ivoire",
    },
    source: "Facebook — Nanasra Nanadjingué",
    date: "2024-05-04",
    video: {
      url: "/videos/actu-jeunes-avocats-cote-ivoire.mp4",
      poster: "/images/gallery/actu-jeunes-avocats-cote-ivoire.jpg",
    },
    fr: {
      title: "Me Frédéric NANADJINGUE distingué par l’Association des jeunes Avocats de Côte d’Ivoire, pour son 40e anniversaire",
      excerpt: "Invité à la commémoration du 40e anniversaire de l’association, Me Frédéric NANADJINGUE y a reçu le prix du mérite de l’engagement et annoncé le congrès des jeunes Avocats d’Afrique centrale à N’Djamena.",
      content: [
        "Me Frédéric NANADJINGUE a été convié par l’Association des jeunes Avocats de la Côte d’Ivoire à la commémoration de son 40e anniversaire d’existence.",
        "« Un grand merci à l’association des jeunes Avocats de la Côte d’Ivoire, qui m’a convié à la commémoration de son 40e anniversaire d’existence. J’ai été distingué par le prix du mérite de l’engagement, admis comme membre d’honneur. L’occasion était idoine, pour annoncer la tenue du congrès des jeunes Avocats d’Afrique centrale à N’Djamena, du 21 au 24 août 2024 », a-t-il déclaré à cette occasion.",
      ],
    },
    en: {
      title: "Me Frédéric NANADJINGUE Honoured by the Young Lawyers Association of Côte d’Ivoire, for Its 40th Anniversary",
      excerpt: "Invited to the association’s 40th anniversary commemoration, Me Frédéric NANADJINGUE received the merit-of-commitment award and announced the Central African Young Lawyers’ Congress in N’Djamena.",
      content: [
        "Me Frédéric NANADJINGUE was invited by the Young Lawyers Association of Côte d’Ivoire to the commemoration of its 40th anniversary.",
        "“A big thank you to the Young Lawyers Association of Côte d’Ivoire, which invited me to the commemoration of its 40th anniversary. I was honoured with the merit-of-commitment award and admitted as an honorary member. It was a fitting occasion to announce the Central African Young Lawyers’ Congress in N’Djamena, from 21 to 24 August 2024,” he stated on the occasion.",
      ],
    },
  },
  {
    slug: "concours-national-plaidoiries-ujat",
    image: "/images/gallery/actu-ujat-concours-plaidoiries.jpg",
    imageAlt: {
      fr: "Affiche du Concours National de Plaidoiries organisé par l’Union des Jeunes Avocats du Tchad (UJAT)",
      en: "Poster for the National Pleading Competition organised by the Union of Young Lawyers of Chad (UJAT)",
    },
    source: "Union des Jeunes Avocats du Tchad (UJAT)",
    date: "2025-04-26",
    fr: {
      title: "Concours National de Plaidoiries : l’UJAT invite les jeunes avocats tchadiens à concourir",
      excerpt: "L’Union des Jeunes Avocats du Tchad organise un Concours National de Plaidoiries sur le thème des violences faites aux femmes.",
      content: [
        "L’Union des Jeunes Avocats du Tchad (UJAT) organise un Concours National de Plaidoiries, le 26 avril 2025, ouvert aux jeunes avocats tchadiens.",
        "Le concours a pour thème : « Des mots pour bannir les maux consécutifs aux violences faites aux femmes ». Renseignements et inscriptions : (+235) 66 43 41 66 / 62 69 69 48 ou ujat.tchad@gmail.com.",
      ],
    },
    en: {
      title: "National Pleading Competition: UJAT invites young Chadian lawyers to compete",
      excerpt: "The Union of Young Lawyers of Chad is organising a National Pleading Competition on the theme of violence against women.",
      content: [
        "The Union of Young Lawyers of Chad (UJAT) is organising a National Pleading Competition on 26 April 2025, open to young Chadian lawyers.",
        "The competition’s theme is: “Words to banish the ills that follow violence against women.” Information and registration: (+235) 66 43 41 66 / 62 69 69 48 or ujat.tchad@gmail.com.",
      ],
    },
  },
  {
    slug: "election-president-fa-uja-dakar",
    image: "/images/gallery/actu-fa-uja-dakar.jpg",
    imageAlt: {
      fr: "Me Frédéric NANADJINGUE, élu Président de la FA-UJA à Dakar",
      en: "Me Frédéric NANADJINGUE, elected President of FA-UJA in Dakar",
    },
    source: "N’Djamena Actu",
    fr: {
      title: "Me Frédéric NANADJINGUE élu Président de la FA-UJA à Dakar, au Sénégal",
      excerpt: "Le fondateur de FN & PARTNERS a été élu à la présidence de la Fédération africaine des Unions et Associations des jeunes Avocats (FA-UJA), lors d’une assemblée tenue à Dakar.",
      content: [
        "Me Frédéric NANADJINGUE, avocat au Barreau du Tchad et fondateur du cabinet FN & PARTNERS, a été élu Président de la Fédération africaine des Unions et Associations des jeunes Avocats (FA-UJA), à l’occasion d’une assemblée tenue à Dakar, au Sénégal.",
        "Cette élection distingue son engagement de longue date auprès des jeunes avocats du continent, après avoir présidé l’Union des Jeunes Avocats du Tchad (UJAT) et coordonné le Réseau des Associations et Unions des Jeunes Avocats des Barreaux d’Afrique Centrale (RUBAC).",
        "L’information a été relayée par la presse tchadienne, notamment par N’Djamena Actu.",
      ],
    },
    en: {
      title: "Me Frédéric NANADJINGUE Elected President of FA-UJA in Dakar, Senegal",
      excerpt: "The founder of FN & PARTNERS was elected President of the African Federation of Young Lawyers’ Unions and Associations (FA-UJA) at an assembly held in Dakar.",
      content: [
        "Me Frédéric NANADJINGUE, an attorney at the Chad Bar and founder of FN & PARTNERS, was elected President of the African Federation of Young Lawyers’ Unions and Associations (FA-UJA) at an assembly held in Dakar, Senegal.",
        "The election recognises his long-standing commitment to young attorneys across the continent, after having presided over the Union of Young Lawyers of Chad (UJAT) and coordinated the Network of Central African Bar Young Lawyers’ Associations and Unions (RUBAC).",
        "The news was covered by the Chadian press, including N’Djamena Actu.",
      ],
    },
  },
  {
    slug: "inauguration-maison-avocat-lualaba",
    image: "/images/gallery/vie-cabinet-distinction.jpg",
    imageAlt: {
      fr: "Me Frédéric NANADJINGUE recevant une distinction à l’inauguration de la Maison de l’Avocat du Lualaba",
      en: "Me Frédéric NANADJINGUE receiving an award at the inauguration of the Maison de l’Avocat du Lualaba",
    },
    source: "Kevin évent",
    fr: {
      title: "Distinction pour Me Frédéric NANADJINGUE à l’inauguration de la Maison de l’Avocat du Lualaba",
      excerpt: "Me Frédéric NANADJINGUE a été distingué lors de la soirée d’inauguration de la Maison de l’Avocat du Lualaba, organisée par l’Ordre des Avocats du Barreau du Lualaba.",
      content: [
        "Me Frédéric NANADJINGUE a reçu une distinction lors de la soirée d’inauguration de la Maison de l’Avocat du Lualaba, organisée par l’Ordre des Avocats du Barreau du Lualaba.",
        "Cette reconnaissance illustre le rayonnement du fondateur de FN & PARTNERS au-delà des frontières tchadiennes, au sein des instances panafricaines de la profession d’avocat.",
      ],
    },
    en: {
      title: "Award for Me Frédéric NANADJINGUE at the Inauguration of the Maison de l’Avocat du Lualaba",
      excerpt: "Me Frédéric NANADJINGUE was honoured at the inauguration evening of the Maison de l’Avocat du Lualaba, organised by the Lualaba Bar Association.",
      content: [
        "Me Frédéric NANADJINGUE received an award at the inauguration evening of the Maison de l’Avocat du Lualaba, organised by the Lualaba Bar Association.",
        "The recognition reflects the growing profile of the FN & PARTNERS founder beyond Chad’s borders, within pan-African bodies of the legal profession.",
      ],
    },
  },
];

export function getNewsBySlug(slug: string) {
  return newsItems.find((n) => n.slug === slug);
}
