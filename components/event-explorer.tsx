"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowUpRight } from "lucide-react";
import { events, upcomingEvents, COMMUNITY_URL, eventLabel } from "@/lib/data";
import { Orbit } from "./site";
import { UpcomingCard } from "./upcoming";
const years = [...new Set(events.map((event) => event.year))].sort(
  (a, b) => b - a,
);
export default function EventExplorer() {
  const [view, setView] = useState<"past" | "upcoming">(
    upcomingEvents.length ? "upcoming" : "past",
  );
  const [year, setYear] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = events.filter(
    (e) =>
      (year === "all" || e.year === Number(year)) &&
      `${e.title} ${e.host} ${e.community ?? "ReactPlay"} ${e.edition} ${e.year}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section className="container archive-section" id="archive">
      <div className="archive-toolbar">
        <div className="segmented" role="group" aria-label="Event status">
          <button
            aria-pressed={view === "past"}
            onClick={() => setView("past")}
          >
            Past gatherings <span>{events.length}</span>
          </button>
          <button
            aria-pressed={view === "upcoming"}
            onClick={() => setView("upcoming")}
          >
            What’s next
          </button>
        </div>
      </div>
      {view === "past" && (
        <div className="archive-filters">
          <div
            className="gallery-filter"
            role="group"
            aria-label="Filter events by year"
          >
            {["all", ...years.map(String)].map((value) => (
              <button
                key={value}
                aria-pressed={year === value}
                onClick={() => setYear(value)}
              >
                {value === "all" ? "All years" : value}
              </button>
            ))}
          </div>
          <label className="search-field">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Search events</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a gathering…"
              type="search"
            />
          </label>
        </div>
      )}
      {view === "past" ? (
        <>
          <div className="archive-caption">
            <p>
              From ReactPlay to AI Dev Circle. Our story, one gathering at a
              time.
            </p>
            <span aria-live="polite">
              {filtered.length}{" "}
              {filtered.length === 1 ? "gathering" : "gatherings"}
            </span>
          </div>
          {filtered.length ? (
            <div className="gallery-grid gallery-full event-gallery">
              {filtered.map((event, index) => (
                <Link
                  key={event.edition}
                  href={`/events/${event.slug}`}
                  className="gallery-item"
                  aria-label={`Explore ${event.title}, ${event.when}`}
                >
                  <Image
                    src={event.image}
                    alt={`Our community gathering with ${event.host} in ${event.year}`}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 700px) 100vw, (max-width: 850px) 50vw, 33vw"
                  />
                  <span className="gallery-overlay">
                    <span>
                      {event.host}
                      <small>
                        {`${event.community ?? "ReactPlay"} · ${event.year} · ${eventLabel(event)}`}
                      </small>
                      <span className="event-gallery-date">{event.when}</span>
                    </span>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <h3>No gatherings found.</h3>
              <p>Try a different partner, edition, or year.</p>
              <button
                className="text-link"
                onClick={() => {
                  setYear("all");
                  setQuery("");
                }}
              >
                Clear filters <ArrowUpRight size={17} />
              </button>
            </div>
          )}
        </>
      ) : upcomingEvents.length ? (
        <div className="event-grid upcoming-grid">
          {upcomingEvents.map((event) => (
            <UpcomingCard key={event.slug} event={event} />
          ))}
        </div>
      ) : (
        <div className="upcoming-empty">
          <Orbit />
          <div>
            <span className="eyebrow">GOOD THINGS TAKE A LITTLE GATHERING</span>
            <h2>
              The next circle
              <br />
              is taking shape.
            </h2>
            <p>
              Follow our Luma calendar for the next announcement. We’d love to
              see you there.
            </p>
            <a
              className="button button-blue"
              href={COMMUNITY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Find us on Luma <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
