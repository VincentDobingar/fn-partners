import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/data/firm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/jsonld";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// Police d’accent (petites mentions) : non préchargée pour alléger le premier affichage.
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"], preload: false });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : defaultLocale;
  const title =
    loc === "fr"
      ? "FN & PARTNERS — Cabinet d’avocats et de conseil juridique au Tchad"
      : "FN & PARTNERS — Law Firm and Legal Advisory in Chad";
  const description =
    loc === "fr"
      ? "Cabinet d’avocats panafricain basé à N’Djamena, Tchad. Droit des affaires, droit OHADA, contentieux, droits humains et conseil aux entreprises et investisseurs."
      : "Pan-African law firm based in N’Djamena, Chad. Business law, OHADA law, litigation, human rights and advisory services for companies and investors.";

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s — FN & PARTNERS` },
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${loc}`,
      siteName: "FN & PARTNERS",
      locale: loc === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    formatDetection: { telephone: true, email: true, address: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:text-navy"
        >
          {dict.common.skipToContent}
        </a>
        <JsonLd data={organizationSchema(locale)} />
        <JsonLd data={websiteSchema(locale)} />
        <Header locale={locale} dict={dict} />
        <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton locale={locale} />
        <CookieConsent locale={locale} dict={dict} />
      </body>
    </html>
  );
}
