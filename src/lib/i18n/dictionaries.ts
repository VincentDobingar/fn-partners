import type { Locale } from "@/lib/data/firm";

export const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      firm: "Le Cabinet",
      founder: "Notre fondateur",
      team: "Notre équipe",
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
      rights: "Tous droits réservés.",
    },
    cookies: {
      message:
        "Nous utilisons des cookies pour améliorer votre expérience et mesurer l’audience du site. Vous pouvez accepter ou refuser les cookies non essentiels.",
      accept: "Accepter",
      decline: "Refuser",
      more: "En savoir plus",
    },
    common: {
      demoContent: "Contenu de démonstration",
      toComplete: "À compléter",
      language: "Langue",
      breadcrumbHome: "Accueil",
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
      firm: "The Firm",
      founder: "Our Founder",
      team: "Our Team",
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
      rights: "All rights reserved.",
    },
    cookies: {
      message:
        "We use cookies to improve your experience and measure site audience. You may accept or decline non-essential cookies.",
      accept: "Accept",
      decline: "Decline",
      more: "Learn more",
    },
    common: {
      demoContent: "Demonstration content",
      toComplete: "To be completed",
      language: "Language",
      breadcrumbHome: "Home",
      officialContent: "This content will be confirmed by the firm before final publication.",
    },
    appointmentDisclaimer:
      "An appointment is only confirmed once validated by the firm. You will receive a confirmation by email.",
    requestDisclaimer:
      "Submitting this form does not automatically create an attorney-client relationship and does not guarantee that the file will be accepted.",
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = typeof dictionaries.fr;
