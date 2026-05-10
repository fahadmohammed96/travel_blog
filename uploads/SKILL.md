---
name: oops-i-roamed-design
description: Use this skill to generate well-branded interfaces and assets for Oops I Roamed (a travel blog + small-batch travel agency), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Quick map of the system:
- `README.md` — full design guidelines (CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY).
- `colors_and_type.css` — the canonical token file. Import this and you have the design system.
- `assets/` — logo, postmark stamp, ticket-stub decoration.
- `preview/` — small reference cards (palettes, type, components) — also useful as visual lookup.
- `ui_kits/website/` — full clickable website kit. Reusable JSX components in `Components.jsx`, screens in `Screens*.jsx`. Lifts straight into new mocks.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always import `colors_and_type.css` for tokens. For component recipes, copy out of `ui_kits/website/Components.jsx`. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Brand voice in one line: *a travel diary that occasionally sells you a plane ticket — warm, slightly self-deprecating, never corporate, no emoji, sentence case for headlines and buttons.*

If the user invokes this skill without any other guidance, ask them what they want to build or design (a new diary entry layout? a marketing page for a new trip? a different surface like email or Instagram?), ask some questions, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
