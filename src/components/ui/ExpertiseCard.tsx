import Link from "@/components/ui/Link";
import type { Locale } from "@/lib/data/firm";
import type { ExpertiseDomain } from "@/lib/data/expertise";

export function ExpertiseCard({ domain, locale }: { domain: ExpertiseDomain; locale: Locale }) {
  const content = domain[locale];
  return (
    <Link
      href={`/${locale}/domaines-expertise/${domain.slug}`}
      prefetch={false}
      className="group block rounded-sm border border-line bg-raised p-6 hover:border-gold transition-colors"
    >
      <h3 className="font-serif text-lg text-navy group-hover:text-gold-deep transition-colors">
        {content.title}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{content.summary}</p>
      <span className="mt-4 inline-block text-xs font-mono uppercase tracking-wider text-gold-deep">
        {locale === "fr" ? "En savoir plus →" : "Learn more →"}
      </span>
    </Link>
  );
}
