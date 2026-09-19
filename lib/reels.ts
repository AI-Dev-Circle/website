import { getEvent } from "@/lib/data";

export type CommunityReel = {
  id: string;
  title: string;
  url: string;
  eventSlug: string;
  host: string;
  when: string;
  poster: string;
};

// User-supplied Instagram recaps, matched to the archive by their captions.
// Posters are photos from the same gathering, not downloaded video frames.
const sources: [number, string, string, string?][] = [
  [
    29,
    "Dc-XNriTJPA",
    "The start of something new",
    "/events/geekyants-launch-2026-2.jpg",
  ],
  [
    28,
    "DcoTB5cTmqO",
    "Coffee, code & good company",
    "/events/clerk-coffee-2026-3.jpg",
  ],
  [27, "DbzwxqnRX2C", "An afternoon at Sarvam", "/events/sarvam-2026-2.jpg"],
  [26, "DbQUGfBRzbA", "July, with the circle"],
  [25, "DaGMygPsb0l", "Twenty-five gatherings together"],
  [24, "DYaHDzaMBBm", "A good day at Paytm"],
  [23, "DXSAzjxzCbb", "Ideas & connections at Amadeus"],
  [22, "DWJsOYZRgaQ", "Inside our CodeRabbit meetup"],
];

export const reels: CommunityReel[] = sources.map(
  ([edition, id, title, poster]) => {
    const event = getEvent(edition);
    return {
      id,
      title,
      url: `https://www.instagram.com/reel/${id}/`,
      eventSlug: event.slug,
      host: event.host,
      when: event.when,
      poster: poster ?? event.image,
    };
  },
);
