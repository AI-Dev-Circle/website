import type { Metadata } from "next";
import { Eyebrow, JoinSection, Orbit } from "@/components/site";
import EventExplorer from "@/components/event-explorer";
export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore the ReactPlay meetup archive and find your next gathering with AI Dev Circle in Bengaluru.",
};
export default function Events() {
  return (
    <>
      <section className="container page-hero events-hero">
        <div>
          <Eyebrow>COME FOR THE IDEAS. STAY FOR THE PEOPLE.</Eyebrow>
          <h1>
            A reason to
            <br />
            <span className="serif-word">show up.</span>
          </h1>
          <p>
            Real conversations, shared discoveries, and the occasional
            <br className="desktop-break" /> “we should build that.” Explore our
            gatherings.
          </p>
        </div>
        <Orbit />
      </section>
      <EventExplorer />
      <JoinSection />
    </>
  );
}
