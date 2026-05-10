# Content Inventory

## Central configuration

The main source of personal/site copy is:

- [`src/lib/site.ts`](../../src/lib/site.ts)

This file currently controls:

- name
- short name
- role
- profile image
- location
- availability line
- SEO description
- headline
- intro
- about copy
- venture data for Caudals
- current focus
- strengths
- social links
- navigation

It also still contains `experience`, `skillGroups`, and `contactLinks`, even though the current home page no longer renders the old contact and skills sections. Future sessions should be aware that some data remains available but unused in the current UI.

## Current navigation

Current top nav is intentionally minimal:

- Projects
- Blog

Configured in:

- [`src/lib/site.ts`](../../src/lib/site.ts)

## Project collection

Projects live in:

- [`src/content/projects/`](../../src/content/projects/)

Schema is defined in:

- [`src/content.config.ts`](../../src/content.config.ts)

Project frontmatter supports:

- `title`
- `subtitle`
- `pitch`
- `description`
- `cardStatusLabel`
- `cardStatusTone`
- `detailStatusLabel`
- `detailStatusTone`
- `detailStatusNote`
- `featured`
- `year`
- `role`
- `outcome`
- `stack`
- `tags`
- `links`
- `order`

## Current projects and ordering

### Featured

1. [`caudals-ai-data-marketplace.mdx`](../../src/content/projects/caudals-ai-data-marketplace.mdx)
   - order `0`
   - status `Live`
   - current venture / flagship startup project

2. [`ai-native-labeling-dataset-evaluation-system.mdx`](../../src/content/projects/ai-native-labeling-dataset-evaluation-system.mdx)
   - order `1`
   - status `Live` on card, `Currently Building` on detail
   - Anthropic Opus 4.7 Hackathon 2026 positioning

3. [`tp2-connected-vehicle-iot-edge-ai-lab.mdx`](../../src/content/projects/tp2-connected-vehicle-iot-edge-ai-lab.mdx)
   - order `2`
   - status `Live`
   - includes architecture PNG

4. [`sepa-request-to-pay-bachelors-thesis.mdx`](../../src/content/projects/sepa-request-to-pay-bachelors-thesis.mdx)
   - order `3`
   - status `Highest Honors`
   - includes SRTP diagram and thesis PDF link

### Additional work

5. [`tp1-modular-fpga-sensor-lora-platform.mdx`](../../src/content/projects/tp1-modular-fpga-sensor-lora-platform.mdx)
   - order `4`
   - completed 2025 embedded / FPGA / LoRa case study

6. [`42-madrid-cursus-engineering-journey.mdx`](../../src/content/projects/42-madrid-cursus-engineering-journey.mdx)
   - order `5`
   - positioned as engineering formation / long-horizon systems track

## Blog collection

Posts live in:

- [`src/content/posts/`](../../src/content/posts/)

Schema is defined in:

- [`src/content.config.ts`](../../src/content.config.ts)

Post frontmatter supports:

- `title`
- `description`
- `publishDate`
- `updatedDate`
- `draft`

## Current published posts

These are currently live (`draft: false`):

1. [`voice-is-becoming-the-runtime-for-ai-products.mdx`](../../src/content/posts/voice-is-becoming-the-runtime-for-ai-products.mdx)
   - date: `2026-05-10`
   - topic: realtime voice as a product/runtime layer

2. [`when-ads-enter-the-answer-layer.mdx`](../../src/content/posts/when-ads-enter-the-answer-layer.mdx)
   - date: `2026-05-10`
   - topic: ads in AI assistants / trust layer

3. [`agents-polymarket-and-the-rise-of-machine-native-market-intelligence.mdx`](../../src/content/posts/agents-polymarket-and-the-rise-of-machine-native-market-intelligence.mdx)
   - date: `2026-04-14`
   - topic: agents + prediction markets + Polymarket

4. [`why-agent-infrastructure-is-becoming-the-new-ai-stack.mdx`](../../src/content/posts/why-agent-infrastructure-is-becoming-the-new-ai-stack.mdx)
   - date: `2026-03-15`
   - topic: protocols, tooling, agent infrastructure

## Current draft posts

These are present but not published:

- [`designing-for-operators-not-just-models.mdx`](../../src/content/posts/designing-for-operators-not-just-models.mdx)
- [`reliability-lessons-from-telecom-for-ai-systems.mdx`](../../src/content/posts/reliability-lessons-from-telecom-for-ai-systems.mdx)

## Important current copy decisions

These were deliberate and should not be “fixed” accidentally in future sessions:

- The home page should feel more like a serious personal site and less like a startup landing page.
- The top section should stay concise and personal, not bloated with repeated mentions of AI.
- The user explicitly liked the current projects section more than the earlier, heavier hero/about sections.
- The home page currently prioritizes credibility and restraint over more sections.
- `Contact` and `Skills` were intentionally removed from the home page.
- The blog was intentionally added because it fits US founder/engineer positioning.

## Related nested repos / linked assets

Inside this repo there is also:

- [`PerfilGitHub/`](../../PerfilGitHub/)

That is a separate Git repository for the GitHub profile README and should not be treated as just another folder in the portfolio repo.
