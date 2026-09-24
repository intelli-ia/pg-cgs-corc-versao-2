import { MessageCircle, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionTitle } from "@/components/ui/Section";
import { WHATSAPP_URL } from "@/lib/links";

const faqs = [
  {
    q: "O curso é apenas para estudantes de medicina?",
    a: "Não. Embora seja um divisor de águas para alunos do 2º ao 6º ano que sofrem com o método PBL, o CGS é altamente recomendado para médicos recém-formados que buscam mais segurança e organização mental para seus plantões e visitas de enfermaria.",
  },
  {
    q: "As aulas são muito teóricas?",
    a: "Pelo contrário. O objetivo do Cacau é a praticidade aguda. O quadro serve para simplificar temas complexos e torná-los aplicáveis diante do paciente!",
  },
  {
    q: "Como funciona o “Curso Vivo”?",
    a: "Ao adquirir o CGS, você recebe um pacote de aulas já gravadas. O curso poderá ser alimentado paulatinamente. Sempre que um novo tema relevante surge na prática do Cacau e ele cria para si próprio um “esquema didático”, ele se propõe a transmitir aos seus alunos. E você terá acesso a essas aulas que porventura surgirão.",
  },
  {
    q: "Emite certificado?",
    a: "O CGS não é um curso credencialista. O foco é o aprendizado e o desenvolvimento do raciocínio clínico, não um papel. Não emitimos certificado e para aqueles que buscam exclusivamente isso, definitivamente aqui não é o lugar.",
  },
  { q: "Por quanto tempo terei acesso?", a: "1 ano de acesso." },
];

export function Faq() {
  return (
    <Section id="faq" className="border-t border-white/[0.06]">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-10 lg:self-start">
          <SectionTitle>Perguntas Frequentes:</SectionTitle>
          <div className="mt-10 rounded-lg border border-white/10 p-6 sm:p-7">
            <p className="text-lg font-bold text-cgs-text">Ainda tem dúvidas?</p>
            <p className="mt-1 text-cgs-text/70">Fale conosco!</p>
            {/* TODO: número real de WhatsApp em src/lib/links.ts */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-[6px] border border-cgs-gold px-6 py-3.5 font-serif text-xs font-bold uppercase tracking-[0.16em] text-cgs-gold transition-colors hover:bg-cgs-gold hover:text-cgs-bg sm:w-auto"
            >
              <MessageCircle aria-hidden="true" className="size-4" strokeWidth={2.5} />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-white/10">
            {faqs.map((f) => (
              <details key={f.q} name="faq" className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-lg font-bold leading-snug text-cgs-text transition-colors hover:text-cgs-gold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-cgs-gold transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="-mt-1 pb-7 pr-10 text-pretty leading-relaxed text-cgs-text/75">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
