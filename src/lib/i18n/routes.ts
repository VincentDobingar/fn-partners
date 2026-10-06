/**
 * Traduction des segments d'URL pour la version anglaise du site.
 *
 * Les dossiers de `src/app/[locale]` et les `slug` des fichiers de données restent en français
 * (une seule arborescence à maintenir). Pour la locale `en` :
 *  - `next.config.ts` déclare, à partir des tables ci-dessous, les réécritures de l'URL anglaise
 *    publique vers la page interne, et les redirections permanentes des anciennes URL ;
 *  - le composant `@/components/ui/Link` traduit automatiquement les liens internes.
 *
 * Pour ajouter une page : une ligne dans `pageSegments`. Pour ajouter un contenu (domaine,
 * publication, guide, actualité) : une ligne dans la rubrique correspondante de `itemSegments`.
 * Un segment absent des tables reste simplement identique dans les deux langues.
 */

/** Pages : segment français (nom du dossier) → segment anglais. */
const pageSegments: Record<string, string> = {
  "a-propos": "about",
  "le-cabinet": "the-firm",
  "notre-fondateur": "our-founder",
  "notre-equipe": "our-team",
  galerie: "gallery",
  actualites: "news",
  "domaines-expertise": "areas-of-expertise",
  "secteurs-intervention": "sectors",
  implantation: "pan-african-presence",
  ressources: "resources",
  "rendez-vous": "book-an-appointment",
  "soumettre-une-demande": "submit-a-request",
  "suivre-mon-dossier": "track-my-file",
  "mentions-legales": "legal-notice",
  "politique-de-confidentialite": "privacy-policy",
  "politique-cookies": "cookie-policy",
  "conditions-espace-client": "client-area-terms",
};

/** Contenus, par rubrique (segment français de la rubrique) : slug français → slug anglais. */
const itemSegments: Record<string, Record<string, string>> = {
  "domaines-expertise": {
    "droit-des-affaires": "business-law",
    "droit-civil-et-accompagnement-des-ong": "civil-law-and-ngo-support",
    "droit-ohada": "ohada-law",
    "droit-des-societes-et-gouvernance": "corporate-law-and-governance",
    "creation-restructuration-dissolution-entreprises": "company-formation-restructuring-winding-up",
    "fusions-acquisitions-investissements": "mergers-acquisitions-investments",
    "contrats-commerciaux": "commercial-contracts",
    "contentieux-et-arbitrage": "litigation-and-arbitration",
    "recouvrement-de-creances": "debt-recovery",
    "droit-bancaire-et-financier": "banking-and-finance-law",
    "droit-fiscal": "tax-law",
    "droit-du-travail-et-securite-sociale": "employment-and-social-security-law",
    "droit-immobilier-foncier-et-construction": "real-estate-land-and-construction-law",
    "droit-minier-petrolier-et-energetique": "mining-oil-and-energy-law",
    "telecommunications-et-droit-du-numerique": "telecommunications-and-digital-law",
    "protection-des-donnees-et-cybersecurite": "data-protection-and-cybersecurity",
    "propriete-intellectuelle": "intellectual-property",
    "droit-administratif-et-marches-publics": "administrative-and-public-procurement-law",
    "droit-penal-des-affaires": "business-criminal-law",
    "droits-humains-et-libertes-fondamentales": "human-rights-and-fundamental-freedoms",
    "cour-africaine-droits-homme-peuples": "african-court-on-human-and-peoples-rights",
    "mediation-negociation-reglement-amiable-differends": "mediation-negotiation-amicable-dispute-resolution",
  },
  publications: {
    "negociation-contrats-miniers-droit-tchadien": "mining-contract-negotiation-under-chadian-law",
    "creer-une-entreprise-au-tchad-etapes-cles": "setting-up-a-business-in-chad-key-steps",
    "ohada-ce-qui-change-pour-les-entreprises": "ohada-law-what-changes-for-businesses",
    "proteger-les-droits-humains-devant-la-cour-africaine": "protecting-human-rights-before-the-african-court",
  },
  ressources: {
    "guide-creation-entreprise-tchad": "guide-setting-up-a-business-in-chad",
    "guide-recouvrement-creances-ohada": "guide-debt-recovery-in-the-ohada-area",
    "guide-investisseur-etranger-tchad": "guide-foreign-investors-in-chad",
  },
  actualites: {
    "formation-contrats-miniers-petroliers-gaziers-fa-uja": "fa-uja-mining-oil-gas-contracts-training",
    "forum-ia-droit-africain-abidjan": "ai-and-african-law-forum-abidjan",
    "presomption-innocence-personnes-interpellees": "presumption-of-innocence-persons-in-custody",
    "journee-africaine-lutte-corruption-jeunesse": "african-anti-corruption-day-youth",
    "week-end-africain-droit-minier-energie": "african-mining-and-energy-law-weekend",
    "quarantenaire-jeunes-avocats-cote-ivoire": "ivorian-young-lawyers-40th-anniversary",
    "concours-national-plaidoiries-ujat": "ujat-national-pleading-competition",
    "election-president-fa-uja-dakar": "fa-uja-president-election-dakar",
    "inauguration-maison-avocat-lualaba": "lualaba-maison-de-l-avocat-inauguration",
  },
};

