import { Brain, Compass, Network, PenLine } from "lucide-react";
import { BenefitsBento, type Benefit } from "@/components/ui/BenefitsBento";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CircularGallery, type GalleryItem } from "@/components/ui/CircularGallery";
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

// TODO: substituir pelas capas (formato vertical) e títulos reais das aulas
const lessons: GalleryItem[] = [
  { image: "/images/aulas/aula-01.svg", text: "Síndrome Anêmica" },
  { image: "/images/aulas/aula-02.svg", text: "O Paciente Cirrótico" },
  { image: "/images/aulas/aula-03.svg", text: "Exame de Urina" },
  { image: "/images/aulas/aula-04.svg", text: "Título da aula" },
  { image: "/images/aulas/aula-05.svg", text: "Título da aula" },
  { image: "/images/aulas/aula-06.svg", text: "Título da aula" },
];

export function Mecanismo() {
  return (
    <Section id="mecanismo" className="overflow-x-clip border-t border-white/[0.06]">
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

      <div className="mt-24 sm:mt-32">
        <Reveal>
          <SectionTitle className="mx-auto max-w-2xl text-center">
            O seu arsenal de Raciocínio Clínico está aqui.
          </SectionTitle>
        </Reveal>

        {/* Galeria circular (WebGL): arraste para os lados. Os títulos ficam em sr-only para acessibilidade. */}
        <Reveal delay={0.1}>
          <div role="region" aria-label="Aulas do curso" className="relative left-1/2 mt-6 h-[420px] w-screen -translate-x-1/2 sm:h-[520px] lg:h-[600px]">
            <CircularGallery
              items={lessons}
              bend={3}
              borderRadius={0.05}
              scrollEase={0.05}
              className="font-serif text-[26px] font-bold italic text-cgs-gold sm:text-[30px]"
            />
            <ul className="sr-only">
              {lessons.map((l, i) => (
                <li key={i}>{l.text}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-balance font-serif text-xl italic leading-relaxed text-cgs-text/90 sm:text-2xl sm:leading-relaxed">
            Tudo isso em um <span className="chalk">curso vivo</span>, onde aulas novas poderão ser
            adicionadas periodicamente, para acompanhar a sua evolução na prática médica.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
