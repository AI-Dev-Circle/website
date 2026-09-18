import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Play,
} from "lucide-react";
import { events, upcomingEvents } from "@/lib/data";
import { UpcomingDetails } from "@/components/upcoming";
import { Photo, Eyebrow, JoinSection, EventCard } from "@/components/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return [...events, ...upcomingEvents].map((e) => ({ slug: e.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const upcoming = upcomingEvents.find((e) => e.slug === slug);
  if (upcoming)
    return { title: upcoming.title, description: upcoming.description };
  const e = events.find((e) => e.slug === slug);
  return {
    title: e ? `ReactPlay ${e.edition} at ${e.host}` : "Event not found",
    description: e?.description,
  };
}
export default async function EventDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const upcoming = upcomingEvents.find((e) => e.slug === slug);
  if (upcoming) return <UpcomingDetails event={upcoming} />;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();
  const others = events.filter((e) => e.edition !== event.edition).slice(0, 3);
  return (
    <>
      <article className="container event-detail">
        <Link href="/events" className="back-link">
          <ArrowLeft size={16} /> All gatherings
        </Link>
        <div className="detail-heading">
          <Eyebrow>
            REACTPLAY ARCHIVES / EDITION{" "}
            {String(event.edition).padStart(2, "0")}
          </Eyebrow>
          <h1>{event.title}</h1>
          <div className="detail-meta">
            <span>
              <CalendarDays size={17} />
              {event.when}
            </span>
            <span>
              <MapPin size={17} />
              {event.host} · Bengaluru
            </span>
            <span className="past-badge">Past gathering</span>
          </div>
        </div>
        <Photo
          className="detail-photo"
          src={event.image}
          alt={`The community at ReactPlay edition ${event.edition}, ${event.host}`}
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div className="detail-content">
          <div>
            <h2>A moment in our story.</h2>
            <p>{event.description}</p>
            <p>
              This gathering was hosted as part of ReactPlay, the community
              behind AI Dev Circle. We’re carrying that spirit of learning and
              connection into our next chapter.
            </p>
          </div>
          <aside>
            <span className="mini-label">BACK TO THE DAY</span>
            <h3>There’s more to the story.</h3>
            <p>
              See the original post for the recap and memories from the
              gathering.
            </p>
            <a
              className="button button-blue"
              href={event.recap}
              target="_blank"
              rel="noreferrer"
            >
              Read the recap <ArrowUpRight size={17} />
            </a>
            {event.video && (
              <a
                className="text-link"
                href={event.video}
                target="_blank"
                rel="noreferrer"
              >
                <Play size={16} /> Watch the highlights{" "}
                <ArrowUpRight size={17} />
              </a>
            )}
          </aside>
        </div>
      </article>
      <section className="container section">
        <div className="section-heading">
          <h2>
            Keep <span className="serif-word">exploring.</span>
          </h2>
          <Link href="/moments" className="text-link">
            More moments <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="event-grid">
          {others.map((e) => (
            <EventCard key={e.edition} event={e} />
          ))}
        </div>
      </section>
      <JoinSection />
    </>
  );
}
