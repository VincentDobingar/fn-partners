import type { ExpertiseDetailEntry } from "./types";

export const part2: Record<string, ExpertiseDetailEntry> = {
  "contrats-commerciaux": {
    related: ["droit-des-affaires", "droit-ohada", "recouvrement-de-creances", "mediation-negociation-reglement-amiable-differends"],
    fr: {
      overview: [
        "Un contrat bien rédigé reste le premier outil de prévention des litiges. Dans l’espace OHADA, la vente commerciale, le bail à usage professionnel, les intermédiaires de commerce et le transport de marchandises par route font l’objet de règles uniformes ; les autres contrats relèvent du droit commun des obligations applicable au Tchad et de la volonté des parties.",
        "Le cabinet rédige des contrats qui correspondent à la réalité de la relation commerciale : qui fait quoi, dans quel délai, à quel prix, avec quelles garanties et quelles conséquences en cas de manquement. Il veille aux clauses qui décident de l’issue d’un différend : droit applicable, juridiction ou arbitrage, limitation de responsabilité, preuve et résiliation.",
      ],
      services: [
        {
          title: "Rédaction sur mesure",
          text: "Contrats de vente, de fourniture, de distribution, d’agence, de prestation de services, de sous-traitance, de partenariat et de confidentialité.",
        },
        {
          title: "Audit et révision",
          text: "Relecture des contrats proposés par un partenaire ou déjà signés, repérage des clauses déséquilibrées et proposition d’avenants.",
        },
        {
          title: "Modèles et conditions générales",
          text: "Conception de contrats types, de conditions générales de vente ou d’achat et de bons de commande adaptés à l’activité.",
        },
        {
          title: "Négociation et exécution",
          text: "Assistance pendant la négociation, puis en cas de difficulté d’exécution : mise en demeure, renégociation, résiliation, réclamation.",
        },
      ],
      framework: [
        "Acte uniforme OHADA portant sur le droit commercial général : vente commerciale, bail à usage professionnel, intermédiaires de commerce",
        "Acte uniforme relatif aux contrats de transport de marchandises par route",
        "Droit commun des contrats et de la responsabilité applicable au Tchad",
        "Actes uniformes relatifs à l’arbitrage et à la médiation, pour les clauses de règlement des différends",
        "Règles internationales d’usage (Incoterms) pour les ventes transfrontalières",
      ],
      faq: [
        {
          q: "Un contrat doit-il nécessairement être écrit ?",
          a: "Entre commerçants, la preuve est en principe libre et de nombreux contrats sont valables sans écrit. L’écrit reste néanmoins indispensable pour établir le contenu des engagements, et certains contrats ou certaines clauses n’ont d’effet que s’ils sont constatés par écrit.",
        },
        {
          q: "Peut-on choisir un droit étranger ou un arbitrage pour un contrat exécuté au Tchad ?",
          a: "Les parties à un contrat international disposent d’une large liberté pour choisir le droit applicable et le mode de règlement des litiges, sous réserve des règles impératives. Ce choix se décide au moment de la rédaction, en fonction de la nature du contrat et du lieu où une décision devra être exécutée.",
        },
        {
          q: "Que faire lorsque le cocontractant n’exécute pas ses obligations ?",
          a: "Il convient de constater le manquement par écrit, d’adresser une mise en demeure conforme au contrat, puis d’envisager la négociation, la suspension de ses propres obligations, la résiliation ou l’action en paiement. Le cabinet aide à choisir la réponse proportionnée.",
        },
      ],
    },
    en: {
      overview: [
        "A well-drafted contract remains the first tool for preventing disputes. In the OHADA area, commercial sales, professional leases, commercial intermediaries and the carriage of goods by road are governed by uniform rules; other contracts fall under the general law of obligations applicable in Chad and the parties’ agreement.",
        "The firm drafts contracts that match the reality of the commercial relationship: who does what, by when, at what price, with what guarantees and what consequences in the event of a breach. It pays close attention to the clauses that decide the outcome of a dispute: governing law, court or arbitration, limitation of liability, evidence and termination.",
      ],
      services: [
        {
          title: "Bespoke drafting",
          text: "Sale, supply, distribution, agency, services, subcontracting, partnership and confidentiality agreements.",
        },
        {
          title: "Review and revision",
          text: "Review of contracts proposed by a partner or already signed, identification of unbalanced clauses and proposed amendments.",
        },
        {
          title: "Templates and general terms",
          text: "Design of standard contracts, general terms of sale or purchase and order forms suited to the business.",
        },
        {
          title: "Negotiation and performance",
          text: "Assistance during negotiation and then when performance issues arise: formal notice, renegotiation, termination, claims.",
        },
      ],
      framework: [
        "OHADA Uniform Act on General Commercial Law: commercial sales, professional leases, commercial intermediaries",
        "Uniform Act on contracts for the carriage of goods by road",
        "General law of contract and liability applicable in Chad",
        "Uniform Acts on arbitration and mediation, for dispute-resolution clauses",
        "International trade terms (Incoterms) for cross-border sales",
      ],
      faq: [
        {
          q: "Does a contract have to be in writing?",
          a: "Between traders, evidence is in principle unrestricted and many contracts are valid without a written document. Writing nevertheless remains essential to establish what was agreed, and some contracts or clauses are only effective if recorded in writing.",
        },
        {
          q: "Can foreign law or arbitration be chosen for a contract performed in Chad?",
          a: "Parties to an international contract have wide freedom to choose the governing law and the dispute-resolution method, subject to mandatory rules. The choice is made at drafting stage, depending on the nature of the contract and where a decision would need to be enforced.",
        },
        {
          q: "What should be done when the other party fails to perform?",
          a: "The breach should be recorded in writing and a formal notice sent in accordance with the contract, before considering negotiation, suspension of one’s own obligations, termination or a claim for payment. The firm helps choose a proportionate response.",
        },
      ],
    },
  },

  "contentieux-et-arbitrage": {
    related: ["mediation-negociation-reglement-amiable-differends", "recouvrement-de-creances", "droit-ohada", "droit-penal-des-affaires"],
    fr: {
      overview: [
        "Un procès se prépare bien avant l’audience : par la réunion des preuves, le choix de la juridiction ou du tribunal arbitral, le respect des délais et l’évaluation de ce qu’une décision favorable permettra réellement d’obtenir. Un jugement n’a de valeur que s’il peut être exécuté.",
        "FN & PARTNERS représente ses clients devant les juridictions tchadiennes de tous degrés, accompagne les recours en cassation devant la Cour Commune de Justice et d’Arbitrage pour les litiges relevant du droit OHADA, et intervient dans les arbitrages institutionnels ou ad hoc. Avant d’agir, le cabinet expose les voies possibles, leurs délais, leurs coûts prévisibles et leurs aléas.",
      ],
      services: [
        {
          title: "Évaluation du dossier",
          text: "Analyse des pièces, des fondements juridiques, de la prescription et de la solvabilité de l’adversaire, avec une recommandation sur l’opportunité d’agir.",
        },
        {
          title: "Procédures judiciaires",
          text: "Assignations, conclusions, plaidoiries et voies de recours en matière commerciale, civile, sociale et administrative, y compris les procédures d’urgence.",
        },
        {
          title: "Arbitrage",
          text: "Rédaction de clauses compromissoires, constitution du tribunal arbitral, conduite de l’instance, recours en annulation et exequatur des sentences.",
        },
        {
          title: "Exécution des décisions",
          text: "Mesures conservatoires, saisies et suivi de l’exécution forcée, en lien avec les huissiers de justice.",
        },
      ],
      framework: [
        "Règles tchadiennes d’organisation judiciaire et de procédure civile, commerciale et administrative",
        "Acte uniforme OHADA relatif au droit de l’arbitrage et règlement d’arbitrage de la CCJA",
        "Acte uniforme sur les procédures simplifiées de recouvrement et les voies d’exécution",
        "Traité OHADA et règlement de procédure de la Cour Commune de Justice et d’Arbitrage",
        "Convention de Washington (CIRDI) pour les différends relatifs aux investissements",
      ],
      faq: [
        {
          q: "Combien de temps dure une procédure ?",
          a: "La durée dépend de la juridiction saisie, de la complexité du dossier, de l’attitude de la partie adverse et de l’exercice de recours. Le cabinet donne une estimation au vu du dossier, sans pouvoir garantir un délai qui ne dépend pas de lui.",
        },
        {
          q: "Quelle différence entre un procès et un arbitrage ?",
          a: "L’arbitrage confie le litige à un ou plusieurs arbitres choisis par les parties, dans une procédure confidentielle aboutissant à une sentence obligatoire. Il suppose une convention d’arbitrage et entraîne des frais propres. Le procès se déroule devant le juge étatique, avec des voies de recours plus étendues.",
        },
        {
          q: "Une sentence arbitrale est-elle exécutoire au Tchad ?",
          a: "Une sentence ne peut donner lieu à exécution forcée qu’après avoir reçu l’exequatur de la juridiction compétente, dans les conditions fixées par l’Acte uniforme relatif à l’arbitrage ou, pour un arbitrage CCJA, par le règlement de la Cour.",
        },
      ],
    },
    en: {
      overview: [
        "A case is prepared long before the hearing: by gathering evidence, choosing the court or arbitral tribunal, meeting deadlines and assessing what a favourable decision will actually deliver. A judgment is only worth something if it can be enforced.",
        "FN & PARTNERS represents its clients before Chadian courts at every level, supports cassation appeals before the Common Court of Justice and Arbitration in OHADA-law disputes, and acts in institutional and ad hoc arbitrations. Before taking action, the firm sets out the available routes, their timeframes, foreseeable costs and uncertainties.",
      ],
      services: [
        {
          title: "Case assessment",
          text: "Analysis of the documents, legal grounds, limitation periods and the opponent’s solvency, with a recommendation on whether to proceed.",
        },
        {
          title: "Court proceedings",
          text: "Writs, written submissions, oral argument and appeals in commercial, civil, employment and administrative matters, including urgent proceedings.",
        },
        {
          title: "Arbitration",
          text: "Drafting arbitration clauses, constituting the tribunal, conducting the proceedings, applications to set aside and exequatur of awards.",
        },
        {
          title: "Enforcement of decisions",
          text: "Protective measures, attachments and follow-up of enforcement, working with court bailiffs.",
        },
      ],
      framework: [
        "Chadian rules on the organisation of the courts and on civil, commercial and administrative procedure",
        "OHADA Uniform Act on Arbitration and the CCJA arbitration rules",
        "Uniform Act on simplified recovery procedures and enforcement measures",
        "OHADA Treaty and the rules of procedure of the Common Court of Justice and Arbitration",
        "Washington Convention (ICSID) for investment disputes",
      ],
      faq: [
        {
          q: "How long do proceedings take?",
          a: "It depends on the court seised, the complexity of the case, the opposing party’s conduct and any appeals. The firm gives an estimate once it has seen the file, but cannot guarantee a timeframe that is outside its control.",
        },
        {
          q: "What is the difference between litigation and arbitration?",
          a: "Arbitration entrusts the dispute to one or more arbitrators chosen by the parties, in confidential proceedings leading to a binding award. It requires an arbitration agreement and involves its own costs. Litigation takes place before the state courts, with broader rights of appeal.",
        },
        {
          q: "Is an arbitral award enforceable in Chad?",
          a: "An award can only be enforced once it has been granted exequatur by the competent court, under the conditions laid down by the Uniform Act on Arbitration or, for CCJA arbitration, by the Court’s rules.",
        },
      ],
    },
  },

  "recouvrement-de-creances": {
    related: ["contentieux-et-arbitrage", "droit-ohada", "contrats-commerciaux", "droit-bancaire-et-financier"],
    fr: {
      overview: [
        "Une créance impayée pèse sur la trésorerie et, avec le temps, devient plus difficile à recouvrer : le débiteur se fragilise, les preuves se dispersent, la prescription court. Le droit OHADA met à la disposition des créanciers des procédures rapides, dont l’injonction de payer, et un ensemble de saisies permettant d’obtenir un paiement forcé.",
        "L’Acte uniforme qui organise ces procédures a été révisé en 2023. Le cabinet met en œuvre une démarche graduée : vérification du titre et de la solvabilité du débiteur, relance et négociation d’un échéancier, puis procédure judiciaire et exécution lorsque la voie amiable échoue. À chaque étape, le coût de l’action est mis en regard des chances réelles de recouvrement.",
      ],
      services: [
        {
          title: "Analyse de la créance",
          text: "Vérification du caractère certain, liquide et exigible de la créance, des pièces justificatives, de la prescription et des garanties disponibles.",
        },
        {
          title: "Phase amiable",
          text: "Mise en demeure, négociation, protocole d’accord et échéancier de paiement, le cas échéant assorti de garanties.",
        },
        {
          title: "Procédures simplifiées",
          text: "Requête en injonction de payer, de délivrer ou de restituer, et gestion de l’opposition éventuelle du débiteur.",
        },
        {
          title: "Saisies et exécution",
          text: "Saisie conservatoire, saisie-attribution de créances, saisie-vente et saisie immobilière, en lien avec les huissiers de justice.",
        },
      ],
      framework: [
        "Acte uniforme OHADA portant organisation des procédures simplifiées de recouvrement et des voies d’exécution (révisé en 2023)",
        "Acte uniforme portant organisation des sûretés",
        "Acte uniforme portant organisation des procédures collectives d’apurement du passif",
        "Acte uniforme portant sur le droit commercial général, notamment les règles de prescription",
        "Statut et compétences des huissiers de justice au Tchad",
      ],
      faq: [
        {
          q: "Qu’est-ce que l’injonction de payer ?",
          a: "C’est une procédure simplifiée qui permet d’obtenir du juge, sur simple requête et sans débat préalable, une décision ordonnant au débiteur de payer une créance certaine, liquide et exigible d’origine contractuelle ou résultant d’un effet de commerce ou d’un chèque. Le débiteur peut former opposition.",
        },
        {
          q: "Peut-on recouvrer une créance sur un débiteur situé dans un autre pays de l’OHADA ?",
          a: "Oui. Les mêmes procédures s’appliquent dans tous les États membres, ce qui facilite l’action. La juridiction compétente et les modalités d’exécution doivent toutefois être déterminées au cas par cas.",
        },
        {
          q: "Que se passe-t-il si le débiteur fait l’objet d’une procédure collective ?",
          a: "Les poursuites individuelles sont alors suspendues et le créancier doit déclarer sa créance dans le délai imparti pour participer aux répartitions. Une déclaration tardive peut faire perdre ses droits : il faut agir rapidement.",
        },
      ],
    },
    en: {
      overview: [
        "An unpaid debt weighs on cash flow and becomes harder to recover over time: the debtor weakens, evidence scatters and limitation periods run. OHADA law gives creditors fast procedures, including the order for payment, and a set of attachment measures to obtain forced payment.",
        "The Uniform Act organising these procedures was revised in 2023. The firm follows a graduated approach: checking the claim and the debtor’s solvency, reminders and negotiation of a payment schedule, then court proceedings and enforcement when the amicable route fails. At each stage, the cost of action is weighed against the real prospects of recovery.",
      ],
      services: [
        {
          title: "Reviewing the claim",
          text: "Checking that the debt is certain, liquidated and due, along with supporting documents, limitation periods and available security.",
        },
        {
          title: "Amicable phase",
          text: "Formal notice, negotiation, settlement agreement and payment schedule, backed by guarantees where appropriate.",
        },
        {
          title: "Simplified procedures",
          text: "Applications for an order to pay, deliver or return, and handling of any objection lodged by the debtor.",
        },
        {
          title: "Attachments and enforcement",
          text: "Protective attachment, attachment of receivables, seizure and sale of goods and seizure of real property, working with court bailiffs.",
        },
      ],
      framework: [
        "OHADA Uniform Act organising simplified recovery procedures and enforcement measures (revised in 2023)",
        "Uniform Act organising security interests",
        "Uniform Act organising collective insolvency proceedings",
        "Uniform Act on General Commercial Law, in particular the limitation rules",
        "Status and powers of court bailiffs in Chad",
      ],
      faq: [
        {
          q: "What is an order for payment?",
          a: "It is a simplified procedure allowing the court, on a simple application and without a prior hearing, to order the debtor to pay a debt that is certain, liquidated and due and arises from a contract, a negotiable instrument or a cheque. The debtor may lodge an objection.",
        },
        {
          q: "Can a debt be recovered from a debtor located in another OHADA country?",
          a: "Yes. The same procedures apply in all member states, which makes action easier. The competent court and the enforcement arrangements must nevertheless be determined case by case.",
        },
        {
          q: "What happens if the debtor is in insolvency proceedings?",
          a: "Individual actions are then stayed and the creditor must file its claim within the prescribed period in order to share in distributions. Late filing can mean losing one’s rights, so swift action is needed.",
        },
      ],
    },
  },

  "droit-bancaire-et-financier": {
    related: ["recouvrement-de-creances", "droit-ohada", "fusions-acquisitions-investissements", "droit-penal-des-affaires"],
    fr: {
      overview: [
        "L’activité bancaire au Tchad s’exerce dans le cadre de la CEMAC : la Banque des États de l’Afrique Centrale (BEAC) conduit la politique monétaire, la Commission Bancaire de l’Afrique Centrale (COBAC) agrée et contrôle les établissements, et une réglementation communautaire encadre les changes, les services de paiement et la lutte contre le blanchiment. Les garanties, elles, relèvent du droit OHADA des sûretés.",
        "FN & PARTNERS conseille les établissements de crédit, les établissements de microfinance et leurs clients — entreprises emprunteuses, garants, investisseurs. Le cabinet intervient sur la documentation de financement, la constitution et la réalisation des sûretés, la conformité réglementaire et le contentieux né de la relation bancaire.",
      ],
      services: [
        {
          title: "Documentation de financement",
          text: "Conventions de crédit, ouvertures de crédit, crédits syndiqués, conventions de compte courant et accords de restructuration de dette.",
        },
        {
          title: "Sûretés",
          text: "Cautionnement, garantie autonome, gage, nantissement de fonds de commerce, de comptes ou de titres, hypothèque : rédaction, inscription et réalisation.",
        },
        {
          title: "Conformité",
          text: "Réglementation des changes, connaissance du client, lutte contre le blanchiment et le financement du terrorisme, relations avec les autorités de contrôle.",
        },
        {
          title: "Contentieux bancaire",
          text: "Recouvrement de créances bancaires, contestation de garanties, responsabilité du banquier, incidents de paiement.",
        },
      ],
      framework: [
        "Réglementation bancaire de la CEMAC et règlements de la COBAC",
        "Réglementation des changes de la CEMAC",
        "Règlement CEMAC relatif à la prévention et à la répression du blanchiment des capitaux et du financement du terrorisme",
        "Acte uniforme OHADA portant organisation des sûretés",
        "Acte uniforme sur les procédures simplifiées de recouvrement et les voies d’exécution",
      ],
      faq: [
        {
          q: "Quelles garanties une banque peut-elle demander à une entreprise ?",
          a: "Le droit OHADA offre un large éventail : sûretés personnelles (cautionnement, garantie autonome) et sûretés réelles sur les biens meubles ou immeubles (gage, nantissement, hypothèque). Le choix dépend du crédit, des actifs disponibles et du coût d’inscription.",
        },
        {
          q: "Les transferts de fonds vers l’étranger sont-ils libres ?",
          a: "Les opérations avec l’extérieur de la CEMAC sont soumises à la réglementation des changes : selon leur nature et leur montant, elles doivent être domiciliées, déclarées ou autorisées, et justifiées auprès de la banque. Le cabinet vérifie les obligations applicables à chaque opération.",
        },
        {
          q: "Le cabinet assiste-t-il les emprunteurs face à leur banque ?",
          a: "Oui. Le cabinet conseille les entreprises et les garants dans la négociation de leurs financements, la restructuration de leur dette et les litiges relatifs aux garanties ou à la rupture de crédit.",
        },
      ],
    },
    en: {
      overview: [
        "Banking in Chad operates within the CEMAC framework: the Bank of Central African States (BEAC) conducts monetary policy, the Central African Banking Commission (COBAC) licenses and supervises institutions, and community regulations govern exchange control, payment services and anti-money laundering. Security interests, for their part, are governed by OHADA law.",
        "FN & PARTNERS advises credit institutions, microfinance institutions and their clients — borrowing companies, guarantors and investors. The firm works on financing documentation, the creation and enforcement of security, regulatory compliance and disputes arising from the banking relationship.",
      ],
      services: [
        {
          title: "Financing documentation",
          text: "Loan agreements, credit facilities, syndicated loans, current-account agreements and debt restructuring agreements.",
        },
        {
          title: "Security",
          text: "Suretyship, independent guarantee, pledges over a business, accounts or securities, mortgages: drafting, registration and enforcement.",
        },
        {
          title: "Compliance",
          text: "Exchange control, know-your-customer, anti-money laundering and counter-terrorist financing, dealings with supervisory authorities.",
        },
        {
          title: "Banking litigation",
          text: "Recovery of bank debts, challenges to guarantees, lender liability, payment incidents.",
        },
      ],
      framework: [
        "CEMAC banking regulations and COBAC regulations",
        "CEMAC exchange-control regulations",
        "CEMAC regulation on the prevention and suppression of money laundering and terrorist financing",
        "OHADA Uniform Act organising security interests",
        "Uniform Act on simplified recovery procedures and enforcement measures",
      ],
      faq: [
        {
          q: "What security can a bank ask a company to provide?",
          a: "OHADA law offers a wide range: personal security (suretyship, independent guarantee) and security over movable or immovable property (pledge, mortgage). The choice depends on the facility, the assets available and registration costs.",
        },
        {
          q: "Can funds be transferred abroad freely?",
          a: "Transactions with countries outside CEMAC are subject to exchange-control regulations: depending on their nature and amount, they must be domiciled, declared or authorised, and substantiated to the bank. The firm checks the obligations applicable to each transaction.",
        },
        {
          q: "Does the firm assist borrowers in dealings with their bank?",
          a: "Yes. The firm advises companies and guarantors on negotiating their financing, restructuring their debt and on disputes over guarantees or the withdrawal of credit.",
        },
      ],
    },
  },

  "droit-fiscal": {
    related: ["droit-des-affaires", "creation-restructuration-dissolution-entreprises", "fusions-acquisitions-investissements", "droit-civil-et-accompagnement-des-ong"],
    fr: {
      overview: [
        "La fiscalité tchadienne repose sur le Code général des impôts, complété chaque année par la loi de finances, et sur les directives de la CEMAC qui harmonisent notamment la TVA et l’imposition des sociétés. Les règles évoluent régulièrement : une pratique admise une année peut devenir un motif de redressement l’année suivante.",
        "FN & PARTNERS apporte une lecture juridique de la fiscalité, complémentaire du travail de l’expert-comptable : qualification des opérations, conséquences fiscales d’un contrat ou d’une restructuration, bénéfice d’un régime dérogatoire, sécurisation des positions prises. En cas de contrôle, le cabinet assiste le contribuable à chaque étape de la procédure.",
      ],
      services: [
        {
          title: "Conseil et sécurisation",
          text: "Analyse fiscale des contrats, des investissements et des restructurations ; recherche du régime applicable et des options ouvertes par les textes.",
        },
        {
          title: "Régimes incitatifs",
          text: "Étude de l’éligibilité aux avantages prévus par la Charte des investissements ou par les régimes sectoriels, et suivi des engagements correspondants.",
        },
        {
          title: "Contrôle fiscal",
          text: "Préparation du contrôle, réponses aux demandes de l’administration, discussion des chefs de redressement et des pénalités.",
        },
        {
          title: "Contentieux fiscal",
          text: "Réclamation préalable devant l’administration, demandes de sursis et de remise, puis recours devant la juridiction compétente.",
        },
      ],
      framework: [
        "Code général des impôts du Tchad et lois de finances annuelles",
        "Directives fiscales de la CEMAC (TVA, impôt sur les sociétés, droits d’accises)",
        "Code des douanes de la CEMAC",
        "Charte des investissements du Tchad et régimes fiscaux sectoriels (mines, hydrocarbures)",
        "Conventions fiscales internationales applicables au Tchad",
      ],
      faq: [
        {
          q: "Quelle est la différence entre le rôle de l’avocat et celui de l’expert-comptable ?",
          a: "L’expert-comptable tient les comptes et établit les déclarations. L’avocat analyse les textes, qualifie juridiquement les opérations, sécurise les montages et défend le contribuable face à l’administration et devant le juge. Les deux interventions se complètent.",
        },
        {
          q: "Comment réagir à une notification de redressement ?",
          a: "Il faut d’abord relever le délai de réponse, qui est impératif, puis analyser chaque chef de redressement et répondre de façon motivée, pièces à l’appui. L’absence de réponse dans le délai vaut généralement acceptation.",
        },
        {
          q: "Les ONG et associations sont-elles concernées par la fiscalité ?",
          a: "Oui. Même lorsqu’elles bénéficient d’exonérations, elles restent tenues d’obligations déclaratives et de retenues, notamment sur les salaires et sur certains paiements à des prestataires. Ces obligations se vérifient au regard de leur accord avec l’État.",
        },
      ],
    },
    en: {
      overview: [
        "Chadian taxation rests on the General Tax Code, supplemented each year by the Finance Act, and on CEMAC directives harmonising VAT and corporate taxation in particular. The rules change regularly: a practice accepted one year can become grounds for reassessment the next.",
        "FN & PARTNERS provides a legal reading of taxation that complements the accountant’s work: characterising transactions, the tax consequences of a contract or restructuring, eligibility for a special regime, and securing the positions taken. In the event of an audit, the firm assists the taxpayer at each stage of the procedure.",
      ],
      services: [
        {
          title: "Advice and risk control",
          text: "Tax analysis of contracts, investments and restructurings; identifying the applicable regime and the options available under the legislation.",
        },
        {
          title: "Incentive regimes",
          text: "Assessment of eligibility for the benefits provided by the Investment Charter or by sector regimes, and monitoring of the related undertakings.",
        },
        {
          title: "Tax audits",
          text: "Preparing for the audit, responding to the administration’s requests, and discussing reassessment items and penalties.",
        },
        {
          title: "Tax litigation",
          text: "Prior claim before the administration, applications for suspension and remission, then appeal to the competent court.",
        },
      ],
      framework: [
        "Chad’s General Tax Code and annual Finance Acts",
        "CEMAC tax directives (VAT, corporate income tax, excise duties)",
        "CEMAC Customs Code",
        "Chad’s Investment Charter and sector tax regimes (mining, hydrocarbons)",
        "International tax treaties applicable to Chad",
      ],
      faq: [
        {
          q: "How does the lawyer’s role differ from the accountant’s?",
          a: "The accountant keeps the books and prepares the returns. The lawyer analyses the legislation, characterises transactions legally, secures structures and defends the taxpayer before the administration and the courts. The two roles complement each other.",
        },
        {
          q: "How should a reassessment notice be handled?",
          a: "First note the response deadline, which is mandatory, then analyse each reassessment item and reply with reasons and supporting documents. Failing to respond within the deadline is generally treated as acceptance.",
        },
        {
          q: "Are NGOs and associations affected by taxation?",
          a: "Yes. Even where they benefit from exemptions, they remain subject to filing and withholding obligations, in particular on salaries and on certain payments to service providers. These obligations are checked against their agreement with the State.",
        },
      ],
    },
  },

  "droit-du-travail-et-securite-sociale": {
    related: ["droit-des-affaires", "droit-civil-et-accompagnement-des-ong", "contentieux-et-arbitrage", "mediation-negociation-reglement-amiable-differends"],
    fr: {
      overview: [
        "Les relations de travail au Tchad sont régies par le Code du travail, la convention collective générale et les conventions sectorielles, sous le contrôle de l’Inspection du Travail. S’y ajoutent les obligations envers la Caisse Nationale de Prévoyance Sociale (CNPS) et, pour l’emploi de travailleurs étrangers, des formalités particulières auprès de l’Office National pour la Promotion de l’Emploi (ONAPE).",
        "La plupart des contentieux sociaux trouvent leur origine dans un formalisme mal respecté : contrat imprécis, sanction irrégulière, licenciement insuffisamment motivé ou non précédé de la procédure requise. Le cabinet intervient en amont pour sécuriser les décisions de l’employeur et, lorsqu’un différend survient, assiste employeurs comme salariés dans la conciliation puis devant le juge.",
      ],
      services: [
        {
          title: "Contrats et documents internes",
          text: "Contrats à durée déterminée et indéterminée, clauses de mobilité, de confidentialité et de non-concurrence, règlement intérieur, notes de service.",
        },
        {
          title: "Gestion des relations individuelles",
          text: "Procédures disciplinaires, modification du contrat, rupture négociée, licenciement pour motif personnel ou économique, calcul des droits de fin de contrat.",
        },
        {
          title: "Relations collectives",
          text: "Délégués du personnel, négociation d’accords d’établissement, gestion des conflits collectifs, restructurations et compressions d’effectifs.",
        },
        {
          title: "Conciliation et contentieux",
          text: "Assistance devant l’Inspection du Travail, puis représentation devant les juridictions sociales.",
        },
      ],
      framework: [
        "Code du travail de la République du Tchad",
        "Convention collective générale et conventions collectives sectorielles",
        "Régime de la Caisse Nationale de Prévoyance Sociale (CNPS)",
        "Réglementation de l’emploi des travailleurs étrangers et rôle de l’ONAPE",
        "Conventions de l’Organisation internationale du Travail ratifiées par le Tchad",
      ],
      faq: [
        {
          q: "La tentative de conciliation est-elle obligatoire avant de saisir le juge ?",
          a: "Les différends individuels du travail donnent lieu à une tentative de conciliation devant l’Inspection du Travail avant la saisine du juge. Cette étape, bien préparée, permet souvent de résoudre le litige ou d’en réduire l’enjeu.",
        },
        {
          q: "Quelles formalités pour employer un salarié étranger ?",
          a: "L’emploi d’un travailleur étranger suppose un contrat soumis au visa de l’autorité compétente et le respect des règles de séjour. Les formalités et leur délai doivent être anticipés avant la prise de poste.",
        },
        {
          q: "Que risque un employeur en cas de licenciement irrégulier ?",
          a: "Un licenciement prononcé sans motif légitime ou sans respect de la procédure peut ouvrir droit, pour le salarié, à des indemnités et à des dommages-intérêts fixés par le juge. Le cabinet aide à vérifier le motif et la procédure avant toute décision.",
        },
      ],
    },
    en: {
      overview: [
        "Employment relations in Chad are governed by the Labour Code, the general collective agreement and sector agreements, under the supervision of the Labour Inspectorate. Added to these are obligations towards the National Social Insurance Fund (CNPS) and, for the employment of foreign workers, specific formalities with the National Office for the Promotion of Employment (ONAPE).",
        "Most employment disputes stem from formal requirements that were not properly followed: a vague contract, an irregular sanction, or a dismissal with insufficient grounds or without the required procedure. The firm acts upstream to secure the employer’s decisions and, when a dispute arises, assists employers and employees alike in conciliation and then before the courts.",
      ],
      services: [
        {
          title: "Contracts and internal documents",
          text: "Fixed-term and open-ended contracts, mobility, confidentiality and non-compete clauses, internal rules, staff notices.",
        },
        {
          title: "Individual employment relations",
          text: "Disciplinary procedures, contract amendments, negotiated termination, dismissal for personal or economic reasons, calculation of end-of-contract entitlements.",
        },
        {
          title: "Collective relations",
          text: "Staff representatives, negotiation of workplace agreements, handling collective disputes, restructuring and workforce reductions.",
        },
        {
          title: "Conciliation and litigation",
          text: "Assistance before the Labour Inspectorate, then representation before the employment courts.",
        },
      ],
      framework: [
        "Labour Code of the Republic of Chad",
        "General collective agreement and sector collective agreements",
        "National Social Insurance Fund (CNPS) scheme",
        "Regulations on the employment of foreign workers and the role of ONAPE",
        "International Labour Organization conventions ratified by Chad",
      ],
      faq: [
        {
          q: "Is conciliation mandatory before going to court?",
          a: "Individual employment disputes go through a conciliation attempt before the Labour Inspectorate before the court is seised. Well prepared, this stage often resolves the dispute or narrows what is at stake.",
        },
        {
          q: "What formalities apply to employing a foreign worker?",
          a: "Employing a foreign worker requires a contract approved by the competent authority and compliance with residence rules. The formalities and their timeframe should be anticipated before the employee takes up the post.",
        },
        {
          q: "What does an employer risk in the event of an irregular dismissal?",
          a: "A dismissal without legitimate grounds or without following the procedure may entitle the employee to compensation and damages set by the court. The firm helps check the grounds and the procedure before any decision is taken.",
        },
      ],
    },
  },
};
