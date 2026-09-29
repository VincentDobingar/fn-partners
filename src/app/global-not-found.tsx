import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Page introuvable — FN & PARTNERS",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-navy text-white">
        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-lg text-center">
            <div className="kicker text-gold-light mb-4">Erreur 404 · 404 Error</div>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.1]">
              Page introuvable
              <br />
              Page Not Found
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              La page demandée n’existe pas ou a été déplacée.
              <br />
              The requested page does not exist or has moved.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/fr"
                className="inline-flex items-center rounded-sm bg-gold text-navy px-6 py-3 text-sm hover:bg-gold-light"
              >
                Accueil — Français
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center rounded-sm border border-white/30 px-6 py-3 text-sm hover:border-gold-light hover:text-gold-light"
              >
                Homepage — English
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
