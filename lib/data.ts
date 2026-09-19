export const COMMUNITY_URL = "https://luma.com/ai-dev-circle";
export const CONTACT_EMAIL = "pritesh.d.kiri@gmail.com";
export const CONTACT_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Let's partner with AI Dev Circle")}&body=${encodeURIComponent(
  [
    "Hi AI Dev Circle team,",
    "",
    "I'd love to explore a partnership with your community.",
    "",
    "Name: [Your name]",
    "Organization: [Organization or community]",
    "Interested in: [Hosting a meetup / sponsoring an event / sharing a talk or workshop / community collaboration]",
    "Our idea: [A little about what you have in mind]",
    "Possible dates or location: [If you have any in mind]",
    "",
    "Looking forward to building something together!",
    "[Your name]",
  ].join("\r\n"),
)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/aidevcircle";
export const LINKEDIN_URL = "https://www.linkedin.com/company/ai-dev-circle/";
export const X_URL = "https://x.com/aidevcircle";
export const CFP_URL = "https://forms.gle/mg67Y1TpT5xoDXWG8";

export const founders = [
  {
    name: "Pritesh Kiri",
    image: "/founders/pritesh-kiri.png",
    linkedin: "https://www.linkedin.com/in/pritesh-kiri/",
    x: "https://x.com/priteshkiri",
  },
  {
    name: "Tapas Adhikary",
    image: "/founders/tapas-adhikary.png",
    linkedin: "https://www.linkedin.com/in/tapasadhikary/",
    x: "https://x.com/tapasadhikary",
  },
];

export type UpcomingEvent = {
  slug: string;
  title: string;
  startsAt: string;
  venue: string;
  description: string;
  registrationUrl: string;
  image?: string;
};

// Add confirmed gatherings here, ordered by date. They appear on the home page,
// in the upcoming list, and at their own /events/[slug] URL after the next build.
export const upcomingEvents: UpcomingEvent[] = [];

export function eventDate(startsAt: string) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(startsAt));
}

export type CommunityEvent = {
  // Stable archive identifier; recent gatherings use a label until their
  // ReactPlay edition numbers are confirmed.
  edition: number;
  slug: string;
  host: string;
  year: number;
  when: string;
  image: string;
  title: string;
  description: string;
  recap: string;
  video?: string;
  label?: string;
  community?: string;
  venue?: string;
  story?: string;
  photos?: { src: string; alt: string }[];
  photoCredit?: { name: string; url: string };
};

export const eventLabel = (event: CommunityEvent) =>
  event.label ?? `Edition ${String(event.edition).padStart(2, "0")}`;

const recentEvents: CommunityEvent[] = [
  {
    edition: 29,
    slug: "ai-dev-circle-launch-geekyants-2026",
    host: "GeekyAnts",
    year: 2026,
    when: "September 2026",
    image: "/events/geekyants-launch-2026-1.jpg",
    title: "A new chapter, together at GeekyAnts",
    label: "Community launch",
    community: "AI Dev Circle",
    description:
      "Our September ReactPlay meetup at GeekyAnts was part of Bengaluru Tech Week — and the beginning of AI Dev Circle. Developers and builders came together to share what they’re building and learning with AI.",
    story:
      "Hosted by Pritesh Kiri and Tapas Adhikary, the gathering featured Wadad Parker, Gracey Dugar, Ashita Prasad, Smile Gupta, Sriram G, and Sanket Sahu. It was the moment we introduced AI Dev Circle: a new initiative by ReactPlay, carrying our community’s curiosity into what comes next.",
    recap:
      "https://www.linkedin.com/feed/update/urn:li:activity:7502758741381935104/",
    photos: [2, 3, 4, 5].map((number) => ({
      src: `/events/geekyants-launch-2026-${number}.jpg`,
      alt: `A moment from the AI Dev Circle launch meetup at GeekyAnts, September 2026 — photo ${number}`,
    })),
  },
  {
    edition: 28,
    slug: "clerk-coffee-bengaluru-2026",
    host: "Clerk",
    venue: "Café meetup",
    year: 2026,
    when: "August 2026",
    image: "/events/clerk-coffee-2026-1.jpg",
    title: "Clerk & Coffee: conversations over a cup",
    label: "Clerk & Coffee",
    description:
      "40+ builders gathered for a relaxed café meetup, hosted by Pritesh Kiri in collaboration with ReactPlay and The Humans Of Tech, and sponsored by Clerk. No presentations or fixed agenda — just coffee and conversations about AI agents, authentication, identity, and the things we’re building.",
    story:
      "Between 60-second idea pitches, Guess the Auth Term, games, and a photo booth, there was plenty of room to meet someone new. A Saturday afternoon for swapping side-project stories, startup ideas, and a little Clerk swag.",
    recap:
      "https://www.linkedin.com/posts/pritesh-kiri_yesterday-i-hosted-the-clerkcom-bangalore-ugcPost-7499811343513067520-Z5iZ/",
    photos: [2, 3, 4].map((number) => ({
      src: `/events/clerk-coffee-2026-${number}.jpg`,
      alt: `A moment from the Clerk & Coffee community meetup in Bengaluru, August 2026 — photo ${number}`,
    })),
    photoCredit: {
      name: "Sumanth B A",
      url: "https://in.linkedin.com/in/sumanthba",
    },
  },
  {
    edition: 27,
    slug: "reactplay-sarvam-august-2026",
    host: "Sarvam",
    year: 2026,
    when: "8 August 2026",
    image: "/events/sarvam-2026-1.jpg",
    title: "Exploring AI, together at Sarvam",
    label: "August meetup",
    description:
      "60+ developers joined our August ReactPlay meetup at the Sarvam office in Bengaluru. An afternoon of practical AI talks, shared ideas, and conversations with the people building what comes next.",
    story:
      "Pavan Belagatti, Saurabh Daware, Yasuhiro Nose, and Vinayak Gavariya shared their perspectives with the community. Hosted by Pritesh Kiri and Tapas Adhikary, with Sarvam opening its doors for the gathering.",
    recap:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7492091697980608514/",
    photos: [2, 3, 4, 5].map((number) => ({
      src: `/events/sarvam-2026-${number}.jpg`,
      alt: `A moment from the ReactPlay meetup at Sarvam, August 2026 — photo ${number}`,
    })),
  },
];

