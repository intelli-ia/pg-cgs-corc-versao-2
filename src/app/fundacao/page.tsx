import type { Metadata } from "next";
import { Wordmark } from "@/components/brand/Wordmark";
import { AgitationCard } from "@/components/ui/AgitationCard";
import { ChalkboardFrame } from "@/components/ui/ChalkboardFrame";
import { CheckItem } from "@/components/ui/CheckItem";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { QuoteCard } from "@/components/ui/QuoteCard";
import { StickyCta } from "@/components/ui/StickyCta";

export const metadata: Metadata = {
  title: "Fundação — CGS",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "cgs-bg", hex: "#151314", role: "Fundo — quadro-negro", className: "bg-cgs-bg" },
  { name: "cgs-text", hex: "#FFFFFF", role: "Corpo, labels", className: "bg-cgs-text" },
  { name: "cgs-gold", hex: "#E59F14", role: "H1, ênfase, CTA — o giz", className: "bg-cgs-gold" },
];

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 py-14">
      <Eyebrow className="mb-8">{label}</Eyebrow>
      {children}
    </section>
  );
}

// Página interna de validação da fundação (paleta, tipografia, componentes).
export default function FundacaoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-40 pt-12 sm:px-6">
      <header className="flex items-end justify-between gap-6 pb-12">
        <Wordmark />
        <Wordmark variant="compact" />
      </header>

      <Block label="Tipografia — Merriweather">
        <h1 className="chalk max-w-4xl text-3xl leading-[1.25] sm:text-5xl sm:leading-[1.2]">
          Entenda grandes síndromes da medicina sem decoreba e longe do &lsquo;PBL&rsquo;.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cgs-text/80">
          H2 / subtítulo em Merriweather Regular. A organização visual das aulas no quadro, direto
          ao raciocínio que você usa na prática — sem enrolação, sem filtro.
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-cgs-text/70">
          Corpo de texto. A medicina moderna nos entope de informações, mas esquece de nos ensinar o
          mais importante: <em className="chalk">como organizar tudo isso</em>{" "}
          sem abandonar os fundamentos.
        </p>
        <div className="mt-8 grid gap-2 text-sm text-cgs-text/60 sm:grid-cols-4">
          <span className="font-normal">Regular 400</span>
          <span className="italic">Italic 400</span>
          <span className="font-bold">Bold 700</span>
          <span className="font-bold italic">Bold Italic 700</span>
        </div>
      </Block>

      <Block label="Paleta">
        <div className="grid gap-4 sm:grid-cols-3">
          {swatches.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-lg border border-white/10">
              <div className={`h-24 ${s.className}`} />
              <div className="p-4">
                <p className="font-bold">{s.name}</p>
                <p className="text-sm text-cgs-text/60">
                  {s.hex} · {s.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block label="CTA">
        <div className="flex flex-wrap items-center gap-6">
          <CtaButton size="lg">Quero dominar as síndromes</CtaButton>
          <CtaButton>Quero garantir meu acesso agora</CtaButton>
          <CtaButton size="sm">Quero dominar as síndromes</CtaButton>
        </div>
      </Block>

      <Block label="Card de destaque — agitação (Dobra 2)">
        <div className="grid gap-5 md:grid-cols-3">
          <AgitationCard index={1} title="O PBL te deixou lacunas">
            Você teve TUTOR mas não PROFESSOR.
          </AgitationCard>
          <AgitationCard index={2} title="A armadilha dos Flashcards">
            Você comprou o raciocínio pronto de outra pessoa, mas não construiu o seu.
          </AgitationCard>
          <AgitationCard index={3} title="O Caos da Enfermaria">
            Na vida real, o paciente não vem com o capítulo do livro escrito na testa. Ele vem com
            sinais brutos que exigem uma experiência sistematizada.
          </AgitationCard>
        </div>
      </Block>

      <Block label="Card de citação de autoridade (Dobra 3)">
        <QuoteCard attribution="Cecil, Tratado de Medicina Interna" className="max-w-3xl">
          Texto de exemplo para a citação do Cecil — o trecho exato virá do copy da Dobra 3.
        </QuoteCard>
      </Block>

      <Block label="Bullets ✓ (Dobra 3)">
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          <CheckItem title="Categorizar o Caos">
            sinais e sintomas deixam de ser uma lista solta e passam a compor um mapa lógico.
          </CheckItem>
          <CheckItem title="Antecipar Condutas">
            quando você entende a origem fisiopatológica do que está vendo, a conduta se torna
            óbvia, e não mais uma coisa decorada.
          </CheckItem>
          <CheckItem title="Memorização Aguda">
            O que é desenhado e estruturado no quadro é fixado 10x mais rápido que um texto de
            livro.
          </CheckItem>
          <CheckItem title="Construir o seu próprio raciocínio">
            você não compra o raciocínio pronto. Você vê como eram os meus esquemas quando eu ainda
            era aluno e, a partir deles, aprende a montar os seus.
          </CheckItem>
        </div>
      </Block>

      <Block label="Moldura de vídeo — placeholder (Dobra 1)">
        {/* TODO: substituir pelo vídeo real de aula no quadro */}
        <ChalkboardFrame className="max-w-2xl" caption="Trecho de aula no quadro" />
      </Block>

      <Block label="Frase de fechamento">
        <p className="mx-auto max-w-3xl text-center text-2xl italic leading-relaxed text-cgs-text/95 sm:text-3xl">
          &ldquo;Não adianta ter a biblioteca inteira na cabeça se você não tem as{" "}
          <span className="chalk">gavetas certas</span> para guardar cada informação.&rdquo;
        </p>
      </Block>

      {/* TODO: confirmar o texto da barra fixa com o cliente */}
      <StickyCta
        showAfter={0}
        label={
          <>
            <span className="hidden text-cgs-text/60 sm:block">Grandes Síndromes</span>
            <span className="block whitespace-nowrap font-bold text-cgs-text">12x de R$ 20,02</span>
            <span className="block whitespace-nowrap text-cgs-text/60">ou R$ 197 à vista</span>
          </>
        }
      />
    </main>
  );
}
