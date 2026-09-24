import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionTitle } from "@/components/ui/Section";
import { TestimonialCarousel, type Testimonial } from "@/components/ui/TestimonialCarousel";

// TODO: substituir por depoimentos reais coletados (nome, função, texto e foto)
const testimonials: Testimonial[] = Array.from({ length: 5 }, (_, i) => ({
  name: `Nome do Aluno ${i + 1}`,
  role: "Residente de Clínica Médica",
  text: "[Depoimento real a coletar] Espaço reservado para o relato de um aluno sobre como as aulas no quadro organizaram o seu raciocínio clínico à beira do leito.",
}));

export function Depoimentos() {
  return (
    <Section id="depoimentos" className="border-t border-white/[0.06]">
      <Reveal>
        <SectionTitle className="max-w-2xl">
          Finalmente as peças do quebra-cabeça se encaixaram.
        </SectionTitle>
      </Reveal>
      {/* TODO: substituir por depoimentos reais coletados */}
      <Reveal delay={0.1} className="mt-12">
        <TestimonialCarousel items={testimonials} />
      </Reveal>
    </Section>
  );
}
