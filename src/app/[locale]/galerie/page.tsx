import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { firm } from "@/lib/data/firm";
import { teamMembers } from "@/lib/data/team";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryLightbox, type GalleryImage } from "@/components/ui/GalleryLightbox";

const copy = {
  fr: {
    title: "Galerie",
    metaDescription: "La galerie photos de FN & PARTNERS : le fondateur et l’équipe d’avocats et de juristes du cabinet à N’Djamena.",
    kicker: "Galerie",
    lead: "Un aperçu en images de Me Frédéric NANADJINGUE et de l’équipe qui l’accompagne au quotidien au service des clients du cabinet.",
    founderTitle: "Le fondateur",
    founderLead: "Me Frédéric NANADJINGUE, fondateur et manager du cabinet, dans ses fonctions au quotidien.",
    teamTitle: "L’équipe du cabinet",
    teamLead: "Les avocats, juristes et collaborateurs de FN & PARTNERS.",
    lifeTitle: "Vie du cabinet",
    lifeLead: "Quelques moments marquants de Me Frédéric NANADJINGUE, au Tchad comme à l’international.",
    lifeCaptions: {
      portrait: "Me Frédéric NANADJINGUE, fondateur et manager du cabinet",
      distinction: "Remise de distinction à l’occasion de l’inauguration de la Maison de l’Avocat du Lualaba",
      barreau: "Cérémonie du Barreau, aux côtés de ses confrères",
      tradition: "Me EITCHANG Flavien en tenue traditionnelle",
      bureauOrange: "Au bureau, au quotidien",
      bureauMarine: "Au bureau, au quotidien",
      equipe: "Un moment de l’équipe du cabinet",
      congres: "7ème Congrès de la FA-UJA, à Kinshasa — « La négociation des conventions extractives en Afrique »",
      abidjanDistinction: "Distinction reçue à Abidjan, en Côte d’Ivoire",
      presseMdtv: "Point de presse de Me Frédéric NANADJINGUE",
      ajaCiQuarantenaire: "Quarantenaire de l’AJA-CI, à Abidjan — « Les mutations de la profession d’avocat : défis et opportunités »",
      intervention: "Prise de parole de Me Frédéric NANADJINGUE",
      panel: "Me Frédéric NANADJINGUE en table ronde",
      visiteOfficielle: "Visite officielle de Me Frédéric NANADJINGUE",
      fishFestival: "Distinction reçue au Festival International Le Souffle de l’Harmattan (FISH)",
    },
    founderCta: "Voir le parcours complet →",
    backToTeam: "← Retour à l’équipe",
  },
  en: {
    title: "Gallery",
    metaDescription: "The FN & PARTNERS photo gallery: the founder and the team of attorneys and legal professionals in N’Djamena.",
    kicker: "Gallery",
    lead: "A visual glimpse of Me Frédéric NANADJINGUE and the team standing alongside him to serve the firm’s clients every day.",
    founderTitle: "The Founder",
    founderLead: "Me Frédéric NANADJINGUE, founder and managing partner of the firm, in his day-to-day role.",
    teamTitle: "Our Team",
    teamLead: "The attorneys, legal professionals and staff of FN & PARTNERS.",
    lifeTitle: "Life at the Firm",
    lifeLead: "A few notable moments of Me Frédéric NANADJINGUE, in Chad and internationally.",
    lifeCaptions: {
      portrait: "Me Frédéric NANADJINGUE, founder and managing partner of the firm",
      distinction: "Receiving an award at the inauguration of the Maison de l’Avocat du Lualaba",
      barreau: "Bar ceremony, alongside fellow attorneys",
      tradition: "Me EITCHANG Flavien in traditional dress",
      bureauOrange: "At the office, day to day",
      bureauMarine: "At the office, day to day",
      equipe: "A moment with the firm’s team",
      congres: "7th FA-UJA Congress, in Kinshasa — “Negotiating Extractive Agreements in Africa”",
      abidjanDistinction: "Award received in Abidjan, Côte d’Ivoire",
      presseMdtv: "Press briefing with Me Frédéric NANADJINGUE",
      ajaCiQuarantenaire: "AJA-CI 40th Anniversary, in Abidjan — “Changes in the Legal Profession: Challenges and Opportunities”",
      intervention: "Me Frédéric NANADJINGUE speaking",
      panel: "Me Frédéric NANADJINGUE on a panel",
      visiteOfficielle: "Official visit by Me Frédéric NANADJINGUE",
      fishFestival: "Award received at the Festival International Le Souffle de l’Harmattan (FISH)",
    },
    founderCta: "See the full profile →",
    backToTeam: "← Back to the team",
  },
} as const;

const founderImages = [
  "founder-cabinet-01.jpg",
  "founder-cabinet-02.jpg",
  "founder-cabinet-03.jpg",
  "founder-cabinet-04.jpg",
  "founder-cabinet-05.jpg",
  "founder-cabinet-06.jpg",
];

