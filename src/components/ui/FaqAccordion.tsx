"use client";

import { useState } from "react";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-base md:text-lg text-navy">{item.q}</span>
              <span className="text-gold-deep text-xl leading-none shrink-0">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <p className="pb-5 text-sm md:text-base text-ink-soft leading-relaxed">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
