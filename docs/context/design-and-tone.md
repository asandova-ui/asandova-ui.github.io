# Design And Tone

## Visual direction

The site is intentionally inspired by a calm, premium, editorial style rather than a bright product-marketing aesthetic.

Core characteristics:

- warm off-white / cream background
- near-black headings
- warm gray body copy
- muted terracotta accent
- expressive but controlled typography
- soft rounding and subtle borders
- very light shadows
- almost no gratuitous animation

The goal is “serious technical founder / engineer” rather than “template portfolio” or “loud startup landing page”.

## Typography

Configured in:

- [`src/styles/global.css`](../../src/styles/global.css)

Fonts:

- headings: `Poppins`
- body: `Lora`

This contrast is deliberate:

- headings feel sharp, current, and structured
- body copy feels more editorial and reflective

## Current design tokens

From [`src/styles/global.css`](../../src/styles/global.css):

- background: `#faf9f5`
- foreground: `#141413`
- muted text: `#6f6b62`
- border: `#e8e6dc`
- accent: `#d97757`
- accent strong: `#be6247`

Other important choices:

- soft glass-free surface cards
- subtle grid / radial background overlay in the layout
- no dark mode focus right now
- restrained hover movement only

## Components and styling patterns

### `surface-card`

Used for:

- project cards
- blog cards
- side panels on project detail pages

Purpose:

- consistent premium container treatment
- white translucent surface over warm background

### `eyebrow`

Used for:

- section labels
- small status or framing labels

Purpose:

- light information hierarchy without loud banners

### `chip`

Used for:

- stack tags
- tags lists

Purpose:

- show taxonomy cleanly without heavy colored pills

## Current tone of writing

The site copy should sound like:

- technically serious
- startup-aware
- concise
- credible
- non-generic
- non-hypey
- not juvenile

It should not sound like:

- “passionate developer”
- generic product marketing
- exaggerated founder hype
- repetitive AI keyword stuffing

## Hero / top-of-page tone

The current hero was deliberately simplified after several iterations.

Rules for future edits:

- avoid oversized marketing headline + subheadline patterns
- keep the intro compact and human
- mention startups naturally, not theatrically
- mention Caudals once or twice with discipline
- avoid repeating the same identity claim in multiple hero elements
- do not bring back noisy blocks like extra “AI focus” cards unless there is a very strong reason

## Project card tone

The project cards were intentionally simplified.

Important current rules:

- no `Role` and `Outcome` blocks on cards
- use a cleaner summary / pitch
- detail pages carry the deeper operational explanation
- status labels can appear, but they should be small and clean

## Blog tone

The blog should feel like technical writing by someone building real systems, not like SEO content.

Good themes:

- applied AI infrastructure
- agents
- data quality / labeling / evaluation
- AI product interfaces
- connected systems / reliability / telecom-inspired systems thinking
- market and product shifts in AI

The writing should:

- include concrete real-world framing
- use sources when claims are current or vendor-specific
- avoid empty futurism
- stay readable and direct

## UX constraints from prior iteration

These were explicit user preferences and should be preserved unless the user asks otherwise:

- keep the site low-key and more pro
- reduce repetition of “AI” in intros and about copy
- do not make the home page feel like a conventional startup landing page
- keep projects strong and visible
- keep the top section cleaner than earlier versions

## Future-session guidance

If a later session needs to change the design without destabilizing the whole site:

1. change content first in [`src/lib/site.ts`](../../src/lib/site.ts)
2. change layout emphasis next in [`src/components/Hero.astro`](../../src/components/Hero.astro)
3. only then touch shared visual tokens in [`src/styles/global.css`](../../src/styles/global.css)

This order avoids accidental regressions where a design change fights the copy structure or vice versa.
