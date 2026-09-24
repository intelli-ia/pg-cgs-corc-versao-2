import { Depoimentos } from "@/components/sections/Depoimentos";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Mecanismo } from "@/components/sections/Mecanismo";
import { Oferta } from "@/components/sections/Oferta";
import { Professor } from "@/components/sections/Professor";
import { StickyCta } from "@/components/ui/StickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Mecanismo />
        <Depoimentos />
        <Oferta />
        <Professor />
        <Faq />
      </main>
      <Footer />

      {/* TODO: confirmar o texto da barra fixa com o cliente */}
      <StickyCta
        showAfter={700}
        label={
          <>
            <span className="hidden text-cgs-text/60 sm:block">Grandes Síndromes</span>
            <span className="block whitespace-nowrap font-bold text-cgs-text">12x de R$ 20,02</span>
            <span className="block whitespace-nowrap text-cgs-text/60">ou R$ 197 à vista</span>
          </>
        }
      />
    </>
  );
}
