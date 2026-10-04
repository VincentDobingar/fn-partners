export interface FaqItem {
  fr: { q: string; a: string };
  en: { q: string; a: string };
}

export const generalFaq: FaqItem[] = [
  {
    fr: {
      q: "Comment prendre rendez-vous avec le cabinet ?",
      a: "Vous pouvez utiliser le formulaire de prise de rendez-vous en ligne, appeler le cabinet ou écrire par e-mail. Un rendez-vous n’est confirmé qu’après validation par le cabinet.",
    },
    en: {
      q: "How can I book an appointment with the firm?",
      a: "You can use the online appointment form, call the firm or write by email. An appointment is only confirmed once validated by the firm.",
    },
  },
  {
    fr: {
      q: "Le cabinet intervient-il en dehors du Tchad ?",
      a: "Oui, le cabinet a une vocation panafricaine et intervient dans l’espace OHADA ainsi que devant certaines juridictions régionales, notamment la Cour africaine des droits de l’homme et des peuples.",
    },
    en: {
      q: "Does the firm work outside Chad?",
      a: "Yes, the firm has a pan-African vocation and operates across the OHADA area as well as before certain regional courts, including the African Court on Human and Peoples’ Rights.",
    },
  },
  {
    fr: {
      q: "Comment soumettre une demande ou un dossier au cabinet ?",
      a: "Le formulaire « Soumettre une demande » permet d’exposer votre situation en quelques étapes et de joindre vos pièces de façon confidentielle. Le cabinet examine chaque demande, vérifie l’absence de conflit d’intérêts et revient vers vous. Vous pouvez aussi prendre rendez-vous ou contacter directement le cabinet.",
    },
    en: {
      q: "How can I submit a request or a file to the firm?",
      a: "The “Submit a Request” form lets you set out your situation in a few steps and attach documents confidentially. The firm reviews each request, checks for conflicts of interest and gets back to you. You can also book an appointment or contact the firm directly.",
    },
  },
  {
    fr: {
      q: "La soumission d’une demande garantit-elle une prise en charge par le cabinet ?",
      a: "Non. La soumission d’une demande ne crée pas automatiquement une relation avocat-client et ne garantit pas l’acceptation du dossier par le cabinet.",
    },
    en: {
      q: "Does submitting a request guarantee that the firm will take on my case?",
      a: "No. Submitting a request does not automatically create an attorney-client relationship and does not guarantee that the firm will accept the file.",
    },
  },
  {
    fr: {
      q: "Mes échanges avec le cabinet sont-ils confidentiels ?",
      a: "Oui, la confidentialité des échanges et des documents transmis est une priorité du cabinet, conformément aux règles applicables à la profession d’avocat.",
    },
    en: {
      q: "Are my exchanges with the firm confidential?",
      a: "Yes, the confidentiality of exchanges and documents shared is a priority for the firm, in accordance with the rules governing the legal profession.",
    },
  },
  {
    fr: {
      q: "Le site propose-t-il un espace client sécurisé ?",
      a: "Oui. Lorsque le cabinet prend en charge votre dossier, il vous ouvre un accès personnel à l’espace client : vous recevez par e-mail un lien d’activation, puis vous vous connectez avec votre mot de passe et un code de vérification. Vous pouvez y suivre l’avancement de votre dossier et consulter les documents associés.",
    },
    en: {
      q: "Does the site offer a secure client area?",
      a: "Yes. When the firm takes on your file, it opens personal access to the client area for you: you receive an activation link by email, then sign in with your password and a verification code. There you can follow the progress of your file and view the related documents.",
    },
  },
];
