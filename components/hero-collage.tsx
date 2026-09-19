"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import BrandSpark from "@/components/brand-spark";

type CollagePhoto = { src: string; alt: string };

export default function HeroCollage({ photos }: { photos: CollagePhoto[][] }) {
  const root = useRef<HTMLDivElement>(null);
  const [indices, setIndices] = useState(() => photos.map(() => 0));
  const lastFrame = useRef(-1);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const running = !reducedMotion && visible && pageVisible;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
    if (root.current) observer.observe(root.current);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!running) return;
    const eligible = photos.flatMap((frames, frame) =>
      frames.length > 1 ? [frame] : [],
    );
    if (!eligible.length) return;
    let queue: number[] = [];
    let timer: number;

    const advance = () => {
      // Visit every frame in a shuffled order before starting another round.
      if (!queue.length) {
        queue = [...eligible];
        for (let i = queue.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [queue[i], queue[j]] = [queue[j], queue[i]];
        }
        if (queue.length > 1 && queue[0] === lastFrame.current) {
          [queue[0], queue[1]] = [queue[1], queue[0]];
        }
      }
      const frame = queue.shift()!;
      lastFrame.current = frame;
      const offset = 1 + Math.floor(Math.random() * (photos[frame].length - 1));
      setIndices((current) =>
        current.map((index, slot) =>
          slot === frame ? (index + offset) % photos[frame].length : index,
        ),
      );
      schedule();
    };
    // Leave enough time for each 900ms crossfade to finish before the next.
    const schedule = () => {
      timer = window.setTimeout(advance, 2400 + Math.random() * 1800);
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, [running, photos]);

  return (
    <div className="hero-visual" ref={root} data-paused={!running}>
      <div className="hero-orbits" aria-hidden="true">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
      </div>
      <span className="hero-asterisk">
        <BrandSpark />
      </span>
      {photos.map((frames, frame) => (
        <div
          className={
            frame === 0
              ? "hero-photo-wrap"
              : `hero-small-photo${frame === 2 ? " hero-third-photo" : ""}`
          }
          key={frame}
        >
          <div className={`hero-slides ${frame === 0 ? "hero-photo" : ""}`}>
            {frames.map((photo, slide) => (
              <div
                className={`hero-slide${indices[frame] === slide ? " is-active" : ""}`}
                aria-hidden={indices[frame] !== slide}
                key={photo.src}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    frame === 0 ? "(max-width: 700px) 90vw, 45vw" : "180px"
                  }
                  loading={slide === 0 ? "eager" : "lazy"}
                  fetchPriority={
                    frame === 0 && slide === 0 ? "high" : undefined
                  }
                />
              </div>
            ))}
          </div>
          {frame === 0 && (
            <div className="photo-caption">
              <MapPin size={13} aria-hidden="true" /> REAL PEOPLE. REAL
              CONNECTIONS.
            </div>
          )}
        </div>
      ))}
      <div className="hero-note">
        <span>HELLO, BENGALURU!</span>
        <strong>
          Pull up
          <br />a chair
          <span>
            <ArrowUpRight size="1em" aria-hidden="true" />
          </span>
        </strong>
      </div>
    </div>
  );
}
