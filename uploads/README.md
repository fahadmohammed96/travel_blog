# Oops I Roamed — Design System

> *Travel a little. Get lost. Tell us about it.*

**Oops I Roamed** is a travel blog *and* a small-batch travel agency. Three things live under one roof:

1. **The Diary** — long-form, photo-rich travelogues from past trips.
2. **The Roamed Trips** — a small catalog of curated, bookable group trips (each one based on a story already in the Diary).
3. **Roam Your Way** — a request form for fully bespoke itineraries, built one-on-one.

The brand voice is the founder's voice: warm, slightly self-deprecating, a little nostalgic, never corporate. A travel diary that occasionally sells you a plane ticket.

---

## Sources

This design system was built **from scratch**. The original repo provided (`fahadmohammed96/travel-blog`) was an empty placeholder — so colors, type, components, and copy were authored fresh based on the brief: *editorial-warm, slightly nostalgic, contemporary, with travel-diary details (stamps, maps, tickets) used sparingly*.

No Figma, no existing codebase, no proprietary assets. Imagery is sourced from Unsplash via direct URLs (replace before production).

---

## Index

Files in the root:

| File | Purpose |
|---|---|
| `README.md` | This file — brand context, fundamentals, iconography |
| `SKILL.md` | Agent-skill manifest — read this first if invoking from Claude Code |
| `colors_and_type.css` | All design tokens (colors, type, spacing, radii, shadows, motion) |

Folders:

| Folder | What's inside |
|---|---|
| `assets/` | Logo (SVG), travel-diary decorations (stamp, ticket), placeholder hero image |
| `preview/` | Small HTML cards that populate the Design System tab — palettes, type specimens, components |
| `ui_kits/website/` | The full UI kit: 8 click-thru screens + reusable JSX components |
| `fonts/` | *(empty — Google Fonts CDN used; see VISUAL FOUNDATIONS)* |

---

## CONTENT FUNDAMENTALS

### Voice
Personal, first-person plural ("we"), occasionally first-person singular ("I") when the founder is speaking directly. **Never** "the customer" or "users" — it's always "you" or "fellow roamers." Reads like postcards: short sentences, present tense, sensory detail.

### Tone
- **Warm, never gushing.** "We loved Lisbon" — not "Lisbon will steal your heart 💔"
- **Specific, never generic.** Name the bakery. Name the bus number. Name the dog.
- **Self-aware.** The brand is literally called *Oops I Roamed* — lean into the slight clumsiness. Trip didn't go to plan? Say so.
- **Quietly confident on the booking side.** When selling a trip, the writing tightens up: clearer, less rambly, but still personal. Never "limited time offer" energy.

### Casing
- Headlines: **Sentence case** ("Three days lost in Porto"), never Title Case.
- Buttons: **Sentence case** ("Book this trip", "Plan my own", "Read the diary").
- Eyebrows / overlines: **UPPERCASE** with wide tracking, used sparingly for category labels ("DIARY", "ROAMED TRIP", "ITINERARY").
- Section labels and metadata: lowercase or sentence case.

### "I" vs "you"
- "We" = the Oops I Roamed crew (founder + collaborators) writing collectively.
- "I" = the founder writing a personal diary entry. Bylined.
- "You" = the reader / future traveler. Always direct address, never "users" / "customers" / "guests."

### Emoji
**Sparingly.** Never decorative. Acceptable in:
- Inline trip metadata where the icon set falls short (✈ for flights in dense itinerary tables — even then, prefer Lucide).
- Newsletter subject lines, occasionally, for warmth.

**Never** in headings, buttons, body copy, marketing taglines, or as bullet substitutes. 🏖️🌴✈️💼 = banned.

### Vibe & specific examples

| Don't | Do |
|---|---|
| "Discover the wonders of Portugal!" | "Five days in Portugal. Mostly Lisbon. A bit of Sintra." |
| "Book your dream getaway today!" | "Spots open for September. We'd love to have you." |
| "Our customers rave about us." | "What past roamers said." |
| "Unforgettable experiences await." | "We can't promise unforgettable. We can promise good bread." |
| "Limited time offer — 20% off!" | "Booked early? We knock €120 off the trip." |

