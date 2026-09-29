import { ImageResponse } from "next/og";
import { isLocale } from "@/lib/i18n/config";
import type { Locale } from "@/lib/data/firm";

export const alt = "FN & PARTNERS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const copy: Record<Locale, string> = {
  fr: "Cabinet d’avocats et de conseil juridique — N’Djamena, Tchad",
  en: "Law Firm and Legal Advisory — N’Djamena, Chad",
};

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b1533",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#d9b95c",
            marginBottom: 28,
          }}
        >
          {locale === "fr" ? "Cabinet d’avocats" : "Law Firm"}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: 2 }}>
          FN &amp; PARTNERS
        </div>
        <div style={{ display: "flex", width: 140, height: 4, backgroundColor: "#b08d2d", margin: "40px 0" }} />
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            maxWidth: 860,
          }}
        >
          {copy[locale]}
        </div>
      </div>
    ),
    { ...size }
  );
}
