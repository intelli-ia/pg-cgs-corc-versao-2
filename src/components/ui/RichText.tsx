import { Fragment } from "react";

/**
 * Renderiza `**trecho**` como negrito. A copy do cliente marca os destaques
 * no meio das frases; guardar o texto com essa marca evita quebrar cada
 * parágrafo em pedaços no código.
 */
export function RichText({ children }: { children: string }) {
  return (
    <>
      {children.split("**").map((parte, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-bold text-cgs-text">
            {parte}
          </strong>
        ) : (
          <Fragment key={index}>{parte}</Fragment>
        ),
      )}
    </>
  );
}
