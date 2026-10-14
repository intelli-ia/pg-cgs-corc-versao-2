"use client";

import { useState } from "react";

type TestimonialVideoProps = {
  src: string;
  poster: string;
  /** Duração legível, no formato do próprio player: "2:48". */
  duracao: string;
  /** Descrição do vídeo para leitores de tela e para o rótulo do botão. */
  descricao: string;
};

/**
 * Vídeo dentro do card de depoimento. Nada do arquivo entra na página até
 * alguém pedir: o que o navegador baixa de saída é o pôster, e o `<video>` só
 * é montado no clique. Pôster e vídeo usam o mesmo recorte (`object-position`
 * a 94%: o original é 9:16 e sobra teto acima da cabeça) para o quadro não
 * pular quando o play é apertado.
 */
export function TestimonialVideo({
  src,
  poster,
  duracao,
  descricao,
}: TestimonialVideoProps) {
  const [tocando, setTocando] = useState(false);

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10">
      {tocando ? (
        <video
          src={src}
          poster={poster}
          controls
          controlsList="nofullscreen"
          autoPlay
          playsInline
          preload="auto"
          aria-label={descricao}
          className="video-sem-tela-cheia absolute inset-0 h-full w-full bg-black object-cover [object-position:50%_94%]"
        />
      ) : (
        <button
          type="button"
          onClick={() => setTocando(true)}
          aria-label={`Reproduzir ${descricao} — ${duracao}`}
          className="group/play absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cgs-gold"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            width={480}
            height={848}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-cover opacity-90 transition-[transform,opacity] duration-700 ease-out [object-position:50%_94%] group-hover/play:scale-[1.03] group-hover/play:opacity-100"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45"
          />
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute size-28 rounded-full bg-cgs-gold opacity-[0.22] blur-3xl" />
              <span className="absolute size-[88px] rounded-full border border-cgs-gold opacity-30" />
              <span className="relative flex size-16 items-center justify-center rounded-full border border-cgs-gold/60 bg-gradient-to-b from-white/15 to-transparent backdrop-blur-[2px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_10px_24px_-8px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover/play:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-[3px] size-6 fill-cgs-gold"
                  aria-hidden
                >
                  <path d="M8 5.5v13l11-6.5L8 5.5Z" />
                </svg>
              </span>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 pb-4 text-left">
            <span className="font-bold uppercase tracking-[0.14em] text-cgs-text text-[11px] tabular-nums">
              {duracao}
            </span>
            <span className="font-light uppercase tracking-[0.14em] text-cgs-text/70 text-[11px]">
              Assistir
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
