import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Eyebrow, Photo, JoinSection } from "@/components/site";
import { getEvent, founders } from "@/lib/data";
import Reveal from "@/components/reveal";
export const metadata: Metadata = {
  title: "Our story",
  description:
    "From open-source React projects to meetups across Bengaluru. Meet the community behind AI Dev Circle, an initiative by ReactPlay.",
};
export default function Story() {
  return (
    <>
      <section className="container page-hero story-page-hero">
        <Eyebrow>THE NEXT CHAPTER OF A GOOD THING</Eyebrow>
        <h1>
          It started with code.
          <br />
          It grew into <span className="serif-word coral">connection.</span>
        </h1>
        <p>
          AI Dev Circle grew out of a simple belief:
          <br />
          we go further when we figure things out together.
        </p>
      </section>
      <section className="container story-panorama">
        <Photo
          src={getEvent(22).image}
          alt="ReactPlay developers gathered at CodeRabbit in Bengaluru"
          priority
          sizes="100vw"
        />
        <span>REACTPLAY AT CODERABBIT · BENGALURU, 2026</span>
      </section>
      <section className="container section story-manifesto">
        <Reveal>
          <Eyebrow>THE NAME IS NEW. THE ROOTS AREN’T.</Eyebrow>
          <h2>
            Same community.
            <br />A wider <span className="serif-word">horizon.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p>
            ReactPlay began as an open-source space to learn React by building.
            That spirit found its way offline: developers meeting in Bengaluru
            to share what they knew, ask questions, and make new connections.
          </p>
          <p>
            As our interests expanded, so did the conversations. AI Dev Circle
            is an initiative by ReactPlay, bringing that same community spirit
            to the possibilities of AI.
          </p>
          <p>
            Our vision is simple: bring developers into the same room, make
            learning a shared experience, and give good ideas the people they
            need to grow.
          </p>
          <a
            href="https://github.com/reactplay/react-play"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <Code2 size={18} /> Explore our open-source roots{" "}
            <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>
      <section className="timeline-section">
        <div className="container">
          <Eyebrow>ONE THING LED TO ANOTHER</Eyebrow>
          <h2>
            A circle, <span className="serif-word">in the making.</span>
          </h2>
          <div className="timeline">
            {[
              {
                label: "THE FOUNDATION",
                title: "Learning by building.",
                body: "An open-source React community where developers create, learn, and share. A small idea with room for everyone.",
              },
              {
                label: "NOVEMBER 2023",
                title: "Our first room full of possibilities.",
                body: "The first ReactPlay Bengaluru meetup at GeekyAnts. Pritesh Kiri began bringing the community together offline.",
              },
              {
                label: "29 MEETUPS LATER",
                title: "From familiar faces to a community.",
                body: "Company offices, casual catch-ups in Cubbon Park, and conversations that kept bringing us back.",
              },
              {
                label: "OUR NEXT CHAPTER",
                title: "Hello, AI Dev Circle.",
                body: "A broader space for developers to explore AI, build together, and find their people. Still backed by ReactPlay. Still rooted in community.",
              },
            ].map((item, i) => (
              <Reveal key={item.label}>
                <div className="timeline-item">
                  <span className="timeline-node">0{i + 1}</span>
                  <div>
                    <span className="mini-label">{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="container section people-section" id="founders">
        <Reveal>
          <Eyebrow>PEOPLE MAKE THE CIRCLE</Eyebrow>
          <h2>
            Built with care.
            <br />
            Kept alive by <span className="serif-word">you.</span>
          </h2>
          <p>
            Founded by Pritesh Kiri and Tapas Adhikary, AI Dev Circle carries
            forward the community spirit that brought ReactPlay together.
          </p>
          <p>
            Our founding members help bring people into the room. The speakers,
            hosts, and developers who show up make it a community.
          </p>
          <span className="founders-note">
            Curiosity is the only prerequisite.
          </span>
        </Reveal>
        <div className="founder-grid">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 80}>
              <article className="founder-card">
                <Photo
                  src={founder.image}
                  alt={`${founder.name}, founding member of AI Dev Circle`}
                  className="founder-portrait"
                  sizes="(max-width: 550px) 90vw, (max-width: 1100px) 45vw, 28vw"
                />
                <div className="founder-info">
                  <span className="mini-label">FOUNDING MEMBER</span>
                  <h3>{founder.name}</h3>
                  <div className="founder-socials">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      LinkedIn <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={founder.x}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${founder.name} on X / Twitter`}
                    >
                      X / Twitter <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="container story-next">
        <span>Want to see how that feels in a room?</span>
        <Link href="/events#archive" className="text-link">
          Explore our gatherings <ArrowUpRight size={18} />
        </Link>
      </div>
      <JoinSection />
    </>
  );
}
