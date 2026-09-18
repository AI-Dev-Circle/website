export const COMMUNITY_URL = "https://luma.com/ai-dev-circle";
export const CONTACT_EMAIL = "pritesh.d.kiri@gmail.com";
export const CONTACT_URL = `mailto:${CONTACT_EMAIL}`;
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
};

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
export const events: CommunityEvent[] = records
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
  .reverse();
export const featuredEvents = [
  events.find((e) => e.edition === 26)!,
  events.find((e) => e.edition === 22)!,
  events.find((e) => e.edition === 21)!,
];
export const getEvent = (edition: number) =>
  events.find((e) => e.edition === edition)!;

export const partners = [
  ["Microsoft", "logo-microsoft.png", "https://www.microsoft.com/"],
  ["IBM", "logo-ibm.png", "https://www.ibm.com/"],
  ["Kanini", "logo-kanini.png", "https://kanini.com/"],
  ["ANSR", "ansr.png", "https://ansrsource.com/"],
  ["Amadeus", "amadeus.png", "https://amadeus.com/"],
  ["Razorpay", "logo-razorpay.png", "https://razorpay.com/"],
  ["Cashfree", "logo-cashfree.png", "https://www.cashfree.com/"],
  ["Elasticsearch", "logo-elasticsearch.png", "https://www.elastic.co/"],
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

export const galleryEvents = [21, 25, 22, 1, 24, 9, 13, 26, 12, 6, 23, 17].map(
  getEvent,
);
