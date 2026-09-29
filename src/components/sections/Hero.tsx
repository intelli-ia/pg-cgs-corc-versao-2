import { CtaButton } from "@/components/ui/CtaButton";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { Reveal } from "@/components/ui/Reveal";

// Dobra 1 — hero full-bleed com vídeo de aula ao fundo; conteúdo ancorado na base:
// H1 à esquerda; subtítulo + botões à direita.
export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-cgs-bg pb-20 pt-40 sm:pb-24 lg:pb-28"
    >
      {/* Vídeo de fundo: 1280p, sem áudio, ~1,2 MB, servido como arquivo estático (CDN da Vercel) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <HeroVideo src="/video/hero.mp4" poster="/video/hero-poster.webp" />
        {/* Véus: escurecem a base (leitura do texto) e as bordas */}
        <div className="absolute inset-0 bg-gradient-to-t from-cgs-bg via-cgs-bg/70 to-cgs-bg/20" />
        {/* Degradê final: a hero termina no preto liso da dobra seguinte, sem linha de corte */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cgs-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(37_32_34/0.55),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(21_19_20/0.75)_100%)]" />
      </div>

      {/* Tarja vermelha no topo */}
      <div className="absolute inset-x-0 top-0 z-10 bg-[#a80000] px-4 py-3 text-center font-serif text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cgs-text sm:text-xs">
        Aulas no quadro
      </div>

      <div className="relative mx-auto grid w-full max-w-[90rem] items-end gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16 lg:px-[5.5%]">
        {/* Esquerda: H1 */}
        <div className="text-left">
          <Reveal>
            <h1 className="font-serif text-[1.75rem] font-bold leading-[1.2] text-cgs-text sm:text-4xl lg:text-[2.45rem] xl:text-[2.85rem]">
              Domine as grandes síndromes da medicina
              <br />
              <span className="text-cgs-gold">sem decoreba</span>.
            </h1>
          </Reveal>
        </div>

        {/* Direita: subtítulo + botões */}
        <div className="text-left lg:pb-2">
          <Reveal delay={0.2}>
            <p className="max-w-lg font-serif text-base font-normal leading-[1.75] text-cgs-text/80 sm:text-lg">
              Aulas e discussões feitas diretamente no quadro, direto ao raciocínio que você usa na
              prática.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <CtaButton size="lg" className="w-full sm:w-auto">
              Quero dominar as síndromes
            </CtaButton>
            <a
              href="#raciocinio"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] px-8 py-4 font-serif text-[0.95rem] font-bold text-cgs-text shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition-colors duration-300 hover:border-cgs-gold/40 hover:bg-white/[0.08] sm:text-base"
            >
              Saiba mais
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
