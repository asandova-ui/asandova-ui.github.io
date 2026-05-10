# Site Overview

## Purpose

This repository is the source for Alonso Sandoval’s personal portfolio site: a static Astro website positioned around:

- electrical engineering with a telecommunications specialization
- AI engineering
- startups and technical product building
- applied AI
- data systems
- connected systems / IoT
- serious engineering case studies

The tone is intentionally more premium, editorial, and restrained than a typical personal landing page.

## Current stack

- Astro
- TypeScript
- Tailwind CSS v4
- MDX content collections
- Lucide icons
- static output only
- GitHub Pages deployment via GitHub Actions

Key config files:

- [`package.json`](../../package.json)
- [`astro.config.mjs`](../../astro.config.mjs)
- [`src/content.config.ts`](../../src/content.config.ts)
- [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml)

## Deployment model

The site is built as a static site and deployed to GitHub Pages.

The Astro config derives `site` and `base` automatically from:

- `GITHUB_REPOSITORY`
- `SITE_URL`
- `BASE_PATH`

That means it supports both:

- `username.github.io`
- `username.github.io/repo-name/`

## Main app structure

### Layout

- [`src/layouts/BaseLayout.astro`](../../src/layouts/BaseLayout.astro)

This handles:

- SEO metadata
- canonical URLs
- Open Graph / Twitter tags
- JSON-LD structured data
- site-wide background treatment
- shared `Header` and `Footer`

### Shared components

- [`src/components/Header.astro`](../../src/components/Header.astro)
- [`src/components/Footer.astro`](../../src/components/Footer.astro)
- [`src/components/Hero.astro`](../../src/components/Hero.astro)
- [`src/components/ProjectCard.astro`](../../src/components/ProjectCard.astro)
- [`src/components/SectionHeading.astro`](../../src/components/SectionHeading.astro)
- [`src/components/LinkButton.astro`](../../src/components/LinkButton.astro)
- [`src/components/SocialLinks.astro`](../../src/components/SocialLinks.astro)
- [`src/components/Container.astro`](../../src/components/Container.astro)

Some older-purpose components still exist in the repo, but the current home page is intentionally simpler and does not use every available component.

## Current routes

### Primary routes

- [`src/pages/index.astro`](../../src/pages/index.astro)
- [`src/pages/projects/index.astro`](../../src/pages/projects/index.astro)
- [`src/pages/projects/[slug].astro`](../../src/pages/projects/[slug].astro)
- [`src/pages/notes/index.astro`](../../src/pages/notes/index.astro)
- [`src/pages/notes/[slug].astro`](../../src/pages/notes/[slug].astro)
- [`src/pages/cv.astro`](../../src/pages/cv.astro)
- [`src/pages/404.astro`](../../src/pages/404.astro)
- [`src/pages/robots.txt.ts`](../../src/pages/robots.txt.ts)

## Current home page composition

The home page currently has three main blocks:

1. simplified hero / intro
2. projects
3. blog

Notably removed from the home page:

- contact section
- skills section
- heavier “landing page” patterns

That was a deliberate editorial simplification requested during iteration.

## Hero behavior

The hero is intentionally compact and more personal than before.

Current characteristics:

- orange badge with role + Caudals leadership
- short introduction instead of oversized landing-page headline hierarchy
- same visual weight for the two main text blocks
- explicit mention of startup interest
- subtle “currently building Caudals” framing
- location + social links below

Main files:

- [`src/components/Hero.astro`](../../src/components/Hero.astro)
- [`src/lib/site.ts`](../../src/lib/site.ts)

## Projects behavior

Projects are managed through Astro content collections and sorted by `order`.

Listing behavior:

- featured projects appear first
- standard projects appear below
- cards are intentionally cleaner than earlier versions
- cards do **not** show `Role` or `Outcome` anymore
- card copy prefers `pitch` when present, falling back to `description`
- `Read case study` is styled as a button
- status badges can appear on cards and detail pages

Main files:

- [`src/components/ProjectCard.astro`](../../src/components/ProjectCard.astro)
- [`src/pages/projects/index.astro`](../../src/pages/projects/index.astro)
- [`src/pages/projects/[slug].astro`](../../src/pages/projects/[slug].astro)

## Blog behavior

The blog is real and active, not a placeholder section.

Current behavior:

- the home page shows the two newest published posts only
- `/notes/` shows all non-draft posts
- post pages use article structured data

Main files:

- [`src/pages/index.astro`](../../src/pages/index.astro)
- [`src/pages/notes/index.astro`](../../src/pages/notes/index.astro)
- [`src/pages/notes/[slug].astro`](../../src/pages/notes/[slug].astro)

## Public assets currently in use

- [`public/images/profile/alonso-profile.jpeg`](../../public/images/profile/alonso-profile.jpeg)
- [`public/images/projects/srtp-scheme.png`](../../public/images/projects/srtp-scheme.png)
- [`public/images/projects/tp2-architecture.png`](../../public/images/projects/tp2-architecture.png)
- [`public/pdfs/MemoriaTFG.pdf`](../../public/pdfs/MemoriaTFG.pdf)

## Editing priorities

If a future session needs to modify the site without re-learning everything:

- identity, intro, navigation, social links: [`src/lib/site.ts`](../../src/lib/site.ts)
- home page composition: [`src/pages/index.astro`](../../src/pages/index.astro)
- top-of-page tone and spacing: [`src/components/Hero.astro`](../../src/components/Hero.astro)
- visual system and tokens: [`src/styles/global.css`](../../src/styles/global.css)
- projects: [`src/content/projects/`](../../src/content/projects/)
- blog: [`src/content/posts/`](../../src/content/posts/)
