type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  tabIndex?: number;
};

import { CHECKOUT_URL } from "@/lib/links";

const sizes = {
  sm: "px-5 py-2.5 text-[0.8rem]",
  md: "px-8 py-3.5 text-sm",
  lg: "px-9 py-4 text-[0.95rem] sm:text-base",
};

// CTA principal: dourado sólido em degradê suave, com brilho interno no topo e um
// reflexo que atravessa o botão no hover. Texto escuro para contraste máximo.
// {/* TODO: link real de checkout Hubla */} — o padrão vem de CHECKOUT_URL.
export function CtaButton({
  children,
  href = CHECKOUT_URL,
  size = "md",
  className = "",
  tabIndex,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      tabIndex={tabIndex}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-cgs-gold via-[#eeae2c] to-[#f6c765] font-serif font-bold tracking-[0.01em] text-cgs-bg shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1px_0_rgb(0_0_0/0.12),0_0_0_1px_rgb(229_159_20/0.45),0_14px_34px_-14px_rgb(229_159_20/0.65)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-1px_0_rgb(0_0_0/0.12),0_0_0_1px_rgb(246_199_101/0.6),0_18px_42px_-14px_rgb(229_159_20/0.8)] active:translate-y-0 ${sizes[size]} ${className}`}
    >
      {/* Reflexo que varre o botão no hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-[520%] group-hover:opacity-100"
      />
      <span className="relative text-center">{children}</span>
    </a>
  );
}