const teamImageMap: Record<string, string> = {
  "Me EITCHANG Flavien": "team-flavien.jpg",
  "Me DJEKOULA KOUBET Guy Michel": "team-guy-michel.jpg",
  "Me GONDE ROADOUM": "team-gonde.jpg",
  "Me OUYA MANDO": "team-mando.jpg",
  "Isaac TAMBIA DEKO": "team-isaac.jpg",
  "Ghislaine SADJINANTE": "team-ghislaine.jpg",
  "MADJITOLOUM Mathurin": "team-mathurin.jpg",
  "Elise DAGOSSE": "team-elise.jpg",
};

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

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  const founderGallery: GalleryImage[] = founderImages.map((file, i) => ({
    src: `/images/gallery/${file}`,
    alt: `${firm.founder.name} — ${i + 1}`,
    caption: firm.founder.name,
  }));

  const teamGallery: GalleryImage[] = teamMembers
    .filter((m) => teamImageMap[m.name])
    .map((m) => ({
      src: `/images/gallery/${teamImageMap[m.name]}`,
      alt: m.name,
      caption: `${m.name} — ${m.role[locale]}`,
    }));

  const lifeGallery: GalleryImage[] = [
    { src: "/images/gallery/vie-cabinet-congres-fauja.jpg", alt: t.lifeCaptions.congres, caption: t.lifeCaptions.congres },
    { src: "/images/gallery/vie-cabinet-portrait.jpg", alt: t.lifeCaptions.portrait, caption: t.lifeCaptions.portrait },
    { src: "/images/gallery/vie-cabinet-distinction.jpg", alt: t.lifeCaptions.distinction, caption: t.lifeCaptions.distinction },
    { src: "/images/gallery/vie-cabinet-barreau.jpg", alt: t.lifeCaptions.barreau, caption: t.lifeCaptions.barreau },
    { src: "/images/gallery/vie-cabinet-tradition.jpg", alt: t.lifeCaptions.tradition, caption: t.lifeCaptions.tradition },
    { src: "/images/gallery/vie-cabinet-bureau-orange.jpg", alt: t.lifeCaptions.bureauOrange, caption: t.lifeCaptions.bureauOrange },
    { src: "/images/gallery/vie-cabinet-bureau-marine.jpg", alt: t.lifeCaptions.bureauMarine, caption: t.lifeCaptions.bureauMarine },
    { src: "/images/gallery/vie-cabinet-equipe-01.jpg", alt: t.lifeCaptions.equipe, caption: t.lifeCaptions.equipe },
    { src: "/images/gallery/vie-cabinet-aja-ci-quarantenaire.jpg", alt: t.lifeCaptions.ajaCiQuarantenaire, caption: t.lifeCaptions.ajaCiQuarantenaire },
    { src: "/images/gallery/vie-cabinet-abidjan-distinction.jpg", alt: t.lifeCaptions.abidjanDistinction, caption: t.lifeCaptions.abidjanDistinction },
    { src: "/images/gallery/vie-cabinet-fish-festival.jpg", alt: t.lifeCaptions.fishFestival, caption: t.lifeCaptions.fishFestival },
    { src: "/images/gallery/vie-cabinet-presse-mdtv.jpg", alt: t.lifeCaptions.presseMdtv, caption: t.lifeCaptions.presseMdtv },
    { src: "/images/gallery/vie-cabinet-intervention-01.jpg", alt: t.lifeCaptions.intervention, caption: t.lifeCaptions.intervention },
    { src: "/images/gallery/vie-cabinet-panel-01.jpg", alt: t.lifeCaptions.panel, caption: t.lifeCaptions.panel },
    { src: "/images/gallery/vie-cabinet-visite-officielle.jpg", alt: t.lifeCaptions.visiteOfficielle, caption: t.lifeCaptions.visiteOfficielle },
  ];

  return (
    <>
      <PageHero
        kicker={t.kicker}
        title={t.title}
        lead={t.lead}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: base },
          { label: dict.nav.team, href: `${base}/notre-equipe` },
          { label: t.title },
        ]}
      />
      <Container className="py-16">
      <div>
        <h2 className="font-serif text-2xl text-navy">{t.founderTitle}</h2>
        <p className="mt-2 text-muted leading-relaxed max-w-2xl">{t.founderLead}</p>
        <div className="mt-8">
          <GalleryLightbox images={founderGallery} />
        </div>
        <Link
          href={`${base}/notre-fondateur`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light w-fit"
        >
          {t.founderCta}
        </Link>
      </div>

      <div className="mt-20">
        <h2 className="font-serif text-2xl text-navy">{t.teamTitle}</h2>
        <p className="mt-2 text-muted leading-relaxed max-w-2xl">{t.teamLead}</p>
        <div className="mt-8">
          <GalleryLightbox images={teamGallery} />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-serif text-2xl text-navy">{t.lifeTitle}</h2>
        <p className="mt-2 text-muted leading-relaxed max-w-2xl">{t.lifeLead}</p>
        <div className="mt-8">
          <GalleryLightbox images={lifeGallery} />
        </div>
      </div>

      <div className="mt-16">
        <Link
          href={`${base}/notre-equipe`}
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light"
        >
          {t.backToTeam}
        </Link>
      </div>
      </Container>
    </>
  );
}
