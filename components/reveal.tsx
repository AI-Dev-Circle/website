"use client";
import { useEffect, useRef } from "react";
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;
    el.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.classList.remove("reveal-pending");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -35px 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.classList.remove("reveal-pending");
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