const enSegments: Record<string, string> = Object.assign({}, pageSegments, ...Object.values(itemSegments));

const frSegments: Record<string, string> = Object.fromEntries(
  Object.entries(enSegments).map(([fr, en]) => [en, fr])
);

function splitSuffix(path: string): [string, string] {
  const index = path.search(/[?#]/);
  return index === -1 ? [path, ""] : [path.slice(0, index), path.slice(index)];
}

function isEnglishPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

function mapSegments(pathname: string, table: Record<string, string>): string {
  return pathname
    .split("/")
    .map((segment, index) => (index < 2 ? segment : (table[segment] ?? segment)))
    .join("/");
}

/**
 * Chemin interne (`/en/domaines-expertise/droit-ohada`) → URL publique
 * (`/en/areas-of-expertise/ohada-law`). Les chemins hors `/en` sont renvoyés tels quels.
 */
export function localizePath(path: string): string {
  const [pathname, suffix] = splitSuffix(path);
  if (!isEnglishPath(pathname)) return path;
  return mapSegments(pathname, enSegments) + suffix;
}

/**
 * URL publique (`/en/areas-of-expertise/ohada-law`) → chemin interne correspondant aux
 * dossiers de `src/app` (`/en/domaines-expertise/droit-ohada`).
 */
export function internalPath(path: string): string {
  const [pathname, suffix] = splitSuffix(path);
  if (!isEnglishPath(pathname)) return path;
  return mapSegments(pathname, frSegments) + suffix;
}

/** URL publique de la même page dans une autre langue (sélecteur de langue, hreflang). */
export function switchLocalePath(pathname: string, target: string): string {
  const segments = internalPath(pathname).split("/");
  segments[1] = target;
  return localizePath(segments.join("/") || `/${target}`);
}

/**
 * Règles de routage de la version anglaise, consommées par `next.config.ts` :
 *  - `rewrites` : URL anglaise publique → page interne (dossiers en français) ;
 *  - `redirects` : ancienne URL anglaise à segments français → URL anglaise (redirection 308).
 */
export function englishRouteRules() {
  const pairs: { internal: string; publicPath: string }[] = [];

  for (const [fr, en] of Object.entries(pageSegments)) {
    pairs.push({ internal: `/en/${fr}`, publicPath: `/en/${en}` });
  }
  for (const [section, items] of Object.entries(itemSegments)) {
    const sectionEn = pageSegments[section] ?? section;
    // Rubrique dont seul le contenu est traduit (ex. /en/publications/…)
    for (const [fr, en] of Object.entries(items)) {
      pairs.push({ internal: `/en/${section}/${fr}`, publicPath: `/en/${sectionEn}/${en}` });
    }
  }

  const changed = pairs.filter((pair) => pair.internal !== pair.publicPath);
  return {
    rewrites: changed.map((pair) => ({ source: pair.publicPath, destination: pair.internal })),
    redirects: changed.map((pair) => ({ source: pair.internal, destination: pair.publicPath, permanent: true })),
  };
}
