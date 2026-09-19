"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  Pause,
  Play,
} from "lucide-react";
import { galleryEvents, events, featuredEvents, eventLabel } from "@/lib/data";
const homepagePhotos = [
  ...galleryEvents,
  ...featuredEvents.flatMap((event) =>
    (event.photos ?? []).map((photo) => ({ ...event, image: photo.src })),
  ),
  ...events.filter(
    (event) => !galleryEvents.some((photo) => photo.edition === event.edition),
  ),
];
export default function Gallery() {
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const items = homepagePhotos;
  const active = selected === null ? null : items[selected];
  useEffect(() => {
    if (selected === null) return;
    const el = dialog.current;
    if (!el) return;
    el.showModal();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      el.close();
      document.body.style.overflow = prev;
    };
  }, [selected === null]);
  const next = (dir: number) =>
    setSelected((current) =>
      current === null ? null : (current + dir + items.length) % items.length,
    );
  return (
    <>
      <div
        className="gallery-marquee"
        data-paused={paused || selected !== null}
      >
        {[0, 1].map((row) => (
          <div
            className={`marquee-window photo-row photo-row-${row}`}
            key={row}
            role="region"
            aria-label={`Meetup memories, row ${row + 1}`}
          >
            <div className="marquee-track photo-track">
              {[0, 1].map((copy) => (
                <div
                  className="marquee-group photo-group"
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {items.map(
                    (event, index) =>
                      index % 2 === row && (
                        <button
                          key={`${event.slug}-${event.image}`}
                          className="gallery-item marquee-photo"
                          onClick={() => setSelected(index)}
                          tabIndex={copy === 1 ? -1 : undefined}
                          aria-label={`Open photo: ${event.title}, ${event.when}`}
                        >
                          <Image
                            src={event.image}
                            alt={`Our community gathering with ${event.host} in ${event.year}`}
                            fill
                            sizes="(max-width: 700px) 270px, 380px"
                          />
                          <span className="gallery-overlay">
                            <span>
                              {event.host}
                              <small>
                                {event.community ?? "ReactPlay"} · {event.year}
                              </small>
                            </span>
                            <Expand size={18} />
                          </span>
                        </button>
                      ),
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="container marquee-controls">
          <p>Different rooms. Familiar faces. A circle that keeps growing.</p>
          <button
            className="motion-toggle"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused ? "Play photo slideshow" : "Pause photo slideshow"
            }
          >
            {paused ? <Play size={13} /> : <Pause size={13} />}
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            next(-1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            next(1);
          }
        }}
        aria-label="Meetup photo viewer"
      >
        {active && (
          <div className="lightbox-inner">
            <div className="lightbox-top">
              <span>
                {(selected ?? 0) + 1} / {items.length}
              </span>
              <button
                className="icon-button"
                aria-label="Close photo viewer"
                onClick={() => setSelected(null)}
                autoFocus
              >
                <X />
              </button>
            </div>
            <div className="lightbox-photo">
              <Image
                src={active.image}
                alt={`Our community gathering with ${active.host}, ${active.year}`}
                fill
                sizes="90vw"
              />
            </div>
            <div className="lightbox-bottom">
              <div>
                <h2>{active.host}, Bengaluru</h2>
                <p>
                  {eventLabel(active)} · {active.when}
                </p>
                {active.photoCredit && (
                  <p className="photo-credit">
                    Photos by{" "}
                    <a
                      href={active.photoCredit.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {active.photoCredit.name}
                    </a>
                  </p>
                )}
                <Link
                  href={`/events/${active.slug}`}
                  onClick={() => setSelected(null)}
                >
                  Explore this gathering <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className="lightbox-arrows">
                <button
                  className="icon-button"
                  aria-label="Previous photo"
                  onClick={() => next(-1)}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="icon-button"
                  aria-label="Next photo"
                  onClick={() => next(1)}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
