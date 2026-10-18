# Lexserver logo

The mark is four tiles: a quarter circle, a circle, a square and a quarter circle. These are the
building blocks a developer and a designer make things from. The coral circle is the dot from the
old `Lexserver.` wordmark.

## Files

| File                                  | Use                                                                                |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| `lexserver-horizontal.svg`            | Default logo (symbol + name) on light backgrounds                                  |
| `lexserver-horizontal-dark.svg`       | Same, on dark backgrounds                                                          |
| `lexserver-stacked.svg` / `-dark.svg` | Square spaces: profile pages, slides, print                                        |
| `lexserver-symbol.svg` / `-dark.svg`  | Symbol alone: avatars, small spaces                                                |
| `*-black.svg` / `*-white.svg`         | One-colour: stamps, embroidery, single-ink print, photos                           |
| `lexserver-app-icon.svg`              | App icon and favicon (white tiles on indigo)                                       |
| `lexserver-maskable.svg`              | Android maskable icon (full bleed, mark inside the safe zone)                      |
| `og-image.html`                       | Source of `public/og-image.png`; open it in Chrome at 1200x630 and screenshot      |
| `build_logo.py`                       | Generates every SVG here. Needs `fonttools` and Geist TTFs (600) from Google Fonts |

On the site the logo is the `Logo` / `LogoMark` component in
`src/components/portfolio/Logo.tsx`. The indigo tiles use the `accent` token, so they switch to
`#8c9cff` in dark mode. The name is live Geist 600 text, not an image.

## Colour

| Name               | Hex       | Notes                                                 |
| ------------------ | --------- | ----------------------------------------------------- |
| Indigo             | `#3346b8` | Tiles on light backgrounds; app-icon background       |
| Indigo (dark mode) | `#8c9cff` | Tiles on dark backgrounds                             |
| Coral              | `#ff6b4a` | The circle only. Never use coral for text or other UI |
| Ink                | `#1b1d22` | Name on light backgrounds (`#e9eaee` on dark)         |

## Rules

- **Clear space:** keep at least one tile-gap × 2 (about 12% of the symbol's height) empty around
  the logo.
- **Minimum size:** symbol 16 px (use the app-icon version below 24 px), horizontal logo 96 px wide.
- **Background:** use the light version on `#f7f7f5` or white, and the dark version on `#131418`.
  On photos or busy colours, use the one-colour white or black version.
- **Don't** change the order or orientation of the tiles, recolour individual tiles, add
  shadows, gradients or outlines, stretch the logo, or set the name in another font.
- The name is set as "Lexserver" (capital L only). The old trailing period is retired: the coral
  circle replaces it.

Trademark clearance has not been checked. Search IPOPHL before printing at volume.
