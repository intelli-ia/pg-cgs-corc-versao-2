type WordmarkProps = {
  variant?: "full" | "compact";
  className?: string;
};

// Traço de giz levemente irregular, desenhado à mão — assinatura gráfica do CGS.
function ChalkStroke({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 10"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 6.2 C 40 3.8, 78 7.4, 118 5.1 S 196 3.6, 238 5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M14 7.6 C 60 6.1, 120 8.2, 170 6.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function Wordmark({ variant = "full", className = "" }: WordmarkProps) {
  if (variant === "compact") {
    return (
      <span
        className={`inline-flex flex-col items-start font-serif leading-none ${className}`}
        aria-label="Grandes Síndromes"
      >
        <span className="chalk text-2xl tracking-tight">CGS</span>
        <ChalkStroke className="mt-1 h-1.5 w-full text-cgs-gold/40" />
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-col items-start font-serif ${className}`}>
      <span className="chalk text-[1.65rem] leading-none tracking-tight sm:text-3xl">
        Grandes Síndromes
      </span>
      <ChalkStroke className="mt-2 h-2 w-full text-cgs-gold/40" />
      <span className="mt-2 text-[0.62rem] uppercase tracking-[0.32em] text-cgs-text/60">
        O Raciocínio no Quadro
      </span>
    </span>
  );
}

export { ChalkStroke };
