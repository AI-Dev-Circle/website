import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { upcomingEvents, eventDate, type UpcomingEvent } from "@/lib/data";
import { Eyebrow, Photo, JoinLink, JoinSection } from "./site";

export function NextGathering() {
  const next = upcomingEvents[0];
  return (
    <div className="next-gathering">
      <div className="next-icon">
        <Users size={25} />
      </div>
      <div>
        <span className="mini-label">
          {next ? "NEXT IN THE CIRCLE" : "YOUR NEXT CONNECTION STARTS HERE"}
        </span>
        <h3>{next?.title ?? "The next circle is taking shape."}</h3>
        <p>
          {next
            ? `${eventDate(next.startsAt)} IST · ${next.venue}`
            : "Find upcoming announcements on our Luma calendar."}
        </p>
      </div>
      {next ? (
        <Link href={`/events/${next.slug}`} className="button button-outline">
          Explore this gathering <ArrowUpRight size={18} />
        </Link>
      ) : (
        <JoinLink className="button button-outline">
          Keep me in the loop
        </JoinLink>
      )}
    </div>
  );
}

export function UpcomingCard({ event }: { event: UpcomingEvent }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className={`event-card upcoming-card ${event.image ? "" : "upcoming-text-card"}`}
    >
      {event.image && (
        <div className="event-image">
          <Photo
            src={event.image}
            alt={event.title}
            sizes="(max-width:700px) 100vw, 33vw"
          />
          <span className="image-pill">AI DEV CIRCLE</span>
        </div>
      )}
      <div className="event-meta">
        <span>AI DEV CIRCLE</span>
        <span>UPCOMING</span>
      </div>
      <h3>{event.title}</h3>
      <p className="upcoming-date">
        <CalendarDays size={15} />
        {eventDate(event.startsAt)} IST
      </p>
      <div className="event-location">
        <MapPin size={14} />
        {event.venue}
      </div>
      <span className="text-link">
        See the details <ArrowUpRight size={17} />
      </span>
    </Link>
  );
}

export function UpcomingDetails({ event }: { event: UpcomingEvent }) {
  return (
    <>
      <article className="container event-detail">
        <Link href="/events" className="back-link">
          <ArrowLeft size={16} />
          All gatherings
        </Link>
        <div className="detail-heading">
          <Eyebrow>AI DEV CIRCLE / THE NEXT GATHERING</Eyebrow>
          <h1>{event.title}</h1>
          <div className="detail-meta">
            <span>
              <CalendarDays size={17} />
              {eventDate(event.startsAt)} IST
            </span>
            <span>
              <MapPin size={17} />
              {event.venue}
            </span>
          </div>
        </div>
        {event.image && (
          <Photo
            className="detail-photo"
            src={event.image}
            alt={event.title}
            priority
            sizes="100vw"
          />
        )}
        <div className="detail-content">
          <div>
            <h2>Let’s get together.</h2>
            <p>{event.description}</p>
          </div>
          <aside>
            <span className="mini-label">THERE’S ROOM FOR YOU</span>
            <h3>See you in the circle.</h3>
            <p>
              Visit the event registration page for availability and the full
              event details.
            </p>
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-blue"
            >
              Register for this meetup <ArrowUpRight size={17} />
            </a>
          </aside>
        </div>
      </article>
      <JoinSection />
    </>
  );
}
