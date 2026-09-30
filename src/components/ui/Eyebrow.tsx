// Rótulo pequeno acima de títulos, com traço de giz.
export function Eyebrow({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  /** Versão para fundo claro. */
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 font-serif text-[0.7rem] uppercase tracking-[0.3em] ${
        light ? "text-cgs-ink-soft" : "text-cgs-gold/80"
      } ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-cgs-gold/50" />
      {children}
    </p>
  );
}
