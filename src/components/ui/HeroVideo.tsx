"use client";

import { useEffect, useRef, useState } from "react";

// Vídeo de fundo. O poster fica numa <img> por baixo (carrega antes e com prioridade)
// e o vídeo entra em fade quando já está tocando, então não há "piscada" preta nem
// salto do poster para o primeiro frame. O React não grava `muted` como propriedade
// no SSR, e sem isso alguns navegadores bloqueiam o autoplay; por isso forçamos muted
// e play() aqui.
export function HeroVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  /** Classes extras nas mídias (ex.: `object-position`). */
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    // O vídeo pode já estar tocando antes da hidratação (o `playing` não é reemitido).
    if (!video.paused && video.readyState >= 3) setPlaying(true);
    video.play().catch(() => {
      // Autoplay bloqueado (ex.: economia de dados): fica o poster.
    });
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        fetchPriority="high"
        decoding="async"
        draggable={false}
        className={`absolute inset-0 size-full object-cover ${className}`}
      />
      <video
        ref={ref}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out ${className} ${
          playing ? "opacity-100" : "opacity-0"
        }`}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        onPlaying={() => setPlaying(true)}
      />
    </>
  );
}
