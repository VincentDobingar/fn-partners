import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

const copy = {
  fr: {
    title: "Prendre rendez-vous",
    metaDescription: "Demandez un rendez-vous avec le cabinet FN & PARTNERS, au cabinet, par téléphone ou en visioconférence.",
    kicker: "Prendre rendez-vous",
    lead: "Choisissez le motif, le domaine juridique et le créneau qui vous conviennent. Le cabinet confirmera votre rendez-vous par e-mail.",
  },
  en: {
    title: "Book an Appointment",
    metaDescription: "Request an appointment with FN & PARTNERS, at the office, by phone or by video call.",
    kicker: "Book an Appointment",
    lead: "Choose the reason, legal domain and time slot that suit you. The firm will confirm your appointment by email.",
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

export default async function AppointmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16 max-w-2xl">
        <p className="text-sm text-muted italic">{dict.appointmentDisclaimer}</p>
        <div className="mt-8 rounded-sm border border-line bg-raised p-8 md:p-10 shadow-sm">
          <AppointmentForm locale={locale} />
        </div>
      </Container>
    </>
  );
}
