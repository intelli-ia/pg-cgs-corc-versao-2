import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { TestimonialVideo } from "@/components/ui/TestimonialVideo";

type Depoimento = {
  autor: string;
  /** Linha de apoio sob o nome: cargo, instituição, tempo de formado. */
  subtitulo?: string;
  /** `**trecho**` vira negrito. */
  paragrafos: string[];
  /** Mídia no fim do card, como nos murais de referência. */
  midia?:
    | { tipo: "imagem"; src: string; alt: string }
    | { tipo: "video"; src: string; poster: string; duracao: string };
};

/**
 * Na ordem do documento do cliente (leitura por linha, três por linha). Sem
 * avatar: o cliente não enviou fotos de aluno, e um monograma inventado
 * fingiria um perfil que não existe.
 */
const DEPOIMENTOS: Depoimento[] = [
  {
    autor: "Márcio",
    paragrafos: [
      "Pra mim, o CORC foi uma experiência marcante, não apenas pelo conteúdo, mas principalmente pela forma como o Cacau conduz o raciocínio diagnóstico.",
      "A marca que ele deixa é muito clara. **Não se trata de acumular mais e mais conhecimento, mas de aprender a pensar melhor diante de cada caso.**",
      "O CORC, na minha visão, **é um curso que engrandece o médico**, porque atua diretamente na base de tudo: o raciocínio clínico.",
    ],
  },
  {
    autor: "Alfredo Júlio Gonzaga Urbilon",
    subtitulo:
      "Médico reumatologista · Goiânia/GO · Professor e preceptor de Residência de Clínica Médica",
    paragrafos: [
      "**O CORC mudou a minha vida… Eu me tornei preceptor de residência de clínica médica por causa do CORC.**",
    ],
    midia: {
      tipo: "video",
      src: "/video/depoimento.mp4",
      poster: "/images/depoimento-video-poster.webp",
      duracao: "2:48",
    },
  },
  {
    autor: "Nathalie Guerreiro",
    paragrafos: [
      "Ele não entrega respostas prontas. Ele vai construindo o caso, levantando hipóteses, conduzindo o pensamento, e isso faz com que a gente realmente se envolva e aprenda de forma mais profunda.",
      "Isso, para mim, faz toda a diferença. Porque **não é só sobre aprender medicina, é sobre aprender a pensar como médico, com mais segurança, mais clareza e mais consciência diante do paciente.**",
    ],
  },
  {
    autor: "Murilo Bahia",
    paragrafos: [
      "Estou indo para o ciclo clínico agora, se eu aprender 5% do que Cacau tem a ensinar, tenho certeza que serei um médico 500% melhor.",
      "A didática e os esquemas que Cacau utiliza para explicar os conteúdos facilitam muito o entendimento não só dos casos clínicos dos CORCs, mas também para entendimento da medicina como um todo.",
      "**E vindo de uma faculdade PBL, eu sinto essa falta de ter um professor ensinando de verdade** o que é a medicina e como raciocinar sem precisar decorar achados clínicos.",
      "**É um complemento mais que essencial, é necessário.**",
    ],
  },
  {
    autor: "Marllus",
    subtitulo: "R1 de Clínica Médica — UNIFESP",
    paragrafos: [
      "Aqui na UNIFESP, tenho observado que nossa formação tem um embasamento científico — em termos de MBE — muuuito forte, e o ‘academicismo’ é o carro-chefe; por conta disso, por vezes sinto falta de **uma visão prática, de mundo real, daquele mestre que traz experiência na fala, com dicas clínicas e visões perspicazes que só o tempo traz.**",
      "Daí, encontro esse recurso no CORC.",
      "Inclusive, a inclusão das aulas ‘o raciocínio por detrás da...’ é sensacional.",
    ],
  },
  {
    autor: "Rayssa Valandro Garcia",
    paragrafos: [
      "Como ex-residente de Clínica Médica do Irmã Dulce e tendo conhecido e vivenciado de perto o que é o raciocínio clínico raiz, posso dizer, sem dúvidas, que Cacau é uma das pessoas que melhor o sabe fazer. Com maestria e sem rodeios.",
      "**Não é só sobre aprender conteúdo, é sobre aprender a pensar sobre a doença e o doente.**",
      "Cacau consegue transformar casos complexos em algo lógico, quase óbvio (depois que ele explica, claro).",
    ],
    midia: {
      tipo: "imagem",
      src: "/images/rayssa-valandro.webp",
      alt: "Estudantes de jaleco reunidos em volta do leito em uma enfermaria, acompanhando a explicação do professor",
    },
  },
  {
    autor: "Rosenbert Júnior",
    paragrafos: [
      "Estou achando muito bom! As discussões de casos são excepcionais porque faz você pensar, não apenas decorar.",
      "Ele apresenta os casos clínicos de uma forma que obriga você a montar o raciocínio, criar hipóteses e ajustá-las conforme surgem novos dados.",
      "Mas, mais importante que o conteúdo em si é a forma como você aprende a pensar, **desenvolvendo um raciocínio clínico que te permite chegar às respostas por conta própria.**",
    ],
  },
  {
    autor: "Jener Sapia",
    subtitulo: "Médico com 40 anos de formado",
    paragrafos: [
      "O encontro com o Cacau e o CORC, pra mim, foi como uma revoada de pássaros… uma inspiração e uma renovação…",
      "**Poucas vezes nesses 40 anos de prática vi alguém com tanta cultura médica, repertório clínico e rapidez de raciocínio como o Cacau.**",
      "Me reabasteceu de entusiasmo e mais ainda de otimismo ao ver tanta gente jovem envolvida nesse projeto.",
      "Pra quem ainda não está no CORC, não sabe o que está perdendo.",
    ],
  },
  {
    autor: "Vinicius",
    paragrafos: [
      "É, de fato, uma verdadeira aula de raciocínio clínico — quase um trabalho ‘artesanal’ de construção diagnóstica por camadas: do diagnóstico sindrômico, passando pelos diagnósticos intermediários, até chegar, quando possível, ao diagnóstico etiológico.",
      "Mas, sobretudo, **o mais valioso é como o curso amplia nosso repertório diante dos padrões que vemos no dia a dia.**",
      "Um bom caso clínico, didática, conhecimento técnico sólido e experiência já fazem toda a diferença e nisso o curso entrega com excelência.",
    ],
  },
  {
    autor: "Gustavo Araújo",
    paragrafos: [
      "O modelo da discussão é extremamente importante… na faculdade sinto que os alunos ficam engessados aos casos padrão que, queira ou não, precisam ser discutidos por se tratarem das principais patologias que encontraremos.",
      "Mas no CORC, **temos contato com muito mais síndromes e diferenciais, que abrem a cabeça num nível insano.**",
      "Cacau é muito bom, sabe muita clínica médica e tem uma didática excelente, além de gostar de ensinar.",
    ],
  },
  {
    autor: "Ana Beatriz",
    paragrafos: [
      "Vi uma aula e um vídeo sobre a formação médica que me fez entender que eu estava no cerne de um grande problema e que era algo que já vinha me incomodando há bastante tempo (o método PBL, por exemplo).",
      "Após ver uma aula de Dr Carlos, eu senti que aprendi muito. Ele é muito didático e nos faz pensar além do básico.",
      "**Ele sabe os limites dos estudantes de medicina dos dias de hoje e faz questão de cutucar isso, mostrando o quão além nós podemos ser.**",
    ],
  },
  {
    autor: "Flávia Bessa",
    paragrafos: [
      "Estou muito satisfeita com o CORC.",
      "Para mim, que já tenho mais tempo de formada, é importante para revisar a base fisiopatológica.",
      "**É no raciocínio no quadro que começam a se formar como que ‘gavetas cerebrais médicas’.**",
      "E aos poucos o raciocínio clínico é ordenado em categorias fisiopatológicas.",
    ],
  },
];

