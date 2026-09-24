import { CtaButton } from "@/components/ui/CtaButton";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-28 pt-36 sm:pb-32 sm:pt-40"
    >
      {/* TODO: passar src do vídeo real de aula no quadro */}
      <HeroBackground />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal>
          <p className="flex items-center justify-center gap-4 font-serif text-[0.62rem] uppercase tracking-[0.38em] text-cgs-gold/80 sm:text-[0.7rem]">
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-cgs-gold/60 sm:w-12" />
            Aulas no quadro
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-l from-transparent to-cgs-gold/60 sm:w-12" />
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 text-balance font-serif text-[1.9rem] font-light leading-[1.25] tracking-[-0.01em] text-cgs-text sm:text-[2.6rem] sm:leading-[1.2] lg:text-[3.1rem]">
            Entenda grandes síndromes da medicina{" "}
            <em className="chalk">sem decoreba</em> e longe do &lsquo;PBL&rsquo;: veja aulas e
            discussões feitas <em className="chalk">diretamente no quadro.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          {/* Ornamento de giz */}
          <div aria-hidden="true" className="mt-9 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-cgs-gold/35" />
            <span className="size-1.5 rotate-45 bg-cgs-gold/70" />
            <span className="h-px w-10 bg-cgs-gold/35" />
          </div>
          <p className="mx-auto mt-9 max-w-xl text-pretty text-[0.95rem] leading-[1.8] text-cgs-text/65 sm:text-base">
            A organização visual das aulas no quadro, direto ao raciocínio que você usa na prática
            sem enrolação, sem filtro e sem se esconder no método PBL.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-11 w-full sm:w-auto">
          <CtaButton size="lg" className="w-full sm:w-auto">
            QUERO DOMINAR AS SÍNDROMES
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
