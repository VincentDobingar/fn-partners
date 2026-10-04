export interface ExpertiseDetail {
  /** Présentation détaillée du domaine (paragraphes). */
  overview: string[];
  /** Manière dont le cabinet intervient, prestation par prestation. */
  services: { title: string; text: string }[];
  /** Textes et institutions de référence. */
  framework: string[];
  /** Questions fréquentes complémentaires (ajoutées à celles de `expertise.ts`). */
  faq: { q: string; a: string }[];
}

export interface ExpertiseDetailEntry {
  /** Slugs des domaines connexes, proposés en bas de page. */
  related: string[];
  fr: ExpertiseDetail;
  en: ExpertiseDetail;
}
