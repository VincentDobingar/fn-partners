import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { teamMembers } from "@/lib/data/team";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";

const copy = {
  fr: {
    title: "Notre équipe",
    metaDescription: "L’équipe de FN & PARTNERS, cabinet d’avocats et de conseil juridique à N’Djamena, Tchad.",
    kicker: "Notre équipe",
    lead: "Une équipe engagée aux côtés de son fondateur pour servir les clients du cabinet avec rigueur et disponibilité.",
    founderLabel: "Fondateur et Manager du cabinet",
    founderCta: "Voir le parcours complet",
    collaboratorsTitle: "Avocats et juristes du cabinet",
    collaboratorsLead: "Une équipe pluridisciplinaire réunie autour d’une même exigence de service.",
    galleryCta: "Voir la galerie photos →",
  },
  en: {
    title: "Our Team",
    metaDescription: "The FN & PARTNERS team, a law firm and legal advisory practice in N’Djamena, Chad.",
    kicker: "Our Team",
    lead: "A team committed to standing alongside its founder to serve the firm’s clients with rigour and availability.",
    founderLabel: "Founder & Managing Partner",
    founderCta: "See the full profile",
    collaboratorsTitle: "Attorneys and Legal Professionals",
    collaboratorsLead: "A multidisciplinary team united by the same commitment to client service.",
    galleryCta: "See the photo gallery →",
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

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const [founder, ...collaborators] = teamMembers;
  const base = `/${locale}`;

  return (
    <Container className="py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading kicker={t.kicker} title={t.title} lead={t.lead} />
        <Link
          href={`${base}/galerie`}
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light whitespace-nowrap"
        >
          {t.galleryCta}
        </Link>
      </div>

      <div className="mt-14 grid md:grid-cols-5 gap-0 items-stretch rounded-sm border border-line bg-raised overflow-hidden">
        <div className="md:col-span-2 relative min-h-[320px] bg-navy">
          {founder.image && (
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-top"
              priority
            />
          )}
        </div>
        <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
          <div className="kicker mb-3">{t.founderLabel}</div>
          <h2 className="font-serif text-2xl md:text-3xl text-navy">{founder.name}</h2>
          <p className="mt-2 text-muted">{founder.role[locale]}</p>
          {founder.bio && <p className="mt-4 text-ink-soft leading-relaxed">{founder.bio[locale]}</p>}
          <Link
            href={`/${locale}/notre-fondateur`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light w-fit"
          >
            {t.founderCta} →
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-serif text-2xl text-navy">{t.collaboratorsTitle}</h2>
        <p className="mt-2 text-muted leading-relaxed max-w-2xl">{t.collaboratorsLead}</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((member) => (
            <div
              key={member.name}
              className="rounded-sm border border-line bg-raised p-6 hover:border-gold transition-colors"
            >
              <Avatar name={member.name} image={member.image} size="lg" />
              <h3 className="mt-4 font-serif text-lg text-navy">{member.name}</h3>
              <p className={`mt-1 text-sm ${member.isPlaceholder ? "text-muted italic" : "text-muted"}`}>
                {member.role[locale]}
              </p>
              {member.bio && <p className="mt-3 text-sm text-ink-soft leading-relaxed">{member.bio[locale]}</p>}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
