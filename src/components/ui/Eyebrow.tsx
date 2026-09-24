// Rótulo pequeno acima de títulos, com traço de giz.
export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-3 font-serif text-[0.7rem] uppercase tracking-[0.3em] text-cgs-gold/80 ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-cgs-gold/50" />
      {children}
    </p>
  );
}
