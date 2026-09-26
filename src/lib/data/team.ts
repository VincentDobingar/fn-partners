export interface TeamMember {
  name: string;
  role: { fr: string; en: string };
  bio?: { fr: string; en: string };
  image?: string;
  isPlaceholder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Me Frédéric NANADJINGUE",
    role: {
      fr: "Fondateur et Manager — Avocat au Barreau du Tchad — Avocat auprès de la Cour africaine des droits de l’homme et des peuples",
      en: "Founder & Managing Partner — Attorney at the Chad Bar — Attorney before the African Court on Human and Peoples’ Rights",
    },
    image: "/images/frederic/frederic-portrait-2.jpg",
    bio: {
      fr: "Fondateur et Manager du cabinet FN & PARTNERS, Me Frédéric NANADJINGUE est avocat au Barreau du Tchad et auprès de la Cour africaine des droits de l’homme et des peuples (Arusha, Tanzanie). Il est Président en exercice de la Fédération africaine des Unions et Associations des jeunes Avocats (FA-UJA), Coordonnateur du Réseau des Associations et Unions des Jeunes Avocats des Barreaux d’Afrique Centrale (RUBAC) et a présidé l’Union des Jeunes Avocats du Tchad (UJAT) de 2022 à 2026. Enseignant-chercheur dans plusieurs établissements d’enseignement supérieur privés, il est l’auteur de plusieurs publications, dont « La protection du consommateur des services d’internet au Tchad, état des lieux et perspectives » (Editions Universitaires Européennes, 2024).",
      en: "Founder and Managing Partner of FN & PARTNERS, Me Frédéric NANADJINGUE is an attorney at the Chad Bar and before the African Court on Human and Peoples’ Rights (Arusha, Tanzania). He is the acting President of the African Federation of Young Lawyers’ Unions and Associations (FA-UJA), Coordinator of the Network of Central African Bar Young Lawyers’ Associations and Unions (RUBAC), and served as President of the Union of Young Lawyers of Chad (UJAT) from 2022 to 2026. A teaching researcher at several private higher education institutions, he has authored several publications, including “La protection du consommateur des services d’internet au Tchad, état des lieux et perspectives” (Editions Universitaires Européennes, 2024).",
    },
  },
  {
    name: "Me EITCHANG Flavien",
    role: {
      fr: "Avocat au Barreau du Tchad",
      en: "Attorney at the Chad Bar",
    },
    image: "/images/frederic/flavien-zoom2.jpg",
    bio: {
      fr: "Avocat au Barreau du Tchad, Me EITCHANG Flavien est également enseignant chargé de cours à HEC-TCHAD et à CEFOD Business School. Il possède des aptitudes et compétences particulières en droit international humanitaire.",
      en: "An attorney at the Chad Bar, Me EITCHANG Flavien also teaches at HEC-TCHAD and CEFOD Business School. He has particular skills and expertise in international humanitarian law.",
    },
  },
  {
    name: "Me DJEKOULA KOUBET Guy Michel",
    role: {
      fr: "Avocat au Barreau du Tchad",
      en: "Attorney at the Chad Bar",
    },
    image: "/images/frederic/guy-michel.jpg",
    bio: {
      fr: "Avocat au Barreau du Tchad, Me DJEKOULA KOUBET Guy Michel est titulaire d’un Master en droit public, obtenu en 2018 à l’Université de Dschang (Cameroun). Il est également consultant en droit de l’information et de la communication. Il est engagé pour la promotion des droits de l’Homme.",
      en: "An attorney at the Chad Bar, Me DJEKOULA KOUBET Guy Michel holds a Master’s degree in Public Law, obtained in 2018 from the University of Dschang (Cameroon). He is also a consultant in information and communication law. He is an active advocate for the promotion of human rights.",
    },
  },
  {
    name: "Me GONDE ROADOUM",
    role: {
      fr: "Avocat au Barreau du Tchad",
      en: "Attorney at the Chad Bar",
    },
    image: "/images/frederic/gonde-roadoum-zoom.jpg",
    bio: {
      fr: "Avocat au Barreau du Tchad, Me GONDE ROADOUM dispose d’une expérience judiciaire acquise notamment lors de stages effectués dans des greffes du Tribunal de Grande Instance de N’Djamena. Il assure également des prestations de volontariat au sein d’institutions humanitaires.",
      en: "An attorney at the Chad Bar, Me GONDE ROADOUM brings judicial experience gained in particular through internships in registries of the N’Djamena Court of First Instance. He also volunteers with humanitarian institutions.",
    },
  },
  {
    name: "Me OUYA MANDO",
    role: {
      fr: "Avocat-stagiaire au Barreau du Tchad",
      en: "Trainee Attorney at the Chad Bar",
    },
    image: "/images/frederic/mando.jpg",
    bio: {
      fr: "Avocat-stagiaire au Barreau du Tchad, Me OUYA MANDO est également doctorant en droit et assistant à l’Université de N’Djamena.",
      en: "A trainee attorney at the Chad Bar, Me OUYA MANDO is also a PhD candidate in law and a teaching assistant at the University of N’Djamena.",
    },
  },
  {
    name: "Isaac TAMBIA DEKO",
    role: {
      fr: "Juriste — Titulaire d’une Maîtrise en droit privé fondamental",
      en: "Legal Officer — Holder of a Master’s degree in fundamental private law",
    },
    image: "/images/frederic/isaac-zoom.jpg",
    bio: {
      fr: "Titulaire d’une Maîtrise en droit privé fondamental, Isaac TAMBIA DEKO dispose d’aptitudes en droit civil et en droit du travail, entre autres.",
      en: "Holder of a Master’s degree in fundamental private law, Isaac TAMBIA DEKO has skills in civil law and employment law, among other areas.",
    },
  },
  {
    name: "Ghislaine SADJINANTE",
    role: {
      fr: "Juriste-fiscaliste",
      en: "Tax Legal Officer",
    },
    image: "/images/frederic/ghislaine.jpg",
    bio: {
      fr: "Juriste-fiscaliste au sein du cabinet FN & PARTNERS, Ghislaine SADJINANTE accompagne les clients sur l’analyse fiscale de leurs contrats, conventions et opérations.",
      en: "Tax Legal Officer at FN & PARTNERS, Ghislaine SADJINANTE supports clients with the tax analysis of their contracts, agreements and transactions.",
    },
  },
  {
    name: "MADJITOLOUM Mathurin",
    role: {
      fr: "Juriste d’affaires — Titulaire d’un Master en droit des affaires",
      en: "Business Legal Officer — Holder of a Master’s degree in business law",
    },
    image: "/images/frederic/mathurin-premium.jpg",
    bio: {
      fr: "Juriste d’affaires titulaire d’un Master en droit des affaires, MADJITOLOUM Mathurin est également détenteur de plusieurs certificats, notamment en finances et budgets dans les situations d’urgence et en stratégies financières des collectivités locales.",
      en: "A business legal officer holding a Master’s degree in business law, MADJITOLOUM Mathurin also holds several certificates, notably in finance and budgeting in emergency situations and in local government financial strategy.",
    },
  },
  {
    name: "Elise DAGOSSE",
    role: {
      fr: "Responsable communication du cabinet",
      en: "Head of Communications",
    },
    image: "/images/frederic/elise-dagosse.jpg",
    bio: {
      fr: "Responsable de la communication du cabinet FN & PARTNERS, Elise DAGOSSE pilote l’image institutionnelle et la communication du cabinet auprès de ses clients et partenaires.",
      en: "Head of Communications at FN & PARTNERS, Elise DAGOSSE oversees the firm’s institutional image and communications with its clients and partners.",
    },
  },
];
