import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Building2, Mic2, HeartHandshake } from "lucide-react";
import { Eyebrow, Orbit } from "@/components/site";
import { partners, CONTACT_URL } from "@/lib/data";
import Reveal from "@/components/reveal";
export const metadata: Metadata = {
  title: "Partners",
  description:
    "Meet the organizations we have collaborated with across ReactPlay and our wider community journey. Help bring the next AI Dev Circle gathering to life.",
};
export default function Partners() {
  return (
    <>
      <section className="container page-hero partners-hero">
        <div>
          <Eyebrow>GOOD PEOPLE MAKE GOOD THINGS POSSIBLE</Eyebrow>
          <h1>
            A shared belief.
            <br />A bigger <span className="serif-word">circle.</span>
          </h1>
          <p>
            Meet the organizations we’ve collaborated with across
            <br className="desktop-break" /> ReactPlay and our wider community
            journey.
          </p>
        </div>
        <Orbit />
      </section>
      <section className="container partner-archive">
        <div className="partner-section-label">
          <span>OUR COLLABORATION JOURNEY</span>
          <span>{partners.length} ORGANIZATIONS</span>
        </div>
        <div className="partner-grid">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="partner-tile"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={240}
                height={160}
              />
              <span>
                {partner.name}
                <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
        <p className="partner-note">
          Past collaborations across our community journey. Individual event
          pages recognize the hosts of each gathering.
        </p>
      </section>
      <section className="partner-invite section">
        <div className="container">
          <Reveal>
            <Eyebrow>LET’S BRING PEOPLE TOGETHER</Eyebrow>
            <div className="section-heading">
              <h2>
                Make room for
                <br />
                the next <span className="serif-word coral">big idea.</span>
              </h2>
              <p className="section-intro">
                Have a space, a story, or a shared belief in developers? Let’s
                create a gathering worth showing up for.
              </p>
            </div>
          </Reveal>
          <div className="values-grid">
            {[
              {
                icon: Building2,
                title: "Open your doors.",
                body: "Give curious developers a place to come together. Host a gathering at your office or community space.",
              },
              {
                icon: Mic2,
                title: "Share what you know.",
                body: "Bring a practical perspective, a lesson from building, or a demo that starts a good conversation.",
              },
              {
                icon: HeartHandshake,
                title: "Help it happen.",
                body: "Support the people and details that turn a meetup into a welcoming community experience.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <article className="value-card" key={title}>
                <Icon size={30} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <a href={CONTACT_URL} className="button button-blue">
            Let’s talk about a partnership <ArrowUpRight size={18} />
          </a>
          <p className="contact-caption">
            Host a meetup, support an event, share a workshop, or bring us a new
            idea. Tell us what you have in mind—we’ll be happy to help shape it
            together.
          </p>
        </div>
      </section>
    </>
  );
}
