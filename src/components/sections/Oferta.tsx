import { Check } from "lucide-react";
import { ChalkStroke } from "@/components/brand/Wordmark";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionTitle } from "@/components/ui/Section";

const included = [
  "Acesso imediato a todas as aulas no quadro.",
  "Áudios disponíveis das aulas.",
  "Materiais de apoio das aulas.",
  "Acesso a novas aulas eventualmente adicionadas (Curso Vivo).",
  "Metodologia exclusiva de “Gavetas da Medicina”.",
  "Foco 100% prático e agudo para o dia a dia.",
];

function GuaranteeSeal() {
  return (
    <svg viewBox="0 0 120 120" className="size-28 shrink-0 text-cgs-gold sm:size-32" role="img" aria-label="Garantia de 7 dias">
      <defs>
        <path id="seal-circle" d="M60 60 m -46 0 a 46 46 0 1 1 92 0 a 46 46 0 1 1 -92 0" />
      </defs>
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <text fill="currentColor" fontSize="8.5" letterSpacing="3.2" fontFamily="var(--font-merriweather), Georgia, serif">
        <textPath href="#seal-circle">GARANTIA · 7 DIAS · GARANTIA · 7 DIAS ·</textPath>
      </text>
      <text x="60" y="66" textAnchor="middle" fill="currentColor" fontSize="34" fontWeight="700" fontStyle="italic" fontFamily="var(--font-merriweather), Georgia, serif">
        7
      </text>
      <text x="60" y="80" textAnchor="middle" fill="currentColor" fillOpacity="0.8" fontSize="7" letterSpacing="2" fontFamily="var(--font-merriweather), Georgia, serif">
        DIAS
      </text>
    </svg>
  );
}

export function Oferta() {
  return (
    <Section id="oferta" className="overflow-hidden border-t border-white/[0.06]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-40 size-[48rem] -translate-x-1/2 rounded-full bg-cgs-gold/[0.05] blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        {/* TODO: confirmar o texto do banner acima do H1 */}
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-cgs-gold/30 bg-cgs-gold/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-cgs-gold sm:text-xs">
          Mais de uma década à beira do leito
        </p>
        <SectionTitle className="mt-7">
          Tome posse de seu raciocínio e recupere a segurança na beira do leito.
        </SectionTitle>
        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-cgs-text/80 sm:text-lg">
          Você precisa de visualizar alguém que organizou o próprio método e deu certo; alguém com
          experiência vasta, com mais de 50 casos discutidos por semana ao longo de mais de uma
          década de atuação.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-5xl">
        <div className="overflow-hidden rounded-xl border border-cgs-gold/40 bg-cgs-bg shadow-[0_40px_120px_-40px_rgb(229_159_20/0.35)]">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            <div className="chalkboard p-7 sm:p-10">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cgs-text/55">O que está incluso</p>
              <h3 className="chalk mt-3 text-2xl leading-snug sm:text-[1.7rem]">
                Grandes Síndromes: O Raciocínio no Quadro
              </h3>
              <ChalkStroke className="mt-4 h-2 w-32 text-cgs-gold/40" />
              <ul className="mt-8 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex gap-3.5 leading-relaxed text-cgs-text/90">
                    <Check aria-hidden="true" className="mt-1 size-4.5 shrink-0 text-cgs-gold" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center border-t border-cgs-gold/20 p-7 text-center sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-sm text-cgs-text/60">
                De <span className="line-through decoration-cgs-gold/70">R$297</span> por apenas
              </p>
              <p className="mt-4 leading-none">
                <span className="block text-sm text-cgs-text/70">12x de</span>
                <span className="chalk mt-2 block text-5xl sm:text-6xl">R$ 20,02</span>
              </p>
              <p className="mt-4 text-cgs-text/80">
                ou <span className="font-bold text-cgs-text">R$ 197</span> à vista
              </p>
              <CtaButton className="mt-9 w-full">
                Quero garantir meu acesso agora
              </CtaButton>
              <p className="mt-4 text-xs text-cgs-text/45">1 ano de acesso · Pagamento processado pela Hubla</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto mt-14 flex max-w-4xl flex-col items-start gap-7 rounded-xl border border-white/10 p-7 sm:flex-row sm:gap-9 sm:p-10">
        <GuaranteeSeal />
        <div>
          <h3 className="text-xl font-bold leading-snug text-cgs-text sm:text-2xl">
            <span className="chalk">7 dias de garantia:</span> Se não servir para você, tenha seu
            dinheiro de volta.
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-cgs-text/75">
            Durante 7 dias, assista às aulas, assimile os conceitos e fluxogramas desenhados no
            quadro e destrave seu raciocínio clínico. Se você sentir que o curso não é para você,
            devolvemos 100% do seu investimento. Sem perguntas, sem burocracia e continuamos
            desejando que você cresça enquanto médico!
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
