"use client";

import { useEffect, useState } from "react";

// Domingo, 15/11/2026, 23h59 (horário de Brasília).
const DEADLINE = new Date("2026-11-15T23:59:00-03:00").getTime();

const pad = (n: number) => String(n).padStart(2, "0");

// Conteúdo da tarja vermelha da hero: título + contagem regressiva em linha.
// Antes da montagem mostra "--" (evita divergência de hidratação); após o prazo
// volta ao texto original da tarja.
export function LaunchCountdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(DEADLINE - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (left !== null && left <= 0) return <>Aulas no quadro</>;

  const s = Math.floor((left ?? 0) / 1000);
  const parts: [string, string][] = [
    [left === null ? "--" : pad(Math.floor(s / 86400)), "d"],
    [left === null ? "--" : pad(Math.floor((s % 86400) / 3600)), "h"],
    [left === null ? "--" : pad(Math.floor((s % 3600) / 60)), "min"],
    [left === null ? "--" : pad(s % 60), "s"],
  ];

  return (
    <span
      role="timer"
      className="flex flex-col items-center justify-center gap-x-5 gap-y-1 sm:flex-row"
    >
      <span>Condição Especial de Lançamento</span>
      <span className="flex items-baseline gap-2.5 tabular-nums sm:gap-3">
        {parts.map(([v, u]) => (
          <span key={u} className="inline-flex items-baseline">
            <span className="text-[0.95rem] leading-none sm:text-base">{v}</span>
            <span className="ml-0.5 text-[0.6rem] font-normal normal-case tracking-normal text-cgs-text/75">
              {u}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
