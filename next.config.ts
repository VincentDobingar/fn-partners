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
};

export default nextConfig;
