# AI Dev Circle

A light-mode community website built with Next.js 16.3.5, React 19.3, and TypeScript. Brand colors: `#0071FF` and `#F05555`.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. For a production build, run `npm run build` followed by `npm start`.

## Pages and behavior

- `/`: community introduction, meetup highlights, origin story, two looping rows of all 26 meetup photos, curated project-idea interaction, scrolling partner logos, and Luma join actions.
- `/events`: 26 documented ReactPlay events with search, year filters, and an upcoming announcement state.
- `/events/[slug]`: statically generated event pages with original recap links.
- `/our-story`: ReactPlay roots, vision, timeline, and portraits of founding members Pritesh Kiri and Tapas Adhikary with their LinkedIn and X profiles.
- `/moments`: photo archive, year filters, accessible modal viewer, and existing video highlight links.
- `/partners`: 20 organizations, following the organizer’s updated partner list, and partnership contact.

All meetup photos and partner images are stored locally under `public/`. Fonts are self-hosted. A moving blue-and-coral gradient appears across every page, with a custom spark cursor and following orbit on desktop. Decorative motion respects reduced-motion preferences. Photo and partner ribbons have pause controls, pause on hover and focus, and become manually scrollable with reduced motion. The photo viewer supports Escape and arrow keys.

## Update content

Edit `lib/data.ts` for event records, partner records, and contact destinations. Add confirmed future gatherings to `upcomingEvents`, ordered by date, with a unique slug, title, timezone-aware ISO `startsAt`, venue, description, registration URL, and optional image. The upcoming list and event detail pages pick them up automatically on the next build. No unannounced event is presented as scheduled. Remove or archive upcoming records once the event has passed.

Place event images in `public/events/`, founder portraits in `public/founders/`, and partner logos in `public/partners/`. Each event has a stable slug used for its URL. Keep historical events attributed to ReactPlay. Founder and community social destinations are centralized in `lib/data.ts`.

The idea interaction in `components/idea-spark.tsx` uses curated suggestions. It does not call an AI service or collect visitor data.

## Content choices to revisit before a public launch

- The displayed 29-meetup history comes from Pritesh's brief. The imported public archive has 26 entries; editions 27–29 still need their full records.
- Where source dates disagree, only a month or year is displayed. Research details are in `AI-Dev-Circle-research.md`.
- Join links point to AI Dev Circle’s Luma calendar: https://luma.com/ai-dev-circle. Change `COMMUNITY_URL` if the community moves to a new calendar.
- CFP in both navigation menus opens the supplied Google Form: https://forms.gle/mg67Y1TpT5xoDXWG8. Its destination is configured with `CFP_URL`.
- Asset downloads are deferred; no asset-download page or navigation item is included.
- Partnership and footer contact links open an email to `pritesh.d.kiri@gmail.com`. The footer links to AI Dev Circle’s LinkedIn, Instagram, and X profiles. No contact form or email collection has been added.
- Partners are described as historical collaborations across ReactPlay and the wider community journey, not current AI Dev Circle sponsors.
- Existing Cashfree and Hacktoberfest video links open their original platforms. Add the new portrait clips when available; no placeholder clips are shown.
- Header and footer pair the supplied transparent black ADC mark in `public/brand/adc-black.png` with the stacked “AI Dev / Circle” wordmark. The previously supplied square logo remains the favicon in `app/icon.png`.

## Publishing

This project uses standard Next.js and can run on a Next.js-compatible host. No domain, hosting account, or public deployment has been configured. The local preview is the current deliverable.
