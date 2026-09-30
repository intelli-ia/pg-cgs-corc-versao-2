import { Brain, Compass, Network, PenLine } from "lucide-react";
import { BenefitsBento, type Benefit } from "@/components/ui/BenefitsBento";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CardFan, type FanCard } from "@/components/ui/CardFan";
import { CountUp } from "@/components/ui/CountUp";
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

// Celular: as 8 capas lado a lado, com rolagem horizontal e encaixe (o leque fica só de sm para cima).
const lessons = [
  { image: "/images/aulas/vasculites.webp", text: "O raciocínio por trás das Vasculites" },
  { image: "/images/aulas/anasarca.webp", text: "O raciocínio por trás da Anasarca" },
  { image: "/images/aulas/choque-parte-1.webp", text: "O raciocínio por trás do Choque [parte 1]" },
  { image: "/images/aulas/dor-musculoesqueletica.webp", text: "O raciocínio por trás da Dor Musculoesquelética" },
  { image: "/images/aulas/linhagens-hematologicas.webp", text: "O raciocínio por trás das Linhagens Hematológicas" },
  { image: "/images/aulas/anemia.webp", text: "O raciocínio por trás da Anemia" },
  { image: "/images/aulas/disturbios-hemostaticos.webp", text: "O raciocínio por trás dos Distúrbios Hemostáticos" },
  { image: "/images/aulas/proteinuria.webp", text: "O raciocínio por trás da Proteinúria" },
];

// Leque de aulas: 3 capas à esquerda, a carta do meio (texto) e 3 capas à direita — fixas, sem paginação.
// As capas são prints das aulas (.webp), cortados para preencher a carta.
const fanCards: FanCard[] = [
  { imgUrl: "/images/aulas/vasculites.webp", alt: "Aula: O raciocínio por trás das Vasculites", title: "O raciocínio por trás das Vasculites" },
  { imgUrl: "/images/aulas/anasarca.webp", alt: "Aula: O raciocínio por trás da Anasarca", title: "O raciocínio por trás da Anasarca" },
  { imgUrl: "/images/aulas/choque-parte-1.webp", alt: "Aula: O raciocínio por trás do Choque", title: "O raciocínio por trás do Choque [parte 1]" },
  {
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-cgs-bg to-[#252022] p-4 text-center">
        <CountUp
          to={30}
          prefix="+"
          className="font-serif text-4xl font-black leading-none text-cgs-gold sm:text-5xl lg:text-6xl"
        />
        <span className="font-serif text-sm font-bold leading-snug text-cgs-text sm:text-lg lg:text-xl">
          aulas e contando
        </span>
      </div>
    ),
  },
  { imgUrl: "/images/aulas/anemia.webp", alt: "Aula: O raciocínio por trás da Anemia", title: "O raciocínio por trás da Anemia" },
  { imgUrl: "/images/aulas/disturbios-hemostaticos.webp", alt: "Aula: O raciocínio por trás dos Distúrbios Hemostáticos", title: "O raciocínio por trás dos Distúrbios Hemostáticos" },
  { imgUrl: "/images/aulas/proteinuria.webp", alt: "Aula: O raciocínio por trás da Proteinúria", title: "O raciocínio por trás da Proteinúria" },
];

export function Mecanismo() {
  return (
    // Continuação da dobra clara iniciada em <Raciocinio />: mesmo fundo branco, sem folga no topo.
    <Section id="mecanismo" className="overflow-x-clip bg-white !pb-0 !pt-10 sm:!pt-12">
      <div>
        <Reveal>
          <Eyebrow light>Você verá como:</Eyebrow>
        </Reveal>
        <div className="mt-8">
          <BenefitsBento benefits={benefits} light />
        </div>
      </div>

      <div className="mt-24 sm:mt-32">
        <Reveal>
          <SectionTitle className="mx-auto max-w-none text-center text-cgs-bg !text-pretty sm:max-w-2xl sm:!text-balance">
            O seu arsenal de Raciocínio Clínico está aqui.
          </SectionTitle>
        </Reveal>

        {/* Celular: blocos lado a lado, com rolagem horizontal e encaixe */}
        <Reveal delay={0.1} className="sm:hidden">
          <ul
            role="region"
            aria-label="Aulas do curso"
            className="-mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {lessons.map((l) => (
              <li key={l.image} className="w-[68%] shrink-0 snap-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.image}
                  alt=""
                  width={840}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="aspect-[7/9] w-full select-none rounded-2xl border border-cgs-gold/30 object-cover"
                />
                <p className="mt-4 text-balance text-center font-serif text-lg font-bold italic leading-snug text-cgs-gold">
                  {l.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mt-2 hidden sm:block">
          <CardFan cards={fanCards} />
        </Reveal>

        <Reveal className="mx-auto mt-6 max-w-3xl text-center">
          <p className="text-balance font-serif text-xl italic leading-relaxed text-cgs-ink-soft sm:text-2xl sm:leading-relaxed">
            Tudo isso em um <span className="chalk">curso vivo</span>, onde aulas novas poderão ser
            adicionadas periodicamente, para acompanhar a sua evolução na prática médica.
          </p>
        </Reveal>

        {/* Imagem grudada no fim da dobra: sem padding embaixo da seção, as mãos encostam na borda */}
        <Reveal delay={0.1} className="mt-10 sm:mt-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/app-aulas.webp"
            alt="Aulas do curso abertas no celular, com o áudio tocando também no carro e na tela de bloqueio"
            width={1457}
            height={1279}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="mx-auto block h-auto w-full max-w-[30rem] select-none sm:max-w-[42rem] lg:max-w-[52rem]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
