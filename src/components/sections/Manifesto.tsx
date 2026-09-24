import { ChalkStroke } from "@/components/brand/Wordmark";
import { AgitationCard } from "@/components/ui/AgitationCard";
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

export function Manifesto() {
  return (
    <Section id="manifesto" className="border-t border-white/[0.06]">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <SectionTitle>
            Você estuda e decora... mas na hora do &lsquo;caso clínico bruto&rsquo;, o seu raciocínio
            parece um labirinto?
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-pretty text-base leading-relaxed text-cgs-text/80 sm:text-[1.05rem] lg:pt-2">
          <p>
            A medicina moderna nos entope de informações, mas esquece de nos ensinar o mais
            importante: como organizar tudo isso sem abandonar os fundamentos.
          </p>
          <p>
            Você já sentiu aquela insegurança de estar diante de um paciente cirrótico, de um exame
            de urina ou de um paciente anêmico, e, mesmo tendo lido o livro, não saber por onde
            começar a &lsquo;puxar o fio&rsquo; do diagnóstico?
          </p>
          <p className="pt-2 text-lg text-cgs-text sm:text-xl">
            O problema não é a sua inteligência.{" "}
            <span className="chalk">O problema é que:</span>
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <AgitationCard index={i + 1} title={p.title}>
              {p.text}
            </AgitationCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-20 max-w-3xl text-center sm:mt-24">
        <ChalkStroke className="mx-auto mb-10 h-2 w-24 text-cgs-gold/40" />
        <p className="text-balance text-2xl italic leading-relaxed text-cgs-text/95 sm:text-3xl sm:leading-relaxed">
          &ldquo;Não adianta ter a biblioteca inteira na cabeça se você não tem as{" "}
          <span className="chalk">gavetas certas</span> para guardar cada informação.&rdquo;
        </p>
      </Reveal>
    </Section>
  );
}
