import type { Metadata } from "next";
import { ArrowUpRight, Play } from "lucide-react";
import { Eyebrow, JoinSection, Photo } from "@/components/site";
import Gallery from "@/components/gallery";
import { events, INSTAGRAM_URL } from "@/lib/data";
export const metadata: Metadata = {
  title: "Moments",
  description:
    "Meet the people and moments from our ReactPlay community journey. Photos and highlights from meetups across Bengaluru.",
};
export default function Moments() {
  return (
    <>
      <section className="container page-hero moments-hero">
        <Eyebrow>A FEW MOMENTS. A LOT OF MEANING.</Eyebrow>
        <h1>
          The people.
          <br />
          The energy.
          <br />
          <span className="serif-word coral">The in-between.</span>
        </h1>
        <p>
          The group photos are just the beginning.
          <br />
          Every gathering leaves us with a little more than we came with.
        </p>
        <span className="moments-star" aria-hidden="true">
          ✳
        </span>
      </section>
      <section className="container moments-archive">
        <Gallery full />
        <p className="gallery-note">
          Memories from our ReactPlay journey in Bengaluru. Tap a photo to take
          a closer look.
        </p>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <Eyebrow>PRESS PLAY ON A GOOD DAY</Eyebrow>
            <h2>
              A little more <span className="serif-word">of the feeling.</span>
            </h2>
          </div>
          <a
            className="text-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Follow the moments <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="video-grid">
          {events
            .filter((e) => e.video)
            .map((e) => (
              <a
                key={e.edition}
                className="video-card"
                href={e.video}
                target="_blank"
                rel="noreferrer"
              >
                <div className="video-image">
                  <Photo src={e.image} alt={`ReactPlay meetup at ${e.host}`} />
                  <span className="play-button">
                    <Play size={24} fill="currentColor" />
                  </span>
                </div>
                <div>
                  <span className="mini-label">REACTPLAY · {e.year}</span>
                  <h3>
                    {e.edition === 17
                      ? "Hacktoberfest at Harness"
                      : "Community highlights at Cashfree"}
                  </h3>
                  <span className="text-link">
                    Watch on {e.edition === 17 ? "YouTube" : "LinkedIn"}{" "}
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </a>
            ))}
        </div>
      </section>
      <JoinSection />
    </>
  );
}
