import { ChalkStroke } from "@/components/brand/Wordmark";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const credentials = ["UFBA", "Reumatologista · SBR", "Doutor em Medicina e Saúde Humana", "EBMSP · UNIFACS"];

function PortraitPlaceholder() {
  return (
    <div className="rounded-xl border border-cgs-gold/25 bg-gradient-to-b from-cgs-gold/[0.07] to-transparent p-2 sm:p-3">
      {/* TODO: substituir pela foto real do Dr. Carlos Antonio Moura (formato 4:5) */}
      <div className="chalkboard relative grid aspect-[4/5] place-items-center overflow-hidden rounded-md ring-1 ring-inset ring-white/5">
        <span className="chalk text-7xl opacity-80">CM</span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cgs-bg to-transparent p-6 pt-20">
          <p className="chalk text-xl">Dr. Carlos Antonio Moura</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cgs-text/60">Clínico e reumatologista</p>
        </div>
      </div>
    </div>
  );
}

export function Professor() {
  return (
    <Section id="professor" className="border-t border-white/[0.06]">
      <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-10">
          <PortraitPlaceholder />
          <ul className="mt-6 flex flex-wrap gap-2">
            {credentials.map((c) => (
              <li key={c} className="rounded-full border border-cgs-gold/25 px-3 py-1.5 text-[0.7rem] text-cgs-text/70">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>Quem conduz o CGS:</Eyebrow>
          <h2 className="chalk mt-5 text-[1.9rem] leading-tight sm:text-4xl">Dr. Carlos Antonio Moura</h2>
          <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-cgs-text/80 sm:text-[1.05rem]">
            <p>
              Dr. Carlos Antonio Moura é médico graduado pela UFBA, clínico e reumatologista titulado
              pela SBR, com doutorado em Medicina e Saúde Humana. Além de escritor e palestrante, é
              professor dos internatos de Medicina da EBMSP e da UNIFACS, e supervisor acadêmico da
              Residência de Clínica Médica do Hospital Santo Antônio, das Obras Sociais Irmã Dulce.
              Há mais de dez anos ele acompanha a formação de estudantes e residentes à beira do
              leito, onde a medicina se revela como ela é: viva, imprevisível e concreta.
            </p>
            <p>
              Criador do Curso Online de Raciocínio Clínico (CORC), percebeu a importância de levar
              para outros alunos aquilo de que muitos já se beneficiam com suas aulas em quadros e
              esquemas nos papéis dos corredores dos hospitais. Foi desse mesmo hábito que nasceu o
              livro <em className="text-cgs-text">Raciocínio Clínico: diagnóstico diferencial à beira do leito</em>{" "}
              (2017), e é dele que nasce agora o Grandes Síndromes.
            </p>
            <p>
              O <span className="font-bold text-cgs-text">Grandes Síndromes: O Raciocínio no Quadro</span>{" "}
              é a materialização desse hábito. Foi na lousa e nos &lsquo;papéis de rascunho&rsquo; dos
              ambulatórios e salas de prescrições, que encontrei a forma mais sincera de organizar o
              caos da dúvida diagnóstica e transmitir o que anos de prática e de leitura consolidaram.
            </p>
            <p>
              Aqui, você não assiste a uma aula ensaiada com desfechos prontos. Você testemunha o{" "}
              <span className="chalk">raciocínio clínico in natura</span>, passo a passo. É o esforço
              de transformar a complexidade da beira do leito em estruturas lógicas que você pode
              carregar para a sua própria prática.
            </p>
          </div>

          <figure className="mt-12 border-l-2 border-cgs-gold/60 pl-6">
            <blockquote className="chalk text-2xl leading-snug sm:text-3xl">
              &ldquo;A excelência não é um ato, mas um hábito.&rdquo;
            </blockquote>
            <ChalkStroke className="mt-4 h-2 w-24 text-cgs-gold/40" />
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
