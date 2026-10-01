"use client";

import { useEffect, useRef, useState } from "react";

// Vídeo de fundo. O poster fica numa <img> por baixo (carrega antes e com prioridade)
// e o vídeo entra em fade quando já está tocando, então não há "piscada" preta nem
// salto do poster para o primeiro frame. O React não grava `muted` como propriedade
// no SSR, e sem isso alguns navegadores bloqueiam o autoplay; por isso forçamos muted
// e play() aqui.
export function HeroVideo({
  src,
  mobileSrc,
  poster,
  className = "",
}: {
  src: string;
  /** Versão leve usada em telas pequenas (até 639px). */
  mobileSrc?: string;
  poster: string;
  /** Classes extras nas mídias (ex.: `object-position`). */
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Sem src no SSR: o arquivo só começa a baixar depois de escolhermos a versão certa
  // (leve no celular) e se o usuário não pediu economia de dados.
  const [source, setSource] = useState<string | undefined>();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    if (saveData) return; // economia de dados: fica só o poster
    const small = window.matchMedia("(max-width: 639px)").matches;
    setSource(small && mobileSrc ? mobileSrc : src);
  }, [src, mobileSrc]);

  useEffect(() => {
    if (!source) return;
    ref.current?.play().catch(() => {
      // Autoplay bloqueado: fica o poster.
    });
  }, [source]);

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
        src={source}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        onPlaying={() => setPlaying(true)}
      />
    </>
  );
}
