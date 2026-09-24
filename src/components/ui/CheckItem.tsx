import { Check } from "lucide-react";

type CheckItemProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

// Bullet de benefício: ✓ dourado solto, sem container pesado.
export function CheckItem({ title, children, className = "" }: CheckItemProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-cgs-gold" strokeWidth={2.75} />
      <div>
        <h3 className="font-serif text-lg font-bold leading-snug text-cgs-text">{title}</h3>
        <p className="mt-1.5 font-serif text-[0.95rem] leading-relaxed text-cgs-text/70">{children}</p>
      </div>
    </div>
  );
}
