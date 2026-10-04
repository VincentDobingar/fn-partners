import type { ExpertiseDetailEntry } from "./types";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";

export type { ExpertiseDetail, ExpertiseDetailEntry } from "./types";

/**
 * Contenu détaillé des pages « Domaines d’expertise », indexé par `slug` du domaine
 * (voir `src/lib/data/expertise.ts` pour le titre, le résumé, les problématiques et les clients).
 */
export const expertiseDetails: Record<string, ExpertiseDetailEntry> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
};

export function getExpertiseDetail(slug: string): ExpertiseDetailEntry | undefined {
  return expertiseDetails[slug];
}
