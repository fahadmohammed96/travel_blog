# Oops I Roamed — Website UI kit

A click-thru of all 8 screens, fully composed from reusable JSX components.

## Run
Open `index.html`. The black pill at the top lets you jump between screens.

## Files
- `index.html` — the host. Loads React + Babel + Lucide, mounts `<App>`.
- `styles.css` — kit-specific layout (header, footer, hero, prose, cards). Imports `colors_and_type.css` from the system.
- `Components.jsx` — `Header`, `Footer`, `Logo`, `Button`, `Badge`, `Eyebrow`, `Meta`, `Chip`, `Field`, `Stamp`, `TripCard`, `ArticleCard`.
- `Data.jsx` — sample content (TRIPS, ARTICLES, DESTINATIONS, ITINERARY).
- `Screens.jsx` — Home, Article, Destinations index.
- `Screens2.jsx` — Destination, Itinerary, Booking (3-step), Search, Profile, Bespoke.

## Screens
1. **Home** — hero, recent diary, trip carousel, dark CTA, newsletter.
2. **Destinations** — filterable 4-col grid of places.
3. **Destination (Lisbon)** — full-bleed photo + sticky quick-facts + trips here.
4. **Article** — long-form diary entry with prose styling, blockquote, related.
5. **Trips** — 2-col grid of all roamed trips.
6. **Itinerary** — sidebar of days + per-day timeline with Lucide icons.
7. **Booking** — 3-step (details → payment → confirmation with stamp).
8. **Search** — query + chip filters + mixed results.
9. **Profile** — fellow-roamer dashboard with upcoming trips.
10. **Bespoke ("Roam your way")** — 4-step explainer + request form.

## Conventions
- All copy follows CONTENT FUNDAMENTALS (sentence case, "we"/"you", no emoji).
- All images are Unsplash URLs. Replace with real photography before production.
- All icons are Lucide via CDN. Drop a custom set into `assets/icons/` to override.
