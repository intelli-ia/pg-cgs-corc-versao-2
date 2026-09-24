"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "./CtaButton";

type StickyCtaProps = {
  label: React.ReactNode;
  cta?: string;
  /** Distância de scroll (px) a partir da qual a barra aparece. */
  showAfter?: number;
  /** id da seção de oferta — a barra se recolhe enquanto ela está visível. */
  hideOnId?: string;
};

// Barra de compra que acompanha o scroll. Fica sempre no DOM (apenas oculta
// visualmente) para que o script da Hubla consiga reescrever o link com as UTMs.
export function StickyCta({
  label,
  cta = "QUERO DOMINAR AS SÍNDROMES",
  showAfter = 600,
  hideOnId = "oferta",
}: StickyCtaProps) {
  const [scrolled, setScrolled] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  useEffect(() => {
    const target = document.getElementById(hideOnId);
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOfferVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [hideOnId]);

  const visible = scrolled && !offerVisible;

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-cgs-gold/20 bg-cgs-bg/90 backdrop-blur-md transition-[transform,opacity] duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0 font-serif text-xs leading-snug text-cgs-text/80 sm:text-sm">{label}</div>
        <CtaButton size="sm" className="shrink-0">
          {cta}
        </CtaButton>
      </div>
    </div>
  );
}
