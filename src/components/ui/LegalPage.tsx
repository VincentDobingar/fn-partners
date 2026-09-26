import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LegalPage({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <Container className="py-16 max-w-3xl">
      <SectionHeading kicker={kicker} title={title} lead={lead} />
      <div className="prose-body mt-10 text-ink-soft [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mt-2 [&_ul]:space-y-1">
        {children}
      </div>
    </Container>
  );
}
