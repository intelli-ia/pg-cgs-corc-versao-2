import { Brain, Compass, Network, PenLine } from "lucide-react";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LessonCover } from "@/components/ui/LessonCover";
import { Placeholder } from "@/components/ui/Placeholder";
import { QuoteCard } from "@/components/ui/QuoteCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionTitle } from "@/components/ui/Section";

const benefits = [
  {
    title: "Categorizar o Caos",
    icon: Network,
    text: "sinais e sintomas deixam de ser uma lista solta e passam a compor um mapa lógico.",
  },
  {
    title: "Antecipar Condutas",
    icon: Compass,
    text: "quando você entende a origem fisiopatológica do que está vendo, a conduta se torna óbvia, e não mais uma coisa decorada.",
  },
  {
    title: "Memorização Aguda",
    icon: Brain,
    stat: { value: "10x", label: "mais rápido" },
    text: "O que é desenhado e estruturado no quadro é fixado 10x mais rápido que um texto de livro.",
  },
  {
    title: "Construir o seu próprio raciocínio",
    icon: PenLine,
    text: "você não compra o raciocínio pronto. Você vê como eram os meus esquemas quando eu ainda era aluno e, a partir deles, aprende a montar os seus.",
  },
];

// TODO: substituir pelas capas e títulos reais das aulas
const lessons = [
  { title: "Síndrome Anêmica" },
  { title: "O Paciente Cirrótico" },
  { title: "Exame de Urina" },
  { title: "Título da aula" },
  { title: "Título da aula" },
  { title: "Título da aula", badge: "Nova" },
];

export function Mecanismo() {
  return (
    <Section id="mecanismo" className="border-t border-white/[0.06]">
      <Reveal>
        <SectionTitle className="max-w-3xl">Comece a organizar o seu raciocínio.</SectionTitle>
      </Reveal>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal className="space-y-5 text-pretty text-base leading-relaxed text-cgs-text/80 sm:text-[1.05rem]">
          {/* TODO: inserir os parágrafos de contexto sobre a citação do Cecil (copy da Dobra 3) */}
          <p>
            <Placeholder>Parágrafo de contexto que introduz a citação do Cecil</Placeholder>
          </p>
          {/* TODO: inserir os parágrafos sobre o método do Dr. Carlos Antonio Moura */}
          <p>
            <Placeholder>Parágrafo sobre o método do Dr. Carlos Antonio Moura</Placeholder>
          </p>
        </Reveal>
        <Reveal delay={0.1} className="pt-6 lg:pt-0">
          {/* TODO: inserir o trecho exato da citação do Cecil */}
          <QuoteCard attribution="Cecil, Tratado de Medicina Interna">
            <Placeholder>Trecho exato da citação do Cecil</Placeholder>
          </QuoteCard>
        </Reveal>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <Eyebrow>Você verá como:</Eyebrow>
        </Reveal>
        {/* Grade bento: larguras alternadas (7/5, 5/7) no desktop */}
        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-12">
          {benefits.map((b, i) => {
            const wide = i === 0 || i === 3;
            return (
              <Reveal
                key={b.title}
                delay={(i % 2) * 0.1}
                className={wide ? "lg:col-span-7" : "lg:col-span-5"}
              >
                <BenefitCard index={i + 1} icon={b.icon} title={b.title} stat={b.stat} wide={wide}>
                  <span className="block first-letter:uppercase">{b.text}</span>
                </BenefitCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-24 sm:mt-32">
        <Reveal>
          <SectionTitle className="max-w-2xl">O seu arsenal de Raciocínio Clínico está aqui.</SectionTitle>
        </Reveal>

        {/* TODO: substituir pelas capas reais das aulas em formato vertical */}
        <Reveal delay={0.1}>
          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6 [&::-webkit-scrollbar]:hidden">
            {lessons.map((l, i) => (
              <div key={i} className="w-[58%] shrink-0 snap-start sm:w-auto">
                <LessonCover number={i + 1} title={l.title} badge={l.badge} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-start gap-8 border-t border-white/[0.06] pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-pretty text-lg italic leading-relaxed text-cgs-text/90">
            Tudo isso em um <span className="chalk">curso vivo</span>, onde aulas novas poderão ser
            adicionadas periodicamente, para acompanhar a sua evolução na prática médica.
          </p>
          <CtaButton className="w-full shrink-0 sm:w-auto">QUERO DOMINAR AS SÍNDROMES</CtaButton>
        </Reveal>
      </div>
    </Section>
  );
}
