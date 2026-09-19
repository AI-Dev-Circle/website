import type { Metadata } from "next";
import { Eyebrow, JoinSection, Orbit } from "@/components/site";
import EventExplorer from "@/components/event-explorer";
import VideoHighlights from "@/components/video-highlights";
import { Play, ArrowDown } from "lucide-react";
export const metadata: Metadata = {
  title: "Events",
  description:
    "Find your next AI Dev Circle gathering and explore our ReactPlay meetup journey through photos, recaps, and video highlights.",
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
          <a href="#highlights" className="text-link highlights-shortcut">
            <Play size={16} /> Watch highlights <ArrowDown size={16} />
          </a>
        </div>
        <Orbit />
      </section>
      <EventExplorer />
      <VideoHighlights />
      <JoinSection />
    </>
  );
}
