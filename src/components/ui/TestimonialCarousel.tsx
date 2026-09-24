"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  photo?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

// Carrossel de depoimentos: arrastável (scroll-snap nativo) + setas.
export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? el.clientWidth) + 20), behavior: "smooth" });
  };

  const arrow =
    "grid size-11 place-items-center rounded-full border border-cgs-gold/40 text-cgs-gold transition-colors hover:bg-cgs-gold hover:text-cgs-bg disabled:pointer-events-none disabled:opacity-30";

  return (
    <div>
      <div
        ref={track}
        onScroll={update}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <figure
            key={i}
            data-card
            className="flex w-[86%] shrink-0 snap-start flex-col justify-between rounded-lg border border-white/10 bg-white/[0.025] p-7 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
          >
            <div>
              <span aria-hidden="true" className="chalk block text-5xl leading-none">
                &ldquo;
              </span>
              <blockquote className="mt-2 text-pretty text-[0.975rem] leading-relaxed text-cgs-text/85">
                {t.text}
              </blockquote>
            </div>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
              {t.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.photo} alt="" className="size-12 rounded-full object-cover ring-1 ring-cgs-gold/40" />
              ) : (
                <span className="chalkboard grid size-12 shrink-0 place-items-center rounded-full font-serif text-sm font-bold italic text-cgs-gold ring-1 ring-cgs-gold/40">
                  {initials(t.name)}
                </span>
              )}
              <span>
                <span className="block font-bold text-cgs-text">{t.name}</span>
                <span className="block text-xs text-cgs-text/55">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button type="button" onClick={() => scroll(-1)} disabled={edges.start} className={arrow} aria-label="Depoimento anterior">
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => scroll(1)} disabled={edges.end} className={arrow} aria-label="Próximo depoimento">
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
