# Style Split Patch — Amber & Bean × Naga Steam

Base repo verified against latest GitHub commit at packaging time:

- `bb73407db7dd2f3bf8fbca8f499a99f22d1c456c`
- `refactor: remove topbar switchers and running ticker marquee from cafe and dimsum pages`

## Goal

Make both websites feel like separate creative directions rather than one shared template with different colors.

## Amber & Bean

Direction: quiet editorial coffee roastery.

- Cream / espresso / burnt amber / olive palette.
- Georgia-led editorial typography and generous negative space.
- Floating glassy header and soft pill CTAs.
- Arched/organic hero image treatment.
- Product page changed from generic card grid to grouped editorial menu rows.
- Contact page uses a reservation-journal/card composition.

## Naga Steam

Direction: modern Hong Kong steam house / restaurant poster.

- Lacquer red / near-black / ivory / jade palette.
- Heavy uppercase sans typography.
- Blocky full-width header with numbered navigation.
- Full-bleed split poster hero.
- Hard borders, rectangular photography and modular composition.
- Product page changed to numbered menu tiles.
- Contact page uses a red information panel + grid booking form.

## New files

- `src/layouts/CafeLayout.astro`
- `src/layouts/DimsumLayout.astro`
- `src/styles/cafe.css`
- `src/styles/dimsum.css`
- `tests/brand-divergence.test.mjs`

## Replaced files

- `src/pages/cafe/index.astro`
- `src/pages/cafe/produk.astro`
- `src/pages/cafe/kontak.astro`
- `src/pages/dimsum/index.astro`
- `src/pages/dimsum/produk.astro`
- `src/pages/dimsum/kontak.astro`

## Compatibility

The existing `BrandLayout.astro`, `ProductGrid.astro`, and old shared CSS can stay in the repository; the six brand pages no longer import them. No new npm dependency is required.

## Verification

Run:

```bash
node --test tests/brand-divergence.test.mjs
npm run build
```

The first test validates brand layout separation, palette separation, distinct product composition, and preservation of the latest no-topbar/no-marquee refactor.
