import { AgitationCard } from "@/components/ui/AgitationCard";
import { ChalkSketch } from "@/components/ui/ChalkboardFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionTitle } from "@/components/ui/Section";

const problems = [
  { title: "O PBL te deixou lacunas", text: "Você teve TUTOR mas não PROFESSOR." },
  {
    title: "A armadilha dos Flashcards",
    text: "Você comprou o raciocínio pronto de outra pessoa, mas não construiu o seu.",
  },
  {
    title: "O Caos da Enfermaria",
    text: "Na vida real, o paciente não vem com o capítulo do livro escrito na testa. Ele vem com sinais brutos que exigem uma experiência sistematizada.",
  },
];

// Dobra 2 — título e texto centrados; abaixo, faixa dourada com um "cartão" de aula
// que ultrapassa a faixa (mesma composição da referência).
export function Manifesto() {
  return (
    <Section id="manifesto" className="overflow-x-clip border-t border-white/[0.06] !pb-0">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionTitle className="text-balance lg:text-5xl lg:leading-[1.2]">
            Você estuda e decora... mas na hora do &lsquo;caso clínico bruto&rsquo;, o seu raciocínio
            parece um labirinto?
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 space-y-5 text-pretty text-lg leading-relaxed text-cgs-text/90 sm:mt-10 sm:text-xl sm:leading-[1.7]">
          <p>
            A medicina moderna nos entope de informações, mas esquece de nos ensinar o mais
            importante: como <strong className="font-bold text-cgs-text">organizar</strong> tudo
            isso sem abandonar os fundamentos.
          </p>
          <p>
            Você já sentiu aquela insegurança de estar diante de um paciente cirrótico, de um exame
            de urina ou de um paciente anêmico, e, mesmo tendo lido o livro, não saber por onde
            começar a &lsquo;puxar o fio&rsquo; do diagnóstico?
          </p>
        </Reveal>
      </div>

      {/* Faixa dourada com cartão sobreposto */}
      <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 bg-[#1b1819] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative rounded-2xl bg-gradient-to-r from-cgs-gold to-[#f0b12c] px-6 pb-10 pt-[15.5rem] shadow-[0_30px_80px_-30px_rgb(229_159_20/0.45)] sm:px-10 md:flex md:min-h-[15rem] md:items-center md:pb-0 md:pt-0 md:pl-[46%] md:pr-12">
            {/* TODO: trocar pelo print/foto real da aula no quadro */}
            <figure className="absolute -top-10 left-1/2 w-[15.5rem] -translate-x-1/2 md:-bottom-10 md:-top-10 md:left-[5%] md:w-[36%] md:translate-x-0 lg:left-[7%]">
              <div className="chalkboard relative flex h-full min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-cgs-gold/40 p-4 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.85)] md:min-h-0">
                <span className="w-fit rounded bg-cgs-bg px-2.5 py-1 font-serif text-[0.6rem] font-bold uppercase tracking-[0.14em] text-cgs-gold">
                  Caso clínico bruto
                </span>
                <p className="chalk mt-3 text-base leading-snug">Anemia: por onde começar?</p>
                <div className="relative mt-3 flex-1 overflow-hidden rounded-lg bg-black/40 ring-1 ring-inset ring-white/5">
                  <ChalkSketch className="absolute inset-0 size-full opacity-80" />
                </div>
              </div>
            </figure>

            <p className="font-serif text-xl font-bold leading-snug text-cgs-bg sm:text-2xl">
              O problema não é a sua inteligência.{" "}
              <span className="italic">O problema é que:</span>
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 grid max-w-6xl gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <AgitationCard index={i + 1} title={p.title}>
                {p.text}
              </AgitationCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-24 max-w-4xl sm:mt-32">
          <figure className="relative text-center">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cgs-gold/[0.06] blur-3xl" />
            <span aria-hidden="true" className="relative block font-serif text-[6rem] font-bold italic leading-[0.6] text-cgs-gold/70 sm:text-[8rem]">
              &ldquo;
            </span>
            <blockquote className="relative mt-4 text-balance font-serif text-2xl font-bold italic leading-[1.5] text-cgs-text sm:text-[2.1rem] sm:leading-[1.5]">
              Não adianta ter a biblioteca inteira na cabeça se você não tem as{" "}
              <span className="text-cgs-gold">gavetas certas</span> para guardar cada informação.
            </blockquote>
            <div aria-hidden="true" className="relative mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-cgs-gold/70 to-transparent" />
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
