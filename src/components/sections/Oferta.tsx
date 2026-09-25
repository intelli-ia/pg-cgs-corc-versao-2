import { Check, Lock, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CHECKOUT_URL } from "@/lib/links";

const included = [
  "Acesso imediato a todas as aulas no quadro.",
  "Áudios disponíveis das aulas.",
  "Materiais de apoio das aulas.",
  "Acesso a novas aulas eventualmente adicionadas (Curso Vivo).",
  "Metodologia exclusiva de “Gavetas da Medicina”.",
  "Foco 100% prático e agudo para o dia a dia.",
];

// Textura de grão (feTurbulence), a mesma da referência: sobre papel ela multiplica.
const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E";

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

// Seção de valores no mesmo desenho da referência (cacau-pg-corc17): a página caminha
// no escuro e a oferta é o único momento em claro — manchete no papel, oferta sobre um
// cartão branco com fio dourado na aresta, prévia da área de membros encavalada embaixo.
// Copy e valores continuam os nossos.
export function Oferta() {
  return (
    <section id="oferta" className="relative w-full overflow-hidden bg-cgs-parchment py-24 font-serif md:py-36">
      {/* Sobre papel o grão precisa multiplicar, senão clareia em vez de sujar */}
      <div
        aria-hidden="true"
        style={{ backgroundImage: `url("${GRAIN_SVG}")`, opacity: 0.07 }}
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
      />

      {/* Costura entre o escuro que termina e o papel que começa */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-cgs-gold opacity-25" />

      {/* Clareira atrás do cartão */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[18%] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-white opacity-70 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-[880px] px-5 md:px-8">
        {/* ── Manchete ── */}
        <Reveal>
          {/* TODO: confirmar o texto do banner acima do H1 */}
          <p className="mx-auto mb-6 w-fit rounded-full border border-cgs-gold/50 bg-cgs-gold/10 px-4 py-2 text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cgs-ink-soft sm:text-xs">
            Mais de uma década à beira do leito
          </p>
          <h2 className="mx-auto max-w-[720px] text-center text-[34px] font-black leading-[1.1] text-cgs-bg sm:text-[42px] md:text-[56px]">
            Tome posse de seu raciocínio e recupere a{" "}
            <em className="font-black italic text-cgs-gold">segurança</em> na beira do leito.
          </h2>
          <div aria-hidden="true" className="mx-auto mt-7 h-px w-[110px] bg-cgs-gold opacity-60 md:mt-8" />
          <p className="mx-auto mt-7 max-w-[620px] text-pretty text-center text-base font-light leading-relaxed text-cgs-ink-soft md:text-lg">
            Você precisa de visualizar alguém que organizou o próprio método e deu certo; alguém com
            experiência vasta, com mais de 50 casos discutidos por semana ao longo de mais de uma
            década de atuação.
          </p>
        </Reveal>

        {/* ── Cartão da oferta ── */}
        <Reveal delay={0.14} className="mt-14 md:mt-16">
          <div className="relative mx-auto max-w-[620px] overflow-hidden rounded-[20px] border border-cgs-hairline-ink bg-white px-6 pb-10 pt-11 shadow-[0_50px_110px_-45px_rgba(21,19,20,0.42)] md:px-12 md:pb-14 md:pt-14">
            {/* Aresta dourada: o único ouro estrutural do cartão */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-cgs-gold to-transparent"
            />

            <h3 className="text-center text-xs font-bold uppercase tracking-[0.18em] text-cgs-ink-soft md:text-sm">
              O que está incluso:
            </h3>
            <p className="mt-3 text-center text-lg font-black leading-snug text-cgs-bg md:text-xl">
              Grandes Síndromes: O Raciocínio no Quadro
            </p>

            {/* ── Entregas ── */}
            <ul className="mx-auto mt-9 max-w-[480px] space-y-2.5 md:mt-11">
              {included.map((texto) => (
                <li key={texto} className="flex items-center gap-4 rounded-lg border border-transparent px-4 py-2.5">
                  <span
                    aria-hidden="true"
                    className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-cgs-gold text-cgs-bg"
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-light leading-snug text-cgs-bg md:text-[17px]">{texto}</span>
                </li>
              ))}
            </ul>

            {/* ── Preço ── */}
            <div className="mt-11 border-t border-cgs-hairline-ink pt-10 text-center md:mt-14 md:pt-12">
              <p className="text-base font-light text-cgs-ink-soft md:text-lg">
                De <s className="decoration-1">R$ 297</s> por
              </p>

              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-cgs-ink-soft md:text-xs">
                apenas
              </p>
              <p className="mt-1.5 text-[32px] font-black leading-none text-cgs-bg min-[380px]:text-[36px] sm:text-[48px] md:text-[62px]">
                12x de R$ 20,02
              </p>

              <p className="mt-4 text-base font-light text-cgs-ink-soft md:text-lg">ou R$ 197 à vista</p>

              <a
                href={CHECKOUT_URL}
                className="mt-10 inline-flex w-full max-w-[420px] items-center justify-center rounded-lg bg-cgs-gold px-8 py-5 text-[15px] font-black uppercase tracking-[0.08em] text-cgs-bg shadow-[0_14px_30px_-14px_rgba(229,159,20,0.7)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cgs-gold md:text-lg"
              >
                Quero garantir meu acesso agora
              </a>

              {/* ── Selos e ressalva ── */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-[0.1em] text-cgs-ink-soft md:text-xs">
                <span className="inline-flex items-center gap-2">
                  <Lock aria-hidden="true" className="size-3.5 text-cgs-gold" strokeWidth={2.5} />
                  Compra segura
                </span>
                <span aria-hidden="true" className="hidden h-3.5 w-px bg-cgs-hairline-ink sm:block" />
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck aria-hidden="true" className="size-4 text-cgs-gold" strokeWidth={2.5} />
                  7 dias de garantia
                </span>
              </div>

              <p className="mt-3 text-[13px] font-light italic text-cgs-ink-soft opacity-80 md:text-sm">
                1 ano de acesso · Pagamento processado pela Hubla
              </p>
            </div>
          </div>

          {/* ── Prévia da área de membros ── */}
          {/* Irmã do cartão: encavala a aresta de baixo e transborda as laterais. */}
          <div className="relative z-10 mx-auto -mt-6 w-full max-w-[820px] md:-mt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/area-de-membros.webp"
              alt="A área de membros aberta em notebook, tablet e celular"
              width={1600}
              height={1068}
              draggable={false}
              className="block h-auto w-full select-none"
            />
          </div>
        </Reveal>

        {/* ── Garantia (nossa copy) ── */}
        <Reveal delay={0.1} className="mx-auto mt-16 max-w-[720px] md:mt-20">
          <div className="flex flex-col items-start gap-7 rounded-[20px] border border-cgs-hairline-ink bg-white/60 p-7 sm:flex-row sm:gap-9 sm:p-10">
            <GuaranteeSeal />
            <div>
              <h3 className="text-xl font-bold leading-snug text-cgs-bg sm:text-2xl">
                <em className="font-black italic text-cgs-gold">7 dias de garantia:</em> Se não servir
                para você, tenha seu dinheiro de volta.
              </h3>
              <p className="mt-4 text-pretty font-light leading-relaxed text-cgs-ink-soft">
                Durante 7 dias, assista às aulas, assimile os conceitos e fluxogramas desenhados no
                quadro e destrave seu raciocínio clínico. Se você sentir que o curso não é para você,
                devolvemos 100% do seu investimento. Sem perguntas, sem burocracia e continuamos
                desejando que você cresça enquanto médico!
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
