import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Lightbulb,
  Users,
  Atom,
  Infinity as InfinityIcon,
} from "lucide-react";
import {
  Arrow,
  Eyebrow,
  Photo,
  Orbit,
  JoinLink,
  JoinSection,
  EventCard,
} from "@/components/site";
import Reveal from "@/components/reveal";
import IdeaSpark from "@/components/idea-spark";
import Gallery from "@/components/gallery";
import PartnerMarquee from "@/components/partner-marquee";
import HeroCollage from "@/components/hero-collage";
import BrandSpark from "@/components/brand-spark";
import { CONTACT_URL, featuredEvents, getEvent } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <Eyebrow>BUILDERS, MEET YOUR PEOPLE.</Eyebrow>
          <h1>
            AI is better
            <br />
            in <span className="hero-good">good</span>
            <br />
            <span className="hero-company">
              company<span className="coral">.</span>
            </span>
          </h1>
          <p>
            A circle of curious developers learning, building,
            <br className="desktop-break" /> and figuring out what’s next.
            Together.
          </p>
          <div className="hero-actions">
            <JoinLink />
            <Link href="/events" className="text-link">
              Explore meetups <Arrow />
            </Link>
          </div>
          <div className="hero-roots">
            <span className="react-symbol" aria-hidden="true">
              <Atom size={32} strokeWidth={1.3} />
            </span>
            <span>
              A new chapter. The same community.
              <br />
              <a href="https://reactplay.io/" target="_blank" rel="noreferrer">
                Backed by ReactPlay <ArrowUpRight size={12} />
              </a>
            </span>
          </div>
        </div>
        <HeroCollage
          photos={[
            [29, 25, 26],
            [28, 9, 24],
            [27, 21, 13],
          ].map((editions) =>
            editions.map((edition) => {
              const event = getEvent(edition);
              return {
                src: event.image,
                alt: `Our community gathering with ${event.host}, Bengaluru, ${event.year}`,
              };
            }),
          )}
        />
        <a href="#gatherings" className="hero-scroll">
          <ArrowDown size={15} /> GOOD THINGS HAPPEN OFFLINE
        </a>
      </section>
      <div className="word-ribbon" aria-hidden="true">
        <div>
          {[0, 1].map((i) => (
            <span key={i}>
              CURIOUS MINDS{" "}
              <i>
                <BrandSpark />
              </i>{" "}
              OPEN DOORS{" "}
              <i>
                <BrandSpark />
              </i>{" "}
              SHARED POSSIBILITIES{" "}
              <i>
                <BrandSpark />
              </i>{" "}
              YOUR PEOPLE{" "}
              <i>
                <BrandSpark />
              </i>{" "}
            </span>
          ))}
        </div>
      </div>
      <section className="container section gatherings" id="gatherings">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>01 / OFFLINE IS WHERE IT BEGINS</Eyebrow>
              <h2>
                Less scrolling.
                <br />
                More <span className="serif-word">showing up.</span>
              </h2>
            </div>
            <div className="section-heading-aside">
              <p>
                A Saturday. A room full of curious people.
                <br />
                The kind of conversations you keep thinking about.
              </p>
              <Link className="text-link" href="/events">
                All gatherings <Arrow diagonal />
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="event-grid">
          {featuredEvents.map((event, i) => (
            <Reveal key={event.edition} delay={i * 70}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="partners-home section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <Eyebrow>02 / BETTER, TOGETHER</Eyebrow>
                <h2>
                  In very good <span className="serif-word">company.</span>
                </h2>
              </div>
              <div className="partner-actions">
                <Link href="/partners" className="text-link">
                  Explore partners <Arrow diagonal />
                </Link>
                <a href={CONTACT_URL} className="button button-blue">
                  Let’s collaborate <Arrow diagonal />
                </a>
              </div>
            </div>
            <p className="partner-context">
              Some of the organizations we’ve collaborated with across ReactPlay
              and our wider community journey.
            </p>
            <PartnerMarquee />
          </Reveal>
        </div>
      </section>
      <section className="story-section">
        <div className="container story-grid">
          <Reveal className="story-photo-column">
            <div className="story-photo-frame">
              <Photo
                src={getEvent(1).image}
                alt="The first ReactPlay Bengaluru meetup at GeekyAnts in November 2023"
              />
              <span className="photo-corner">01</span>
            </div>
            <div className="story-photo-caption">
              <span>THE FIRST OF MANY.</span>
              <span>GeekyAnts · November 2023</span>
            </div>
            <span className="story-scribble">
              every circle starts somewhere{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </Reveal>
          <Reveal className="story-copy">
            <Eyebrow>03 / OUR ROOTS RUN DEEP</Eyebrow>
            <h2>
              New possibilities.
              <br />
              Same <span className="serif-word coral">good people.</span>
            </h2>
            <p>
              We started with ReactPlay: an open-source community, a love for
              building, and a reason to bring developers into the same room.
            </p>
            <p>
              29 meetups later, our curiosity has grown. AI Dev Circle is our
              next chapter—a space to explore AI, share what we’re learning, and
              build what comes next.
            </p>
            <Link href="/our-story" className="text-link">
              Get to know our story <Arrow diagonal />
            </Link>
            <div className="story-stats">
              <div>
                <strong>
                  29
                  <span>
                    <ArrowUpRight size="1em" aria-hidden="true" />
                  </span>
                </strong>
                <span>meetups in our journey</span>
              </div>
              <div>
                <strong>2023</strong>
                <span>our first Bengaluru meetup</span>
              </div>
              <div>
                <strong>
                  <InfinityIcon size="1em" aria-label="Endless" role="img" />
                </strong>
                <span>reasons to keep building</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="container section">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>04 / BRING YOUR CURIOSITY</Eyebrow>
              <h2>
                Different skills.
                <br />
                One <span className="serif-word">shared spark.</span>
              </h2>
            </div>
            <p className="section-intro">
              Whether you’re writing your first prompt or shipping your next AI
              product, there’s a conversation here for you.
            </p>
          </div>
        </Reveal>
        <div className="values-grid">
          {[
            {
              n: "01",
              icon: Lightbulb,
              title: "Learn out loud.",
              text: "The things that worked. The things that didn’t. Honest conversations that move everyone forward.",
              tag: "TALKS & SHARED DISCOVERIES",
            },
            {
              n: "02",
              icon: Code2,
              title: "Make something real.",
              text: "Turn a “what if” into a “look at this.” Explore tools, swap ideas, and find your next experiment.",
              tag: "HANDS-ON CURIOSITY",
            },
            {
              n: "03",
              icon: Users,
              title: "Find your circle.",
              text: "Meet the person who gets your side project. Stay for the conversations that go beyond the code.",
              tag: "PEOPLE BEFORE PROFILES",
            },
          ].map(({ n, icon: Icon, title, text, tag }, i) => (
            <Reveal key={n} delay={i * 80}>
              <article className="value-card">
                <div className="value-top">
                  <Icon size={31} strokeWidth={1.4} />
                  <span>{n}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="mini-label">{tag}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="moments-home section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <Eyebrow>05 / YOU HAD TO BE THERE</Eyebrow>
                <h2>
                  This is what
                  <br />
                  <span className="serif-word">community</span> looks like.
                </h2>
              </div>
              <Link href="/events#archive" className="text-link">
                Inside the circle <Arrow diagonal />
              </Link>
            </div>
          </Reveal>
        </div>
        <Gallery />
      </section>
      <section className="container section spark-section">
        <Reveal>
          <Eyebrow>06 / WHAT IF WE BUILT…</Eyebrow>
          <h2>
            Big things start
            <br />
            with a little
            <br />
            <span className="serif-word coral">curiosity.</span>
          </h2>
          <p>
            Pick an interest. Find a spark.
            <br />
            Bring it to the next gathering and see where it goes.
          </p>
          <Orbit className="spark-orbit" />
        </Reveal>
        <Reveal>
          <IdeaSpark />
        </Reveal>
      </section>
      <JoinSection />
    </>
  );
}
