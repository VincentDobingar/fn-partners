import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localizePath } from "@/lib/i18n/routes";

/**
 * Lien interne du site. À utiliser à la place de `next/link` : les chemins sont écrits avec les
 * segments français (`/${locale}/domaines-expertise`) et sont traduits automatiquement en URL
 * anglaise lorsque la locale est `en` (voir `src/lib/i18n/routes.ts`).
 */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink href={typeof href === "string" ? localizePath(href) : href} {...props} />;
}
