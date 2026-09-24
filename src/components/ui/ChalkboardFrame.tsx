import { Play } from "lucide-react";

type ChalkboardFrameProps = {
  children?: React.ReactNode;
  caption?: string;
  className?: string;
};

// Esquema de giz decorativo — dá textura ao placeholder até o vídeo real chegar.
// Com `cover`, preenche toda a área (cortando as bordas) em vez de caber inteiro.
export function ChalkSketch({
  className = "absolute inset-0 size-full",
  cover = false,
}: {
  className?: string;
  cover?: boolean;
}) {
  const chalk = "rgb(255 255 255 / 0.28)";
  const gold = "rgb(229 159 20 / 0.55)";
  return (
    <svg
      viewBox="0 0 640 360"
      aria-hidden="true"
      className={className}
      preserveAspectRatio={cover ? "xMidYMid slice" : "xMidYMid meet"}
      fontFamily="var(--font-merriweather), Georgia, serif"
      fontStyle="italic"
    >
      <text x="250" y="70" fill={gold} fontSize="30" fontWeight="700">Anemia</text>
      <path d="M244 78 q 58 6 120 -2" stroke={gold} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <g stroke={chalk} strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M300 92 L 150 170" />
        <path d="M305 94 L 305 170" />
        <path d="M312 92 L 470 170" />
        <path d="M143 166 l 8 5 l -9 3" />
        <path d="M300 164 l 5 8 l 5 -8" />
        <path d="M462 172 l 9 -1 l -5 -7" />
      </g>
      <g fill={chalk} fontSize="19">
        <text x="70" y="200">VCM ↓</text>
        <text x="255" y="200">VCM normal</text>
        <text x="440" y="200">VCM ↑</text>
        <text x="60" y="240" fontSize="14">ferropriva?</text>
        <text x="60" y="262" fontSize="14">talassemia?</text>
        <text x="250" y="240" fontSize="14">reticulócitos</text>
        <text x="432" y="240" fontSize="14">B12 / folato</text>
      </g>
      <path d="M248 250 q 60 22 118 0" stroke={chalk} strokeWidth="1.2" fill="none" strokeDasharray="3 5" />
    </svg>
  );
}

// Moldura de quadro-negro para vídeos de aula. Sem `children`, exibe o placeholder.
export function ChalkboardFrame({ children, caption, className = "" }: ChalkboardFrameProps) {
  return (
    <figure className={className}>
      <div className="rounded-xl border border-cgs-gold/25 bg-gradient-to-b from-cgs-gold/[0.07] to-transparent p-2 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)] sm:p-3">
        <div className="chalkboard relative aspect-video overflow-hidden rounded-md ring-1 ring-inset ring-white/5">
          {children ?? (
            <>
              <ChalkSketch />
              <div className="absolute inset-0 bg-gradient-to-t from-cgs-bg/70 via-transparent to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid size-16 place-items-center rounded-full bg-cgs-gold text-cgs-bg shadow-[0_0_0_10px_rgb(229_159_20/0.15)] sm:size-20">
                  <Play aria-hidden="true" className="ml-1 size-6 fill-current sm:size-7" />
                  <span className="sr-only">Reproduzir trecho da aula</span>
                </span>
              </div>
            </>
          )}
        </div>
        {/* Parapeito do quadro, onde fica o giz */}
        <div aria-hidden="true" className="mx-6 mt-2 h-1 rounded-full bg-cgs-gold/15" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-serif text-xs italic text-cgs-text/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
