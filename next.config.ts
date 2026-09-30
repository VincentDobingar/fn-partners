import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build autonome (server.js + node_modules minimal) : indispensable pour un déploiement
  // sur hébergement mutualisé (o2switch) sans avoir à lancer `next build` ni `npm install`
  // sur le serveur, dont les ressources mémoire sont limitées.
  output: "standalone",
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
};

export default nextConfig;
