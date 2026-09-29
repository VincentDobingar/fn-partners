import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm } from "@/lib/data/firm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const copy = {
  fr: {
    title: "Implantation et portée panafricaine",
    metaDescription: "FN & PARTNERS à N’Djamena, Tchad, avec une pratique s’étendant à l’espace OHADA et à la Cour africaine des droits de l’homme et des peuples.",
    kicker: "Implantation panafricaine",
    lead: "Le cabinet est basé à N’Djamena et intervient au-delà des frontières nationales, dans l’espace OHADA et devant certaines juridictions régionales.",
    addressTitle: "Notre siège",
    reachTitle: "Notre portée régionale",
    reachText:
      "Au-delà du Tchad, le cabinet intervient dans l’espace OHADA et accompagne ses clients devant la Cour africaine des droits de l’homme et des peuples, à Arusha. D’autres bureaux ou partenariats régionaux seront mentionnés ici lorsqu’ils seront officiellement confirmés par le cabinet.",
    mapTitle: "Localisation du cabinet FN & PARTNERS sur la carte",
  },
  en: {
    title: "Location & Pan-African Reach",
    metaDescription: "FN & PARTNERS in N’Djamena, Chad, with a practice extending across the OHADA area and the African Court on Human and Peoples’ Rights.",
    kicker: "Pan-African Presence",
    lead: "The firm is based in N’Djamena and operates beyond national borders, across the OHADA area and before certain regional courts.",
    addressTitle: "Our Office",
    reachTitle: "Our Regional Reach",
    reachText:
      "Beyond Chad, the firm operates across the OHADA area and supports clients before the African Court on Human and Peoples’ Rights, in Arusha. Any additional regional offices or partnerships will be listed here once officially confirmed by the firm.",
    mapTitle: "Location of FN & PARTNERS on the map",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  return { title: t.title, description: t.metaDescription };
}

export default async function LocationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-xl text-navy">{t.addressTitle}</h2>
            <address className="mt-3 not-italic text-ink-soft leading-relaxed">
              {firm.address.line1[locale]}<br />
              {firm.address.line2[locale]}<br />
              {firm.address.city}, {firm.address.country[locale]}<br />
              {firm.address.poBox}
            </address>
            <div className="mt-6 overflow-hidden rounded-sm border border-line shadow-sm">
              <iframe
                title={t.mapTitle}
                src={`https://maps.google.com/maps?q=${firm.geo.lat},${firm.geo.lng}&z=15&hl=${locale}&output=embed`}
                className="block w-full aspect-video"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">{t.reachTitle}</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">{t.reachText}</p>
          </div>
        </div>
      </Container>
    </>
  );
}
