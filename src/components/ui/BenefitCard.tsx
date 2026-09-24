import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  index: number;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  /** Número em destaque no canto (ex.: "10x"). */
  stat?: { value: string; label: string };
  /** Card largo da grade: ganha um esquema de giz decorativo à direita. */
  wide?: boolean;
  className?: string;
};

// Card de benefício em grade bento: número, ícone em "giz" e brilho dourado no hover.
export function BenefitCard({
  index,
  icon: Icon,
  title,
  children,
  stat,
  wide = false,
  className = "",
}: BenefitCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.01] p-7 transition-[border-color,transform] duration-500 ease-out hover:-translate-y-1 hover:border-cgs-gold/35 sm:p-9 ${className}`}
    >
      {/* Fio de luz no topo e brilho que surgem no hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cgs-gold/70 to-transparent opacity-30 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-cgs-gold/[0.07] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      {wide && (
        // Esquema de giz: um "mapa lógico" discreto ocupando o respiro do card largo.
        <svg
          viewBox="0 0 220 160"
          aria-hidden="true"
          className="pointer-events-none absolute right-12 top-16 hidden w-40 text-white/[0.09] transition-[color,transform] duration-700 group-hover:scale-[1.03] group-hover:text-cgs-gold/25 lg:block"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
            <circle cx="110" cy="24" r="12" />
            <path d="M104 36 L 50 82 M110 36 L 110 82 M116 36 L 170 82" />
            <circle cx="46" cy="94" r="10" />
            <circle cx="110" cy="94" r="10" />
            <circle cx="174" cy="94" r="10" />
            <path d="M40 104 L 26 136 M52 104 L 64 136 M174 104 L 174 136" />
            <path d="M84 138 q 26 14 52 0" strokeDasharray="3 5" />
          </g>
        </svg>
      )}

      <div className="relative flex items-start justify-between gap-6">
        <span className="grid size-12 place-items-center rounded-xl border border-cgs-gold/25 bg-cgs-gold/[0.07] text-cgs-gold transition-colors duration-500 group-hover:border-cgs-gold/50 group-hover:bg-cgs-gold/[0.12]">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
        </span>
        <span className="font-serif text-sm italic tracking-wide text-cgs-text/30">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-auto pt-8 sm:pt-12">
        {stat && (
          <p className="mb-5 flex items-baseline gap-3">
            <span className="chalk text-5xl leading-none sm:text-6xl">{stat.value}</span>
            <span className="font-serif text-[0.65rem] uppercase tracking-[0.25em] text-cgs-text/45">
              {stat.label}
            </span>
          </p>
        )}
        <h3 className="font-serif text-xl font-bold leading-snug text-cgs-text sm:text-[1.35rem]">{title}</h3>
        <p className="mt-3 max-w-md text-pretty font-serif text-[0.95rem] leading-[1.75] text-cgs-text/65">
          {children}
        </p>
      </div>
    </article>
  );
}
