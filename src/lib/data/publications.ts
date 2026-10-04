import type { ContentBlock } from "./content";

export interface Publication {
  slug: string;
  /** ISO date (YYYY-MM-DD), renseignée uniquement quand elle est confirmée. */
  date?: string;
  /** Date de dernière mise à jour (ISO), si l’article a été révisé depuis sa publication. */
  updated?: string;
  category: { fr: string; en: string };
  /** Image de couverture (ex. jaquette d'un ouvrage), fichier dans /public/images/gallery. */
  image?: string;
  imageAlt?: { fr: string; en: string };
  /** Domaines d’expertise liés (slugs de `expertise.ts`), proposés en fin d’article. */
  relatedExpertise?: string[];
  fr: { title: string; excerpt: string; content: ContentBlock[] };
  en: { title: string; excerpt: string; content: ContentBlock[] };
  /** `true` pour un contenu de démonstration : il n’est alors ni listé, ni indexé. */
  isDemo: boolean;
}

export const publications: Publication[] = [
  {
    slug: "negociation-contrats-miniers-droit-tchadien",
    category: { fr: "Droit minier", en: "Mining Law" },
    image: "/images/gallery/livre-negociation-contrats-miniers.jpg",
    imageAlt: {
      fr: "Couverture de l’ouvrage « La négociation des contrats miniers en droit tchadien » de Me Frédéric NANADJINGUE",
      en: "Cover of the book “Mining Contract Negotiation under Chadian Law” by Me Frédéric NANADJINGUE",
    },
    isDemo: false,
    fr: {
      title: "La négociation des contrats miniers en droit tchadien",
      excerpt: "Un ouvrage de Me Frédéric NANADJINGUE, avec un avant-propos du Dr Achille NGWANZA (Jus AFRICA) et une préface du Dr Youssouf TOM, ancien Garde des Sceaux du Tchad.",
      content: [
        "Me Frédéric NANADJINGUE, fondateur du cabinet FN & PARTNERS, est l’auteur de l’ouvrage « La négociation des contrats miniers en droit tchadien ».",
        "L’avant-propos est signé du Dr Achille NGWANZA, associé-gérant de Jus AFRICA, et la préface du Dr Youssouf TOM, ancien Ministre de la Justice et des Droits Humains, Garde des Sceaux.",
        "Me Frédéric NANADJINGUE est Avocat-consultant inscrit au grand tableau de l’Ordre des Avocats au Barreau du Tchad et auprès de la Cour africaine des droits de l’homme et des peuples. Ancien Président de l’Union des Jeunes Avocats du Tchad (UJAT) et du Réseau des Unions et Associations des Jeunes Avocats d’Afrique Centrale (RUBAC), il est Président en exercice de la Fédération africaine des Associations et Unions des Jeunes Avocats (FA-UJA).",
      ],
    },
    en: {
      title: "Mining Contract Negotiation under Chadian Law",
      excerpt: "A book by Me Frédéric NANADJINGUE, with a foreword by Dr Achille NGWANZA (Jus AFRICA) and a preface by Dr Youssouf TOM, former Minister of Justice of Chad.",
      content: [
        "Me Frédéric NANADJINGUE, founder of FN & PARTNERS, is the author of the book “Mining Contract Negotiation under Chadian Law”.",
        "The foreword is written by Dr Achille NGWANZA, managing partner of Jus AFRICA, and the preface by Dr Youssouf TOM, former Minister of Justice and Human Rights, Keeper of the Seals.",
        "Me Frédéric NANADJINGUE is a consulting attorney registered with the Chad Bar Association and before the African Court on Human and Peoples’ Rights. Former President of the Union of Young Lawyers of Chad (UJAT) and of the Network of Central African Bar Young Lawyers’ Associations and Unions (RUBAC), he currently serves as President of the African Federation of Young Lawyers’ Associations and Unions (FA-UJA).",
      ],
    },
  },
  {
    slug: "creer-une-entreprise-au-tchad-etapes-cles",
    date: "2026-10-03",
    category: { fr: "Droit des affaires", en: "Business Law" },
    relatedExpertise: ["creation-restructuration-dissolution-entreprises", "droit-des-societes-et-gouvernance", "droit-fiscal"],
    isDemo: false,
    fr: {
      title: "Créer une entreprise au Tchad : les étapes clés",
      excerpt:
        "Forme juridique, statuts, capital, immatriculation, autorisations : les principales étapes juridiques à anticiper pour constituer une société au Tchad.",
      content: [
        "Créer une entreprise au Tchad repose sur un socle commun à dix-sept pays africains : le droit OHADA, qui définit les formes de sociétés et les règles de leur constitution. S’y ajoutent les formalités nationales d’immatriculation, de fiscalité et de sécurité sociale. Bien préparé, le parcours est balisé ; les difficultés naissent le plus souvent de choix faits trop vite au départ.",
        { heading: "1. Choisir la forme juridique" },
        "Le choix de la structure détermine la responsabilité des associés, le fonctionnement de la société et sa capacité à accueillir des investisseurs. Les formes les plus utilisées sont les suivantes :",
        {
          list: [
            "L’entreprise individuelle et le statut de l’entreprenant, pour une activité exercée seul, sans création d’une personne morale distincte.",
            "La société à responsabilité limitée (SARL), y compris à associé unique : la responsabilité des associés est limitée à leurs apports et le fonctionnement est simple.",
            "La société par actions simplifiée (SAS), qui laisse aux statuts une grande liberté pour organiser la direction et les relations entre associés.",
            "La société anonyme (SA), adaptée aux projets importants ; l’Acte uniforme fixe son capital minimum à dix millions de francs CFA.",
            "La succursale, pour une société étrangère qui souhaite exercer au Tchad sans créer de filiale — une solution en principe temporaire en droit OHADA.",
          ],
        },
        { heading: "2. Rédiger les statuts et libérer le capital" },
        "Les statuts constituent le contrat de société : objet, siège, durée, capital, apports, pouvoirs des dirigeants, règles de majorité, cession des titres. Des statuts recopiés sur un modèle règlent rarement les situations qui comptent, comme l’entrée d’un nouvel associé, le départ d’un fondateur ou un désaccord sur la stratégie.",
        "Les apports en numéraire sont déposés sur un compte ouvert au nom de la société en formation ou chez un notaire, et leur versement est constaté dans les formes prévues par l’Acte uniforme. Les apports en nature doivent être évalués, avec l’intervention d’un commissaire aux apports dans les cas prévus par les textes.",
        { heading: "3. Immatriculer l’entreprise" },
        "La société acquiert la personnalité juridique à compter de son immatriculation au Registre du Commerce et du Crédit Mobilier (RCCM). Elle doit également obtenir son numéro d’identification fiscale (NIF) et s’affilier à la Caisse Nationale de Prévoyance Sociale (CNPS) dès lors qu’elle emploie du personnel. L’Agence Nationale des Investissements et des Exportations (ANIE) centralise une partie de ces formalités.",
        { heading: "4. Obtenir les autorisations propres à l’activité" },
        "Certaines activités ne peuvent être exercées qu’avec un agrément, une licence ou une autorisation : banque et microfinance, assurance, télécommunications, mines et hydrocarbures, transport, santé, enseignement, sécurité privée, entre autres. Ces autorisations doivent être identifiées avant la création, car elles conditionnent parfois la forme sociale, le capital ou la composition de l’actionnariat.",
        { heading: "5. Respecter les obligations qui suivent la création" },
        {
          list: [
            "Tenir une comptabilité conforme au système comptable OHADA et arrêter des comptes annuels.",
            "Réunir chaque année les associés pour approuver les comptes et tenir les registres de la société.",
            "Déposer les déclarations fiscales et sociales dans les délais.",
            "Établir des contrats de travail écrits et déclarer les salariés.",
            "Mettre à jour le RCCM à chaque modification : dirigeant, siège, capital, objet.",
          ],
        },
        { heading: "Les erreurs les plus fréquentes" },
        {
          list: [
            "Démarrer l’activité avant l’immatriculation, ce qui engage personnellement ceux qui agissent au nom de la société en formation.",
            "Choisir une forme sociale en fonction de son seul coût de constitution.",
            "Ne rien prévoir par écrit entre associés sur la répartition des rôles et les conditions de sortie.",
            "Confondre le patrimoine de la société et celui du dirigeant.",
          ],
        },
        {
          note: "Les formalités, délais et coûts évoluent. Avant de vous engager, faites vérifier les exigences applicables à votre projet à la date de votre démarche.",
        },
      ],
    },
    en: {
      title: "Setting Up a Business in Chad: Key Steps",
      excerpt:
        "Legal form, articles, capital, registration, authorisations: the main legal steps to anticipate when incorporating a company in Chad.",
      content: [
        "Setting up a business in Chad rests on a foundation shared by seventeen African countries: OHADA law, which defines company types and the rules for forming them. National formalities for registration, tax and social security come on top. With proper preparation the path is well marked; difficulties most often arise from choices made too quickly at the outset.",
        { heading: "1. Choose the legal form" },
        "The choice of structure determines the shareholders’ liability, how the company operates and its ability to take on investors. The most commonly used forms are:",
        {
          list: [
            "The sole proprietorship and the “entreprenant” status, for a business run alone, without creating a separate legal entity.",
            "The limited liability company (SARL), including with a single shareholder: liability is limited to contributions and operation is simple.",
            "The simplified joint-stock company (SAS), whose articles are given great freedom to organise management and relations between shareholders.",
            "The public limited company (SA), suited to larger projects; the Uniform Act sets its minimum share capital at ten million CFA francs.",
            "The branch, for a foreign company wishing to operate in Chad without creating a subsidiary — in principle a temporary solution under OHADA law.",
          ],
        },
        { heading: "2. Draft the articles and pay up the capital" },
        "The articles are the company’s contract: purpose, registered office, duration, capital, contributions, directors’ powers, majority rules, transfer of shares. Articles copied from a template rarely deal with the situations that matter, such as a new shareholder coming in, a founder leaving or a disagreement over strategy.",
        "Cash contributions are deposited in an account opened in the name of the company being formed or with a notary, and payment is recorded in the form required by the Uniform Act. Contributions in kind must be valued, with a contributions auditor involved in the cases provided for by law.",
        { heading: "3. Register the company" },
        "The company acquires legal personality upon registration with the Trade and Personal Property Credit Register (RCCM). It must also obtain its tax identification number (NIF) and register with the National Social Insurance Fund (CNPS) as soon as it employs staff. The National Agency for Investment and Exports (ANIE) centralises part of these formalities.",
        { heading: "4. Obtain activity-specific authorisations" },
        "Some activities may only be carried out with an approval, licence or authorisation: banking and microfinance, insurance, telecommunications, mining and hydrocarbons, transport, health, education and private security, among others. These authorisations must be identified before incorporation, as they sometimes determine the company type, the capital or the shareholding.",
        { heading: "5. Meet the obligations that follow incorporation" },
        {
          list: [
            "Keep accounts in line with the OHADA accounting system and draw up annual financial statements.",
            "Convene the shareholders each year to approve the accounts and keep the company’s registers.",
            "File tax and social security returns on time.",
            "Draw up written employment contracts and register employees.",
            "Update the RCCM whenever something changes: director, registered office, capital, purpose.",
          ],
        },
        { heading: "The most common mistakes" },
        {
          list: [
            "Starting to trade before registration, which makes those acting on behalf of the company being formed personally liable.",
            "Choosing a company type solely on the basis of its set-up cost.",
            "Putting nothing in writing between shareholders about roles and exit terms.",
            "Mixing up the company’s assets with those of its director.",
          ],
        },
        {
          note: "Formalities, timeframes and costs change. Before committing, have the requirements applicable to your project checked as at the date you proceed.",
        },
      ],
    },
  },
  {
    slug: "ohada-ce-qui-change-pour-les-entreprises",
    date: "2026-10-03",
    category: { fr: "Droit OHADA", en: "OHADA Law" },
    relatedExpertise: ["droit-ohada", "recouvrement-de-creances", "droit-civil-et-accompagnement-des-ong"],
    isDemo: false,
    fr: {
      title: "Droit OHADA : ce qui change pour les entreprises",
      excerpt:
        "Recouvrement et saisies, créances sur les personnes publiques, comptabilité des associations et ONG : les évolutions récentes du droit OHADA à connaître.",
      content: [
        "Le droit OHADA n’est pas figé : les Actes uniformes sont régulièrement révisés et de nouveaux textes complètent l’édifice. Deux évolutions récentes concernent directement les entreprises et les organisations établies au Tchad : la refonte des règles de recouvrement et d’exécution forcée, et la création d’un référentiel comptable pour les entités à but non lucratif.",
        { heading: "Un nouvel Acte uniforme sur le recouvrement et les voies d’exécution" },
        "L’Acte uniforme portant organisation des procédures simplifiées de recouvrement et des voies d’exécution a été entièrement révisé. Le nouveau texte, adopté le 17 octobre 2023 à l’occasion des trente ans de l’OHADA, est entré en vigueur le 16 février 2024 et remplace celui de 1998.",
        "Il conserve les outils que les praticiens connaissent — injonction de payer, saisies conservatoires, saisie-attribution, saisie-vente, saisie immobilière — mais en réorganise la présentation et en précise le régime. Un chapitre préliminaire rassemble désormais les définitions et les règles communes à toutes les procédures, notamment la notion de tiers saisi et le rôle des autorités chargées de l’exécution.",
        { heading: "Créances sur les personnes publiques : un levier nouveau" },
        "Les personnes morales de droit public continuent de bénéficier de l’immunité d’exécution : aucune saisie ne peut être pratiquée sur leurs biens. Le nouveau texte ouvre cependant une voie au créancier : lorsqu’une mise en demeure de payer est restée sans effet pendant trois mois, il peut demander l’inscription de sa créance au budget de la personne publique au titre des dépenses obligatoires.",
        "Pour les entreprises qui travaillent avec l’État, les collectivités ou les établissements publics, cette disposition invite à soigner la mise en demeure et à conserver les preuves de la créance : titre, bons de commande, procès-verbaux de réception, factures.",
        { heading: "Associations, fondations, ONG : une comptabilité désormais harmonisée" },
        "L’Acte uniforme relatif au système comptable des entités à but non lucratif (SYCEBNL), adopté en décembre 2022, est entré en vigueur le 1er janvier 2024. Il s’applique aux entités à but non lucratif qui ont leur siège ou exercent leurs activités dans un État membre, sous réserve des exceptions qu’il prévoit, et distingue un système normal et un système minimal de trésorerie pour les plus petites structures.",
        "Les organisations concernées doivent adapter leur plan de comptes, la présentation de leurs états financiers et, souvent, leurs procédures internes. Cette mise à niveau s’articule avec les exigences propres à chaque bailleur de fonds.",
        { heading: "Ce qui reste d’actualité" },
        {
          list: [
            "La médiation dispose depuis 2017 de son propre Acte uniforme : les clauses de médiation insérées dans les contrats ont un cadre juridique clair.",
            "L’arbitrage a été modernisé la même année, avec un nouvel Acte uniforme et un nouveau règlement d’arbitrage de la CCJA.",
            "Le droit comptable des entreprises est régi par l’Acte uniforme de 2017 et le système comptable OHADA révisé.",
          ],
        },
        { heading: "Trois vérifications utiles" },
        {
          list: [
            "Mettre à jour les modèles de mise en demeure, de requête et de protocole d’accord utilisés pour le recouvrement.",
            "Relire les contrats conclus avec des personnes publiques : conditions de paiement, pièces justificatives, modalités de réclamation.",
            "Pour une association ou une ONG, vérifier avec son expert-comptable que la comptabilité est tenue selon le SYCEBNL.",
          ],
        },
        {
          note: "Cet article présente les grandes lignes de textes techniques. Leur application à une situation donnée suppose une analyse au cas par cas.",
        },
      ],
    },
    en: {
      title: "OHADA Law: What Changes for Businesses",
      excerpt:
        "Debt recovery and attachments, claims against public entities, accounting for associations and NGOs: recent developments in OHADA law worth knowing.",
      content: [
        "OHADA law is not static: Uniform Acts are regularly revised and new texts add to the structure. Two recent developments directly affect companies and organisations established in Chad: the overhaul of the rules on debt recovery and enforcement, and the creation of an accounting framework for non-profit entities.",
        { heading: "A new Uniform Act on debt recovery and enforcement" },
        "The Uniform Act organising simplified recovery procedures and enforcement measures has been entirely revised. The new text, adopted on 17 October 2023 to mark OHADA’s thirtieth anniversary, entered into force on 16 February 2024 and replaces the 1998 Act.",
        "It keeps the tools practitioners know — order for payment, protective attachments, attachment of receivables, seizure and sale, seizure of real property — but reorganises their presentation and clarifies their regime. A preliminary chapter now brings together the definitions and rules common to all procedures, including the notion of the garnishee and the role of the authorities responsible for enforcement.",
        { heading: "Claims against public entities: a new lever" },
        "Public-law entities continue to enjoy immunity from enforcement: their assets cannot be attached. The new text nevertheless opens a route for the creditor: where a formal demand for payment has gone unanswered for three months, the creditor may request that the debt be entered in the public entity’s budget as mandatory expenditure.",
        "For companies working with the State, local authorities or public bodies, this provision is a reason to take care over the formal demand and to keep evidence of the debt: the underlying instrument, purchase orders, acceptance reports, invoices.",
        { heading: "Associations, foundations, NGOs: accounting is now harmonised" },
        "The Uniform Act on the accounting system for non-profit entities (SYCEBNL), adopted in December 2022, entered into force on 1 January 2024. It applies to non-profit entities that have their registered office or carry out activities in a member state, subject to the exceptions it provides, and distinguishes a normal system from a minimal cash-based system for the smallest organisations.",
        "The organisations concerned must adapt their chart of accounts, the presentation of their financial statements and, often, their internal procedures. This upgrade has to be combined with each donor’s own requirements.",
        { heading: "What remains relevant" },
        {
          list: [
            "Mediation has had its own Uniform Act since 2017: mediation clauses in contracts have a clear legal framework.",
            "Arbitration was modernised the same year, with a new Uniform Act and new CCJA arbitration rules.",
            "Company accounting is governed by the 2017 Uniform Act and the revised OHADA accounting system.",
          ],
        },
        { heading: "Three useful checks" },
        {
          list: [
            "Update the templates for formal notices, court applications and settlement agreements used in debt recovery.",
            "Review contracts with public entities: payment terms, supporting documents, claims procedure.",
            "For an association or NGO, check with your accountant that the books are kept in accordance with the SYCEBNL.",
          ],
        },
        {
          note: "This article outlines technical texts in broad terms. Applying them to a given situation requires case-by-case analysis.",
        },
      ],
    },
  },
  {
    slug: "proteger-les-droits-humains-devant-la-cour-africaine",
    date: "2026-10-03",
    category: { fr: "Droits humains", en: "Human Rights" },
    relatedExpertise: ["cour-africaine-droits-homme-peuples", "droits-humains-et-libertes-fondamentales"],
    isDemo: false,
    fr: {
      title: "Protéger les droits humains devant la Cour africaine des droits de l’homme et des peuples",
      excerpt:
        "Qui peut saisir la Cour africaine, à Arusha, à quelles conditions et par quelle voie : l’essentiel pour comprendre la procédure.",
      content: [
        "La Cour africaine des droits de l’homme et des peuples est la juridiction continentale chargée de veiller au respect de la Charte africaine et des autres instruments relatifs aux droits de l’homme ratifiés par les États. Elle siège à Arusha, en Tanzanie. Ses arrêts sont obligatoires pour les États parties à l’instance.",
        { heading: "Une Cour créée par le Protocole de Ouagadougou" },
        "La Cour a été instituée par un Protocole à la Charte africaine adopté à Ouagadougou en 1998. Selon son rapport d’activité 2024, trente-quatre États de l’Union africaine avaient ratifié ce Protocole au 31 décembre 2024. Le Tchad l’a ratifié en janvier 2016.",
        { heading: "Qui peut saisir la Cour ?" },
        "Le Protocole ouvre la saisine à la Commission africaine des droits de l’homme et des peuples, aux États parties et aux organisations intergouvernementales africaines. Les individus et les organisations non gouvernementales dotées du statut d’observateur auprès de la Commission peuvent également la saisir directement, mais à une condition : que l’État mis en cause ait déposé la déclaration prévue à l’article 34(6) du Protocole.",
        "Cette déclaration reste rare. D’après le même rapport, seuls huit États l’avaient déposée fin 2024, et le Tchad n’en faisait pas partie. Concrètement, une personne qui se plaint d’une violation imputée à un État n’ayant pas fait cette déclaration ne peut pas saisir directement la Cour : elle peut adresser une communication à la Commission africaine, à Banjul, laquelle a la faculté de porter l’affaire devant la Cour.",
        { heading: "Les conditions de recevabilité" },
        "Qu’elle soit portée devant la Cour ou devant la Commission, une plainte doit satisfaire aux conditions de l’article 56 de la Charte. Elle doit notamment :",
        {
          list: [
            "indiquer l’identité de son auteur, même si celui-ci demande l’anonymat ;",
            "être compatible avec la Charte et l’Acte constitutif de l’Union africaine ;",
            "ne pas être rédigée en termes outrageants ;",
            "ne pas reposer exclusivement sur des informations diffusées par les médias ;",
            "être postérieure à l’épuisement des recours internes, à moins que ceux-ci ne se prolongent de façon anormale ;",
            "être introduite dans un délai raisonnable ;",
            "ne pas porter sur une affaire déjà réglée par une autre instance internationale.",
          ],
        },
        "L’épuisement des recours internes est, en pratique, le point le plus discuté : il faut démontrer que les juridictions nationales ont été saisies jusqu’au dernier degré utile, ou expliquer pourquoi ces recours étaient indisponibles ou inefficaces.",
        { heading: "Ce que la Cour peut décider" },
        {
          list: [
            "Ordonner des mesures provisoires dans les cas d’extrême gravité ou d’urgence, pour éviter un dommage irréparable.",
            "Constater la violation d’un droit garanti par la Charte ou par un autre instrument ratifié par l’État.",
            "Ordonner des mesures de réparation, dont le paiement d’une indemnisation.",
          ],
        },
        { heading: "Préparer une requête" },
        "Une requête solide repose sur un exposé précis des faits, des preuves datées, la démonstration de chaque condition de recevabilité et une demande de réparation chiffrée et justifiée. La Cour dispose par ailleurs d’un mécanisme d’assistance judiciaire au bénéfice des requérants sans ressources.",
        {
          note: "L’état des ratifications et des déclarations évolue : il doit être vérifié à la date de la démarche. Chaque situation appelle une étude de recevabilité préalable.",
        },
      ],
    },
    en: {
      title: "Protecting Human Rights Before the African Court on Human and Peoples’ Rights",
      excerpt:
        "Who can bring a case before the African Court in Arusha, on what conditions and by which route: the essentials for understanding the procedure.",
      content: [
        "The African Court on Human and Peoples’ Rights is the continental court responsible for ensuring respect for the African Charter and the other human rights instruments ratified by states. It sits in Arusha, Tanzania. Its judgments are binding on the states that are parties to the case.",
        { heading: "A Court established by the Ouagadougou Protocol" },
        "The Court was established by a Protocol to the African Charter adopted in Ouagadougou in 1998. According to its 2024 activity report, thirty-four African Union member states had ratified the Protocol as at 31 December 2024. Chad ratified it in January 2016.",
        { heading: "Who can bring a case?" },
        "The Protocol allows cases to be brought by the African Commission on Human and Peoples’ Rights, by state parties and by African intergovernmental organisations. Individuals and non-governmental organisations with observer status before the Commission may also bring cases directly, but on one condition: that the respondent state has deposited the declaration provided for in Article 34(6) of the Protocol.",
        "That declaration remains rare. According to the same report, only eight states had deposited it at the end of 2024, and Chad was not among them. In practice, a person complaining of a violation attributed to a state that has not made the declaration cannot go directly to the Court: they may submit a communication to the African Commission, in Banjul, which has the power to refer the case to the Court.",
        { heading: "Admissibility conditions" },
        "Whether brought before the Court or the Commission, a complaint must satisfy the conditions of Article 56 of the Charter. In particular it must:",
        {
          list: [
            "indicate the identity of its author, even if anonymity is requested;",
            "be compatible with the Charter and the Constitutive Act of the African Union;",
            "not be written in disparaging language;",
            "not be based exclusively on news disseminated through the media;",
            "be submitted after domestic remedies have been exhausted, unless these are unduly prolonged;",
            "be submitted within a reasonable time;",
            "not deal with a case already settled by another international body.",
          ],
        },
        "Exhaustion of domestic remedies is, in practice, the most debated point: it must be shown that the national courts were seised up to the last useful level, or explained why those remedies were unavailable or ineffective.",
        { heading: "What the Court can decide" },
        {
          list: [
            "Order provisional measures in cases of extreme gravity or urgency, to avoid irreparable harm.",
            "Find a violation of a right guaranteed by the Charter or by another instrument ratified by the state.",
            "Order reparations, including the payment of compensation.",
          ],
        },
        { heading: "Preparing an application" },
        "A sound application rests on a precise statement of facts, dated evidence, proof that each admissibility condition is met and a quantified, substantiated claim for reparation. The Court also has a legal aid scheme for applicants without means.",
        {
          note: "The status of ratifications and declarations changes and must be checked at the date of filing. Every situation calls for a prior admissibility review.",
        },
      ],
    },
  },
];

/** Publications visibles sur le site (les contenus de démonstration sont exclus). */
export const publishedPublications = publications.filter((p) => !p.isDemo);

export function getPublicationBySlug(slug: string) {
  return publishedPublications.find((p) => p.slug === slug);
}
