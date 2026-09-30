"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Leque de cartas (GSAP): as cartas abrem em arco a partir do centro e reagem ao hover.
// Adaptado do `card-fan-carousel`; aqui SEM paginação (nenhuma carta "passa para o lado"):
// as cartas são fixas — 3 à esquerda, a do meio e 3 à direita (7 no total).

export interface FanCard {
  /** Imagem de fundo da carta. */
  imgUrl?: string;
  alt?: string;
  /** Nome da aula, escrito sobre a imagem com degradê na base. */
  title?: string;
  /** Conteúdo próprio da carta (ex.: a carta do meio com texto). */
  content?: React.ReactNode;
}

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
  { rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rot: 0, scale: 1.0, x: 0, y: 0.0, zIndex: 10 },
  { rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
  { rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
  { rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
];

// Fator horizontal: encolhe o espalhamento do leque em telas estreitas.
function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1.0;
}

// Fator vertical: reduz os deslocamentos em Y quando a janela é baixa demais para o layout ideal.
function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 22 * 16;
  else if (width < 640) idealPx = 26 * 16;
  else if (width < 768) idealPx = 28 * 16;
  else if (width < 1024) idealPx = 33 * 16;
  else idealPx = 38 * 16;

  const available = window.innerHeight * 0.7;
  return available >= idealPx ? 1 : available / idealPx;
}

export function CardFan({ cards }: { cards: FanCard[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  // A entrada só toca quando o leque aparece na tela.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !started) return;
    const els = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (els.length !== FAN_POSITIONS.length) return;

    let entering = true;
    let activeSlot: number | null = null;
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;
    const centerSlot = els.length >> 1;

    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);

    els.forEach((el, slot) => {
      const { x, y, rot, scale, zIndex } = FAN_POSITIONS[slot];
      const target = {
        x: `${x * multiplier}rem`,
        y: `${y * hMult}rem`,
        rotation: rot,
        scale,
        opacity: 1,
        zIndex,
      };
      gsap.set(el, { x: 0, y: `${12 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 });
      gsap.to(el, {
        ...target,
        duration: 1.2,
        ease: "elastic.out(1.05,.78)",
        delay: 0.2 + slot * 0.06,
      });
    });
    const enterTimer = setTimeout(() => (entering = false), 1800);

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);

      els.forEach((el, slot) => {
        const base = FAN_POSITIONS[slot];
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.02;

          if (slot === hoveredSlot) {
            targetY -= 2.5 * hM;
            targetScale *= 1.08;
          } else {
            const normalized = (slot - centerSlot) / centerSlot;
            const push = 8 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance));
            if (slot < hoveredSlot) {
              targetX -= push * mult;
              targetRot -= 3 / (distance + 1);
            } else {
              targetX += push * mult;
              targetRot += 3 / (distance + 1);
            }
            if (slot === els.length - 1 && hoveredSlot < centerSlot) targetY -= 1 * hM;
            if (slot === 0 && hoveredSlot > centerSlot) targetY -= 1 * hM;
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRot,
          scale: targetScale,
          duration: 0.5,
          delay,
          ease: "elastic.out(1,.75)",
          overwrite: "auto",
        });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const handlers = els.map((el, slot) => {
      const handler = () => {
        if (entering) return;
        if (leaveTimer) {
          clearTimeout(leaveTimer);
          leaveTimer = null;
        }
        if (activeSlot !== slot) {
          activeSlot = slot;
          updateHoverLayout(slot);
        }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (entering) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => {
        activeSlot = null;
        updateHoverLayout(null);
      }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      if (!entering) updateHoverLayout(activeSlot);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(enterTimer);
      handlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
      gsap.killTweensOf(els);
    };
  }, [started]);

  return (
    <div className="relative z-20 flex w-full justify-center px-4 md:px-8">
      <div ref={containerRef} className="fan-layout relative flex w-full max-w-[80rem] items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="fan-card overflow-hidden rounded-2xl border border-cgs-gold/40 bg-cgs-bg shadow-[0_24px_60px_-20px_rgb(21_19_20/0.55)]"
          >
            {card.imgUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={card.imgUrl}
                alt={card.alt ?? ""}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="absolute inset-0 size-full select-none object-cover"
              />
            )}
            {card.title && (
              <>
                {/* Degradê de baixo para cima para dar leitura ao nome da aula */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-cgs-bg via-cgs-bg/80 to-transparent"
                />
                <p className="absolute inset-x-0 bottom-0 text-balance px-3 pb-4 text-center font-serif text-[0.8rem] font-bold italic leading-snug text-cgs-gold sm:px-4 sm:pb-5 sm:text-base lg:text-lg">
                  {card.title}
                </p>
              </>
            )}
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
}
