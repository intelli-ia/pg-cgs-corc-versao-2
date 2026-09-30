import { Reveal } from "@/components/ui/Reveal";

// Parte de cima da dobra clara (fundo branco) que continua em <Mecanismo />: texto corrido
// sobre o método. Sem padding embaixo: os blocos da Mecanismo vêm logo após o texto.
export function Raciocinio() {
  return (
    <section id="raciocinio" className="relative bg-white pb-0 pt-20 sm:pt-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-balance font-serif text-[1.9rem] font-bold leading-[1.25] text-cgs-bg sm:text-4xl sm:leading-[1.2] lg:text-5xl lg:leading-[1.2]">
            Comece a organizar o seu raciocínio.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-8 text-pretty font-serif text-lg leading-[1.85] text-cgs-ink-soft sm:mt-12 sm:space-y-10 sm:text-xl sm:leading-[1.85]">
          <Reveal>
            <p>
              A faculdade malmente te entrega os conteúdos; as diretrizes curriculares recentes
              desenfatizam o conhecimento de doenças e síndromes. Mas um médico, se quer se assim
              chamado, <strong className="font-bold text-cgs-bg">NECESSITA</strong> compreender os
              sinais e sintomas dos pacientes que pedem sua ajuda. A graduação se perdeu num
              emaranhado &ldquo;pseudo-humanístico&rdquo;, mas como consta no captíulo 1 do maior
              tratado de medicina, o Cecil:
            </p>
          </Reveal>

          <Reveal>
            <p>
              As qualidades humanísticas essenciais de cuidar e confortar podem alcançar o benefício
              pleno apenas se forem combinadas com uma compreensão de como a ciência médica pode e
              deve ser aplicada a pacientes com doenças conhecidas ou suspeitas. Sem esse
              conhecimento, confortar pode ser inapropriado ou enganoso, e cuidar pode ser inefetivo
              ou contraproducente se inibir uma pessoa doente de obter assistência médica científica
              apropriada.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Nosso resgate visa educar o aluno para ser producente diante de pacientes com doenças
              conhecidas ou suspeitas. Usar o quadro é tradicional e parece antiquado, mas funcionou
              por séculos. O diferencial, de fato, nunca esteve no método, e sim na experiência de
              quem ensina através de esquemas visuais e mnemônicos estruturais que eu,{" "}
              <strong className="font-bold text-cgs-bg">Dr. Carlos Antonio Moura</strong>, criei ao
              longo de anos enquanto acadêmico, residentes e professor. Tudo feito muito antes da IA
              existir.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
