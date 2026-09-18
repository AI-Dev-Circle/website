import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, MapPin, Code2, Mail } from "lucide-react";
import {
  COMMUNITY_URL,
  CONTACT_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  X_URL,
  type CommunityEvent,
} from "@/lib/data";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <ArrowUpRight size={20} aria-hidden="true" />
  ) : (
    <ArrowRight size={20} aria-hidden="true" />
  );
}
export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="AI Dev Circle home"
    >
      <span className="brand-mark">
        <Image
          src="/brand/adc-black.png"
          width={927}
          height={277}
          alt=""
          sizes="100px"
        />
      </span>
      <span className="brand-name">
        AI Dev
        <br />
        Circle<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span className="tiny-circle" aria-hidden="true" />
      {children}
    </div>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
      />
    </div>
  );
}
export function Orbit({ className = "" }: { className?: string }) {
  return (
    <div className={`orbit ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <i />
      <b />
    </div>
  );
}
export function JoinLink({
  children = "Join the circle",
  className = "button button-blue",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={COMMUNITY_URL}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <Arrow diagonal />
    </a>
  );
}
export function EventCard({ event }: { event: CommunityEvent }) {
  return (
    <Link href={`/events/${event.slug}`} className="event-card">
      <div className="event-image">
        <Photo
          src={event.image}
          alt={`The ReactPlay community at ${event.host}, ${event.year}`}
          sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 33vw"
        />
        <span className="image-pill">
          REACTPLAY <span>↗</span>
        </span>
        <span className="event-open">
          <Arrow diagonal />
        </span>
      </div>
      <div className="event-meta">
        <span>EDITION {String(event.edition).padStart(2, "0")}</span>
        <span>{event.when}</span>
      </div>
      <h3>{event.title}</h3>
      <div className="event-location">
        <MapPin size={14} aria-hidden="true" />
        {event.host} · Bengaluru
      </div>
    </Link>
  );
}
export function JoinSection() {
  return (
    <section className="join-section" id="join">
      <div className="container join-inner">
        <div>
          <Eyebrow>THERE’S A PLACE FOR YOU HERE</Eyebrow>
          <h2>
            Come curious.
            <br />
            Leave <span className="serif-word">connected.</span>
          </h2>
          <p>
            Your next idea, collaborator, or friend could be one meetup away.
          </p>
          <JoinLink />
        </div>
        <div className="join-art" aria-hidden="true">
          <div className="join-ring" />
          <div className="join-ring second" />
          <span>you.</span>
          <i />
          <b />
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div>
          <Brand footer />
          <p>
            Good people. Shared curiosity.
            <br />A little more possibility.
          </p>
          <span className="backed-label">
            An initiative by{" "}
            <a href="https://reactplay.io/" target="_blank" rel="noreferrer">
              ReactPlay <ArrowUpRight size={13} />
            </a>
          </span>
        </div>
        <div className="footer-links">
          <div>
            <span>FIND YOUR WAY</span>
            <Link href="/events">Events</Link>
            <Link href="/our-story">Our story</Link>
            <Link href="/moments">Moments</Link>
            <Link href="/partners">Partners</Link>
          </div>
          <div>
            <span>STAY IN THE CIRCLE</span>
            <a href={COMMUNITY_URL} target="_blank" rel="noreferrer">
              Luma <ArrowUpRight size={14} />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight size={14} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={X_URL} target="_blank" rel="noreferrer">
              X / Twitter <ArrowUpRight size={14} />
            </a>
            <a href={CONTACT_URL}>
              Talk to us <Mail size={14} />
            </a>
            <a
              href="https://github.com/reactplay/react-play"
              target="_blank"
              rel="noreferrer"
            >
              Our open-source roots <Code2 size={14} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} AI Dev Circle</span>
        <span>
          Built for community. <span className="coral">✳</span>
        </span>
        <a href={CONTACT_URL}>
          Get in touch <Mail size={14} />
        </a>
      </div>
    </footer>
  );
}
