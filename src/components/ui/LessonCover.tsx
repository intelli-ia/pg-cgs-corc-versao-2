type LessonCoverProps = {
  number: number;
  title: string;
  badge?: string;
};

// Capa vertical de aula — placeholder no conceito de quadro-negro.
// TODO: substituir pelas capas reais das aulas em formato vertical
export function LessonCover({ number, title, badge }: LessonCoverProps) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-cgs-gold/20 p-5 transition-colors duration-300 hover:border-cgs-gold/50">
      <div className="chalkboard absolute inset-0" />
      {/* Rabiscos de giz */}
      <svg
        viewBox="0 0 200 260"
        aria-hidden="true"
        className="absolute inset-0 size-full text-white/[0.12] transition-transform duration-700 group-hover:scale-105"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M30 70 q 40 -8 80 0" />
          <path d="M70 78 L 40 120 M70 78 L 70 124 M70 78 L 104 120" />
          <circle cx="40" cy="132" r="9" />
          <circle cx="70" cy="136" r="9" />
          <circle cx="104" cy="132" r="9" />
          <path d="M120 40 q 30 10 50 40" strokeDasharray="3 5" />
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-cgs-bg via-cgs-bg/70 to-transparent" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <span className="font-serif text-[0.65rem] uppercase tracking-[0.25em] text-cgs-text/60">
            Aula {String(number).padStart(2, "0")}
          </span>
          {badge && (
            <span className="rounded-full bg-cgs-gold px-2.5 py-1 font-serif text-[0.6rem] font-bold uppercase tracking-[0.12em] text-cgs-bg">
              {badge}
            </span>
          )}
        </div>
        <div>
          <span aria-hidden="true" className="mb-3 block h-px w-8 bg-cgs-gold/60" />
          <h3 className="chalk text-lg leading-snug xl:text-xl">{title}</h3>
        </div>
      </div>
    </article>
  );
}
