/**
 * Blocs de contenu des articles : une chaîne est un paragraphe ; les autres formes
 * permettent d’insérer un intertitre, une liste ou un encadré.
 */
export type ContentBlock = string | { heading: string } | { list: string[] } | { note: string };
