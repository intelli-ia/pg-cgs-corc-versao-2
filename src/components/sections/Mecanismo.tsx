import { Brain, Compass, Network, PenLine } from "lucide-react";
import { BenefitsBento, type Benefit } from "@/components/ui/BenefitsBento";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionTitle } from "@/components/ui/Section";

const benefits: Benefit[] = [
  {
    title: "Categorizar",
    accent: "o Caos",
    icon: Network,
    text: "sinais e sintomas deixam de ser uma lista solta e passam a compor um mapa lógico.",
  },
  {
    title: "Antecipar",
    accent: "Condutas",
    icon: Compass,
    text: "quando você entende a origem fisiopatológica do que está vendo, a conduta se torna óbvia, e não mais uma coisa decorada.",
  },
  {
    title: "Memorização",
    accent: "Aguda",
    icon: Brain,
    text: "O que é desenhado e estruturado no quadro é fixado 10x mais rápido que um texto de livro.",
  },
  {
    title: "Construir",
    accent: "o seu próprio raciocínio",
    icon: PenLine,
    text: "você não compra o raciocínio pronto. Você vê como eram os meus esquemas quando eu ainda era aluno e, a partir deles, aprende a montar os seus.",
  },
];

export function Mecanismo() {
  return (
    <Section id="mecanismo" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span aria-hidden="true" className="mx-auto mb-8 block h-px w-24 bg-gradient-to-r from-transparent via-cgs-gold to-transparent" />
          <SectionTitle className="text-balance lg:text-5xl lg:leading-[1.2]">
            Comece a organizar o seu raciocínio.
          </SectionTitle>
        </Reveal>

        <Reveal className="mt-10 sm:mt-12">
          <p className="text-pretty font-serif text-lg leading-[1.85] text-cgs-text/85 sm:text-xl sm:leading-[1.85]">
            A faculdade malmente te entrega os conteúdos; as diretrizes curriculares recentes
            desenfatizam o conhecimento de doenças e síndromes. Mas um médico, se quer se assim
            chamado, <strong className="font-bold text-cgs-text">NECESSITA</strong> compreender os
            sinais e sintomas dos pacientes que pedem sua ajuda. A graduação se perdeu num
            emaranhado &ldquo;pseudo-humanístico&rdquo;, mas como consta no captíulo 1 do maior
            tratado de medicina, o Cecil:
          </p>
        </Reveal>

        <Reveal className="mt-16 sm:mt-20">
          <figure className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cgs-gold/[0.06] blur-3xl" />
            <span aria-hidden="true" className="relative block font-serif text-[6rem] font-bold italic leading-[0.6] text-cgs-gold/70 sm:text-[8rem]">
              &ldquo;
            </span>
            <blockquote className="relative mt-4 text-pretty font-serif text-[1.35rem] font-bold italic leading-[1.6] text-cgs-text sm:text-[1.85rem] sm:leading-[1.6]">
              As qualidades humanísticas essenciais de cuidar e confortar podem alcançar o
              benefício pleno apenas se forem combinadas com uma compreensão de como a ciência
              médica pode e deve ser aplicada a pacientes com doenças conhecidas ou suspeitas. Sem
              esse conhecimento, confortar pode ser inapropriado ou enganoso, e cuidar pode ser
              inefetivo ou contraproducente se inibir uma pessoa doente de obter assistência médica
              científica apropriada.
            </blockquote>
            <div aria-hidden="true" className="relative mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-cgs-gold/70 to-transparent" />
            <figcaption className="relative mt-5 font-serif text-xs uppercase tracking-[0.25em] text-cgs-gold">
              Cecil, Tratado de Medicina Interna
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="mt-16 sm:mt-20">
          <p className="text-pretty font-serif text-lg leading-[1.85] text-cgs-text/85 sm:text-xl sm:leading-[1.85]">
            Nosso resgate visa educar o aluno para ser producente diante de pacientes com doenças
            conhecidas ou suspeitas. Usar o quadro é tradicional e parece antiquado, mas funcionou
            por séculos. O diferencial, de fato, nunca esteve no método, e sim na experiência de
            quem ensina através de esquemas visuais e mnemônicos estruturais que eu,{" "}
            <strong className="font-bold text-cgs-gold">Dr. Carlos Antonio Moura</strong>, criei ao
            longo de anos enquanto acadêmico, residentes e professor. Tudo feito muito antes da IA
            existir.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal>
          <Eyebrow>Você verá como:</Eyebrow>
        </Reveal>
        <div className="mt-10">
          <BenefitsBento benefits={benefits} />
        </div>
      </div>
    </Section>
  );
}
