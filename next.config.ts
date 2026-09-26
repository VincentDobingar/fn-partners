import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build autonome (server.js + node_modules minimal) : indispensable pour un déploiement
  // sur hébergement mutualisé (o2switch) sans avoir à lancer `next build` ni `npm install`
  // sur le serveur, dont les ressources mémoire sont limitées.
  output: "standalone",
};

export default nextConfig;
