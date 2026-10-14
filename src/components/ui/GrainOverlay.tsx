/** Grão de papel/filme gerado por feTurbulence — sem asset externo. */
const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E";

/**
 * Textura que tira o chapado do fundo escuro. Vai dentro de um container
 * `relative`; o conteúdo da seção precisa vir depois, em `z-10`.
 */
export function GrainOverlay({
  opacity = 0.04,
  className = "",
}: {
  /** Inline porque sobre fundo claro o grão precisa de outra dosagem, e
      utilitária vs. utilitária o vencedor depende da ordem no CSS. */
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      style={{ backgroundImage: `url("${GRAIN_SVG}")`, opacity }}
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
