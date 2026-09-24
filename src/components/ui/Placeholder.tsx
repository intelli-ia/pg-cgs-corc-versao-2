// Marca visualmente um trecho de copy ainda não fornecido pelo cliente.
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-dashed box-decoration-clone border-cgs-gold/40 px-1.5 py-0.5 text-cgs-text/55">
      [{children}]
    </span>
  );
}
