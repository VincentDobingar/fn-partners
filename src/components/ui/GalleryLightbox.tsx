"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export function GalleryLightbox({
  images,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  images: GalleryImage[];
  columns?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, images.length]);

  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className={`grid ${columns} gap-4`}>
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-raised"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-4 py-3">
                <p className="text-sm text-white font-medium leading-tight">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setActiveIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-gold-light text-3xl leading-none"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Précédent"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-gold-light text-4xl leading-none"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Suivant"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
                }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-gold-light text-4xl leading-none"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-2xl max-h-[85vh] aspect-[4/5]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="(min-width: 768px) 640px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          {active.caption && (
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-white/85 px-4">
              {active.caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}
