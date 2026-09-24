import { Wordmark } from "@/components/brand/Wordmark";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 sm:py-8">
        <a href="#topo" aria-label="Grandes Síndromes — início">
          <Wordmark />
        </a>
        <p className="hidden font-serif text-[0.65rem] uppercase tracking-[0.3em] text-cgs-text/50 md:block">
          Um curso <span className="text-cgs-gold/80">CORC</span> · Curso Online de Raciocínio Clínico
        </p>
      </div>
    </header>
  );
}