Trip titles read like chapter headings: *"Three days lost in Porto"*, *"The slow road through Puglia"*, *"Hokkaido in February (yes, really)"*. Not *"Porto City Break"* or *"Italy 7-Day Tour"*.

---

## VISUAL FOUNDATIONS

### Colors
A **four-color system** — cream, forest, clay, ink — chosen to feel earthy and out-of-doors without going full "rustic resort." See `colors_and_type.css` for the canonical tokens.

- **Cream (#F2EDE4)** is the dominant background. ~70% of any view. Paper, not white.
- **Forest (#2D5A3D)** is primary — buttons, links, the logo. Confident, slightly muted, never neon.
- **Clay (#C97B3A)** is accent — eyebrows, badges, highlights, the occasional emphasized link. Used in maybe 5% of any view.
- **Ink (#0F1A14)** is text and contrast. Never pure black; always tinted toward forest.

Imagery skews **warm**: sunset light, terracotta roofs, golden-hour skin tones. Avoid cold-blue dominant photos. A film-emulation grain overlay (5–8% opacity) is welcome on hero images but not required.

### Typography
Three families:

- **Fraunces** (serif display, variable) — headlines, brand voice, italic pull-quotes. The "opsz" axis is used at 96–144 for hero headlines, 48–72 for section heads, 14–18 for italic captions. The slight quirky character of Fraunces is *the* type personality.
- **Inter Tight** (sans body) — UI, body copy, buttons, labels. Crisp, neutral, doesn't fight Fraunces.
- **JetBrains Mono** (mono accents) — only for "metadata" feels: timestamps, coordinates, flight codes, ticket numbers. Lends the diary its travel-document texture.

**Note on font files:** Google Fonts via CDN are used directly. There are no proprietary font files yet. **If you want to ship offline or self-host, please drop the font files into `fonts/`** and update `colors_and_type.css` to use `@font-face` instead of `@import`.

### Spacing
**4px grid.** Spacing tokens `--s-1` … `--s-10`. Sections breathe — large vertical rhythm (`--s-9` = 96px between editorial sections, `--s-10` = 128px around hero blocks).

### Backgrounds
- **Default:** flat cream (`--bg`). No gradient meshes. No noise textures (the imagery does the texturing).
- **Hero:** full-bleed photograph, optionally with a subtle bottom gradient (cream → transparent) to land headline text legibly. Never a colored overlay.
- **Sectional contrast:** `--bg-sunken` (slightly darker cream) to break sections. Forest dark sections used 1–2× per page maximum, for "moments" (pull-quotes, big CTAs).

### Borders
**Hairline.** `1px solid var(--border)` (`rgba(15, 26, 20, 0.12)`) is the default. Cards prefer shadow over border, but lists, tables, and form fields use borders. No double borders. No left-accent-color borders.

### Shadows
Four levels (`--shadow-1` through `--shadow-4`). All warm-tinted (alpha on `#0F1A14`, the ink color, not pure black). Cards default to `--shadow-2`. Modals/popovers use `--shadow-3`. The full hero image card uses `--shadow-4`.

### Corner radii
Mixed, intentional:
- **Cards & containers:** `--r-lg` (12px) — soft but editorial.
- **Buttons & chips:** `--r-pill` (999px) — friendly, ticket-stub-y.
- **Images & photographs:** `--r-none` or `--r-sm` (max 4px) — photos look like photos, not stickers. **This is a deliberate contrast** with the soft buttons.
- **Inputs:** `--r-md` (8px).
- **Modals:** `--r-xl` (20px).

### Animation
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out`) for almost everything. A gentle settle, never bouncy.
- **Duration:** 140ms (fast), 220ms (base), 420ms (slow). Never longer than 500ms.
- **Hover:** 1–2% darken on background; arrow-icon translate-x of 2px. No scale.
- **Press:** brief filter brightness 0.95 + 1px translate-y. No shrink.
- **Page transitions:** simple cross-fade (220ms).
- **No:** bounces, springs, parallax, scroll-jacking, hero-text typewriter effects.

### Hover & press
- **Buttons (primary):** bg `--primary` → `--primary-hover` (forest-800). Text stays cream.
- **Buttons (secondary, ghost):** bg transparent → `rgba(15, 26, 20, 0.04)` (very subtle ink wash).
- **Links in body:** underline on hover, color shifts forest-700 → clay-700.
- **Cards:** shadow lifts from `--shadow-2` → `--shadow-3`, image inside scales 1.02 over 420ms (ease-out).

### Transparency & blur
- **Sticky nav:** `rgba(242, 237, 228, 0.85)` + `backdrop-filter: blur(12px)`. Only when scrolled past hero.
- **Image-overlay text protection:** linear gradient bottom (cream → transparent), not a flat scrim. Never a translucent black box behind text.
- **Modals:** `rgba(15, 26, 20, 0.5)` backdrop, no blur.

### Layout rules
- **Container width:** 1200px max (editorial), 1080px reading width, 680px article body.
- **Sticky header** on scroll past 200px; flat at top.
- **Footer:** dark forest, full-bleed, generous (`--s-10` padding-block).
- **Grids:** 12-col on desktop, gutter `--s-5` (24px). Editorial spreads sometimes break out: pull-quotes span columns 2–11; full-bleed images escape the container.

### Travel-diary motifs
Used **sparingly** — these are seasoning, not the meal:
- A subtle stamp/postmark graphic next to publish dates.
- A dashed "stitch" or "ticket-perforation" border on the booking confirmation card.
- Hand-drawn route lines on destination maps.
- Italic Fraunces captions under photos, slight indent, "as if penciled in."

Never: emoji, palm-tree clipart, vintage typewriter font, "passport stamp" badges layered on top of UI.

---

## ICONOGRAPHY

**Lucide** is the chosen icon system, loaded from CDN (`https://unpkg.com/lucide-static@latest`). Reasons:
- Line-based, 1.75px stroke — sits comfortably alongside Fraunces serif headlines without competing.
- Comprehensive travel coverage out of the box (`map`, `plane`, `compass`, `bed`, `train`, `coffee`, `camera`, `bookmark`, `arrow-right`, `chevron-down`, etc.).
- Free, open-source, MIT.

### Substitution flag
This is a **substitution** — there's no proprietary icon set. If a custom set ever exists, drop the SVGs in `assets/icons/` and document the mapping here.

### Usage rules
- **Stroke:** 1.75px (Lucide default). Never bump to bold (2.5px) — looks heavy next to the type.
- **Size:** matched to type size — `1em` next to body, `1.25em` next to `--fs-md` headings, 24px in nav.
- **Color:** `currentColor` always. Inherits from text.
- **Spacing:** `--s-2` (8px) gap between icon and label.

### Custom in-house glyphs
The brand has **two** custom decorative SVGs that aren't icons in the functional sense:
- `assets/stamp.svg` — circular postmark/stamp used near publish dates and on the booking-confirmed state.
- `assets/ticket-stub.svg` — perforated ticket edge used as a divider in trip detail cards.

These are decoration, not icons — never used in buttons or navigation.

### Emoji
**No.** See CONTENT FUNDAMENTALS § Emoji.

### Unicode characters
Acceptable as typographic detail only:
- `→` (arrow) in some inline links instead of an icon, when the link sits in body copy.
- `·` (middle dot) as a meta-separator: `5 min read · September 2025 · Porto`.
- `—` (em-dash) — used liberally; it's part of the voice.

---

## How to use this system

If you're an agent: read `SKILL.md` first.

If you're a human dropping into this project: open `preview/` and `ui_kits/website/index.html` to see everything in action. All tokens are in `colors_and_type.css` — import that one file and you have the design system.
