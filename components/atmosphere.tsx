"use client";

import { useEffect, useRef } from "react";

export default function Atmosphere() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = cursor.current;
    if (!el) return;
    let frame = 0;
    const hide = () => {
      el.dataset.visible = "false";
    };
    const move = (event: PointerEvent) => {
      if (
        !pointer.matches ||
        reduced.matches ||
        event.pointerType === "touch"
      ) {
        hide();
        return;
      }
      const target = event.target instanceof Element ? event.target : null;
      const native = target?.closest(
        "input, textarea, select, [contenteditable], dialog",
      );
      el.dataset.visible = native ? "false" : "true";
      el.dataset.active = target?.closest("a, button, [role='button']")
        ? "true"
        : "false";
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      });
    };
    const down = () => {
      el.dataset.pressed = "true";
    };
    const up = () => {
      el.dataset.pressed = "false";
    };
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Tab") hide();
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", keyboard);
    document.documentElement.addEventListener("pointerleave", hide);
    pointer.addEventListener("change", hide);
    reduced.addEventListener("change", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", keyboard);
      document.documentElement.removeEventListener("pointerleave", hide);
      pointer.removeEventListener("change", hide);
      reduced.removeEventListener("change", hide);
    };
  }, []);

  return (
    <>
      <div className="site-atmosphere" aria-hidden="true">
        <div className="liquid-blob liquid-blue" />
        <div className="liquid-blob liquid-coral" />
        <div className="liquid-blob liquid-mist" />
      </div>
      <div className="circle-cursor" ref={cursor} aria-hidden="true">
        <span />
      </div>
    </>
  );
}
