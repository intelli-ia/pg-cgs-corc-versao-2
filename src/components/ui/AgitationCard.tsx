type AgitationCardProps = {
  index?: number;
  title: string;
  children: React.ReactNode;
  className?: string;
};

// Bloco de destaque da Dobra 2 — o "recorte" da referência, em giz dourado.
export function AgitationCard({ index, title, children, className = "" }: AgitationCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-lg border border-cgs-gold/30 bg-cgs-gold/10 p-7 sm:p-8 ${className}`}
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-cgs-gold/70" />
      {index !== undefined && (
        <span className="mb-5 font-serif text-sm italic text-cgs-gold/70">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <h3 className="font-serif text-xl font-bold leading-snug text-cgs-gold">{title}</h3>
      <p className="mt-3 font-serif text-[0.975rem] leading-relaxed text-cgs-text/90">{children}</p>
    </article>
  );
}
