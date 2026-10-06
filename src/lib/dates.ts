import { FIRM_TIME_ZONE } from "@/lib/appointments";

/**
 * Date et heure affichées à l'heure du cabinet (N'Djamena), quel que soit le fuseau du serveur.
 * Le serveur d'hébergement est réglé sur Europe/Paris : sans fuseau explicite, les horaires du
 * back-office et de l'espace client étaient décalés d'une heure pendant l'heure d'été européenne.
 */
export function formatFirmDateTime(value: Date | string | number): string {
  return new Date(value).toLocaleString("fr-FR", { timeZone: FIRM_TIME_ZONE });
}
