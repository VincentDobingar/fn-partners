export interface ResourceContent {
  title: string;
  /** Résumé affiché sur la page de liste et dans les moteurs de recherche. */
  description: string;
  intro: string;
  /** À qui s’adresse le guide. */
  audience: string;
  steps: { title: string; text: string }[];
  /** Documents et informations à réunir. */
  checklist: string[];
  /** Points de vigilance. */
  pitfalls: string[];
  faq: { q: string; a: string }[];
}

export interface Resource {
  slug: string;
  /** Date de dernière mise à jour (ISO). */
  updated: string;
  /** Domaines d’expertise liés (slugs de `expertise.ts`). */
  relatedExpertise: string[];
  fr: ResourceContent;
  en: ResourceContent;
}

export const resources: Resource[] = [
  {
    slug: "guide-creation-entreprise-tchad",
    updated: "2026-10-03",
    relatedExpertise: ["creation-restructuration-dissolution-entreprises", "droit-des-societes-et-gouvernance", "droit-fiscal"],
    fr: {
      title: "Guide pratique : créer son entreprise au Tchad",
      description:
        "Les étapes, les documents à préparer et les erreurs à éviter pour créer une société au Tchad, de l’idée à l’immatriculation.",
      intro:
        "Ce guide s’adresse aux porteurs de projet qui veulent savoir, concrètement, dans quel ordre procéder et quels documents réunir. Il complète l’article du cabinet consacré aux étapes clés de la création d’entreprise.",
      audience: "Entrepreneurs, dirigeants de PME, investisseurs et membres de la diaspora porteurs d’un projet au Tchad.",
      steps: [
        {
          title: "Clarifier le projet",
          text: "Définissez l’activité, le lieu d’exercice, le nombre d’associés, les apports de chacun et le besoin de financement. Ces éléments orientent le choix de la forme juridique.",
        },
        {
          title: "Vérifier si l’activité est réglementée",
          text: "Identifiez les agréments, licences ou autorisations nécessaires et l’administration qui les délivre. Certains s’obtiennent avant l’immatriculation, d’autres après.",
        },
        {
          title: "Choisir la forme et rédiger les statuts",
          text: "Arrêtez la forme sociale, la dénomination, le siège, le capital et la répartition des pouvoirs. Prévoyez dès ce stade les règles d’entrée et de sortie des associés.",
        },
        {
          title: "Déposer le capital",
          text: "Versez les apports en numéraire sur un compte ouvert au nom de la société en formation et faites constater leur versement dans les formes prévues par le droit OHADA.",
        },
        {
          title: "Immatriculer la société",
          text: "Déposez le dossier pour obtenir l’immatriculation au RCCM, le numéro d’identification fiscale et, si vous recrutez, l’affiliation à la CNPS.",
        },
        {
          title: "Organiser le démarrage",
          text: "Ouvrez le compte bancaire définitif, mettez en place la comptabilité, rédigez les contrats de travail et les premiers contrats commerciaux, souscrivez les assurances utiles.",
        },
      ],
      checklist: [
        "Pièces d’identité des associés et des dirigeants",
        "Statuts signés et actes de nomination des dirigeants",
        "Justificatif du dépôt du capital",
        "Justificatif de l’adresse du siège (bail, titre de propriété ou attestation de domiciliation)",
        "Déclarations exigées des dirigeants pour l’immatriculation au RCCM",
        "Pour une société étrangère associée : documents constitutifs et pouvoirs de son représentant",
        "Autorisations ou agréments si l’activité est réglementée",
      ],
      pitfalls: [
        "Signer un bail ou un contrat important au nom de la société avant son immatriculation, sans prévoir la reprise de l’engagement.",
        "Choisir une dénomination déjà utilisée ou proche d’une marque existante.",
        "Sous-estimer le délai d’obtention d’une autorisation sectorielle.",
        "Répartir le capital à parts égales sans mécanisme de résolution des blocages.",
        "Oublier les déclarations fiscales et sociales des premiers mois.",
      ],
      faq: [
        {
          q: "Peut-on créer une société seul ?",
          a: "Oui. Le droit OHADA admet la SARL et la SAS à associé unique, ainsi que la SA à actionnaire unique.",
        },
        {
          q: "Faut-il résider au Tchad pour y créer une société ?",
          a: "La résidence des associés n’est pas une condition de la constitution. Le dirigeant étranger doit toutefois respecter les règles de séjour et de travail, et certaines activités comportent des exigences particulières.",
        },
        {
          q: "Combien de temps faut-il prévoir ?",
          a: "Le délai dépend de la forme choisie, de la complétude du dossier et des autorisations éventuellement requises. Un dossier complet dès le dépôt est le meilleur moyen de le réduire.",
        },
      ],
    },
    en: {
      title: "Practical Guide: Setting Up a Business in Chad",
      description:
        "The steps, the documents to prepare and the mistakes to avoid when setting up a company in Chad, from idea to registration.",
      intro:
        "This guide is for project owners who want to know, in practical terms, in what order to proceed and which documents to gather. It complements the firm’s article on the key steps of setting up a business.",
      audience: "Entrepreneurs, SME managers, investors and members of the diaspora with a project in Chad.",
      steps: [
        {
          title: "Clarify the project",
          text: "Define the activity, the place of business, the number of shareholders, each one’s contribution and the financing need. These points guide the choice of legal form.",
        },
        {
          title: "Check whether the activity is regulated",
          text: "Identify the approvals, licences or authorisations required and the authority that issues them. Some are obtained before registration, others after.",
        },
        {
          title: "Choose the form and draft the articles",
          text: "Settle the company type, name, registered office, capital and allocation of powers. Provide at this stage for the rules on shareholders joining and leaving.",
        },
        {
          title: "Deposit the capital",
          text: "Pay cash contributions into an account opened in the name of the company being formed and have the payment recorded in the form required by OHADA law.",
        },
        {
          title: "Register the company",
          text: "File the application for registration with the RCCM, the tax identification number and, if you are hiring, registration with the CNPS.",
        },
        {
          title: "Organise the start of operations",
          text: "Open the permanent bank account, set up the accounting, draft employment contracts and the first commercial contracts, and take out the relevant insurance.",
        },
      ],
      checklist: [
        "Identity documents of the shareholders and directors",
        "Signed articles and directors’ appointment documents",
        "Proof of the capital deposit",
        "Proof of the registered office address (lease, title deed or domiciliation certificate)",
        "Declarations required from directors for RCCM registration",
        "For a foreign corporate shareholder: constitutional documents and its representative’s powers",
        "Authorisations or approvals if the activity is regulated",
      ],
      pitfalls: [
        "Signing a lease or a major contract in the company’s name before registration without providing for the commitment to be taken over.",
        "Choosing a name already in use or close to an existing trademark.",
        "Underestimating the time needed to obtain a sector authorisation.",
        "Splitting the capital equally with no deadlock-resolution mechanism.",
        "Overlooking tax and social security filings in the first months.",
      ],
      faq: [
        {
          q: "Can a company be set up by one person?",
          a: "Yes. OHADA law allows the single-shareholder SARL and SAS, as well as the single-shareholder SA.",
        },
        {
          q: "Do you have to live in Chad to set up a company there?",
          a: "Shareholders’ residence is not a condition of incorporation. A foreign director must nevertheless comply with residence and work rules, and some activities carry specific requirements.",
        },
        {
          q: "How long should be allowed?",
          a: "The timeframe depends on the form chosen, how complete the file is and any authorisations required. A file that is complete when filed is the best way to shorten it.",
        },
      ],
    },
  },
  {
    slug: "guide-recouvrement-creances-ohada",
    updated: "2026-10-03",
    relatedExpertise: ["recouvrement-de-creances", "contentieux-et-arbitrage", "droit-ohada"],
    fr: {
      title: "Guide pratique : recouvrer une créance en zone OHADA",
      description:
        "De la relance amiable à la saisie : la marche à suivre pour recouvrer une facture impayée au Tchad et dans l’espace OHADA.",
      intro:
        "Une créance se recouvre d’autant mieux que l’on agit tôt et dans le bon ordre. Ce guide décrit la démarche prévue par le droit OHADA, dont l’Acte uniforme sur le recouvrement a été révisé et est entré en vigueur dans sa nouvelle version le 16 février 2024.",
      audience: "Entreprises, commerçants, prestataires et établissements financiers confrontés à un impayé.",
      steps: [
        {
          title: "Réunir les preuves",
          text: "Rassemblez le contrat ou le bon de commande, les bons de livraison ou procès-verbaux de réception, les factures, les relances et les éventuelles reconnaissances de dette.",
        },
        {
          title: "Vérifier la créance",
          text: "Assurez-vous qu’elle est certaine, liquide et exigible, qu’elle n’est pas prescrite et que le débiteur est correctement identifié (dénomination, siège, RCCM).",
        },
        {
          title: "Relancer puis mettre en demeure",
          text: "Après une relance amiable, adressez une mise en demeure écrite, datée, précisant le montant, le fondement et le délai accordé. Elle marque généralement le point de départ des intérêts de retard.",
        },
        {
          title: "Négocier si le débiteur est de bonne foi",
          text: "Un échéancier consigné dans un protocole écrit, assorti si possible d’une garantie et d’une clause de déchéance du terme, vaut souvent mieux qu’un long procès.",
        },
        {
          title: "Saisir le juge",
          text: "Si la créance est contractuelle ou résulte d’un chèque ou d’un effet de commerce, l’injonction de payer permet d’obtenir rapidement une décision sur requête. À défaut, une assignation au fond ou en référé est envisagée.",
        },
        {
          title: "Faire exécuter la décision",
          text: "Muni d’un titre exécutoire, le créancier fait pratiquer les saisies adaptées aux biens du débiteur : comptes bancaires, créances, biens mobiliers, immeubles.",
        },
      ],
      checklist: [
        "Contrat, devis accepté ou bon de commande",
        "Preuves de livraison ou d’exécution de la prestation",
        "Factures et relevé de compte du client",
        "Échanges écrits avec le débiteur (courriers, courriels, messages)",
        "Garanties éventuelles : caution, gage, nantissement, hypothèque",
        "Informations sur les biens et les comptes du débiteur",
      ],
      pitfalls: [
        "Laisser passer le délai de prescription en multipliant les relances informelles.",
        "Engager des frais contre un débiteur manifestement insolvable sans avoir évalué ses actifs.",
        "Ignorer l’ouverture d’une procédure collective : la créance doit alors être déclarée dans le délai imparti.",
        "Pratiquer une saisie sans titre ni autorisation, ce qui expose à une mainlevée et à des dommages-intérêts.",
        "Confondre débiteur et dirigeant : sauf garantie personnelle, c’est la société qui doit.",
      ],
      faq: [
        {
          q: "Peut-on bloquer les comptes du débiteur avant d’avoir un jugement ?",
          a: "Une saisie conservatoire peut être autorisée par le juge lorsque la créance paraît fondée dans son principe et que son recouvrement est menacé. Elle doit ensuite être suivie d’une procédure permettant d’obtenir un titre exécutoire.",
        },
        {
          q: "Que faire si le débiteur conteste l’injonction de payer ?",
          a: "Le débiteur peut former opposition. L’affaire est alors examinée contradictoirement par la juridiction, après une tentative de conciliation.",
        },
        {
          q: "Et si le débiteur est une administration ?",
          a: "Les personnes publiques bénéficient de l’immunité d’exécution : leurs biens ne peuvent pas être saisis. Le nouvel Acte uniforme permet toutefois de demander l’inscription de la créance au budget de la personne publique lorsqu’une mise en demeure est restée sans effet pendant trois mois.",
        },
      ],
    },
    en: {
      title: "Practical Guide: Recovering a Debt in the OHADA Area",
      description:
        "From an amicable reminder to attachment: how to go about recovering an unpaid invoice in Chad and across the OHADA area.",
      intro:
        "A debt is recovered more easily when action is taken early and in the right order. This guide describes the approach provided for by OHADA law, whose Uniform Act on debt recovery was revised and entered into force in its new version on 16 February 2024.",
      audience: "Companies, traders, service providers and financial institutions facing non-payment.",
      steps: [
        {
          title: "Gather the evidence",
          text: "Collect the contract or purchase order, delivery notes or acceptance reports, invoices, reminders and any acknowledgements of debt.",
        },
        {
          title: "Check the debt",
          text: "Make sure it is certain, liquidated and due, that it is not time-barred and that the debtor is correctly identified (name, registered office, RCCM number).",
        },
        {
          title: "Send a reminder, then a formal notice",
          text: "After an amicable reminder, send a dated written formal notice stating the amount, the basis of the claim and the time allowed. It generally marks the starting point for late-payment interest.",
        },
        {
          title: "Negotiate if the debtor is acting in good faith",
          text: "A payment schedule recorded in a written agreement, if possible backed by security and an acceleration clause, is often better than lengthy proceedings.",
        },
        {
          title: "Go to court",
          text: "If the debt is contractual or arises from a cheque or negotiable instrument, the order for payment procedure produces a decision quickly on application. Otherwise, ordinary or summary proceedings are considered.",
        },
        {
          title: "Enforce the decision",
          text: "With an enforceable title, the creditor has the appropriate attachments carried out against the debtor’s assets: bank accounts, receivables, movable property, real estate.",
        },
      ],
      checklist: [
        "Contract, accepted quotation or purchase order",
        "Proof of delivery or performance",
        "Invoices and the customer’s account statement",
        "Written exchanges with the debtor (letters, emails, messages)",
        "Any security: guarantee, pledge, mortgage",
        "Information on the debtor’s assets and accounts",
      ],
      pitfalls: [
        "Letting the limitation period expire while sending informal reminders.",
        "Incurring costs against a plainly insolvent debtor without having assessed its assets.",
        "Overlooking the opening of insolvency proceedings: the claim must then be filed within the prescribed period.",
        "Carrying out an attachment without a title or authorisation, which exposes the creditor to release of the attachment and damages.",
        "Confusing the debtor with its director: unless a personal guarantee was given, it is the company that owes.",
      ],
      faq: [
        {
          q: "Can the debtor’s accounts be frozen before a judgment is obtained?",
          a: "A protective attachment may be authorised by the court where the claim appears well founded in principle and its recovery is under threat. It must then be followed by proceedings to obtain an enforceable title.",
        },
        {
          q: "What if the debtor contests the order for payment?",
          a: "The debtor may lodge an objection. The case is then heard by the court with both parties present, after a conciliation attempt.",
        },
        {
          q: "What if the debtor is a public authority?",
          a: "Public entities enjoy immunity from enforcement: their assets cannot be attached. The new Uniform Act nevertheless allows a request for the debt to be entered in the public entity’s budget where a formal demand has gone unanswered for three months.",
        },
      ],
    },
  },
  {
    slug: "guide-investisseur-etranger-tchad",
    updated: "2026-10-03",
    relatedExpertise: ["fusions-acquisitions-investissements", "creation-restructuration-dissolution-entreprises", "droit-fiscal", "droit-du-travail-et-securite-sociale"],
    fr: {
      title: "Guide pratique : s’implanter au Tchad en tant qu’investisseur étranger",
      description:
        "Forme d’implantation, réglementation des changes, emploi, fiscalité, règlement des différends : les questions juridiques à traiter avant d’investir au Tchad.",
      intro:
        "Investir au Tchad, c’est entrer dans un espace juridique en grande partie harmonisé : droit des affaires de l’OHADA et réglementation économique de la CEMAC. Ce guide passe en revue les questions à traiter avant d’engager les premiers fonds.",
      audience: "Sociétés étrangères, fonds d’investissement, groupes régionaux et entrepreneurs de la diaspora.",
      steps: [
        {
          title: "Choisir le mode d’implantation",
          text: "Filiale de droit tchadien, succursale, bureau de représentation, coentreprise avec un partenaire local ou acquisition d’une société existante : chaque option emporte des conséquences juridiques et fiscales différentes.",
        },
        {
          title: "Identifier le régime de l’activité",
          text: "Vérifiez si l’activité est libre ou soumise à autorisation, et si un régime sectoriel s’applique : mines, hydrocarbures, énergie, banque, télécommunications.",
        },
        {
          title: "Sécuriser les flux financiers",
          text: "Les apports en capital, les prêts d’actionnaires, les dividendes et les paiements à l’étranger relèvent de la réglementation des changes de la CEMAC : déclarations, domiciliation et justificatifs sont à anticiper avec la banque.",
        },
        {
          title: "Étudier les incitations",
          text: "La Charte des investissements et certains régimes particuliers ouvrent droit à des avantages sous conditions. Leur obtention suppose une demande et le respect d’engagements dans la durée.",
        },
        {
          title: "Organiser le recrutement",
          text: "Le personnel local relève du Code du travail tchadien. L’emploi de salariés étrangers suppose un contrat visé par l’autorité compétente et le respect des règles de séjour.",
        },
        {
          title: "Prévoir le règlement des différends",
          text: "Insérez dans les contrats une clause claire : juridiction compétente ou arbitrage, droit applicable, langue. Pour un investissement significatif, vérifiez les protections offertes par les traités et conventions applicables.",
        },
      ],
      checklist: [
        "Documents constitutifs de la société mère, traduits et légalisés si nécessaire",
        "Décision de l’organe compétent autorisant l’investissement et désignant le représentant",
        "Plan d’affaires et schéma de financement",
        "Projet de statuts ou d’accord de coentreprise",
        "Liste des autorisations sectorielles à obtenir",
        "Justificatifs d’origine des fonds pour la banque",
      ],
      pitfalls: [
        "Conserver durablement une succursale alors que le droit OHADA en limite la durée pour les sociétés étrangères.",
        "Négliger la vérification des titres fonciers et des autorisations de la société cible.",
        "Transférer des fonds sans respecter les formalités de change, ce qui complique ensuite le rapatriement des dividendes.",
        "S’engager avec un partenaire local sans pacte d’associés.",
        "Signer avec une personne publique sans avoir prévu de mécanisme efficace de règlement des différends.",
      ],
      faq: [
        {
          q: "Un partenaire local est-il obligatoire ?",
          a: "Le droit OHADA n’impose pas d’associé local dans les sociétés commerciales. Des exigences particulières peuvent toutefois résulter de régimes sectoriels ou de règles de contenu local.",
        },
        {
          q: "Les bénéfices peuvent-ils être rapatriés ?",
          a: "Le transfert des dividendes et des produits d’un investissement régulièrement déclaré est admis par la réglementation des changes, sous réserve des formalités et justificatifs exigés.",
        },
        {
          q: "Quel recours en cas de litige avec l’État ?",
          a: "Il dépend du contrat et des textes applicables : juridictions nationales, arbitrage prévu par une convention, ou arbitrage d’investissement. Le Tchad est partie à la Convention de Washington instituant le CIRDI.",
        },
      ],
    },
    en: {
      title: "Practical Guide: Establishing Your Business in Chad as a Foreign Investor",
      description:
        "Form of establishment, exchange control, employment, tax, dispute resolution: the legal questions to address before investing in Chad.",
      intro:
        "Investing in Chad means entering a largely harmonised legal area: OHADA business law and CEMAC economic regulation. This guide reviews the questions to address before committing the first funds.",
      audience: "Foreign companies, investment funds, regional groups and diaspora entrepreneurs.",
      steps: [
        {
          title: "Choose the form of establishment",
          text: "A Chadian subsidiary, a branch, a representative office, a joint venture with a local partner or the acquisition of an existing company: each option has different legal and tax consequences.",
        },
        {
          title: "Identify the regime governing the activity",
          text: "Check whether the activity is unrestricted or requires authorisation, and whether a sector regime applies: mining, hydrocarbons, energy, banking, telecommunications.",
        },
        {
          title: "Secure the financial flows",
          text: "Capital contributions, shareholder loans, dividends and payments abroad fall under CEMAC exchange-control regulations: declarations, domiciliation and supporting documents should be anticipated with the bank.",
        },
        {
          title: "Review the incentives",
          text: "The Investment Charter and certain special regimes grant benefits subject to conditions. Obtaining them requires an application and compliance with undertakings over time.",
        },
        {
          title: "Organise recruitment",
          text: "Local staff are covered by the Chadian Labour Code. Employing foreign workers requires a contract approved by the competent authority and compliance with residence rules.",
        },
        {
          title: "Provide for dispute resolution",
          text: "Include a clear clause in contracts: competent court or arbitration, governing law, language. For a significant investment, check the protections offered by the applicable treaties and conventions.",
        },
      ],
      checklist: [
        "Parent company’s constitutional documents, translated and legalised where necessary",
        "Resolution of the competent body authorising the investment and appointing the representative",
        "Business plan and financing structure",
        "Draft articles or joint venture agreement",
        "List of sector authorisations to be obtained",
        "Proof of the origin of funds for the bank",
      ],
      pitfalls: [
        "Keeping a branch indefinitely although OHADA law limits its duration for foreign companies.",
        "Neglecting to check the target company’s land titles and authorisations.",
        "Transferring funds without complying with exchange formalities, which later complicates the repatriation of dividends.",
        "Committing to a local partner without a shareholders’ agreement.",
        "Signing with a public entity without providing for an effective dispute-resolution mechanism.",
      ],
      faq: [
        {
          q: "Is a local partner mandatory?",
          a: "OHADA law does not require a local shareholder in commercial companies. Specific requirements may nevertheless arise from sector regimes or local-content rules.",
        },
        {
          q: "Can profits be repatriated?",
          a: "The transfer of dividends and proceeds from a duly declared investment is permitted by the exchange-control regulations, subject to the formalities and supporting documents required.",
        },
        {
          q: "What recourse is there in a dispute with the State?",
          a: "It depends on the contract and the applicable texts: national courts, arbitration provided for by an agreement, or investment arbitration. Chad is a party to the Washington Convention establishing ICSID.",
        },
      ],
    },
  },
];

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
