import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./Container";

type Crumb = { label: string; href?: string };

export function PageHero({
  kicker,
  title,
  lead,
  actions,
  breadcrumbs,
  bleedBottom = false,
}: {
  kicker: string;
  title: string;
  lead?: string;
  actions?: ReactNode;
  breadcrumbs?: Crumb[];
  bleedBottom?: boolean;
}) {
  return (
    <section className="border-b border-line bg-navy text-white">
      <Container className={`pt-14 md:pt-16 ${bleedBottom ? "pb-28 md:pb-36" : "pb-14 md:pb-16"}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold-light transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="kicker text-gold-light mb-4">{kicker}</div>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.1]">{title}</h1>
            {lead && <p className="mt-6 text-white/70 text-lg leading-relaxed">{lead}</p>}
          </div>
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}
