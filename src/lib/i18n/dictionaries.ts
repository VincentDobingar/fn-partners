import type { Locale } from "@/lib/data/firm";

export const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      firm: "Le Cabinet",
      founder: "Notre fondateur",
      team: "Notre équipe",
      gallery: "Galerie",
      news: "Actualités",
      expertise: "Domaines d’expertise",
      sectors: "Secteurs d’intervention",
      locations: "Implantation panafricaine",
      publications: "Publications",
      resources: "Ressources & guides",
      faq: "FAQ juridique",
      contact: "Contact",
      appointment: "Prendre rendez-vous",
      submitRequest: "Soumettre une demande",
      trackFile: "Suivre mon dossier",
      clientArea: "Espace client",
    },
    cta: {
      appointment: "Prendre rendez-vous",
      submitRequest: "Soumettre une demande",
      trackFile: "Accéder à mon dossier",
      contactUs: "Nous contacter",
      learnMore: "En savoir plus",
      seeAllExpertise: "Voir tous les domaines d’expertise",
      seeAllPublications: "Voir toutes les publications",
      seeAllNews: "Voir toutes les actualités",
      readMore: "Lire la suite",
      send: "Envoyer",
      call: "Appeler",
      email: "E-mail",
      whatsapp: "WhatsApp",
      itinerary: "Itinéraire",
    },
    footer: {
      description:
        "Cabinet d’avocats et de conseil juridique d’envergure panafricaine, basé à N’Djamena, Tchad.",
      legal: "Informations légales",
      legalNotice: "Mentions légales",
      privacy: "Politique de confidentialité",
      cookies: "Politique relative aux cookies",
      clientTerms: "Conditions d’utilisation de l’espace client",
      contactTitle: "Contact",
      navTitle: "Navigation",
      firmTitle: "Le cabinet",
      servicesTitle: "Services et ressources",
      rights: "Tous droits réservés.",
      credit: "Site créé par",
    },
    cookies: {
      message:
        "Ce site utilise uniquement des éléments techniques nécessaires à son fonctionnement. Aucun cookie de mesure d’audience ou publicitaire n’est déposé à ce jour.",
      consentMessage:
        "Avec votre accord, ce site utilise des cookies de mesure d’audience (Google Analytics) pour comprendre comment il est consulté et l’améliorer. Aucun cookie publicitaire n’est déposé. Vous pouvez refuser sans conséquence sur votre navigation.",
      accept: "Accepter",
      refuse: "Refuser",
      manage: "Gérer mes cookies",
      label: "Cookies",
      dismiss: "J’ai compris",
      more: "En savoir plus",
    },
    common: {
      demoContent: "Contenu de démonstration",
      toComplete: "À compléter",
      language: "Langue",
      breadcrumbHome: "Accueil",
      skipToContent: "Aller au contenu principal",
      legalDisclaimer:
        "Ces informations sont générales et ne constituent pas une consultation juridique. Chaque situation appelle une analyse particulière : contactez le cabinet avant toute décision.",
      officialContent: "Ce contenu sera confirmé par le cabinet avant mise en ligne définitive.",
    },
    appointmentDisclaimer:
      "Un rendez-vous n’est confirmé qu’après validation par le cabinet. Vous recevrez une confirmation par e-mail.",
    requestDisclaimer:
      "La soumission de ce formulaire ne crée pas automatiquement une relation avocat-client et ne garantit pas l’acceptation du dossier.",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      firm: "The Firm",
      founder: "Our Founder",
      team: "Our Team",
      gallery: "Gallery",
      news: "News",
      expertise: "Areas of Expertise",
      sectors: "Sectors We Serve",
      locations: "Pan-African Presence",
      publications: "Publications",
      resources: "Resources & Guides",
      faq: "Legal FAQ",
      contact: "Contact",
      appointment: "Book an Appointment",
      submitRequest: "Submit a Request",
      trackFile: "Track My File",
      clientArea: "Client Area",
    },
    cta: {
      appointment: "Book an Appointment",
      submitRequest: "Submit a Request",
      trackFile: "Access My File",
      contactUs: "Contact Us",
      learnMore: "Learn More",
      seeAllExpertise: "See All Areas of Expertise",
      seeAllPublications: "See All Publications",
      seeAllNews: "See All News",
      readMore: "Read More",
      send: "Send",
      call: "Call",
      email: "Email",
      whatsapp: "WhatsApp",
      itinerary: "Directions",
    },
    footer: {
      description:
        "A pan-African law firm and legal advisory practice based in N’Djamena, Chad.",
      legal: "Legal Information",
      legalNotice: "Legal Notice",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      clientTerms: "Client Area Terms of Use",
      contactTitle: "Contact",
      navTitle: "Navigation",
      firmTitle: "The firm",
      servicesTitle: "Services and resources",
      rights: "All rights reserved.",
      credit: "Site created by",
    },
    cookies: {
      message:
        "This site only uses technical elements required for it to function. No audience-measurement or advertising cookies are set at this time.",
      consentMessage:
        "With your consent, this site uses audience-measurement cookies (Google Analytics) to understand how it is used and improve it. No advertising cookies are set. You can refuse without any effect on your browsing.",
      accept: "Accept",
      refuse: "Refuse",
      manage: "Manage my cookies",
      label: "Cookies",
      dismiss: "Got it",
      more: "Learn more",
    },
    common: {
      demoContent: "Demonstration content",
      toComplete: "To be completed",
      language: "Language",
      breadcrumbHome: "Home",
      skipToContent: "Skip to main content",
      legalDisclaimer:
        "This information is general in nature and does not constitute legal advice. Every situation calls for specific analysis: please contact the firm before making any decision.",
      officialContent: "This content will be confirmed by the firm before final publication.",
    },
    appointmentDisclaimer:
      "An appointment is only confirmed once validated by the firm. You will receive a confirmation by email.",
    requestDisclaimer:
      "Submitting this form does not automatically create an attorney-client relationship and does not guarantee that the file will be accepted.",
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = typeof dictionaries.fr;
