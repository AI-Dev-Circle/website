"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, X, Clapperboard } from "lucide-react";
import type { CommunityReel } from "@/lib/reels";

export default function ReelGallery({
  items,
  variant = "archive",
}: {
  items: CommunityReel[];
  variant?: "featured" | "archive" | "event";
}) {
  const [active, setActive] = useState<CommunityReel | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!active || !dialog.current) return;
    const modal = dialog.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement)
        trigger.focus({ preventScroll: true });
    };
  }, [active]);

  return (
    <>
      <div className={`reel-grid reel-grid-${variant}`}>
        {items.map((reel) => (
          <article className="reel-card" key={reel.id}>
            <button
              type="button"
              className="reel-poster"
              aria-label={`Watch ${reel.title}`}
              aria-haspopup="dialog"
              onClick={() => setActive(reel)}
            >
              <Image
                src={reel.poster}
                alt=""
                fill
                sizes="(max-width: 700px) 75vw, (max-width: 1000px) 40vw, 300px"
              />
              <span className="reel-platform">
                <Clapperboard size={14} /> COMMUNITY REEL
              </span>
              <span className="reel-play">
                <Play size={24} fill="currentColor" />
              </span>
              <span className="reel-caption">
                <span>{reel.host} · Bengaluru</span>
                <strong>{reel.title}</strong>
                <span className="reel-watch">
                  Press play <ArrowUpRight size={16} />
                </span>
              </span>
            </button>
            <div className="reel-card-meta">
              <span>{reel.when}</span>
              {variant !== "event" && (
                <Link
                  href={`/events/${reel.eventSlug}`}
                  aria-label={`Explore the ${reel.host} gathering, ${reel.when}`}
                >
                  The gathering <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="reel-dialog"
        aria-labelledby={titleId}
        onClose={(event) => {
          // Ignore a queued close event if an effect has already reopened it.
          if (!event.currentTarget.open) setActive(null);
        }}
        onCancel={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
      >
        {active && (
          <div className="reel-dialog-inner">
            <div className="reel-dialog-heading">
              <h2 id={titleId}>{active.title}</h2>
              <button
                type="button"
                className="icon-button"
                aria-label="Close reel"
                onClick={() => setActive(null)}
                autoFocus
              >
                <X size={21} />
              </button>
            </div>
            <iframe
              key={active.id}
              className="reel-embed"
              src={`${active.url}embed/`}
              title={`${active.title} — Instagram reel`}
              allow="encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="reel-dialog-footer">
              <p>Not playing here?</p>
              <a
                href={active.url}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Watch on Instagram <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
