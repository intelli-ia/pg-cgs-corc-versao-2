import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { Reveal } from "@/components/ui/Reveal";

export type Benefit = {
  title: string;
  /** Trecho final do título do cartão principal, em giz dourado itálico. */
  accent?: string;
  icon: LucideIcon;
  text: string;
};

function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid size-14 place-items-center rounded-xl border border-cgs-gold/30 bg-cgs-gold/10 text-cgs-gold">
      <Icon aria-hidden="true" className="size-6" strokeWidth={1.6} />
    </span>
  );
}

function Point({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="mt-[0.4rem] grid size-5 shrink-0 place-items-center rounded-full bg-cgs-gold/15 text-cgs-gold ring-1 ring-cgs-gold/30">
        <Check aria-hidden="true" className="size-3" strokeWidth={3} />
      </span>
      <p className="text-pretty font-serif text-base leading-[1.8] text-cgs-text/85 first-letter:uppercase">
        {text}
      </p>
    </div>
  );
}

// Bento da Dobra 3 (referência): cartão principal dividido em dois — texto à esquerda,
// painel decorativo à direita — e três cartões iguais embaixo.
export function BenefitsBento({ benefits }: { benefits: Benefit[] }) {
  const [main, ...rest] = benefits;

  return (
    <div className="space-y-4 sm:space-y-5">
      <Reveal>
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
            <IconTile icon={main.icon} />
            <h3 className="font-serif text-[1.75rem] font-bold leading-snug text-cgs-text sm:text-[2rem]">
              {main.title} <span className="italic text-cgs-gold">{main.accent}</span>
            </h3>
            <Point text={main.text} />
          </div>

          {/* Vídeo da aula no quadro */}
          <div className="relative hidden min-h-[16rem] overflow-hidden lg:block lg:border-l lg:border-white/10">
            <HeroVideo src="/video/hero.mp4" poster="/video/hero-poster.webp" />
            {/* Grid overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgb(229_159_20/0.3)_1px,transparent_1px),linear-gradient(rgb(229_159_20/0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
            {/* Vinheta */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cgs-bg/40 via-transparent to-cgs-bg/30" />
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {rest.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.1} className="h-full">
            <article className="flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-cgs-gold/30">
              <IconTile icon={b.icon} />
              <h3 className="font-serif text-[1.35rem] font-bold leading-snug text-cgs-text sm:text-2xl">
                {b.title}
                {b.accent ? ` ${b.accent}` : ""}
              </h3>
              <Point text={b.text} />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
