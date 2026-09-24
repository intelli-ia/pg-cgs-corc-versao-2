import { ChalkSketch } from "@/components/ui/ChalkboardFrame";

type HeroBackgroundProps = {
  /** URL do vídeo de aula (mp4/webm). Sem ela, exibe o quadro de giz animado. */
  src?: string;
  poster?: string;
};

// Vídeo de fundo da hero: cobre toda a seção, em loop e sem som.
// O véu escuro por cima garante a leitura dos textos centralizados.
export function HeroBackground({ src, poster }: HeroBackgroundProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {src ? (
        <video
          className="absolute inset-0 size-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        // Vídeo fictício: quadro de giz em movimento lento até o vídeo real chegar.
        <div className="chalkboard absolute inset-0">
          <ChalkSketch cover className="hero-drift absolute inset-0 size-full" />
        </div>
      )}

      {/* Véu para contraste do texto */}
      <div className="absolute inset-0 bg-cgs-bg/72" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(21_19_20/0.35)_0%,rgb(21_19_20/0.9)_75%)]" />
      {/* Brilho quente discreto atrás do título */}
      <div className="absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cgs-gold/[0.05] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cgs-bg to-transparent" />
    </div>
  );
}