type EventSeed = [number, string, number, string, string, string, string];
const records: EventSeed[] = [
  [
    1,
    "GeekyAnts",
    2023,
    "18 November 2023",
    "event-1-geekyants-2023.jpg",
    "Where the circle began",
    "https://www.linkedin.com/feed/update/urn:li:activity:7132332645643948032/",
  ],
  [
    2,
    "LambdaTest",
    2023,
    "17 December 2023",
    "event-2-lambdatest-2023.jpg",
    "One meetup became a community",
    "https://www.instagram.com/p/C3FThKjRoSF/",
  ],
  [
    3,
    "Razorpay",
    2024,
    "20 January 2024",
    "event-3-razorpay-2024.jpg",
    "A new year, a familiar energy",
    "https://www.instagram.com/p/C2egioaLwGV/",
  ],
  [
    4,
    "Hinge Health",
    2024,
    "24 February 2024",
    "event-4-hingehealth-2024.jpg",
    "Making room for new connections",
    "https://www.linkedin.com/posts/pritesh-kiri_hosted-reactplay-banglore-february-meetup-activity-7169740579147296770-G3ZS",
  ],
  [
    5,
    "SenseHQ",
    2024,
    "9 March 2024",
    "event-5-sensehq-2024.jpg",
    "An afternoon of shared ideas",
    "https://www.linkedin.com/feed/update/urn:li:activity:7186313879554002946/",
  ],
  [
    6,
    "GeekyAnts",
    2024,
    "20 April 2024",
    "event-6-geekyants-2024.jpg",
    "Back where it all started",
    "https://www.linkedin.com/feed/update/urn:li:activity:7188070066083577856/",
  ],
  [
    7,
    "DeleteMe",
    2024,
    "15 June 2024",
    "event-7-deleteme-2024.jpg",
    "Learning from the people around us",
    "https://www.linkedin.com/posts/reactplay_glimpse-of-the-june-meetup-awesome-talks-ugcPost-7208053466936590337-AL6H",
  ],
  [
    8,
    "LambdaTest",
    2024,
    "3 August 2024",
    "event-8-lambdatest-2024.jpg",
    "120+ developers. So many possibilities.",
    "https://www.linkedin.com/posts/reactplay_glimpses-of-the-reactplay-august-meetup-activity-7225870634830983170-Dr8h",
  ],
  [
    9,
    "Cubbon Park",
    2024,
    "21 September 2024",
    "event-9-casual-meetup-2024.jpg",
    "Fresh air. Fresh perspectives.",
    "https://www.linkedin.com/posts/pritesh-kiri_hosted-my-first-casual-tech-meetup-in-bangalore-activity-7243613351308632067-hk8n",
  ],
  [
    10,
    "Cubbon Park",
    2024,
    "26 October 2024",
    "event-10-casual-meetup-2024.jpg",
    "Good conversations, under the trees",
    "https://www.linkedin.com/posts/pritesh-kiri_hosted-my-second-casual-tech-meetup-in-activity-7257264777079476224-k010",
  ],
  [
    11,
    "ANSR",
    2024,
    "14 December 2024",
    "event-11-ansr-2024.jpg",
    "Closing the year, opening new doors",
    "https://www.linkedin.com/posts/pritesh-kiri_wrapping-up-2024-with-a-bang-the-reactplay-activity-7276172114829656064-yDFZ",
  ],
  [
    12,
    "Microsoft",
    2025,
    "11 January 2025",
    "event-12-microsoft-2025.jpg",
    "Starting the year together",
    "https://www.linkedin.com/posts/pritesh-kiri_first-reactplay-bangalore-meetup-of-2025-ugcPost-7286786605707669504-39aN",
  ],
  [
    13,
    "ImageKit",
    2025,
    "15 February 2025",
    "event-13-imagekit-2025.jpg",
    "A Saturday well spent",
    "https://www.linkedin.com/posts/reactplay_glimpses-of-the-reactplay-feb-25-meetup-activity-7299412316293320704-ELo0",
  ],
  [
    14,
    "Contentstack",
    2025,
    "17 May 2025",
    "event-14-contentstack-2025.jpg",
    "Communities coming together",
    "https://www.linkedin.com/posts/reactplay_glimpses-of-the-reactplay-may-meetup-ugcPost-7330578968791658496-IUcC",
  ],
  [
    15,
    "DevRev",
    2025,
    "21 June 2025",
    "event-15-devrev-2025.jpg",
    "Building connections beyond the screen",
    "https://www.linkedin.com/posts/reactplay_glimpses-of-the-reactplay-june-meetup-activity-7343302162531172353-nFCD",
  ],
  [
    16,
    "Razorpay",
    2025,
    "20 September 2025",
    "event-16-razorpay-2025.jpg",
    "Another chapter at Razorpay",
    "https://www.linkedin.com/feed/update/urn:li:activity:7375202096280821760/",
  ],
  [
    17,
    "Harness",
    2025,
    "2025",
    "event-17-hacktoberfest-2025.jpg",
    "Open source, open doors",
    "https://www.linkedin.com/pulse/hosted-hacktoberfest-workshop-litmuschaos-reactplay-communities-kiri-4ilxc/",
  ],
  [
    18,
    "Kanini",
    2025,
    "15 November 2025",
    "event-18-kanini-2025.jpg",
    "The conversations keep growing",
    "https://www.linkedin.com/pulse/17th-reactplay-meetup-kanini-office-pritesh-kiri-wzykc/",
  ],
  [
    19,
    "Cashfree",
    2025,
    "December 2025",
    "event-20-cashfree-2025.jpg",
    "A little AI. A lot of community.",
    "https://www.linkedin.com/pulse/19th-reactplay-meetup-cashfree-office-pritesh-kiri-btv9c",
  ],
  [
    20,
    "ZopDev",
    2026,
    "31 January 2026",
    "event-21-zopdev-2026.jpg",
    "Twenty meetups. Still just getting started.",
    "https://www.linkedin.com/pulse/hosted-20th-reactplay-bangalore-meetup-zopdev-office-pritesh-kiri-b2oac",
  ],
  [
    21,
    "IBM",
    2026,
    "21 February 2026",
    "event-22-ibm-2026.jpg",
    "Our biggest circle yet",
    "https://www.linkedin.com/pulse/my-largest-meetup-ever-happened-ibm-pritesh-kiri-u9y8c",
  ],
  [
    22,
    "CodeRabbit",
    2026,
    "22 March 2026",
    "event-25-coderabbit-2026.jpg",
    "Five talks. Countless conversations.",
    "https://www.linkedin.com/pulse/behind-scenes-my-22nd-reactplay-meetup-story-pritesh-kiri-jffdc",
  ],
  [
    23,
    "Amadeus",
    2026,
    "18 April 2026",
    "event-28-amadeus-2026.jpg",
    "Ideas worth showing up for",
    "https://www.linkedin.com/pulse/reason-i-love-hosting-meetup-ft-reactplay-23rd-pritesh-kiri-wkpfc",
  ],
  [
    24,
    "Paytm",
    2026,
    "May 2026",
    "event-32-paytm-2026.jpg",
    "Learning, laughter, and a full room",
    "https://www.linkedin.com/pulse/reactplay-x-paytm-may-meetup-full-learning-fun-pritesh-kiri-gjxgc",
  ],
  [
    25,
    "Canvas",
    2026,
    "2026",
    "25th-rp-meetup.jpeg",
    "More than a meetup",
    "https://www.linkedin.com/pulse/hosted-25th-reactplay-meetup-canvas-pritesh-kiri-f8wnf/",
  ],
  [
    26,
    "ZopDev",
    2026,
    "July 2026",
    "26-rp-meetup.jpeg",
    "The circle keeps growing",
    "https://www.linkedin.com/pulse/hosted-my-26th-reactplay-meetup-six-meetups-last-months-pritesh-kiri-caxpe/",
  ],
];

