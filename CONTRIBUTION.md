# Contributing to AI Dev Circle

Thank you for helping build the AI Dev Circle website. This is a community project, and you do not need to be an AI expert or an experienced open-source contributor to take part.

## Ways to contribute

- Fix a bug or improve the experience on mobile devices.
- Improve accessibility, performance, or clarity of the interface.
- Correct website copy or make the documentation easier to follow.
- Add verified meetup information, recaps, and photos.
- Suggest a feature that helps people discover or participate in the community.

Browse [existing issues](https://github.com/AI-Dev-Circle/website/issues) before opening a new one. Small fixes can go straight into a pull request. For a new page, major design change, or significant dependency, open an issue first so maintainers can discuss the direction with you.

## Report a bug or propose an idea

For a bug, include the affected page, steps to reproduce it, what you expected, and what happened instead. Browser and device details, screenshots, or a short recording can help explain visual problems.

For an idea, explain who it helps and the problem it solves. You are welcome to open an issue even if you do not yet know how to implement the solution.

## Set up your contribution

Install **Node.js 20.9 or newer**, npm, and Git. Fork [AI-Dev-Circle/website](https://github.com/AI-Dev-Circle/website) on GitHub, then clone your fork. Replace `YOUR_USERNAME` with your GitHub username and choose a branch name that describes your change.

```sh
git clone https://github.com/YOUR_USERNAME/website.git
cd website
git remote add upstream https://github.com/AI-Dev-Circle/website.git
git switch -c improve-community-website
npm ci
npm run dev
```

Open [the local site](http://127.0.0.1:3000). No API keys or environment variables are needed. Existing photos, logos, and fonts are already included; you do not need to run the asset import script.

The [README](README.md#project-structure) explains where the main files live. Follow any applicable [AGENTS.md](AGENTS.md) instructions when using a coding assistant. The installed Next.js documentation is available under `node_modules/next/dist/docs/` for version-specific guidance.

## Working on code and design

Keep each pull request focused on one change. Follow the patterns in nearby files and avoid unrelated rewrites or formatting changes.

- Use TypeScript and the existing Next.js App Router structure. Add client components where browser interaction requires them.
- Reuse shared components and the community links in `lib/data.ts` instead of duplicating them across pages.
- Preserve the light theme and the blue (`#0071FF`) and coral (`#F05555`) brand colors. Check text contrast when using them.
- Check narrow mobile screens as well as desktop layouts.
- Keep controls usable with a keyboard, retain visible focus indicators, and provide meaningful image descriptions.
- Respect reduced-motion preferences and preserve pause controls for moving galleries.
- Keep images reasonably sized and avoid adding dependencies for work the existing stack already supports.

## Updating community content

### Events

Event data lives in [lib/data.ts](lib/data.ts).

For a **confirmed upcoming gathering**, add an entry to `upcomingEvents`, ordered by date. Include a unique `slug`, `title`, timezone-aware ISO `startsAt`, `venue`, `description`, and `registrationUrl`. The `image` field is optional. Dates are displayed in the `Asia/Kolkata` timezone. The upcoming list and the event's `/events/[slug]` page are generated from this data on the next build.

Do not publish tentative details as confirmed events. Once a gathering has happened, remove it from the upcoming list and coordinate with maintainers on its archive entry.

For a **historical ReactPlay meetup**, update `records` and, where needed, `descriptions`. Each record contains the edition number, host, year, display date, photo filename, title, and original recap URL. Slugs are derived from the edition and host, so changing either can change an existing event URL. Discuss URL changes with maintainers.

Keep historical meetups attributed to ReactPlay. Include the source for dates, attendance figures, and recap details in your pull request. If an exact date is uncertain, use a verified month or year rather than guessing.

The archive contains **29 documented gatherings**, including Sarvam, Clerk & Coffee, and the AI Dev Circle launch at GeekyAnts in 2026. Newer entries live in `recentEvents` and can include a custom `label`, `community`, `venue`, `story`, additional `photos`, and `photoCredit`. Their numeric `edition` values are stable archive identifiers; use a descriptive label when a public ReactPlay edition number is unconfirmed. Keep existing slugs stable, and add only verified events.

Use the recap URL as the source for event details. If only a month is confirmed, keep the display date at month precision. See [media sources](public/events/SOURCES.md) for the latest event photos and logo provenance.

### Photos and other media

- Place meetup photos in `public/events/`, founder portraits in `public/founders/`, and partner logos in `public/partners/`.
- Use descriptive filenames and update the relevant data or component reference.
- Share genuine community media that you have permission to publish. Include photographer credit or attribution requirements in the pull request when applicable.
- Check the image crop and loading behavior on mobile and desktop. Preserve useful detail without committing unnecessarily large files.
- For video highlights, include a working source link and context about the event. Do not add placeholder clips or generated images presented as real meetup photos.
- Instagram reels live in `lib/reels.ts`. Match each reel to its gathering using the original caption. The first three appear on the homepage; all appear in Events and on their matching event pages. Use a local event photo for the poster. Instagram loads only when a visitor opens a reel; keep the direct Instagram fallback link visible, since embeds can be unavailable.

### Partners, founders, and links

Partner records, founder profiles, and community destinations are centralized in `lib/data.ts`. Confirm additions or changes to partner relationships with maintainers. A company hosting a past event does not automatically make it a current sponsor, and an unused logo file is not confirmation of a partnership.

Use the community's Luma calendar for joining, the CFP form for talk proposals, and the configured email address for partnership enquiries. Keep historical recap links pointing to their original sources.

## Check your changes

For code, styling, or event-data changes, run:

```sh
npm run build
npm run typecheck
```

Running the build first also generates the Next.js files needed for type checking on a fresh clone. There is currently no separate lint script or automated test suite.

Format the files you changed with the project's installed Prettier. For example, for these documentation files:

```sh
npx prettier --write README.md CONTRIBUTION.md
npx prettier --check README.md CONTRIBUTION.md
```

Use the paths to your changed files when working on other parts of the project. Avoid formatting the entire repository for an unrelated change.

For visual changes, check the affected pages on desktop and mobile, along with keyboard navigation and reduced-motion behavior where relevant. For content changes, check links, dates, image paths, and any generated event pages.

Documentation-only changes do not require an application build. Check Markdown formatting, local file links, and the accuracy of any commands or instructions you changed.

## Open a pull request

1. Review your diff and include only files relevant to the change. Do not commit credentials, local environment files, dependencies, or generated build output.
2. Commit your changes with a descriptive message and push your branch to your fork.
3. Open a pull request against `main` in `AI-Dev-Circle/website`.
4. Explain what changed and why, link any related issue, and describe how you checked it. Include screenshots for visual changes and source links for event or partner updates.
5. Respond to review feedback and push follow-up commits to the same branch.

If a check could not run, say so in the pull request and explain what prevented it. A draft pull request is welcome when you want feedback on work in progress.

## Working together

Be kind, constructive, and welcoming. Give feedback on the work, make room for questions, and respect different levels of experience. If you get stuck, describe what you tried in an issue or your pull request so someone can help.

You can also contribute to the community beyond this repository: [attend a meetup](https://luma.com/ai-dev-circle), [propose a talk](https://forms.gle/mg67Y1TpT5xoDXWG8), or [talk to us about a partnership](mailto:pritesh.d.kiri@gmail.com).
