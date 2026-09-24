import { Wordmark } from "@/components/brand/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pb-32 pt-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <Wordmark />
        <div className="text-xs leading-relaxed text-cgs-text/45 sm:text-right">
          <p>Um produto CORC · Curso Online de Raciocínio Clínico</p>
          <p>© {new Date().getFullYear()} Dr. Carlos Antonio Moura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
