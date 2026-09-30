"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Contador que vai de 0 até `to` quando entra na tela (mesmo gatilho do leque de cartas).
export function CountUp({
  to,
  prefix = "",
  duration = 1.8,
  delay = 0.4,
  className = "",
}: {
  to: number;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tween: gsap.core.Tween | null = null;
    const counter = { n: 0 };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        tween = gsap.to(counter, {
          n: to,
          duration,
          delay,
          ease: "power2.out",
          onUpdate: () => setValue(Math.round(counter.n)),
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
  }, [to, duration, delay]);

  return (
    <span ref={ref} aria-label={`${prefix}${to}`} className={`tabular-nums ${className}`}>
      <span aria-hidden="true">
        {prefix}
        {value}
      </span>
    </span>
  );
}
