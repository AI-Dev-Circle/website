# AI Dev Circle

**Built for community. A place for developers to learn, build, and explore AI together.**

AI Dev Circle brings developers together in Bengaluru for real conversations, practical learning, and the connections that happen when people share a room. Whether you are exploring AI for the first time or already building with it, there is a place for you in the circle.

[Join us on Luma](https://luma.com/ai-dev-circle) · [Propose a talk](https://forms.gle/mg67Y1TpT5xoDXWG8) · [Contribute to the website](CONTRIBUTION.md)

## Our story

Our roots are in **ReactPlay**, an open-source community built around learning React by building projects. That spirit grew into a series of offline developer meetups in Bengaluru: people sharing what they know, meeting collaborators, and learning from one another.

AI Dev Circle is the next chapter of that journey, backed by ReactPlay and founded by **Pritesh Kiri** and **Tapas Adhikary**. We are expanding the conversation from frontend development to the possibilities of building with AI, while keeping community at the center.

## What we do

- **Bring developers together** through offline meetups and shared conversations.
- **Learn through talks and demos** about tools, ideas, and real experiences of building software with AI.
- **Make room for new voices** by welcoming speakers, questions, and different perspectives.
- **Connect people and partners** who want to support developer learning and collaboration.
- **Build in the open**, including this website, with contributions from the community.

## About this website

This repository contains the AI Dev Circle community website. It introduces who we are, preserves our ReactPlay journey, and helps people find their next way to take part.

| Page                             | What you will find                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| Home (`/`)                       | Community introduction, meetup highlights, photos, project ideas, and ways to join |
| Events (`/events`)               | Searchable past meetups and confirmed upcoming gatherings                          |
| Event details (`/events/[slug]`) | Event information, photos, and original recaps or registration links               |
| Our story (`/our-story`)         | Our roots, vision, timeline, and founding members                                  |
| Moments (`/moments`)             | Photos and video highlight links from our meetups                                  |
| Partners (`/partners`)           | Organizations we have collaborated with along the community journey                |

The site uses a light theme with our blue (`#0071FF`) and coral (`#F05555`) colors, gentle motion, and looping photo and partner galleries. Motion respects reduced-motion preferences, and the galleries include pause controls.

## Run locally

You will need **Node.js 20.9 or newer**, npm, and Git.

```sh
git clone https://github.com/AI-Dev-Circle/website.git
cd website
npm ci
npm run dev
```

Open [the local site](http://127.0.0.1:3000).

Content, images, and fonts are included in the project. No API keys or environment variables are required for local development. The project-idea interaction uses curated suggestions and does not require an AI service.

| Command             | Purpose                                                                           |
| ------------------- | --------------------------------------------------------------------------------- |
| `npm run dev`       | Start the local development server                                                |
| `npm run build`     | Create a production build and generate Next.js types                              |
| `npm start`         | Serve the production build locally after building                                 |
| `npm run typecheck` | Check TypeScript types; run after development startup or a build on a fresh clone |

## Project structure

Built with **Next.js App Router, React, TypeScript, and CSS**, with Lucide icons and self-hosted DM Sans and Manrope fonts. Dependency versions are recorded in [package.json](package.json) and the npm lockfile.

```text
app/                    Pages, layouts, global styles, and favicon
components/             Shared UI and interactive features
lib/data.ts             Events, partners, founders, and community links
public/brand/           Brand images
public/events/          Meetup photos
public/founders/        Founder portraits
public/partners/        Partner logos
```

Most content changes begin in [lib/data.ts](lib/data.ts). See the [contribution guide](CONTRIBUTION.md#updating-community-content) for guidance on event records, images, and partner information.

## Contribute

Everyone is welcome to help make this website better. You can contribute code, improve accessibility, fix copy, document a meetup, share event photos, or suggest an idea. First-time contributors are welcome, and small improvements matter.

Read [CONTRIBUTION.md](CONTRIBUTION.md) to get started. For a bug or a proposal, [open an issue](https://github.com/AI-Dev-Circle/website/issues). For a larger change, share your idea in an issue before investing time in the implementation.

## Find your circle

- **Attend a meetup:** [AI Dev Circle on Luma](https://luma.com/ai-dev-circle)
- **Share what you know:** [Submit a talk proposal](https://forms.gle/mg67Y1TpT5xoDXWG8)
- **Follow the community:** [LinkedIn](https://www.linkedin.com/company/ai-dev-circle/) · [Instagram](https://www.instagram.com/aidevcircle) · [X](https://x.com/aidevcircle)
- **Talk to us about partnerships:** [pritesh.d.kiri@gmail.com](mailto:pritesh.d.kiri@gmail.com)
