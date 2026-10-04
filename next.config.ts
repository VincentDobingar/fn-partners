import type { NextConfig } from "next";
import { englishRouteRules } from "./src/lib/i18n/routes";

const englishRoutes = englishRouteRules();

const isDev = process.env.NODE_ENV !== "production";

// Politique de sécurité du contenu. Les domaines Google ne servent qu'à la carte de la page
// Contact/Implantation (iframe) et, si un identifiant GA4 est configuré et que le visiteur y
// consent, à la mesure d'audience. `'unsafe-inline'` reste nécessaire pour les scripts d'amorçage
// de Next.js sur des pages pré-rendues (pas de nonce possible sans rendu dynamique).
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self' data:",
  "media-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""} https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com`,
  "frame-src https://maps.google.com https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

// Espaces privés (back-office, espace client, API) : jamais indexés ni mis en cache.
const privateHeaders = [
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
  { key: "Cache-Control", value: "no-store" },
];

// Fichiers statiques de /public : conservés 30 jours par le navigateur (réseaux mobiles lents).
const longCache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];

const nextConfig: NextConfig = {
  // Build autonome (server.js + node_modules minimal) : indispensable pour un déploiement
  // sur hébergement mutualisé (o2switch) sans avoir à lancer `next build` ni `npm install`
  // sur le serveur, dont les ressources mémoire sont limitées.
  output: "standalone",
  poweredByHeader: false,
  // Le layout racine ([locale]/layout.tsx) est défini sur un segment dynamique de premier
  // niveau : global-not-found.tsx est donc requis pour une page 404 stylée sur les routes
  // qui ne correspondent à aucune page (voir node_modules/next/dist/docs .../not-found.md).
  experimental: {
    globalNotFound: true,
  },
  // Knex référence en interne tous ses dialectes possibles (dont des paquets optionnels non
  // installés, ex. better-sqlite3) via des require() dynamiques que le bundler tente sinon de
  // résoudre statiquement. On l'exclut du bundling (avec son driver mysql2) au profit d'un
  // require() Node natif à l'exécution — cf. node_modules/next/dist/docs/.../serverExternalPackages.md.
  serverExternalPackages: ["knex", "mysql2"],
  images: {
    // Les images redimensionnées sont gardées 31 jours : le serveur mutualisé ne les recalcule
    // pas à chaque visite et les navigateurs les conservent en cache.
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/backoffice/:path*", headers: privateHeaders },
      { source: "/client/:path*", headers: privateHeaders },
      { source: "/api/:path*", headers: privateHeaders },
      { source: "/images/:path*", headers: longCache },
      { source: "/team/:path*", headers: longCache },
      { source: "/videos/:path*", headers: longCache },
      { source: "/documents/:path*", headers: longCache },
    ];
  },
  async redirects() {
    return [
      // Une seule adresse officielle : le domaine nu redirige vers www (URL canonique du site).
      {
        source: "/:path*",
        has: [{ type: "host", value: "fn-partners\\.com" }],
        destination: "https://www.fn-partners.com/:path*",
        permanent: true,
      },
      // Anciennes URL anglaises à segments français (/en/domaines-expertise/…) → URL anglaises.
      ...englishRoutes.redirects,
    ];
  },
  async rewrites() {
    return {
      // URL anglaises publiques (/en/areas-of-expertise/…) servies par les pages internes.
      beforeFiles: englishRoutes.rewrites,
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
