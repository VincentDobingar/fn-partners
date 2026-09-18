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
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/seo/jsonld";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

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
      ? "NF & PARTNERS — Cabinet d’avocats et de conseil juridique au Tchad"
      : "NF & PARTNERS — Law Firm and Legal Advisory in Chad";
  const description =
    loc === "fr"
      ? "Cabinet d’avocats panafricain basé à N’Djamena, Tchad. Droit des affaires, droit OHADA, contentieux, droits humains et conseil aux entreprises et investisseurs."
      : "Pan-African law firm based in N’Djamena, Chad. Business law, OHADA law, litigation, human rights and advisory services for companies and investors.";

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s — NF & PARTNERS` },
    description,
    alternates: {
      canonical: `/${loc}`,
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${loc}`,
      siteName: "NF & PARTNERS",
      locale: loc === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
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
        <JsonLd data={organizationSchema(locale)} />
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <CookieConsent locale={locale} dict={dict} />
      </body>
    </html>
  );
}
