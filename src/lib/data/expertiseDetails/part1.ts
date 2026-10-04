import type { ExpertiseDetailEntry } from "./types";

export const part1: Record<string, ExpertiseDetailEntry> = {
  "droit-des-affaires": {
    related: ["droit-des-societes-et-gouvernance", "contrats-commerciaux", "droit-ohada", "droit-fiscal"],
    fr: {
      overview: [
        "Au Tchad, la vie des affaires est régie à la fois par le droit uniforme de l’OHADA, par la réglementation communautaire de la CEMAC et par les textes nationaux : fiscalité, droit du travail, réglementation des changes, régimes sectoriels. Pour un dirigeant, la difficulté n’est pas tant de connaître chaque texte que de savoir lequel s’applique à sa situation et dans quel ordre agir.",
        "FN & PARTNERS intervient comme conseil de proximité de l’entreprise : le cabinet lit les projets avec un regard juridique avant qu’ils ne soient engagés, sécurise les décisions importantes et reste disponible pour les questions du quotidien. L’objectif est d’éviter que le droit ne devienne un sujet au moment où le litige est déjà né.",
      ],
      services: [
        {
          title: "Conseil juridique permanent",
          text: "Un interlocuteur attitré répond aux questions courantes de la direction : contrats, relations avec les partenaires, obligations déclaratives, correspondances sensibles.",
        },
        {
          title: "Sécurisation des opérations",
          text: "Analyse préalable des projets (partenariat, cession, prise de participation, nouveau marché), identification des risques et rédaction de la documentation contractuelle.",
        },
        {
          title: "Vie sociale et gouvernance",
          text: "Préparation et tenue des assemblées et conseils, mise à jour des registres, formalités au Registre du Commerce et du Crédit Mobilier (RCCM).",
        },
        {
          title: "Prévention et gestion des différends",
          text: "Mise en demeure, négociation, médiation et, lorsque c’est nécessaire, représentation devant les juridictions compétentes.",
        },
      ],
      framework: [
        "Acte uniforme OHADA portant sur le droit commercial général (AUDCG)",
        "Acte uniforme OHADA relatif au droit des sociétés commerciales et du GIE (AUSCGIE)",
        "Réglementation communautaire de la CEMAC, notamment en matière de changes et de concurrence",
        "Code général des impôts et Charte des investissements du Tchad",
        "Registre du Commerce et du Crédit Mobilier (RCCM)",
      ],
      faq: [
        {
          q: "À quel moment faire appel à un avocat d’affaires ?",
          a: "Le plus tôt possible : avant de signer un contrat important, d’accueillir un nouvel associé, de répondre à une mise en demeure ou d’engager une opération inhabituelle. Une analyse préalable coûte généralement beaucoup moins qu’un contentieux.",
        },
        {
          q: "Le cabinet peut-il travailler avec notre direction juridique ou notre comptable ?",
          a: "Oui. Le cabinet intervient en complément des équipes internes et des conseils habituels de l’entreprise (expert-comptable, notaire, conseils étrangers du groupe), sur les sujets qui lui sont confiés.",
        },
        {
          q: "Comment se déroule un premier échange ?",
          a: "Un rendez-vous permet d’exposer la situation et de remettre les documents utiles. Le cabinet indique ensuite les options envisageables, les étapes et les conditions de son intervention, avant tout engagement.",
        },
      ],
    },
    en: {
      overview: [
        "In Chad, business life is governed at once by OHADA uniform law, by CEMAC community regulations and by national legislation: tax, employment law, exchange control and sector-specific regimes. For an executive, the difficulty is less knowing every text than knowing which one applies to the situation at hand and in what order to act.",
        "FN & PARTNERS acts as the company’s day-to-day counsel: the firm reviews projects from a legal standpoint before they are launched, secures major decisions and remains available for everyday questions. The aim is to prevent the law from becoming a topic only once a dispute has already arisen.",
      ],
      services: [
        {
          title: "Ongoing legal counsel",
          text: "A dedicated contact answers management’s routine questions: contracts, relations with partners, filing obligations, sensitive correspondence.",
        },
        {
          title: "Securing transactions",
          text: "Upfront review of projects (partnership, sale, equity investment, new market), risk identification and drafting of the contractual documentation.",
        },
        {
          title: "Corporate housekeeping and governance",
          text: "Preparing and holding shareholder and board meetings, keeping registers up to date, filings with the Trade and Personal Property Credit Register (RCCM).",
        },
        {
          title: "Preventing and managing disputes",
          text: "Formal notices, negotiation, mediation and, where necessary, representation before the competent courts.",
        },
      ],
      framework: [
        "OHADA Uniform Act on General Commercial Law (AUDCG)",
        "OHADA Uniform Act on Commercial Companies and Economic Interest Groups (AUSCGIE)",
        "CEMAC community regulations, in particular on exchange control and competition",
        "Chad’s General Tax Code and Investment Charter",
        "Trade and Personal Property Credit Register (RCCM)",
      ],
      faq: [
        {
          q: "When should a company call on a business lawyer?",
          a: "As early as possible: before signing a major contract, bringing in a new partner, answering a formal notice or entering into an unusual transaction. Upfront analysis generally costs far less than litigation.",
        },
        {
          q: "Can the firm work alongside our in-house legal team or accountant?",
          a: "Yes. The firm works alongside in-house teams and the company’s usual advisers (accountant, notary, the group’s foreign counsel) on the matters entrusted to it.",
        },
        {
          q: "What does a first meeting involve?",
          a: "An appointment is used to set out the situation and hand over the relevant documents. The firm then outlines the possible options, the steps involved and the terms of its engagement, before any commitment is made.",
        },
      ],
    },
  },

  "droit-civil-et-accompagnement-des-ong": {
    related: ["droits-humains-et-libertes-fondamentales", "droit-du-travail-et-securite-sociale", "droit-fiscal", "protection-des-donnees-et-cybersecurite"],
    fr: {
      overview: [
        "Les organisations non gouvernementales, associations et fondations actives au Tchad évoluent dans un cadre exigeant : reconnaissance et enregistrement auprès des autorités, accords conclus avec l’État, obligations sociales et fiscales, règles imposées par les bailleurs de fonds. Une irrégularité de gouvernance ou de conformité peut fragiliser un programme entier.",
        "Le cabinet accompagne ces organisations sur la durée, depuis la rédaction des statuts jusqu’à la gestion des situations sensibles : contentieux avec un salarié ou un prestataire, contrôle administratif, protection des biens et des données des bénéficiaires. Il intervient également en droit civil pour les particuliers : contrats, responsabilité, biens, famille et successions.",
      ],
      services: [
        {
          title: "Constitution et reconnaissance",
          text: "Rédaction des statuts et du règlement intérieur, constitution du dossier de reconnaissance, suivi des démarches auprès des administrations compétentes.",
        },
        {
          title: "Gouvernance et conformité",
          text: "Organisation des assemblées, délégations de pouvoirs, procédures internes, mise en conformité avec les exigences des autorités et des bailleurs.",
        },
        {
          title: "Contrats et partenariats",
          text: "Conventions de partenariat, contrats de subvention, baux, contrats de prestation et de travail adaptés au statut de l’organisation.",
        },
        {
          title: "Défense et représentation",
          text: "Assistance en cas de différend avec un salarié, un fournisseur ou une administration, et représentation devant les juridictions civiles.",
        },
      ],
      framework: [
        "Législation tchadienne relative aux associations et aux organisations non gouvernementales",
        "Acte uniforme OHADA relatif au système comptable des entités à but non lucratif (SYCEBNL)",
        "Code du travail tchadien et régime de la Caisse Nationale de Prévoyance Sociale (CNPS)",
        "Code civil applicable au Tchad et règles de la responsabilité civile",
        "Loi tchadienne sur la protection des données à caractère personnel",
      ],
      faq: [
        {
          q: "Une ONG internationale doit-elle accomplir des formalités particulières pour exercer au Tchad ?",
          a: "Oui. L’exercice d’activités au Tchad suppose une reconnaissance par les autorités et, en pratique, la conclusion d’un accord encadrant l’intervention de l’organisation. Le cabinet vérifie les formalités applicables à chaque situation et accompagne leur accomplissement.",
        },
        {
          q: "Les ONG sont-elles soumises au droit du travail tchadien ?",
          a: "Les salariés recrutés localement relèvent du Code du travail tchadien et doivent être déclarés aux organismes sociaux. Le statut du personnel expatrié dépend de son contrat et des accords applicables ; il se vérifie au cas par cas.",
        },
        {
          q: "Le cabinet assiste-t-il aussi les particuliers en matière civile ?",
          a: "Oui. Le cabinet conseille et représente les particuliers dans leurs litiges civils : contrats, responsabilité, biens, questions familiales et successorales.",
        },
      ],
    },
    en: {
      overview: [
        "Non-governmental organisations, associations and foundations working in Chad operate within a demanding framework: recognition and registration with the authorities, agreements entered into with the State, social security and tax obligations, and donor requirements. A governance or compliance failing can weaken an entire programme.",
        "The firm supports these organisations over the long term, from drafting their articles to handling sensitive situations: a dispute with an employee or service provider, an administrative inspection, protection of assets and of beneficiaries’ data. It also acts in civil law matters for individuals: contracts, liability, property, family and inheritance.",
      ],
      services: [
        {
          title: "Formation and recognition",
          text: "Drafting articles of association and internal rules, preparing the recognition file and following up with the competent authorities.",
        },
        {
          title: "Governance and compliance",
          text: "Organising general meetings, delegations of authority, internal procedures and alignment with the requirements of authorities and donors.",
        },
        {
          title: "Contracts and partnerships",
          text: "Partnership agreements, grant agreements, leases, service and employment contracts suited to the organisation’s status.",
        },
        {
          title: "Defence and representation",
          text: "Assistance in disputes with an employee, a supplier or a public authority, and representation before the civil courts.",
        },
      ],
      framework: [
        "Chadian legislation on associations and non-governmental organisations",
        "OHADA Uniform Act on the accounting system for non-profit entities (SYCEBNL)",
        "Chadian Labour Code and the National Social Insurance Fund (CNPS) scheme",
        "Civil Code applicable in Chad and the rules of civil liability",
        "Chadian law on the protection of personal data",
      ],
      faq: [
        {
          q: "Does an international NGO need to complete specific formalities to operate in Chad?",
          a: "Yes. Operating in Chad requires recognition by the authorities and, in practice, an agreement framing the organisation’s work. The firm checks which formalities apply to each situation and assists in completing them.",
        },
        {
          q: "Are NGOs subject to Chadian employment law?",
          a: "Locally recruited employees are covered by the Chadian Labour Code and must be registered with the social security bodies. The status of expatriate staff depends on their contract and on the applicable agreements, and is assessed case by case.",
        },
        {
          q: "Does the firm also assist individuals in civil matters?",
          a: "Yes. The firm advises and represents individuals in civil disputes: contracts, liability, property, family and inheritance matters.",
        },
      ],
    },
  },

  "droit-ohada": {
    related: ["droit-des-societes-et-gouvernance", "recouvrement-de-creances", "contentieux-et-arbitrage", "contrats-commerciaux"],
    fr: {
      overview: [
        "Le Tchad est l’un des dix-sept États membres de l’Organisation pour l’Harmonisation en Afrique du Droit des Affaires. Les Actes uniformes adoptés par l’OHADA y sont directement applicables et l’emportent sur les dispositions nationales contraires : ils régissent notamment le droit commercial général, les sociétés, les sûretés, le recouvrement, les procédures collectives, l’arbitrage, la médiation et la comptabilité.",
        "Cette harmonisation offre aux entreprises un cadre commun d’un pays à l’autre, mais elle suppose de bien articuler le droit uniforme avec les textes nationaux, qui continuent de régir la fiscalité, le droit du travail, la procédure et les sanctions pénales. FN & PARTNERS accompagne ses clients dans cette articulation, en conseil comme en contentieux, jusqu’au recours en cassation devant la Cour Commune de Justice et d’Arbitrage (CCJA), à Abidjan.",
      ],
      services: [
        {
          title: "Consultations et avis juridiques",
          text: "Analyse d’une question au regard des Actes uniformes et de la jurisprudence de la CCJA, avec une recommandation opérationnelle.",
        },
        {
          title: "Mise en conformité",
          text: "Revue des statuts, contrats, garanties et pratiques de l’entreprise pour les aligner sur le droit uniforme en vigueur, y compris après une révision d’Acte uniforme.",
        },
        {
          title: "Sûretés et garanties",
          text: "Choix, rédaction et inscription des sûretés (cautionnement, garantie autonome, gage, nantissement, hypothèque) et suivi de leur réalisation.",
        },
        {
          title: "Contentieux OHADA",
          text: "Représentation devant les juridictions nationales et accompagnement des recours devant la CCJA, ainsi que des procédures d’arbitrage et de médiation.",
        },
      ],
      framework: [
        "Traité relatif à l’harmonisation du droit des affaires en Afrique (Port-Louis, 1993, révisé à Québec en 2008)",
        "Actes uniformes : droit commercial général, sociétés commerciales et GIE, sûretés, procédures collectives, arbitrage, médiation, droit comptable",
        "Acte uniforme sur les procédures simplifiées de recouvrement et les voies d’exécution, révisé en 2023",
        "Cour Commune de Justice et d’Arbitrage (CCJA) et son règlement d’arbitrage",
        "Registre du Commerce et du Crédit Mobilier (RCCM)",
      ],
      faq: [
        {
          q: "Le droit OHADA s’applique-t-il automatiquement au Tchad ?",
          a: "Oui. Les Actes uniformes sont directement applicables et obligatoires dans les États parties, dont le Tchad, sans texte national de transposition. Les dispositions nationales contraires sont écartées.",
        },
        {
          q: "Quel est le rôle de la CCJA ?",
          a: "La CCJA est la juridiction de cassation pour les litiges relevant des Actes uniformes : ses décisions s’imposent dans tous les États membres. Elle administre aussi un centre d’arbitrage et donne des avis sur l’interprétation du droit uniforme.",
        },
        {
          q: "Une décision rendue dans un autre État OHADA peut-elle être exécutée au Tchad ?",
          a: "Les arrêts de la CCJA reçoivent la formule exécutoire dans chaque État partie. Les décisions des juridictions nationales étrangères et les sentences arbitrales doivent en revanche obtenir l’exequatur selon les règles applicables. Le cabinet évalue la voie adaptée à chaque titre.",
        },
      ],
    },
    en: {
      overview: [
        "Chad is one of the seventeen member states of the Organisation for the Harmonisation of Business Law in Africa. The Uniform Acts adopted by OHADA apply directly there and prevail over conflicting national provisions: they govern general commercial law, companies, security interests, debt recovery, insolvency, arbitration, mediation and accounting, among other fields.",
        "This harmonisation gives businesses a common framework from one country to the next, but it requires uniform law to be properly combined with national legislation, which continues to govern tax, employment law, procedure and criminal penalties. FN & PARTNERS assists its clients with this combination, in advisory work and in litigation, up to cassation appeals before the Common Court of Justice and Arbitration (CCJA) in Abidjan.",
      ],
      services: [
        {
          title: "Legal opinions",
          text: "Analysis of an issue in light of the Uniform Acts and CCJA case law, with a practical recommendation.",
        },
        {
          title: "Compliance reviews",
          text: "Review of the company’s articles, contracts, guarantees and practices to align them with the uniform law in force, including after a Uniform Act has been revised.",
        },
        {
          title: "Security interests and guarantees",
          text: "Selection, drafting and registration of security (suretyship, independent guarantee, pledge, mortgage) and follow-up of enforcement.",
        },
        {
          title: "OHADA litigation",
          text: "Representation before national courts and support for appeals before the CCJA, as well as arbitration and mediation proceedings.",
        },
      ],
      framework: [
        "Treaty on the Harmonisation of Business Law in Africa (Port Louis, 1993, revised in Quebec in 2008)",
        "Uniform Acts: general commercial law, commercial companies and EIGs, security interests, insolvency, arbitration, mediation, accounting law",
        "Uniform Act on simplified recovery procedures and enforcement measures, revised in 2023",
        "Common Court of Justice and Arbitration (CCJA) and its arbitration rules",
        "Trade and Personal Property Credit Register (RCCM)",
      ],
      faq: [
        {
          q: "Does OHADA law apply automatically in Chad?",
          a: "Yes. Uniform Acts are directly applicable and binding in the member states, including Chad, without any national implementing legislation. Conflicting national provisions are set aside.",
        },
        {
          q: "What is the role of the CCJA?",
          a: "The CCJA is the court of cassation for disputes governed by the Uniform Acts: its decisions are binding in all member states. It also administers an arbitration centre and gives opinions on the interpretation of uniform law.",
        },
        {
          q: "Can a decision issued in another OHADA state be enforced in Chad?",
          a: "CCJA judgments are made enforceable in each member state. Decisions of foreign national courts and arbitral awards, however, must obtain exequatur under the applicable rules. The firm assesses the appropriate route for each instrument.",
        },
      ],
    },
  },

  "droit-des-societes-et-gouvernance": {
    related: ["droit-des-affaires", "creation-restructuration-dissolution-entreprises", "fusions-acquisitions-investissements", "droit-penal-des-affaires"],
    fr: {
      overview: [
        "L’Acte uniforme OHADA relatif au droit des sociétés commerciales encadre précisément le fonctionnement des sociétés : convocation et tenue des assemblées, pouvoirs des dirigeants, conventions réglementées, approbation des comptes, information des associés. Le non-respect de ces règles expose la société à la nullité de certaines décisions et ses dirigeants à une responsabilité civile, voire pénale.",
        "Le cabinet aide les dirigeants et les associés à organiser une gouvernance claire, puis à la faire vivre : chacun sait ce qu’il peut décider, selon quelle procédure et avec quelles traces écrites. Lorsqu’un désaccord survient entre associés, il recherche d’abord une solution négociée qui préserve l’entreprise, sans exclure l’action en justice si elle devient nécessaire.",
      ],
      services: [
        {
          title: "Secrétariat juridique",
          text: "Convocations, procès-verbaux, rapports de gestion, tenue des registres et dépôt des actes au RCCM, selon un calendrier annuel maîtrisé.",
        },
        {
          title: "Statuts et pactes",
          text: "Rédaction et révision des statuts, pactes d’associés, clauses d’agrément, de préemption, de sortie conjointe et de règlement des blocages.",
        },
        {
          title: "Dirigeants et mandataires",
          text: "Nomination, rémunération, délégations de pouvoirs, cumul d’un mandat et d’un contrat de travail, révocation et responsabilité.",
        },
        {
          title: "Conflits d’associés",
          text: "Analyse des droits de chacun, négociation, médiation, expertise de gestion et actions judiciaires en cas d’abus de majorité ou de minorité.",
        },
      ],
      framework: [
        "Acte uniforme OHADA relatif au droit des sociétés commerciales et du groupement d’intérêt économique (AUSCGIE)",
        "Acte uniforme relatif au droit comptable et à l’information financière (AUDCIF) et système comptable SYSCOHADA",
        "Statuts, règlement intérieur et pactes d’associés de la société",
        "Dispositions pénales tchadiennes sanctionnant les infractions au droit des sociétés",
        "Registre du Commerce et du Crédit Mobilier (RCCM)",
      ],
      faq: [
        {
          q: "Quelles sont les obligations annuelles d’une société ?",
          a: "Chaque année, la société doit arrêter ses comptes, les soumettre à l’approbation des associés dans le délai prévu par l’Acte uniforme et accomplir les formalités de dépôt. Les modalités varient selon la forme sociale ; le cabinet établit un calendrier adapté à chaque société.",
        },
        {
          q: "Qu’est-ce qu’une convention réglementée ?",
          a: "C’est un contrat conclu entre la société et l’un de ses dirigeants ou associés, directement ou par personne interposée. Selon la forme sociale, il doit être autorisé ou approuvé suivant une procédure particulière, sous peine d’engager la responsabilité de l’intéressé.",
        },
        {
          q: "Un associé minoritaire dispose-t-il de recours ?",
          a: "Oui. Le droit OHADA reconnaît aux associés un droit d’information, la possibilité de poser des questions écrites, de demander une expertise de gestion et d’agir en justice en cas d’abus de majorité. Le cabinet évalue l’opportunité de chaque voie.",
        },
      ],
    },
    en: {
      overview: [
        "The OHADA Uniform Act on Commercial Companies sets out in detail how companies must operate: convening and holding meetings, directors’ powers, related-party agreements, approval of accounts and shareholder information. Failing to follow these rules exposes the company to certain decisions being set aside, and its directors to civil or even criminal liability.",
        "The firm helps directors and shareholders organise clear governance and then keep it working: everyone knows what they may decide, under which procedure and with what written record. When shareholders disagree, the firm first looks for a negotiated solution that preserves the business, without ruling out court action if it becomes necessary.",
      ],
      services: [
        {
          title: "Corporate secretarial services",
          text: "Notices, minutes, management reports, upkeep of registers and filings with the RCCM, following a controlled annual calendar.",
        },
        {
          title: "Articles and shareholders’ agreements",
          text: "Drafting and revising articles, shareholders’ agreements, approval, pre-emption, tag-along and deadlock-resolution clauses.",
        },
        {
          title: "Directors and officers",
          text: "Appointment, remuneration, delegations of authority, combining a corporate office with an employment contract, removal and liability.",
        },
        {
          title: "Shareholder disputes",
          text: "Analysis of each party’s rights, negotiation, mediation, management audits and court action in cases of majority or minority abuse.",
        },
      ],
      framework: [
        "OHADA Uniform Act on Commercial Companies and Economic Interest Groups (AUSCGIE)",
        "Uniform Act on Accounting Law and Financial Reporting (AUDCIF) and the SYSCOHADA accounting system",
        "The company’s articles, internal rules and shareholders’ agreements",
        "Chadian criminal provisions punishing company law offences",
        "Trade and Personal Property Credit Register (RCCM)",
      ],
      faq: [
        {
          q: "What are a company’s annual obligations?",
          a: "Each year the company must draw up its accounts, submit them to the shareholders for approval within the period set by the Uniform Act and complete the filing formalities. The details vary by company type; the firm draws up a calendar suited to each company.",
        },
        {
          q: "What is a related-party agreement?",
          a: "It is a contract between the company and one of its directors or shareholders, directly or through an intermediary. Depending on the company type, it must be authorised or approved through a specific procedure, failing which the person concerned may be held liable.",
        },
        {
          q: "Does a minority shareholder have any remedies?",
          a: "Yes. OHADA law gives shareholders a right to information, the ability to put written questions, to request a management audit and to bring court action in cases of majority abuse. The firm assesses the merits of each route.",
        },
      ],
    },
  },

  "creation-restructuration-dissolution-entreprises": {
    related: ["droit-des-societes-et-gouvernance", "droit-fiscal", "droit-des-affaires", "fusions-acquisitions-investissements"],
    fr: {
      overview: [
        "Créer une entreprise au Tchad suppose de choisir une forme juridique prévue par le droit OHADA — entreprise individuelle, SARL, SA, SAS, société de personnes, succursale ou GIE — puis d’accomplir les formalités d’immatriculation au Registre du Commerce et du Crédit Mobilier et auprès des administrations fiscale et sociale. L’Agence Nationale des Investissements et des Exportations (ANIE) centralise une partie de ces démarches.",
        "Le choix initial engage durablement : responsabilité des associés, régime fiscal et social du dirigeant, capacité à accueillir des investisseurs. Le cabinet accompagne ce choix, puis les évolutions de la structure tout au long de sa vie : augmentation de capital, transformation, cession, mise en sommeil, dissolution et liquidation dans des conditions régulières.",
      ],
      services: [
        {
          title: "Choix de la structure",
          text: "Comparaison des formes sociales au regard du projet, du nombre d’associés, des besoins de financement et du degré de responsabilité accepté.",
        },
        {
          title: "Constitution",
          text: "Rédaction des statuts et des actes de nomination, accompagnement du dépôt du capital, immatriculation et obtention des identifiants de l’entreprise.",
        },
        {
          title: "Restructuration",
          text: "Modification du capital, transformation de la forme sociale, transfert de siège, cession de parts ou d’actions, apport partiel d’actif, fusion et scission.",
        },
        {
          title: "Dissolution et liquidation",
          text: "Décision de dissolution, désignation du liquidateur, opérations de liquidation, clôture et radiation, ou accompagnement dans le cadre d’une procédure collective.",
        },
      ],
      framework: [
        "Acte uniforme OHADA relatif au droit des sociétés commerciales et du GIE (AUSCGIE)",
        "Acte uniforme portant sur le droit commercial général : statut du commerçant, statut de l’entreprenant et RCCM",
        "Acte uniforme portant organisation des procédures collectives d’apurement du passif",
        "Charte des investissements et Code général des impôts du Tchad",
        "Agence Nationale des Investissements et des Exportations (ANIE)",
      ],
      faq: [
        {
          q: "Quelle forme juridique choisir pour démarrer ?",
          a: "Il n’y a pas de réponse unique. La SARL convient à de nombreux projets portés par un petit nombre d’associés ; la SAS offre une grande liberté d’organisation ; la SA répond aux projets de plus grande taille. Le choix dépend du projet, des associés et du financement envisagé.",
        },
        {
          q: "Une société étrangère peut-elle ouvrir une succursale au Tchad ?",
          a: "Oui. La succursale doit être immatriculée au RCCM. Lorsqu’elle appartient à une société étrangère, le droit OHADA limite toutefois sa durée : elle doit en principe être apportée à une société de droit local dans un délai déterminé, sauf dispense. Le cabinet aide à comparer succursale et filiale.",
        },
        {
          q: "Peut-on fermer une société sans passer par le tribunal ?",
          a: "Oui, lorsque la société est en mesure de régler ses dettes : les associés décident alors la dissolution et une liquidation amiable. Si elle ne peut plus faire face à son passif, elle relève des procédures collectives prévues par le droit OHADA.",
        },
      ],
    },
    en: {
      overview: [
        "Setting up a business in Chad means choosing a legal form provided for by OHADA law — sole proprietorship, SARL, SA, SAS, partnership, branch or EIG — and then completing registration with the Trade and Personal Property Credit Register and with the tax and social security authorities. The National Agency for Investment and Exports (ANIE) centralises part of these formalities.",
        "The initial choice has lasting effects: shareholders’ liability, the director’s tax and social security status, and the ability to bring in investors. The firm supports that choice, and then the changes the structure goes through over its life: capital increase, conversion, sale, dormancy, dissolution and liquidation carried out properly.",
      ],
      services: [
        {
          title: "Choosing the structure",
          text: "Comparison of company types in light of the project, the number of shareholders, financing needs and the level of liability accepted.",
        },
        {
          title: "Incorporation",
          text: "Drafting the articles and appointment documents, assistance with the capital deposit, registration and obtaining the company’s identifiers.",
        },
        {
          title: "Restructuring",
          text: "Changes to share capital, conversion of company type, transfer of registered office, share transfers, partial asset contributions, mergers and demergers.",
        },
        {
          title: "Dissolution and liquidation",
          text: "Dissolution resolution, appointment of the liquidator, liquidation operations, closing and deregistration, or support within insolvency proceedings.",
        },
      ],
      framework: [
        "OHADA Uniform Act on Commercial Companies and EIGs (AUSCGIE)",
        "Uniform Act on General Commercial Law: status of the trader, status of the “entreprenant” and the RCCM",
        "Uniform Act organising collective insolvency proceedings",
        "Chad’s Investment Charter and General Tax Code",
        "National Agency for Investment and Exports (ANIE)",
      ],
      faq: [
        {
          q: "Which legal form should I choose to get started?",
          a: "There is no single answer. The SARL suits many projects led by a small number of shareholders; the SAS offers great organisational freedom; the SA fits larger projects. The choice depends on the project, the shareholders and the financing envisaged.",
        },
        {
          q: "Can a foreign company open a branch in Chad?",
          a: "Yes. The branch must be registered with the RCCM. Where it belongs to a foreign company, however, OHADA law limits its duration: in principle it must be contributed to a locally incorporated company within a set period, unless an exemption is granted. The firm helps compare branch and subsidiary.",
        },
        {
          q: "Can a company be closed without going to court?",
          a: "Yes, where the company is able to pay its debts: the shareholders then resolve to dissolve it and carry out a voluntary liquidation. If it can no longer meet its liabilities, it falls under the insolvency proceedings provided for by OHADA law.",
        },
      ],
    },
  },

  "fusions-acquisitions-investissements": {
    related: ["droit-des-societes-et-gouvernance", "droit-fiscal", "droit-bancaire-et-financier", "droit-minier-petrolier-et-energetique"],
    fr: {
      overview: [
        "Acquérir une société, céder une participation ou investir au Tchad suppose de connaître précisément ce que l’on achète et dans quelles conditions on pourra exploiter, financer puis revendre. Titres, contrats clés, situation fiscale et sociale, autorisations administratives, litiges en cours : chaque point non vérifié peut devenir un passif après la signature.",
        "FN & PARTNERS intervient aux côtés des acquéreurs, des cédants et des investisseurs à chaque étape de l’opération. Pour les investisseurs étrangers, le cabinet éclaire en outre les règles locales qui conditionnent le projet : forme d’implantation, réglementation des changes de la CEMAC, régime des investissements et particularités sectorielles.",
      ],
      services: [
        {
          title: "Audit juridique préalable",
          text: "Revue des documents sociaux, contrats, actifs, autorisations, contentieux et de la situation sociale et fiscale de la cible, avec un rapport hiérarchisant les risques.",
        },
        {
          title: "Structuration de l’opération",
          text: "Choix entre cession de titres, cession d’actifs, augmentation de capital ou coentreprise, au regard des objectifs des parties et des contraintes réglementaires.",
        },
        {
          title: "Négociation et rédaction",
          text: "Lettre d’intention, accord de confidentialité, contrat de cession, garanties d’actif et de passif, pacte d’associés.",
        },
        {
          title: "Réalisation et suivi",
          text: "Levée des conditions suspensives, formalités, déclarations requises, puis mise en œuvre des engagements postérieurs à l’opération.",
        },
      ],
      framework: [
        "Acte uniforme OHADA relatif au droit des sociétés commerciales : cessions, fusions, scissions, apports partiels d’actif",
        "Réglementation des changes de la CEMAC applicable aux investissements et aux transferts",
        "Droit communautaire de la concurrence de la CEMAC",
        "Charte des investissements du Tchad et régimes sectoriels (mines, hydrocarbures, banque, télécommunications)",
        "Convention de Washington (CIRDI), à laquelle le Tchad est partie, pour les différends relatifs aux investissements",
      ],
      faq: [
        {
          q: "À quoi sert un audit juridique préalable ?",
          a: "Il permet à l’acquéreur de vérifier ce qu’il achète, d’ajuster le prix et d’obtenir des garanties adaptées aux risques identifiés. Pour le vendeur, un audit anticipé permet de corriger les irrégularités avant d’ouvrir les discussions.",
        },
        {
          q: "Un investisseur étranger peut-il détenir l’intégralité du capital d’une société tchadienne ?",
          a: "Le droit OHADA n’impose pas de participation locale dans les sociétés commerciales. Certaines activités obéissent toutefois à des règles sectorielles particulières, qui doivent être vérifiées avant d’arrêter la structure de l’investissement.",
        },
        {
          q: "Comment sont protégés les investissements réalisés au Tchad ?",
          a: "La protection résulte de la Charte des investissements, des conventions conclues avec l’État le cas échéant, des traités d’investissement applicables et des clauses de règlement des différends prévues au contrat, notamment l’arbitrage.",
        },
      ],
    },
    en: {
      overview: [
        "Acquiring a company, selling a stake or investing in Chad requires knowing precisely what is being bought and on what terms it can be operated, financed and later sold. Shares, key contracts, tax and employment position, administrative authorisations, pending disputes: every unchecked point can turn into a liability after signing.",
        "FN & PARTNERS acts alongside buyers, sellers and investors at each stage of the transaction. For foreign investors, the firm also explains the local rules that shape the project: form of establishment, CEMAC exchange-control regulations, the investment regime and sector-specific features.",
      ],
      services: [
        {
          title: "Legal due diligence",
          text: "Review of the target’s corporate records, contracts, assets, authorisations, disputes and employment and tax position, with a report ranking the risks.",
        },
        {
          title: "Structuring the transaction",
          text: "Choosing between a share sale, an asset sale, a capital increase or a joint venture, in light of the parties’ objectives and regulatory constraints.",
        },
        {
          title: "Negotiation and drafting",
          text: "Letter of intent, confidentiality agreement, sale and purchase agreement, representations and warranties, shareholders’ agreement.",
        },
        {
          title: "Completion and follow-up",
          text: "Satisfaction of conditions precedent, formalities, required filings, then implementation of post-completion undertakings.",
        },
      ],
      framework: [
        "OHADA Uniform Act on Commercial Companies: transfers, mergers, demergers, partial asset contributions",
        "CEMAC exchange-control regulations applicable to investments and transfers",
        "CEMAC community competition law",
        "Chad’s Investment Charter and sector regimes (mining, hydrocarbons, banking, telecommunications)",
        "Washington Convention (ICSID), to which Chad is a party, for investment disputes",
      ],
      faq: [
        {
          q: "What is legal due diligence for?",
          a: "It allows the buyer to check what is being bought, adjust the price and obtain warranties suited to the risks identified. For the seller, an early review makes it possible to correct irregularities before talks begin.",
        },
        {
          q: "Can a foreign investor own all the shares of a Chadian company?",
          a: "OHADA law does not require local shareholding in commercial companies. Some activities are nevertheless subject to specific sector rules, which must be checked before the investment structure is settled.",
        },
        {
          q: "How are investments made in Chad protected?",
          a: "Protection derives from the Investment Charter, from any agreements entered into with the State, from applicable investment treaties and from the dispute-resolution clauses in the contract, in particular arbitration.",
        },
      ],
    },
  },
};
