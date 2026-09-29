import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionTitle } from "@/components/ui/Section";

// Imagens: prints de aulas (recortes 4:3 em /images/problemas).
const problems = [
  {
    title: "O PBL te deixou lacunas",
    text: "Você teve TUTOR mas não PROFESSOR.",
    image: "/images/problemas/problema-01.webp",
  },
  {
    title: "A armadilha dos Flashcards",
    text: "Você comprou o raciocínio pronto de outra pessoa, mas não construiu o seu.",
    image: "/images/problemas/problema-02.webp",
  },
  {
    title: "O Caos da Enfermaria",
    text: "Na vida real, o paciente não vem com o capítulo do livro escrito na testa. Ele vem com sinais brutos que exigem uma experiência sistematizada.",
    image: "/images/problemas/problema-03.webp",
  },
];

// Faixa dourada com um cartão de imagem que ultrapassa a faixa (composição da referência).
// `flip` inverte os lados: o cartão vai para a direita e o texto para a esquerda.
function ProblemBand({
  index,
  title,
  image,
  flip = false,
  children,
}: {
  index: number;
  title: string;
  image: string;
  flip?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-r from-cgs-gold to-[#f0b12c] px-6 pb-10 pt-[12.5rem] shadow-[0_30px_80px_-30px_rgb(229_159_20/0.45)] sm:px-10 md:flex md:min-h-[15rem] md:items-center md:pb-0 md:pt-0 ${
        flip ? "md:pl-12 md:pr-[46%]" : "md:pl-[46%] md:pr-12"
      }`}
    >
      <figure
        className={`absolute -top-8 left-1/2 h-[11.5rem] w-[15.5rem] -translate-x-1/2 md:-bottom-10 md:-top-10 md:h-auto md:w-[36%] md:translate-x-0 ${
          flip ? "md:left-auto md:right-[5%] lg:right-[7%]" : "md:left-[5%] lg:left-[7%]"
        }`}
      >
        <div className="relative h-full overflow-hidden rounded-2xl border border-cgs-gold/40 bg-cgs-bg shadow-[0_24px_60px_-20px_rgb(0_0_0/0.85)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            width={960}
            height={720}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 size-full select-none object-cover"
          />
        </div>
      </figure>

      <div>
        <span aria-hidden="true" className="font-serif text-sm font-bold italic text-cgs-bg/60">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="mt-1 font-serif text-xl font-bold leading-snug text-cgs-bg sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 font-serif text-base leading-relaxed text-cgs-bg/85 sm:text-lg">
          {children}
        </p>
      </div>
    </div>
  );
}

// Dobra 2 — título e texto centrados; abaixo, as três faixas douradas dos problemas.
export function Manifesto() {
  return (
    <Section id="manifesto" className="overflow-x-clip !pb-0">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionTitle className="text-balance lg:text-5xl lg:leading-[1.2]">
            Você estuda e decora... mas o seu raciocínio parece um labirinto?
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

      {/* Três faixas douradas, cada uma com um cartão de imagem sobreposto de um lado e o texto do outro */}
      <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 bg-cgs-bg px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-balance font-serif text-2xl font-bold leading-snug text-cgs-text sm:text-3xl">
            O problema não é a sua inteligência.{" "}
            <span className="italic text-cgs-gold">O problema é que:</span>
          </p>
        </Reveal>

        <div className="mx-auto mt-20 max-w-5xl space-y-20 md:space-y-24">
          {problems.map((p, i) => (
            <Reveal key={p.title}>
              <ProblemBand index={i + 1} title={p.title} image={p.image} flip={i % 2 === 1}>
                {p.text}
              </ProblemBand>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-24 max-w-4xl sm:mt-32">
          <figure className="relative text-center">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cgs-gold/[0.06] blur-3xl" />
            <blockquote className="relative text-balance font-serif text-[1.75rem] font-bold italic leading-[1.4] text-cgs-text sm:text-4xl sm:leading-[1.4] lg:text-[2.9rem] lg:leading-[1.35]">
              Não adianta ter a biblioteca inteira na cabeça se você não tem as{" "}
              <span className="text-cgs-gold">gavetas certas</span> para guardar cada informação.
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
