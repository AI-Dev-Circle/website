# AI Dev Circle — research and proposed direction

Research date: 18 September 2026. Planning only; no website has been built.

## Direction

A light, photograph-led community website with generous white space, strong typography, electric blue (#0071FF), coral (#F05555), and a restrained circle/connection motif. AI Dev Circle is a new brand within ReactPlay, as described by Pritesh, and its history should remain visibly attributed to ReactPlay.

Five main pages: Home, Events, Our Story, Moments, Partners. A shared event-detail template supports individual event URLs. Join the Circle is a persistent action leading to the confirmed community destination. There are no chapter pages in the initial scope.

Homepage sequence: introduction and join actions; next confirmed gathering; photographic highlights; ReactPlay-to-AI-Dev-Circle story; community vision and activities; partner selection; invitation to join.

Motion: short entrance reveals; a circle that draws progressively between sections; modest image movement; timeline progression; gentle button feedback. Normal scrolling, reduced-motion support, keyboard access, and simplified mobile behavior are requirements. Avoid making content depend on an animation finishing. An optional lightweight interaction can shuffle curated AI project prompts, clearly presented as suggestions rather than a live model.

Use the latest stable Next.js with App Router and TypeScript at implementation time. The official release line verified during research is Next.js 16.3: https://nextjs.org/blog/next-16-3. Check the current stable patch when the project is initialized. Keep event, partner, and media records separate from layout so a content editor can be added without redesigning the site. Begin with structured content files unless a browser-based editor is needed from launch.

## Sources

- Inspiration: https://www.aicollective.com/ — event discovery, community storytelling, photo collections, partner presentation.
- Inspiration: https://hackthisfall.tech/ — expressive typography, light canvas, lively editorial sections, prominent participation actions.
- ReactPlay project: https://github.com/reactplay/react-play — open-source, hands-on React learning roots.
- Event archive: https://www.priteshkiri.com/events?category=ReactPlay — 26 ReactPlay records visible after the category filter is applied.
- Meetup: https://www.meetup.com/reactplay-bengaluru/ — 30 past listings reported during research; includes a Sarvam 27th-edition listing. This is not automatically equivalent to the number of unique meetups hosted by Pritesh.
- Partner source: https://www.priteshkiri.com/ — 30 unique partner names and logo URLs found in the rendered page.
- Supplied GitHub folder: https://github.com/PriteshKiri/codewithcoffee/tree/main/public/static/partners — returned 404 in both the browser and public API. The live personal website provides an alternative asset inventory.

## Event inventory

Dates below reproduce the personal archive's stated dates. They have not all been checked against original event listings. Dates may reflect recap timing; preserve this uncertainty during import.

| Edition | Archive date | Venue / collaboration |
| --- | --- | --- |
| 1 | 2023-11-18 | GeekyAnts |
| 2 | 2023-12-17 | LambdaTest |
| 3 | 2024-01-20 | Razorpay |
| 4 | 2024-02-24 | Hinge Health |
| 5 | 2024-03-09 | SenseHQ |
| 6 | 2024-04-20 | GeekyAnts |
| 7 | 2024-06-15 | DeleteMe |
| 8 | 2024-08-03 | LambdaTest |
| 9 | 2024-09-21 | Cubbon Park |
| 10 | 2024-10-26 | Cubbon Park |
| 11 | 2024-12-14 | ANSR / Talent500 |
| 12 | 2025-01-11 | Microsoft |
| 13 | 2025-02-15 | ImageKit / BHIVE |
| 14 | 2025-05-17 | Contentstack |
| 15 | 2025-06-21 | DevRev |
| 16 | 2025-09-20 | Razorpay |
| 17 | 2025, exact date unresolved | Harness / Hacktoberfest |
| 18 | 2025-11-15 | Kanini |
| 19 | 2025-12, exact date unresolved | Cashfree |
| 20 | 2026-01-31 | ZopDev |
| 21 | 2026-02-21 | IBM |
| 22 | 2026-03-22 | CodeRabbit |
| 23 | 2026-04-18 | Amadeus |
| 24 | 2026-05-17, check date | Paytm |
| 25 | 2026-07-01, check date | Canvas |
| 26 | 2026-07-28, check date | ZopDev |

Pritesh reports 29 hosted ReactPlay meetups. Obtain the missing records and reconcile the scope of Meetup listings before making the website counter automatic. Meetup lists Paytm on 16 May, the June gathering on 27 June, and ZopDev on 25 July, which differ from the corresponding personal-site recap dates. Several recap URL slugs also use edition numbers that differ from card titles. Validate actual dates and edition numbers before publishing event detail pages or event structured data.

Retain ReactPlay attribution on historical event cards. Only include other events from the personal site if they belong in the AI Dev Circle / ReactPlay story. Do not import the entire unfiltered personal archive as community events.

## Partner logo inventory

All paths below were observed in the live personal website. Base URL: https://www.priteshkiri.com/static/partner_img/

| Partner | Observed filename |
| --- | --- |
| Microsoft | logo-microsoft.png |
| IBM | logo-ibm.png |
| Qdrant | logo-qdrant.png |
| Weaviate | logo-weaviate.png |
| LambdaTest | logo-lambdatest.png |
| Kanini | logo-kanini.png |
| ANSR | ansr.png |
| Amadeus | amadeus.png |
| Razorpay | logo-razorpay.png |
| Cashfree | logo-cashfree.png |
| Elasticsearch | logo-elasticsearch.png |
| MongoDB | logo-mongodb.png |
| Postman | logo-postman.png |
| The AI Collective | AI-Collective.png |
| Harness | logo-harness.png |
| CodeRabbit | logo-coderabbit.png |
| ToolJet | logo-tooljet.png |
| Kong | logo-kong.png |
| Cast AI | logo-castai.png |
| Portkey | logo-portkey.png |
| ZopDev | logo-zopdev.png |
| ImageKit | logo-imagekit.png |
| GeekyAnts | logo-geekyants.png |
| Sense HQ | logo-sensehq.png |
| Hinge Health | logo-hingehealth.png |
| Paytm | logo-paytm.png |
| Contentstack | logo-contentstack.png |
| DevRev | logo-devrev.png |
| Flipkart | logo-flipkart.png |
| Canonical | logo-canonical.png |

The source represents Pritesh's broader collaboration history. Confirm relationship context when presenting these logos: ReactPlay event host, historical collaborator, or current AI Dev Circle partner. Do not label all 30 as current ADC sponsors. Some logo images were not loaded at the moment of observation; URL inventory is not a complete download/availability verification.

## Media

The event archive contains image references for all 26 records. Visible cards include actual group photographs. Loaded source images ranged from about 426 to 682 pixels wide, making them better suited to cards than a large full-width hero. Request originals for prominent imagery; do not upscale small thumbnails into the main visual.

Examples of original asset paths exposed by the page:

- https://www.priteshkiri.com/static/events/26-rp-meetup.jpeg
- https://www.priteshkiri.com/static/events/25th-rp-meetup.jpeg
- https://www.priteshkiri.com/static/events/event-32-paytm-2026.jpg
- https://www.priteshkiri.com/static/events/event-28-amadeus-2026.jpg
- https://www.priteshkiri.com/static/events/event-25-coderabbit-2026.jpg
- https://www.priteshkiri.com/static/events/event-22-ibm-2026.jpg

The Cashfree and Hacktoberfest cards include video links. Their duration, orientation, and suitability have not been verified. Pritesh also has vertical meetup clips; propose 3–5 portrait video cards with posters and click-to-play controls, one playing at a time. Keep photos and clips associated with their original events. Use event captions and accessible descriptions written after inspecting the media, rather than copying existing image alt text without checking it.

If photos or clips are missing, omit the media slot or section. A text-led event card can be complete without a photograph. Do not use stock crowds, generated attendees, empty media boxes, invented testimonials, or invented attendance totals.

## Supplied brand assets

- `bfdhg.png`: white ADC mark and AI Dev Circle wordmark on a dark background.
- `Group 3.png`: white mark and wordmark over blue/red dark artwork.
- `ChatGPT Image Sep 18, 2026, 04_32_16 PM.png`: blue/red background artwork without the mark.

These assets were visually inspected. Preserve the ADC mark. Obtain a vector or transparent export suitable for the light website header; the current dark square artwork is less suitable for that placement. Brand colors are exactly the user-provided #0071FF and #F05555. Verify accessible text/button color combinations and use darker companion shades where necessary.

## Inputs for implementation

1. Official Join the Circle destination, event registration destination, and partnership contact.
2. Remaining meetup records, confirmed event dates, and relationship context for the partner wall.
3. Selected original photos, portrait clips, and a clean logo export when available.
4. Whether content updates should happen through repository files or a browser-based editor.

## Build sequence

1. Agree the sitemap and story; map the initial event and partner records.
2. Design the homepage in desktop and mobile sizes using real media, including the circle motion concept.
3. Implement the five pages and reusable event-detail template in Next.js.
4. Add selected motion and portrait clips after the static layout works.
5. Verify navigation, registration/join links, event attribution, mobile layout, keyboard use, reduced motion, image loading, and page performance before launch.
