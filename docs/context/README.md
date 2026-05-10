# Repository Context

This folder exists so future sessions can recover the current state of the portfolio quickly without re-auditing the whole repository.

Read these files in this order:

1. [`site-overview.md`](./site-overview.md)
2. [`content-inventory.md`](./content-inventory.md)
3. [`design-and-tone.md`](./design-and-tone.md)

## What these files cover

- current site architecture
- important Astro/Tailwind/content decisions
- active pages and sections
- design system and copy direction
- current projects and blog inventory
- practical editing guidance

## Important repo note

This repository contains a nested cloned repository at [`PerfilGitHub/`](../../PerfilGitHub/). Treat it as a separate Git repository when editing or committing profile README changes.

Before making any future edits, always check:

```bash
git status --short
```

That matters here because the main portfolio repo may contain local in-progress changes unrelated to the current task.

## Fast start for future sessions

If the goal is to continue building or refining the portfolio, the minimum useful reading sequence is:

- [`src/lib/site.ts`](../../src/lib/site.ts)
- [`src/pages/index.astro`](../../src/pages/index.astro)
- [`src/components/Hero.astro`](../../src/components/Hero.astro)
- [`src/components/ProjectCard.astro`](../../src/components/ProjectCard.astro)
- [`src/styles/global.css`](../../src/styles/global.css)
- this `docs/context/` folder

## Validation commands

```bash
npm run check
npm run build
```

Use both before closing work on the portfolio itself.
