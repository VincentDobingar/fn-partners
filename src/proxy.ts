import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

function detectLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (header) {
    const preferred = header.split(",")[0]?.split("-")[0];
    if (preferred && isLocale(preferred)) return preferred;
  }
  return defaultLocale;
}

// Les URL anglaises traduites (/en/areas-of-expertise/…) sont gérées par les réécritures et
// redirections déclarées dans next.config.ts à partir de src/lib/i18n/routes.ts.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|backoffice|client|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|webp|avif|ico|txt|xml|pdf|mp4|webm|mov|m4v)$).*)",
  ],
};
