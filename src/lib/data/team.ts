export interface TeamMember {
  name: string;
  role: { fr: string; en: string };
  bio?: { fr: string; en: string };
  isPlaceholder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Me Frédéric NANADJINGUE",
    role: {
      fr: "Fondateur — Avocat au Barreau du Tchad — Avocat auprès de la Cour africaine des droits de l’homme et des peuples",
      en: "Founder — Attorney at the Chad Bar — Attorney before the African Court on Human and Peoples’ Rights",
    },
    bio: {
      fr: "Me Frédéric NANADJINGUE a fondé NF & PARTNERS en 2021. Avocat au Barreau du Tchad, il est également avocat auprès de la Cour africaine des droits de l’homme et des peuples à Arusha. Son parcours et ses distinctions détaillés seront publiés prochainement.",
      en: "Me Frédéric NANADJINGUE founded NF & PARTNERS in 2021. An attorney at the Chad Bar, he is also an attorney before the African Court on Human and Peoples’ Rights in Arusha. His detailed background and distinctions will be published soon.",
    },
  },
  {
    name: "Avocat collaborateur",
    role: { fr: "À compléter par le cabinet", en: "To be completed by the firm" },
    isPlaceholder: true,
  },
  {
    name: "Collaborateur juridique",
    role: { fr: "À compléter par le cabinet", en: "To be completed by the firm" },
    isPlaceholder: true,
  },
];
