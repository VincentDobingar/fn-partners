"use client";

import { useId, useState } from "react";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-serif text-base md:text-lg text-navy">{item.q}</span>
                <span className="text-gold-deep text-xl leading-none shrink-0" aria-hidden>
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            {/* La réponse reste dans la page même repliée : lisible par les moteurs de recherche. */}
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="pb-5 text-sm md:text-base text-ink-soft leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
