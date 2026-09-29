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

// Capas: prints das aulas (16:9, .webp). A galeria as exibe em blocos retangulares verticais,
// preenchendo o bloco todo (corte centralizado).
const lessons: GalleryItem[] = [
  { image: "/images/aulas/vasculites.webp", text: "O raciocínio por trás das Vasculites" },
  { image: "/images/aulas/anasarca.webp", text: "O raciocínio por trás da Anasarca" },
  { image: "/images/aulas/choque-parte-1.webp", text: "O raciocínio por trás do Choque [parte 1]" },
  { image: "/images/aulas/dor-musculoesqueletica.webp", text: "O raciocínio por trás da Dor Musculoesquelética" },
  { image: "/images/aulas/linhagens-hematologicas.webp", text: "O raciocínio por trás das Linhagens Hematológicas" },
  { image: "/images/aulas/anemia.webp", text: "O raciocínio por trás da Anemia" },
  { image: "/images/aulas/disturbios-hemostaticos.webp", text: "O raciocínio por trás dos Distúrbios Hemostáticos" },
  { image: "/images/aulas/proteinuria.webp", text: "O raciocínio por trás da Proteinúria" },
];

export function Mecanismo() {
  return (
    <Section id="mecanismo" className="overflow-x-clip">
      <div>
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
