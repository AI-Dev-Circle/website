import { ArrowUpRight, Play } from "lucide-react";
import { Eyebrow, Photo } from "@/components/site";
import { events, INSTAGRAM_URL } from "@/lib/data";

export default function VideoHighlights() {
  return (
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
  );
}