/** Três colunas, distribuindo por linha: 1·2·3 / 4·5·6 / … como no documento. */
const COLUNAS = [0, 1, 2].map((coluna) =>
  DEPOIMENTOS.filter((_, index) => index % 3 === coluna),
);

/**
 * Card de depoimento no formato de mural: cabeçalho de perfil (nome e linha de
 * apoio), texto e, quando houver, mídia no pé. Acabamento da papelaria da
 * página — fio dourado na aresta, grão, halo de canto e a aspa como
 * marca-d'água, que pontua sem disputar a primeira linha. As aspas de verdade
 * abrem no primeiro parágrafo e fecham no último: aspa em cada parágrafo
 * picota um depoimento que é uma fala só.
 */
function Card({ autor, subtitulo, paragrafos, midia }: Depoimento) {
  return (
    <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1f1b18] to-[#111010] px-6 pb-7 pt-8 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.9)] transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-cgs-gold/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:px-7 md:pb-8">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cgs-gold to-transparent opacity-70"
      />
      <GrainOverlay />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-24 size-56 rounded-full bg-cgs-gold opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-0 select-none font-black text-cgs-gold text-[96px] leading-none opacity-[0.09]"
      >
        &rdquo;
      </span>

      <figcaption className="relative pr-10">
        <span className="block font-bold tracking-[0.01em] text-cgs-text text-base leading-snug">
          {autor}
        </span>
        {subtitulo && (
          <span className="mt-1.5 block font-light text-cgs-text/70 text-[13px] leading-snug">
            {subtitulo}
          </span>
        )}
        <span
          aria-hidden
          className="mt-4 block h-px w-10 bg-gradient-to-r from-cgs-gold to-transparent"
        />
      </figcaption>

      <blockquote className="relative mt-5 space-y-2">
        {paragrafos.map((paragrafo, index) => (
          <p
            key={paragrafo}
            className="font-light text-cgs-text/85 text-[14.5px] leading-[1.75]"
          >
            {index === 0 && "“"}
            <RichText>{paragrafo}</RichText>
            {index === paragrafos.length - 1 && "”"}
          </p>
        ))}
      </blockquote>

      {midia && (
        <div className="relative mt-6">
          {midia.tipo === "video" ? (
            <TestimonialVideo
              src={midia.src}
              poster={midia.poster}
              duracao={midia.duracao}
              descricao={`o depoimento em vídeo de ${autor}`}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={midia.src}
              alt={midia.alt}
              loading="lazy"
              draggable={false}
              className="block h-auto w-full select-none rounded-xl border border-white/10"
            />
          )}
        </div>
      )}
    </figure>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="relative w-full overflow-hidden border-t border-white/[0.06] bg-cgs-bg font-serif py-24 md:py-36">
      <GrainOverlay />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cgs-gold opacity-[0.06] blur-[120px]"
      />

      <div className="relative z-10">
        {/* ── Cabeçalho ────────────────────────────── */}
        <header className="mx-auto max-w-[860px] px-5 text-center md:px-8">
          <Reveal delay={120 / 1000}>
            <h2 className="font-black text-cgs-gold text-4xl leading-tight sm:text-5xl md:text-6xl">
              “É um curso diferenciado, nada igual!”
            </h2>
          </Reveal>
          <Reveal delay={200 / 1000}>
            <p className="mx-auto mt-6 max-w-[620px] font-light text-cgs-text/70 text-base leading-relaxed md:text-lg">
              Veja o que estudantes, residentes e médicos experientes estão
              dizendo sobre sua experiência com o CORC.
            </p>
          </Reveal>
        </header>

        {/* ── Mural ────────────────────────────────── */}
        {/* Abaixo de `lg`: uma coluna na ordem do documento. A partir de `lg`:
            três colunas independentes (masonry), cada uma com a sua altura. */}
        <div
          role="group"
          aria-label="Depoimentos de alunos do CORC"
          className="mx-auto mt-12 max-w-[1280px] px-5 md:px-8 lg:mt-16"
        >
          <div className="mx-auto flex max-w-[560px] flex-col gap-6 lg:hidden">
            {DEPOIMENTOS.map((depoimento) => (
              <Reveal key={depoimento.autor}>
                <Card {...depoimento} />
              </Reveal>
            ))}
          </div>

          {/* A última de cada coluna cresce (`flex-1`) até a mais alta: as três
              colunas fecham na mesma linha, em vez de um serrilhado embaixo. */}
          <div className="hidden items-stretch gap-6 lg:flex">
            {COLUNAS.map((coluna, index) => (
              <div key={index} className="flex min-w-0 flex-1 flex-col gap-6">
                {coluna.map((depoimento, posicao) => (
                  <Reveal
                    key={depoimento.autor}
                    delay={((posicao * 3 + index) * 60) / 1000}
                    className={
                      posicao === coluna.length - 1 ? "flex-1" : undefined
                    }
                  >
                    <Card {...depoimento} />
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={200 / 1000} className="mt-14 md:mt-20">
          <p className="px-5 text-center font-light italic text-cgs-text/70 text-base md:text-lg">
            Alguns dos muitos depoimentos que recebemos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