const descriptions: Record<number, string> = {
  1: "Our first ReactPlay Bengaluru meetup brought the community together at GeekyAnts. This is where our offline journey started.",
  8: "More than 120 developers joined our eighth ReactPlay gathering, hosted in collaboration with LambdaTest in Bengaluru.",
  9: "We took the conversation outdoors for our first casual tech meetup in Cubbon Park, Bengaluru.",
  10: "Our second casual tech meetup at Cubbon Park made space for easy conversations and meeting fellow developers.",
  11: "We teamed up with the Talent500 community for the eleventh ReactPlay meetup at ANSR.",
  12: "More than 90 developers came together at Microsoft in Bengaluru for the first ReactPlay meetup of 2025.",
  13: "A gathering of 80+ developers at BHIVE, Bengaluru, in collaboration with ImageKit.",
  14: "ReactPlay and the React Bangalore community came together for a meetup at Contentstack, hosted by Pritesh Kiri and Tapas Adhikary.",
  15: "Pritesh Kiri and ReactPlay founder Tapas Adhikary hosted our fifteenth meetup at the DevRev office in Bengaluru.",
  17: "More than 130 developers gathered at Harness for a Hacktoberfest celebration with the ReactPlay community.",
  21: "More than 200 developers joined us at IBM in Bengaluru, making this the largest ReactPlay meetup in our documented journey.",
  22: "85 developers, five talks, and four hours of learning and conversations at the CodeRabbit office in Bengaluru.",
  23: "More than 80 developers joined us at Amadeus for an afternoon of talks and conversations.",
  24: "More than 90 developers gathered at Paytm for the May edition of ReactPlay Bengaluru.",
  25: "75+ developers came together at Canvas for talks, networking, Guess the Tech Term, and React Nexus ticket giveaways.",
  26: "Our twenty-sixth ReactPlay Bengaluru gathering brought the community back together at ZopDev.",
};
export const events: CommunityEvent[] = [
  ...recentEvents,
  ...records
    .map(([edition, host, year, when, image, title, recap]) => ({
      edition,
      host,
      year,
      when,
      image: `/events/${image}`,
      title,
      recap,
      slug: `reactplay-${edition}-${host.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      description:
        descriptions[edition] ||
        `The ReactPlay community came together at ${host} in Bengaluru for edition ${edition} of our meetup series. Explore the original recap for the moments and conversations from the day.`,
      ...(edition === 17
        ? { video: "https://www.youtube.com/watch?v=RPXbq4pypns" }
        : {}),
      ...(edition === 19
        ? {
            video:
              "https://www.linkedin.com/posts/cashfree_where-does-ai-actually-save-time-for-frontend-ugcPost-7411660768066236417-Qgll",
          }
        : {}),
    }))
    .reverse(),
];
export const featuredEvents = recentEvents;
export const getEvent = (edition: number) =>
  events.find((e) => e.edition === edition)!;

export const partners = [
  ["Clerk", "logo-clerk.svg", "https://clerk.com/"],
  ["Sarvam", "logo-sarvam.svg", "https://www.sarvam.ai/"],
  ["Microsoft", "logo-microsoft.png", "https://www.microsoft.com/"],
  ["IBM", "logo-ibm.png", "https://www.ibm.com/"],
  ["Kanini", "logo-kanini.png", "https://kanini.com/"],
  ["ANSR", "ansr.png", "https://ansrsource.com/"],
  ["Amadeus", "amadeus.png", "https://amadeus.com/"],
  ["Razorpay", "logo-razorpay.png", "https://razorpay.com/"],
  ["Cashfree", "logo-cashfree.png", "https://www.cashfree.com/"],
  ["MongoDB", "logo-mongodb.png", "https://www.mongodb.com/"],
  ["Postman", "logo-postman.png", "https://www.postman.com/"],
  ["Harness", "logo-harness.png", "https://www.harness.io/"],
  ["CodeRabbit", "logo-coderabbit.png", "https://www.coderabbit.ai/"],
  ["ZopDev", "logo-zopdev.png", "https://zop.dev/"],
  ["ImageKit", "logo-imagekit.png", "https://imagekit.io/"],
  ["GeekyAnts", "logo-geekyants.png", "https://geekyants.com/"],
  ["SenseHQ", "logo-sensehq.png", "https://www.sensehq.com/"],
  ["Hinge Health", "logo-hingehealth.png", "https://www.hingehealth.com/"],
  ["Paytm", "logo-paytm.png", "https://paytm.com/"],
  ["Contentstack", "logo-contentstack.png", "https://www.contentstack.com/"],
  ["DevRev", "logo-devrev.png", "https://devrev.ai/"],
].map(([name, file, url]) => ({ name, logo: `/partners/${file}`, url }));

export const galleryEvents = [
  29, 28, 27, 21, 25, 22, 1, 24, 9, 13, 26, 12, 6, 23, 17,
].map(getEvent);
