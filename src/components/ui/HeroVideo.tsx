"use client";

import { useEffect, useRef } from "react";

// Vídeo de fundo. O React não grava `muted` como propriedade no SSR, e sem isso
// alguns navegadores bloqueiam o autoplay; por isso forçamos muted e play() aqui.
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay bloqueado (ex.: economia de dados): fica o poster.
    });
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 size-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
    />
  );
}
