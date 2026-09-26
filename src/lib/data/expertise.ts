export interface ExpertiseContent {
  title: string;
  summary: string;
  intro: string;
  issues: string[];
  clients: string[];
  approach: string;
  faq: { q: string; a: string }[];
}

export interface ExpertiseDomain {
  slug: string;
  keywords: string[];
  fr: ExpertiseContent;
  en: ExpertiseContent;
}

export const expertiseDomains: ExpertiseDomain[] = [
  {
    slug: "droit-des-affaires",
    keywords: ["avocat droit des affaires Tchad", "conseil juridique entreprise Tchad"],
    fr: {
      title: "Droit des affaires",
      summary:
        "Conseil et représentation des entreprises dans l’ensemble de leurs opérations juridiques courantes et stratégiques.",
      intro:
        "FN & PARTNERS accompagne les entreprises et leurs dirigeants dans la sécurisation juridique de leurs activités au Tchad et dans l’espace régional, de la structuration initiale aux opérations les plus complexes.",
      issues: [
        "Structuration juridique de l’activité, rédaction des statuts et formalités de constitution",
        "Secrétariat juridique annuel et opérations sur capital",
        "Cession d’entreprise, lettre d’intention, protocole de cession et pacte d’actionnaires",
        "Accompagnement du Conseil d’administration dans l’organisation de ses assises",
        "Négociation et rédaction d’accords commerciaux",
        "Relations avec les partenaires, actionnaires et administrations",
      ],
      clients: [
        "PME et grandes entreprises",
        "Groupes internationaux implantés au Tchad",
        "Dirigeants et actionnaires",
      ],
      approach:
        "Une approche pragmatique et préventive, centrée sur la compréhension des enjeux économiques du client avant toute recommandation juridique.",
      faq: [
        {
          q: "Le cabinet intervient-il pour des entreprises étrangères ?",
          a: "Oui, le cabinet accompagne des sociétés locales et des groupes étrangers présents ou souhaitant s’implanter au Tchad.",
        },
        {
          q: "Proposez-vous un accompagnement juridique permanent ?",
          a: "Oui, un accompagnement ponctuel ou permanent peut être mis en place selon les besoins de l’entreprise.",
        },
      ],
    },
    en: {
      title: "Business Law",
      summary:
        "Advising and representing companies across their day-to-day and strategic legal operations.",
      intro:
        "FN & PARTNERS supports companies and their executives in securing their activities in Chad and across the region, from initial structuring to the most complex transactions.",
      issues: [
        "Legal structuring of the business, drafting of articles of association and incorporation formalities",
        "Annual corporate secretarial services and capital transactions",
        "Business transfers, letters of intent, transfer protocols and shareholders’ agreements",
        "Supporting the Board of Directors in organising its meetings",
        "Negotiation and drafting of commercial agreements",
        "Relations with partners, shareholders and administrations",
      ],
      clients: ["SMEs and large companies", "International groups established in Chad", "Executives and shareholders"],
      approach:
        "A pragmatic, preventive approach centred on understanding the client’s economic stakes before any legal recommendation.",
      faq: [
        {
          q: "Does the firm work with foreign companies?",
          a: "Yes, the firm supports local companies as well as foreign groups already present or seeking to establish themselves in Chad.",
        },
        {
          q: "Do you offer ongoing legal support?",
          a: "Yes, one-off or ongoing support can be arranged depending on the company’s needs.",
        },
      ],
    },
  },
  {
    slug: "droit-civil-et-accompagnement-des-ong",
    keywords: ["avocat ONG Tchad", "conseil juridique association Tchad", "droit civil Tchad"],
    fr: {
      title: "Droit civil et accompagnement des ONG",
      summary: "Conseil juridique permanent des organisations non gouvernementales, de la gouvernance à la protection de leurs actifs.",
      intro:
        "Le cabinet conseille les ONG sur l’ensemble des questions juridiques liées à leurs activités et assure une veille réglementaire permanente.",
      issues: [
        "Rédaction, révision et sécurisation des statuts et règlements intérieurs",
        "Conventions de partenariats et contrats conclus par l’ONG",
        "Accompagnement dans les démarches administratives et conformité de la gouvernance",
        "Assistance des organes dirigeants dans la prise de décision",
        "Protection des actifs, des droits de propriété et des données personnelles de l’ONG",
      ],
      clients: ["ONG nationales et internationales", "Organisations de la société civile", "Fondations et associations"],
      approach:
        "Une veille réglementaire permanente et une disponibilité constante pour accompagner les ONG dans la sécurisation juridique de leur gouvernance et de leurs activités.",
      faq: [
        {
          q: "Le cabinet conseille-t-il les ONG internationales ?",
          a: "Oui, le cabinet accompagne aussi bien les ONG nationales qu’internationales présentes au Tchad.",
        },
      ],
    },
    en: {
      title: "Civil Law & NGO Support",
      summary: "Ongoing legal advice for non-governmental organisations, from governance to asset protection.",
      intro:
        "The firm advises NGOs on all legal matters relating to their activities and provides continuous regulatory monitoring.",
      issues: [
        "Drafting, reviewing and securing articles of association and internal regulations",
        "Partnership agreements and contracts entered into by the NGO",
        "Support with administrative procedures and governance compliance",
        "Assisting governing bodies with decision-making",
        "Protecting the NGO’s assets, property rights and personal data",
      ],
      clients: ["National and international NGOs", "Civil society organisations", "Foundations and associations"],
      approach:
        "Continuous regulatory monitoring and constant availability to support NGOs in securing their governance and activities.",
      faq: [
        {
          q: "Does the firm advise international NGOs?",
          a: "Yes, the firm supports both national and international NGOs operating in Chad.",
        },
      ],
    },
  },
  {
    slug: "droit-ohada",
    keywords: ["avocat droit OHADA", "contentieux commercial OHADA"],
    fr: {
      title: "Droit OHADA",
      summary:
        "Application et interprétation des Actes uniformes OHADA pour sécuriser les opérations des entreprises dans l’espace régional.",
      intro:
        "Le cabinet maîtrise le corpus des Actes uniformes de l’Organisation pour l’Harmonisation en Afrique du Droit des Affaires et accompagne ses clients dans leur application au Tchad et dans les autres États membres.",
      issues: [
        "Application des Actes uniformes (sociétés commerciales, sûretés, procédures collectives, recouvrement)",
        "Harmonisation des pratiques contractuelles avec le droit OHADA",
        "Contentieux devant les juridictions nationales et la CCJA",
        "Sécurisation des sûretés et garanties",
      ],
      clients: ["Entreprises commerciales", "Investisseurs régionaux", "Institutions financières"],
      approach:
        "Une veille constante de la jurisprudence de la Cour Commune de Justice et d’Arbitrage (CCJA) pour anticiper les évolutions du droit harmonisé.",
      faq: [
        {
          q: "Le cabinet plaide-t-il devant la CCJA ?",
          a: "Le cabinet accompagne ses clients dans les procédures relevant du droit OHADA, y compris lorsqu’un pourvoi devant la CCJA est envisagé.",
        },
      ],
    },
    en: {
      title: "OHADA Law",
      summary:
        "Application and interpretation of OHADA Uniform Acts to secure business operations across the regional area.",
      intro:
        "The firm has strong command of the Uniform Acts of the Organisation for the Harmonisation of Business Law in Africa and supports clients in applying them in Chad and other member states.",
      issues: [
        "Application of the Uniform Acts (commercial companies, securities, insolvency, debt recovery)",
        "Aligning contractual practice with OHADA law",
        "Litigation before national courts and the CCJA",
        "Structuring of security interests and guarantees",
      ],
      clients: ["Commercial companies", "Regional investors", "Financial institutions"],
      approach:
        "Continuous monitoring of the case law of the Common Court of Justice and Arbitration (CCJA) to anticipate developments in harmonised law.",
      faq: [
        {
          q: "Does the firm plead before the CCJA?",
          a: "The firm supports clients in OHADA-related proceedings, including where an appeal before the CCJA is contemplated.",
        },
      ],
    },
  },
  {
    slug: "droit-des-societes-et-gouvernance",
    keywords: ["droit des sociétés Tchad", "gouvernance d'entreprise"],
    fr: {
      title: "Droit des sociétés et gouvernance",
      summary: "Accompagnement des organes sociaux et sécurisation des décisions de gouvernance.",
      intro:
        "FN & PARTNERS conseille les sociétés et leurs organes dirigeants sur l’ensemble des questions de gouvernance, de la vie sociale courante aux décisions stratégiques.",
      issues: [
        "Rédaction et mise à jour des statuts et pactes d’associés",
        "Organisation des assemblées générales et des organes de direction",
        "Conflits entre associés ou actionnaires",
        "Responsabilité des dirigeants",
      ],
      clients: ["Sociétés commerciales", "Groupes de sociétés", "Associés et actionnaires"],
      approach:
        "Un conseil qui articule rigueur juridique et compréhension des équilibres de pouvoir propres à chaque organisation.",
      faq: [
        {
          q: "Le cabinet rédige-t-il des pactes d’actionnaires ?",
          a: "Oui, la rédaction et la négociation de pactes d’associés ou d’actionnaires font partie des prestations courantes du cabinet.",
        },
      ],
    },
    en: {
      title: "Corporate Law & Governance",
      summary: "Supporting corporate bodies and securing governance decisions.",
      intro:
        "FN & PARTNERS advises companies and their governing bodies on all governance matters, from routine corporate life to strategic decisions.",
      issues: [
        "Drafting and updating articles of association and shareholders’ agreements",
        "Organisation of general meetings and management bodies",
        "Disputes between partners or shareholders",
        "Directors’ liability",
      ],
      clients: ["Commercial companies", "Corporate groups", "Partners and shareholders"],
      approach:
        "Advice that combines legal rigour with an understanding of the balance of power specific to each organisation.",
      faq: [
        {
          q: "Does the firm draft shareholders’ agreements?",
          a: "Yes, drafting and negotiating shareholders’ agreements is part of the firm’s regular services.",
        },
      ],
    },
  },
  {
    slug: "creation-restructuration-dissolution-entreprises",
    keywords: ["création d'entreprise au Tchad", "dissolution société Tchad"],
    fr: {
      title: "Création, restructuration et dissolution d’entreprises",
      summary: "Accompagnement juridique à chaque étape du cycle de vie de l’entreprise.",
      intro:
        "Le cabinet accompagne les porteurs de projets et les entreprises dans les formalités de constitution, les opérations de restructuration et, le cas échéant, les procédures de dissolution et de liquidation.",
      issues: [
        "Choix de la forme sociale et formalités de constitution",
        "Restructurations internes, cessions et transformations",
        "Dissolution, liquidation amiable ou judiciaire",
        "Formalités auprès des registres et administrations compétentes",
      ],
      clients: ["Entrepreneurs et start-ups", "Entreprises en restructuration", "Groupes en réorganisation"],
      approach:
        "Un accompagnement structuré, de l’analyse d’opportunité juridique jusqu’à l’accomplissement des formalités.",
      faq: [
        {
          q: "Quel est le délai moyen pour créer une entreprise au Tchad ?",
          a: "Le délai varie selon la forme sociale et la complétude du dossier ; le cabinet conseille sur les démarches à anticiper pour le réduire.",
        },
      ],
    },
    en: {
      title: "Company Formation, Restructuring and Winding-up",
      summary: "Legal support throughout every stage of a company’s life cycle.",
      intro:
        "The firm supports project owners and companies through incorporation formalities, restructuring operations and, where necessary, winding-up and liquidation procedures.",
      issues: [
        "Choice of corporate form and incorporation formalities",
        "Internal restructurings, transfers and conversions",
        "Voluntary or judicial winding-up and liquidation",
        "Filings with relevant registries and authorities",
      ],
      clients: ["Entrepreneurs and start-ups", "Companies undergoing restructuring", "Groups under reorganisation"],
      approach: "Structured support, from the initial legal feasibility review through to completion of formalities.",
      faq: [
        {
          q: "How long does it typically take to set up a company in Chad?",
          a: "Timing depends on the corporate form chosen and the completeness of the file; the firm advises on steps to anticipate in order to shorten it.",
        },
      ],
    },
  },
  {
    slug: "fusions-acquisitions-investissements",
    keywords: ["fusion acquisition Tchad", "conseil juridique investisseurs Tchad"],
    fr: {
      title: "Fusions-acquisitions et investissements",
      summary: "Sécurisation juridique des opérations de croissance externe et des investissements.",
      intro:
        "FN & PARTNERS conseille investisseurs, acquéreurs et cédants dans la structuration, la négociation et la sécurisation juridique de leurs opérations.",
      issues: [
        "Audit juridique préalable (due diligence)",
        "Structuration et négociation des opérations",
        "Rédaction des accords de cession, d’acquisition ou de partenariat",
        "Accompagnement post-opération",
      ],
      clients: ["Investisseurs nationaux et étrangers", "Acquéreurs et cédants", "Fonds et partenaires financiers"],
      approach:
        "Une implication à chaque étape de l’opération, de l’évaluation des risques juridiques jusqu’au closing.",
      faq: [
        {
          q: "Le cabinet accompagne-t-il les investisseurs étrangers souhaitant s’implanter au Tchad ?",
          a: "Oui, l’accompagnement des investisseurs étrangers dans leur implantation fait partie des domaines d’intervention prioritaires du cabinet.",
        },
      ],
    },
    en: {
      title: "Mergers, Acquisitions & Investments",
      summary: "Legal security for external growth transactions and investments.",
      intro:
        "FN & PARTNERS advises investors, buyers and sellers on the structuring, negotiation and legal security of their transactions.",
      issues: [
        "Legal due diligence",
        "Structuring and negotiation of transactions",
        "Drafting of sale, acquisition or partnership agreements",
        "Post-transaction support",
      ],
      clients: ["National and foreign investors", "Buyers and sellers", "Funds and financial partners"],
      approach: "Involvement at every stage of the transaction, from legal risk assessment through to closing.",
      faq: [
        {
          q: "Does the firm assist foreign investors seeking to establish themselves in Chad?",
          a: "Yes, supporting foreign investors in their market entry is one of the firm’s priority areas of practice.",
        },
      ],
    },
  },
  {
    slug: "contrats-commerciaux",
    keywords: ["rédaction contrat commercial Tchad", "avocat contrat Tchad"],
    fr: {
      title: "Contrats commerciaux",
      summary: "Rédaction, négociation et sécurisation de tous types de contrats commerciaux.",
      intro:
        "Le cabinet rédige et négocie les contrats nécessaires à l’activité de ses clients, dans une logique de prévention des litiges.",
      issues: [
        "Contrats de vente, de distribution, d’agence et de prestation de services",
        "Conditions générales et documents contractuels types",
        "Négociation des clauses sensibles (responsabilité, résiliation, garanties)",
        "Adaptation des contrats aux spécificités sectorielles",
      ],
      clients: ["Entreprises de tous secteurs", "Prestataires de services", "Distributeurs et fournisseurs"],
      approach: "Des contrats clairs, équilibrés et adaptés au contexte économique réel du client.",
      faq: [
        {
          q: "Le cabinet peut-il réviser des contrats déjà signés ?",
          a: "Oui, le cabinet analyse les contrats existants et propose des avenants ou des stratégies de renégociation si nécessaire.",
        },
      ],
    },
    en: {
      title: "Commercial Contracts",
      summary: "Drafting, negotiating and securing all types of commercial contracts.",
      intro:
        "The firm drafts and negotiates the contracts required for its clients’ activities, with a view to preventing disputes.",
      issues: [
        "Sale, distribution, agency and service agreements",
        "General terms and standard contractual documents",
        "Negotiation of sensitive clauses (liability, termination, warranties)",
        "Adapting contracts to sector-specific requirements",
      ],
      clients: ["Companies across all sectors", "Service providers", "Distributors and suppliers"],
      approach: "Clear, balanced contracts adapted to the client’s real economic context.",
      faq: [
        {
          q: "Can the firm review contracts that have already been signed?",
          a: "Yes, the firm reviews existing contracts and proposes amendments or renegotiation strategies where needed.",
        },
      ],
    },
  },
  {
    slug: "contentieux-et-arbitrage",
    keywords: ["avocat contentieux Tchad", "arbitrage commercial Tchad"],
    fr: {
      title: "Contentieux et arbitrage",
      summary: "Représentation devant les juridictions et dans les procédures d’arbitrage.",
      intro:
        "FN & PARTNERS représente ses clients devant les juridictions tchadiennes et dans les procédures d’arbitrage, avec une stratégie contentieuse adaptée à chaque dossier.",
      issues: [
        "Contentieux commercial et civil",
        "Procédures d’arbitrage institutionnel et ad hoc",
        "Exécution des décisions et sentences",
        "Modes alternatifs de résolution des différends",
      ],
      clients: ["Entreprises en litige", "Particuliers", "Institutions"],
      approach:
        "Une évaluation réaliste des chances de succès et des risques avant toute action, sans jamais promettre d’issue judiciaire.",
      faq: [
        {
          q: "Le cabinet propose-t-il des modes alternatifs de résolution des litiges ?",
          a: "Oui, la médiation et la négociation sont systématiquement envisagées lorsqu’elles servent l’intérêt du client.",
        },
      ],
    },
    en: {
      title: "Litigation & Arbitration",
      summary: "Representation before the courts and in arbitration proceedings.",
      intro:
        "FN & PARTNERS represents clients before Chadian courts and in arbitration proceedings, with a litigation strategy tailored to each case.",
      issues: [
        "Commercial and civil litigation",
        "Institutional and ad hoc arbitration proceedings",
        "Enforcement of decisions and awards",
        "Alternative dispute resolution mechanisms",
      ],
      clients: ["Companies in dispute", "Individuals", "Institutions"],
      approach:
        "A realistic assessment of the chances of success and the risks involved before any action, without ever promising a judicial outcome.",
      faq: [
        {
          q: "Does the firm offer alternative dispute resolution methods?",
          a: "Yes, mediation and negotiation are systematically considered whenever they serve the client’s interest.",
        },
      ],
    },
  },
  {
    slug: "recouvrement-de-creances",
    keywords: ["recouvrement de créances au Tchad", "avocat recouvrement Tchad"],
    fr: {
      title: "Recouvrement de créances",
      summary: "Récupération amiable et judiciaire des créances impayées.",
      intro:
        "Le cabinet met en œuvre les procédures amiables puis, si nécessaire, judiciaires prévues par le droit OHADA pour le recouvrement des créances.",
      issues: [
        "Recouvrement amiable et mises en demeure",
        "Injonction de payer et procédures simplifiées OHADA",
        "Mesures conservatoires et voies d’exécution",
        "Recouvrement transfrontalier dans l’espace régional",
      ],
      clients: ["Entreprises créancières", "Institutions financières", "Fournisseurs"],
      approach: "Une escalade progressive et maîtrisée, de la relance amiable jusqu’à l’exécution forcée si nécessaire.",
      faq: [
        {
          q: "Quelle est la première étape d’une procédure de recouvrement ?",
          a: "Une mise en demeure est généralement adressée au débiteur avant toute action judiciaire, sauf urgence particulière.",
        },
      ],
    },
    en: {
      title: "Debt Recovery",
      summary: "Amicable and judicial recovery of unpaid debts.",
      intro:
        "The firm implements amicable procedures and, where necessary, the judicial procedures provided for under OHADA law for debt recovery.",
      issues: [
        "Amicable recovery and formal notices",
        "Payment orders and OHADA simplified procedures",
        "Protective measures and enforcement proceedings",
        "Cross-border recovery within the regional area",
      ],
      clients: ["Creditor companies", "Financial institutions", "Suppliers"],
      approach: "A gradual, controlled escalation, from an amicable reminder to enforced execution where necessary.",
      faq: [
        {
          q: "What is the first step in a debt recovery procedure?",
          a: "A formal notice is generally sent to the debtor before any judicial action, unless particular urgency requires otherwise.",
        },
      ],
    },
  },
  {
    slug: "droit-bancaire-et-financier",
    keywords: ["avocat droit bancaire Tchad", "droit financier Tchad"],
    fr: {
      title: "Droit bancaire et financier",
      summary: "Conseil aux institutions financières, emprunteurs et opérateurs de financement.",
      intro:
        "Le cabinet conseille les établissements financiers et leurs clients sur les opérations bancaires et de financement, dans le respect des réglementations applicables.",
      issues: [
        "Structuration de financements et de garanties",
        "Conformité réglementaire bancaire",
        "Contentieux bancaire",
        "Sûretés et gestion des risques de crédit",
      ],
      clients: ["Banques et établissements financiers", "Emprunteurs institutionnels", "Entreprises"],
      approach: "Une compréhension fine des contraintes réglementaires propres au secteur financier régional.",
      faq: [
        {
          q: "Le cabinet conseille-t-il sur les garanties bancaires ?",
          a: "Oui, la structuration et la sécurisation des sûretés font partie des prestations régulières du cabinet.",
        },
      ],
    },
    en: {
      title: "Banking & Finance Law",
      summary: "Advising financial institutions, borrowers and financing operators.",
      intro:
        "The firm advises financial institutions and their clients on banking and financing transactions, in compliance with applicable regulations.",
      issues: [
        "Structuring of financing arrangements and guarantees",
        "Banking regulatory compliance",
        "Banking litigation",
        "Security interests and credit risk management",
      ],
      clients: ["Banks and financial institutions", "Institutional borrowers", "Companies"],
      approach: "A close understanding of the regulatory constraints specific to the regional financial sector.",
      faq: [
        {
          q: "Does the firm advise on bank guarantees?",
          a: "Yes, structuring and securing guarantees is part of the firm’s regular services.",
        },
      ],
    },
  },
  {
    slug: "droit-fiscal",
    keywords: ["avocat fiscaliste Tchad", "conseil fiscal entreprise Tchad"],
    fr: {
      title: "Droit fiscal",
      summary: "Conseil fiscal et défense des contribuables face à l’administration.",
      intro:
        "FN & PARTNERS conseille les entreprises et les particuliers sur leurs obligations fiscales et les assiste en cas de contrôle ou de contentieux avec l’administration fiscale.",
      issues: [
        "Analyse fiscale des contrats et des conventions",
        "Rédaction d’actes en matière fiscale",
        "Analyse et commentaires des textes fiscaux",
        "Assistance lors des contrôles fiscaux et devant l’administration fiscale",
        "Assistance et défense devant les organes à caractère judiciaire",
      ],
      clients: ["Entreprises", "Investisseurs", "Particuliers"],
      approach: "Un conseil fiscal toujours articulé avec la réalité économique et les objectifs à long terme du client.",
      faq: [
        {
          q: "Le cabinet assiste-t-il en cas de contrôle fiscal ?",
          a: "Oui, le cabinet accompagne ses clients avant, pendant et après les procédures de contrôle fiscal.",
        },
      ],
    },
    en: {
      title: "Tax Law",
      summary: "Tax advice and defence of taxpayers before the authorities.",
      intro:
        "FN & PARTNERS advises companies and individuals on their tax obligations and assists them in the event of a tax audit or dispute with the tax authorities.",
      issues: [
        "Tax analysis of contracts and agreements",
        "Drafting of tax-related deeds",
        "Analysis and commentary on tax legislation",
        "Assistance during tax audits and before the tax administration",
        "Assistance and defence before judicial bodies",
      ],
      clients: ["Companies", "Investors", "Individuals"],
      approach: "Tax advice consistently aligned with the client’s economic reality and long-term objectives.",
      faq: [
        {
          q: "Does the firm assist during tax audits?",
          a: "Yes, the firm supports clients before, during and after tax audit procedures.",
        },
      ],
    },
  },
  {
    slug: "droit-du-travail-et-securite-sociale",
    keywords: ["avocat droit du travail Tchad", "droit social Tchad"],
    fr: {
      title: "Droit du travail et sécurité sociale",
      summary: "Conseil et représentation en matière de relations de travail et de protection sociale.",
      intro:
        "Le cabinet accompagne employeurs et salariés sur l’ensemble des questions liées au contrat de travail, aux relations collectives et à la sécurité sociale.",
      issues: [
        "Rédaction de contrats de travail, de règlements intérieurs, de conventions d’entreprise et de codes éthiques",
        "Missions de recrutement et portage salarial",
        "Assistance lors de la rupture contractuelle : mesures disciplinaires, convocation à l’entretien, licenciement pour motif économique",
        "Régularisation des liens contractuels avec les institutions administratives (CNPS, ONAPE, etc.)",
        "Procédures amiables et contentieuses devant l’Inspection du Travail, la Sécurité Sociale et les juridictions",
      ],
      clients: ["Employeurs", "Salariés", "Organisations professionnelles"],
      approach: "Une expertise très intégrée du droit social, privilégiant une approche concrète et souvent en amont des sujets sociaux, en interaction constante avec l’équipe dirigeante des clients.",
      faq: [
        {
          q: "Le cabinet intervient-il en cas de licenciement contesté ?",
          a: "Oui, le cabinet conseille et représente aussi bien les employeurs que les salariés dans ce type de contentieux.",
        },
      ],
    },
    en: {
      title: "Employment & Social Security Law",
      summary: "Advice and representation on employment relations and social protection.",
      intro:
        "The firm supports employers and employees on all matters relating to employment contracts, collective relations and social security.",
      issues: [
        "Drafting employment contracts, internal regulations, company agreements and codes of ethics",
        "Recruitment assignments and payroll outsourcing (portage salarial)",
        "Assistance with contract termination: disciplinary measures, hearing notices, dismissal for economic reasons",
        "Regularising contractual relationships with administrative bodies (CNPS, ONAPE, etc.)",
        "Amicable and contentious proceedings before the Labour Inspectorate, Social Security and the courts",
      ],
      clients: ["Employers", "Employees", "Professional organisations"],
      approach: "A deeply integrated approach to employment law, favouring practical solutions and early engagement on social matters, in constant interaction with clients’ management teams.",
      faq: [
        {
          q: "Does the firm handle disputed dismissals?",
          a: "Yes, the firm advises and represents both employers and employees in this type of dispute.",
        },
      ],
    },
  },
  {
    slug: "droit-immobilier-foncier-et-construction",
    keywords: ["avocat foncier Tchad", "droit immobilier Tchad"],
    fr: {
      title: "Droit immobilier, foncier et construction",
      summary: "Sécurisation des opérations immobilières, foncières et de construction.",
      intro:
        "FN & PARTNERS conseille particuliers, entreprises et institutions dans leurs opérations immobilières, foncières et de construction.",
      issues: [
        "Acquisition, cession et sécurisation foncière",
        "Baux commerciaux et d’habitation",
        "Contrats de construction et de promotion immobilière",
        "Contentieux foncier et immobilier",
      ],
      clients: ["Particuliers", "Promoteurs et investisseurs", "Entreprises"],
      approach: "Une vigilance particulière portée à la vérification des titres et à la sécurisation foncière en amont.",
      faq: [
        {
          q: "Le cabinet accompagne-t-il l’achat de terrain au Tchad ?",
          a: "Oui, le cabinet vérifie la situation juridique du bien et sécurise l’ensemble du processus d’acquisition.",
        },
      ],
    },
    en: {
      title: "Real Estate, Land & Construction Law",
      summary: "Securing real estate, land and construction transactions.",
      intro:
        "FN & PARTNERS advises individuals, companies and institutions on their real estate, land and construction transactions.",
      issues: [
        "Acquisition, transfer and land title security",
        "Commercial and residential leases",
        "Construction and property development contracts",
        "Land and real estate litigation",
      ],
      clients: ["Individuals", "Developers and investors", "Companies"],
      approach: "Particular care in verifying title deeds and securing land rights from the outset.",
      faq: [
        {
          q: "Does the firm assist with land purchases in Chad?",
          a: "Yes, the firm verifies the legal status of the property and secures the entire acquisition process.",
        },
      ],
    },
  },
  {
    slug: "droit-minier-petrolier-et-energetique",
    keywords: ["avocat droit minier Tchad", "droit pétrolier Tchad"],
    fr: {
      title: "Droit minier, pétrolier et énergétique",
      summary: "Conseil juridique dans les secteurs extractifs et énergétiques.",
      intro:
        "Le cabinet conseille les acteurs des secteurs minier, pétrolier et énergétique sur la structuration de leurs projets et le respect du cadre réglementaire applicable.",
      issues: [
        "Régime des titres miniers et pétroliers",
        "Contrats d’exploration et d’exploitation",
        "Conformité réglementaire et environnementale",
        "Relations avec les autorités sectorielles",
      ],
      clients: ["Sociétés minières et pétrolières", "Investisseurs", "Institutions publiques"],
      approach: "Un accompagnement attentif aux exigences réglementaires et aux enjeux locaux propres à ces secteurs stratégiques.",
      faq: [
        {
          q: "Le cabinet intervient-il sur les contrats d’exploration ?",
          a: "Oui, la négociation et la revue des contrats d’exploration et d’exploitation font partie des domaines suivis par le cabinet.",
        },
      ],
    },
    en: {
      title: "Mining, Oil & Energy Law",
      summary: "Legal advice in the extractive and energy sectors.",
      intro:
        "The firm advises players in the mining, oil and energy sectors on structuring their projects and complying with the applicable regulatory framework.",
      issues: [
        "Mining and petroleum title regimes",
        "Exploration and production agreements",
        "Regulatory and environmental compliance",
        "Relations with sector authorities",
      ],
      clients: ["Mining and oil companies", "Investors", "Public institutions"],
      approach: "Careful attention to the regulatory requirements and local considerations specific to these strategic sectors.",
      faq: [
        {
          q: "Does the firm work on exploration agreements?",
          a: "Yes, negotiating and reviewing exploration and production agreements is one of the firm’s areas of practice.",
        },
      ],
    },
  },
  {
    slug: "telecommunications-et-droit-du-numerique",
    keywords: ["avocat droit du numérique Tchad", "droit des télécommunications Tchad"],
    fr: {
      title: "Télécommunications et droit du numérique",
      summary: "Accompagnement juridique des acteurs des télécommunications et du numérique.",
      intro:
        "FN & PARTNERS conseille les opérateurs et entreprises du secteur numérique sur les aspects réglementaires, contractuels et technologiques de leurs activités.",
      issues: [
        "Régime des autorisations et licences télécoms",
        "Contrats technologiques et de services numériques",
        "Régulation des communications électroniques",
        "Enjeux juridiques liés à l’innovation numérique",
      ],
      clients: ["Opérateurs télécoms", "Entreprises technologiques", "Institutions publiques"],
      approach: "Une veille active sur l’évolution rapide du cadre réglementaire numérique régional.",
      faq: [
        {
          q: "Le cabinet conseille-t-il les start-ups technologiques ?",
          a: "Oui, le cabinet accompagne les entreprises technologiques dans la sécurisation juridique de leur activité.",
        },
      ],
    },
    en: {
      title: "Telecommunications & Digital Law",
      summary: "Legal support for telecommunications and digital sector players.",
      intro:
        "FN & PARTNERS advises operators and digital-sector companies on the regulatory, contractual and technological aspects of their activities.",
      issues: [
        "Telecom authorisation and licensing regime",
        "Technology and digital services contracts",
        "Regulation of electronic communications",
        "Legal issues related to digital innovation",
      ],
      clients: ["Telecom operators", "Technology companies", "Public institutions"],
      approach: "Active monitoring of the fast-evolving regional digital regulatory framework.",
      faq: [
        {
          q: "Does the firm advise technology start-ups?",
          a: "Yes, the firm supports technology companies in securing the legal foundations of their business.",
        },
      ],
    },
  },
  {
    slug: "protection-des-donnees-et-cybersecurite",
    keywords: ["protection des données Tchad", "droit cybersécurité Tchad"],
    fr: {
      title: "Protection des données et cybersécurité",
      summary: "Mise en conformité et gestion des risques liés aux données et à la cybersécurité.",
      intro:
        "Le cabinet accompagne les organisations dans la protection des données personnelles et la gestion juridique des risques liés à la cybersécurité.",
      issues: [
        "Conformité aux exigences de protection des données",
        "Politiques de confidentialité et gouvernance des données",
        "Gestion des incidents de sécurité",
        "Contrats liés au traitement de données",
      ],
      clients: ["Entreprises", "Institutions publiques et privées", "Organisations traitant des données sensibles"],
      approach: "Une approche à la fois juridique et opérationnelle, en lien avec les équipes techniques du client.",
      faq: [
        {
          q: "Le cabinet accompagne-t-il en cas d’incident de sécurité ?",
          a: "Oui, le cabinet conseille sur les obligations à respecter et les mesures à prendre en cas d’incident affectant des données.",
        },
      ],
    },
    en: {
      title: "Data Protection & Cybersecurity",
      summary: "Compliance and risk management related to data and cybersecurity.",
      intro:
        "The firm supports organisations in protecting personal data and managing the legal risks associated with cybersecurity.",
      issues: [
        "Compliance with data protection requirements",
        "Privacy policies and data governance",
        "Security incident management",
        "Data-processing related contracts",
      ],
      clients: ["Companies", "Public and private institutions", "Organisations handling sensitive data"],
      approach: "A combined legal and operational approach, working alongside the client’s technical teams.",
      faq: [
        {
          q: "Does the firm assist in the event of a security incident?",
          a: "Yes, the firm advises on the obligations to meet and the measures to take in the event of an incident affecting data.",
        },
      ],
    },
  },
  {
    slug: "propriete-intellectuelle",
    keywords: ["avocat propriété intellectuelle Tchad", "protection marque Tchad"],
    fr: {
      title: "Propriété intellectuelle",
      summary: "Protection et valorisation des actifs de propriété intellectuelle.",
      intro:
        "FN & PARTNERS conseille ses clients sur la protection, la défense et la valorisation de leurs marques, créations et innovations.",
      issues: [
        "Dépôt et protection de marques",
        "Contrats de licence et de cession de droits",
        "Contentieux de la contrefaçon",
        "Valorisation des actifs immatériels",
      ],
      clients: ["Entreprises", "Créateurs et innovateurs", "Investisseurs"],
      approach: "Une stratégie de protection adaptée à la valeur économique réelle des actifs immatériels du client.",
      faq: [
        {
          q: "Le cabinet accompagne-t-il le dépôt de marques à l’international ?",
          a: "Oui, le cabinet oriente ses clients dans les démarches de protection de marque au niveau national et régional.",
        },
      ],
    },
    en: {
      title: "Intellectual Property",
      summary: "Protecting and enhancing the value of intellectual property assets.",
      intro:
        "FN & PARTNERS advises clients on protecting, defending and enhancing the value of their trademarks, creations and innovations.",
      issues: [
        "Trademark filing and protection",
        "Licensing and assignment agreements",
        "Counterfeiting litigation",
        "Valuation of intangible assets",
      ],
      clients: ["Companies", "Creators and innovators", "Investors"],
      approach: "A protection strategy tailored to the real economic value of the client’s intangible assets.",
      faq: [
        {
          q: "Does the firm assist with international trademark filings?",
          a: "Yes, the firm guides clients through trademark protection procedures at national and regional level.",
        },
      ],
    },
  },
  {
    slug: "droit-administratif-et-marches-publics",
    keywords: ["avocat marchés publics Tchad", "droit administratif Tchad"],
    fr: {
      title: "Droit administratif et marchés publics",
      summary: "Conseil et contentieux dans les relations avec l’administration et les marchés publics.",
      intro:
        "Le cabinet conseille les entreprises et institutions dans leurs relations avec l’administration, notamment en matière de marchés publics.",
      issues: [
        "Procédures de passation des marchés publics",
        "Contentieux administratif",
        "Contrats administratifs et concessions",
        "Relations avec les autorités publiques",
      ],
      clients: ["Entreprises soumissionnaires", "Institutions publiques", "Partenaires privés de l’État"],
      approach: "Une connaissance fine des procédures administratives pour sécuriser chaque étape des relations avec l’administration.",
      faq: [
        {
          q: "Le cabinet accompagne-t-il les entreprises dans les appels d’offres publics ?",
          a: "Oui, le cabinet conseille sur la conformité des dossiers de soumission et la gestion des éventuels recours.",
        },
      ],
    },
    en: {
      title: "Administrative & Public Procurement Law",
      summary: "Advice and litigation in dealings with public authorities and public procurement.",
      intro:
        "The firm advises companies and institutions in their dealings with public authorities, in particular regarding public procurement.",
      issues: [
        "Public procurement procedures",
        "Administrative litigation",
        "Administrative contracts and concessions",
        "Relations with public authorities",
      ],
      clients: ["Bidding companies", "Public institutions", "Private partners of the State"],
      approach: "A thorough command of administrative procedures to secure every stage of dealings with public authorities.",
      faq: [
        {
          q: "Does the firm assist companies with public tenders?",
          a: "Yes, the firm advises on the compliance of bid submissions and the handling of any related appeals.",
        },
      ],
    },
  },
  {
    slug: "droit-penal-des-affaires",
    keywords: ["avocat droit pénal des affaires Tchad", "avocat pénal Tchad"],
    fr: {
      title: "Droit pénal des affaires",
      summary: "Défense et conseil des entreprises et de leurs dirigeants face au risque pénal.",
      intro:
        "FN & PARTNERS assiste les entreprises et leurs dirigeants confrontés à des questions de droit pénal des affaires, en conseil comme en défense.",
      issues: [
        "Prévention du risque pénal dans l’activité économique et mise en place de mécanismes de conformité",
        "Assistance lors des enquêtes, auditions et procédures pénales",
        "Défense des dirigeants et des personnes morales, y compris des ONG",
        "Dépôt de plaintes et constitution de partie civile pour la réparation des préjudices subis",
        "Infractions économiques et financières",
      ],
      clients: ["Entreprises", "Dirigeants", "Cadres et responsables opérationnels", "ONG et leurs dirigeants ou employés"],
      approach: "Une défense rigoureuse, fondée sur une analyse approfondie du dossier et des enjeux économiques associés.",
      faq: [
        {
          q: "Le cabinet intervient-il dès la phase d’enquête ?",
          a: "Oui, une intervention précoce est recommandée dès qu’un risque pénal est identifié.",
        },
      ],
    },
    en: {
      title: "Business Criminal Law",
      summary: "Defending and advising companies and executives facing criminal law risk.",
      intro:
        "FN & PARTNERS assists companies and executives confronted with business criminal law issues, both in advisory and defence matters.",
      issues: [
        "Preventing criminal law risk in economic activity and implementing compliance mechanisms",
        "Assistance during investigations, hearings and criminal proceedings",
        "Defence of executives and legal entities, including NGOs",
        "Filing complaints and bringing civil party actions to obtain redress for harm suffered",
        "Economic and financial offences",
      ],
      clients: ["Companies", "Executives", "Managers and operational staff", "NGOs and their executives or staff"],
      approach: "A rigorous defence built on a thorough analysis of the file and the related economic stakes.",
      faq: [
        {
          q: "Does the firm get involved as early as the investigation stage?",
          a: "Yes, early involvement is recommended as soon as a criminal law risk is identified.",
        },
      ],
    },
  },
  {
    slug: "droits-humains-et-libertes-fondamentales",
    keywords: ["avocat droits humains Tchad", "libertés fondamentales Tchad"],
    fr: {
      title: "Droits humains et libertés fondamentales",
      summary: "Défense des droits humains et des libertés fondamentales devant les juridictions compétentes.",
      intro:
        "Fort de l’expérience de son fondateur devant la Cour africaine des droits de l’homme et des peuples, le cabinet intervient dans la défense des droits humains et des libertés fondamentales.",
      issues: [
        "Défense des victimes de violations de droits fondamentaux",
        "Saisine des juridictions nationales et internationales compétentes",
        "Conseil aux organisations de la société civile",
        "Suivi des procédures devant les instances régionales",
      ],
      clients: ["Particuliers", "Organisations de la société civile", "ONG"],
      approach: "Un engagement rigoureux, respectueux du cadre procédural propre à chaque juridiction saisie.",
      faq: [
        {
          q: "Le cabinet accompagne-t-il les ONG sur ces questions ?",
          a: "Oui, le cabinet conseille les organisations de la société civile sur les procédures de défense des droits humains.",
        },
      ],
    },
    en: {
      title: "Human Rights & Fundamental Freedoms",
      summary: "Defending human rights and fundamental freedoms before the competent courts.",
      intro:
        "Drawing on its founder’s experience before the African Court on Human and Peoples’ Rights, the firm acts in the defence of human rights and fundamental freedoms.",
      issues: [
        "Defending victims of fundamental rights violations",
        "Bringing matters before the competent national and international courts",
        "Advising civil society organisations",
        "Following proceedings before regional bodies",
      ],
      clients: ["Individuals", "Civil society organisations", "NGOs"],
      approach: "Rigorous commitment, respectful of the procedural framework specific to each court seised.",
      faq: [
        {
          q: "Does the firm support NGOs on these matters?",
          a: "Yes, the firm advises civil society organisations on human rights defence procedures.",
        },
      ],
    },
  },
  {
    slug: "cour-africaine-droits-homme-peuples",
    keywords: ["avocat Cour africaine des droits de l'homme", "saisine Cour africaine Arusha"],
    fr: {
      title: "Saisine et procédures devant la Cour africaine des droits de l’homme et des peuples",
      summary: "Accompagnement spécialisé dans les procédures devant la Cour africaine, à Arusha.",
      intro:
        "Me Frédéric NANADJINGUE est avocat auprès de la Cour africaine des droits de l’homme et des peuples. Le cabinet accompagne les requérants dans la préparation et le suivi de leurs procédures devant cette juridiction.",
      issues: [
        "Conditions de recevabilité d’une requête devant la Cour africaine",
        "Préparation et rédaction des requêtes",
        "Suivi de la procédure jusqu’à la décision",
        "Articulation avec les recours internes préalables",
      ],
      clients: ["Particuliers", "Organisations de la société civile", "Victimes de violations de droits fondamentaux"],
      approach: "Une maîtrise directe des règles de procédure de la Cour africaine, acquise par une pratique effective devant cette juridiction.",
      faq: [
        {
          q: "Qui peut saisir la Cour africaine des droits de l’homme et des peuples ?",
          a: "Les conditions de saisine dépendent du statut du requérant et de l’État concerné ; le cabinet évalue la recevabilité de chaque situation avant d’engager une procédure.",
        },
      ],
    },
    en: {
      title: "Proceedings Before the African Court on Human and Peoples’ Rights",
      summary: "Specialised support for proceedings before the African Court, in Arusha.",
      intro:
        "Me Frédéric NANADJINGUE is an attorney before the African Court on Human and Peoples’ Rights. The firm supports applicants in preparing and following their proceedings before this court.",
      issues: [
        "Admissibility requirements for an application before the African Court",
        "Preparation and drafting of applications",
        "Following the procedure through to the decision",
        "Coordination with prior domestic remedies",
      ],
      clients: ["Individuals", "Civil society organisations", "Victims of fundamental rights violations"],
      approach: "Direct command of the African Court’s procedural rules, gained through active practice before this court.",
      faq: [
        {
          q: "Who may bring a case before the African Court on Human and Peoples’ Rights?",
          a: "Standing depends on the applicant’s status and the State concerned; the firm assesses the admissibility of each situation before initiating proceedings.",
        },
      ],
    },
  },
  {
    slug: "mediation-negociation-reglement-amiable-differends",
    keywords: ["médiation Tchad", "règlement amiable des litiges Tchad"],
    fr: {
      title: "Médiation, négociation et règlement amiable des différends",
      summary: "Recherche de solutions négociées, plus rapides et souvent plus adaptées aux relations d’affaires.",
      intro:
        "Le cabinet privilégie, chaque fois que l’intérêt du client le permet, les modes amiables de résolution des différends, en complément ou en alternative au contentieux.",
      issues: [
        "Médiation conventionnelle",
        "Négociation de sorties de crise",
        "Transactions et accords amiables",
        "Préservation des relations d’affaires",
      ],
      clients: ["Entreprises", "Particuliers", "Partenaires commerciaux en désaccord"],
      approach: "Une posture de négociateur exigeant, qui ne sacrifie jamais les intérêts du client à la seule recherche d’un accord rapide.",
      faq: [
        {
          q: "La médiation remplace-t-elle une procédure judiciaire ?",
          a: "La médiation est un mode alternatif, non obligatoire, qui peut être engagé avant, pendant ou en complément d’une procédure judiciaire selon les cas.",
        },
      ],
    },
    en: {
      title: "Mediation, Negotiation & Amicable Dispute Resolution",
      summary: "Seeking negotiated solutions that are faster and often better suited to business relationships.",
      intro:
        "Whenever it serves the client’s interest, the firm favours amicable dispute resolution methods, as a complement or alternative to litigation.",
      issues: [
        "Contractual mediation",
        "Negotiating a way out of a crisis",
        "Settlements and amicable agreements",
        "Preserving business relationships",
      ],
      clients: ["Companies", "Individuals", "Business partners in disagreement"],
      approach: "A demanding negotiating stance, which never sacrifices the client’s interests merely to reach a quick agreement.",
      faq: [
        {
          q: "Does mediation replace court proceedings?",
          a: "Mediation is a non-mandatory alternative method, which can be pursued before, during or alongside court proceedings depending on the case.",
        },
      ],
    },
  },
];

export function getExpertiseBySlug(slug: string) {
  return expertiseDomains.find((d) => d.slug === slug);
}
