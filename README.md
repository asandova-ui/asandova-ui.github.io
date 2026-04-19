# Alonso Sandoval Portfolio

Static Astro portfolio designed for a telecommunications and AI engineer. The site is fully static, content-driven, and ready for GitHub Pages deployment with automatic handling for either:

- `username.github.io`
- `username.github.io/repo-name/`

## Stack

- Astro
- Tailwind CSS
- TypeScript
- MDX content collections
- Lucide icons
- GitHub Pages via GitHub Actions

## Local setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Content editing

Update personal data, social links, experience, and skills in:

- `src/lib/site.ts`

Add or edit projects in:

- `src/content/projects/*.mdx`

Add or edit writing posts in:

- `src/content/posts/*.mdx`

Adjust layout and reusable UI in:

- `src/components/`
- `src/layouts/`

Adjust design tokens, typography, and shared visual styles in:

- `src/styles/global.css`

## Placeholder content

Starter content is intentionally marked with `[Placeholder]` where you should replace:

- job titles
- company names
- metrics
- LinkedIn URL
- email address
- project links

The current GitHub link uses the existing repo owner as a sensible default.

## GitHub Pages deployment

The site is already configured for static deployment.

Relevant files:

- `astro.config.mjs`
- `.github/workflows/deploy.yml`

### How the base path works

The Astro config and GitHub Actions workflow automatically resolve the correct `site` and `base` values:

- If the repo name is `username.github.io`, the site builds at `/`
- If the repo name is something else, the site builds under `/<repo-name>/`

For GitHub Actions builds, this is handled automatically through:

- `SITE_URL`
- `BASE_PATH`

For local development, Astro defaults to `/`.

## Deploy steps

1. Push this repo to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings -> Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to `main` or run the workflow manually from the `Actions` tab.
6. Wait for the `Deploy to GitHub Pages` workflow to finish.

Your final site URL will be:

- `https://<username>.github.io/` for a user site repo
- `https://<username>.github.io/<repo-name>/` for a project site repo

## Notes

- `public/favicon.svg`, `public/og-default.svg`, and `public/site.webmanifest` provide default branding assets.
- `src/pages/cv.astro` gives you a lightweight web CV route for the header and trusted-links row.
- `src/pages/robots.txt.ts` and `@astrojs/sitemap` cover the basic SEO requirements.
