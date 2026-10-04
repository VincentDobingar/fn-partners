import type { ContentBlock } from "@/lib/data/content";

/** Affiche le corps d’un article (paragraphes, intertitres, listes, encadrés). */
export function RichContent({ blocks }: { blocks: readonly ContentBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (typeof block === "string") {
          return (
            <p key={index} className="text-ink-soft leading-relaxed">
              {block}
            </p>
          );
        }
        if ("heading" in block) {
          return (
            <h2 key={index} className="pt-6 font-serif text-xl md:text-2xl text-navy">
              {block.heading}
            </h2>
          );
        }
        if ("list" in block) {
          return (
            <ul key={index} className="space-y-2">
              {block.list.map((item) => (
                <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="rounded-sm border-l-2 border-gold bg-gold-light/15 px-5 py-4 text-sm text-ink-soft leading-relaxed">
            {block.note}
          </p>
        );
      })}
    </div>
  );
}
