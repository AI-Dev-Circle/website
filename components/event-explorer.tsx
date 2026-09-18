"use client";
import { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { events, upcomingEvents, COMMUNITY_URL } from "@/lib/data";
import { EventCard, Orbit } from "./site";
import { UpcomingCard } from "./upcoming";
export default function EventExplorer() {
  const [view, setView] = useState<"past" | "upcoming">(
    upcomingEvents.length ? "upcoming" : "past",
  );
  const [year, setYear] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = events.filter(
    (e) =>
      (year === "all" || e.year === Number(year)) &&
      `${e.title} ${e.host} ${e.edition} ${e.year}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section className="container archive-section">
      <div className="archive-toolbar">
        <div className="segmented" aria-label="Event status">
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
        {view === "past" && (
          <div className="archive-controls">
            <label className="search-field">
              <Search size={17} />
              <span className="sr-only">Search events</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find a gathering…"
                type="search"
              />
            </label>
            <label className="year-field">
              <span className="sr-only">Filter by year</span>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="all">All years</option>
                {[2026, 2025, 2024, 2023].map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}
      </div>
      {view === "past" ? (
        <>
          <div className="archive-caption">
            <p>From the ReactPlay archives. Part of our shared story.</p>
            <span aria-live="polite">
              {filtered.length}{" "}
              {filtered.length === 1 ? "gathering" : "gatherings"}
            </span>
          </div>
          {filtered.length ? (
            <div className="event-grid">
              {filtered.map((event) => (
                <EventCard key={event.edition} event={event} />
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
