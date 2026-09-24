type QuoteCardProps = {
  children: React.ReactNode;
  attribution: string;
  className?: string;
};

// Citação de autoridade (ex.: Cecil) — borda fina dourada, itálico, crédito em caption.
export function QuoteCard({ children, attribution, className = "" }: QuoteCardProps) {
  return (
    <figure
      className={`relative rounded-lg border border-cgs-gold/60 px-7 pb-7 pt-10 sm:px-10 sm:pb-9 sm:pt-12 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-7 left-6 bg-cgs-bg px-2 font-serif text-7xl font-bold italic leading-none text-cgs-gold"
      >
        &ldquo;
      </span>
      <blockquote className="font-serif text-lg italic leading-relaxed text-cgs-text/95 sm:text-xl">
        {children}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 font-serif text-xs uppercase tracking-[0.2em] text-cgs-text/55">
        <span aria-hidden="true" className="h-px w-8 bg-cgs-gold/50" />
        {attribution}
      </figcaption>
    </figure>
  );
}
