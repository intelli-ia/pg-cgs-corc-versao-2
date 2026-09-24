import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/links";

type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  tabIndex?: number;
};

const sizes = {
  sm: "px-4 py-2.5 text-[0.66rem] tracking-[0.08em] sm:text-[0.7rem] sm:tracking-[0.14em] gap-2",
  md: "px-7 py-4 text-xs tracking-[0.16em] gap-3",
  lg: "px-8 py-5 text-sm tracking-[0.16em] gap-3",
};

// CTA principal: sempre dourado sólido com texto escuro — nunca discreto.
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
      className={`group relative inline-flex items-center justify-center rounded-[6px] bg-cgs-gold font-serif font-bold uppercase text-cgs-bg shadow-[0_0_0_1px_rgb(229_159_20/0.4),0_10px_30px_-10px_rgb(229_159_20/0.55)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#efab22] hover:shadow-[0_0_0_1px_rgb(229_159_20/0.6),0_16px_40px_-12px_rgb(229_159_20/0.7)] active:translate-y-0 ${sizes[size]} ${className}`}
    >
      <span className="text-center">{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.5}
      />
    </a>
  );
}
