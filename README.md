# Clearwave Hearing & Audiology, proof build

Static marketing site for Clearwave Hearing & Audiology, an independent audiology practice in Wilmington, North Carolina. Built as a review proof for the client. No build step, no dependencies, no framework: plain HTML, one stylesheet, one small script.

**Tagline:** Hear what matters most

## Contents

```
.
├── index.html            Home
├── about.html            About the practice and the audiologist
├── services.html         Services in detail plus first visit walkthrough
├── hearing-aids.html     Styles, technology tiers, manufacturers, verification
├── book.html             Appointment request form and what to expect
├── insurance.html        Insurance, Medicare, HSA and FSA, financing
├── blog.html             Patient education index with four seed topics
├── contact.html          NAP, contact form, hours table, map, directions
├── assets/
│   ├── css/site.css      Full design system and all page styles
│   ├── js/site.js        Mobile nav, footer year, form interception
│   └── img/              Reserved for client photography
├── REVISIONS.md          Every placeholder that must be replaced before launch
└── README.md             This file
```

## Local preview

```bash
python3 -m http.server 8099
# then open http://127.0.0.1:8099/index.html
```

## Design system

Defined as CSS custom properties at the top of `assets/css/site.css`.

- **Palette:** deep navy `#0a2540` through mid blue `#1d6fae` for structure and trust, soft teal `#006064` as the single accent, warm gray `#f7f5f2` for section separation, white for surfaces. Body text `#17232e` on white clears WCAG AA comfortably; secondary text `#41545f` clears AA at body size.
- **Type:** Source Serif 4 for headings (warmth and clinical credibility), Inter for body and UI. Base size is 18px with a 1.75 line height, chosen for an audience largely over 55.
- **Spacing:** a single step scale from 0.25rem to 6rem. Sections use the two largest steps.
- **Motion:** transitions only, capped at 180ms, plus a `prefers-reduced-motion` override that disables them.
- **Breakpoints:** 640px, 900px, 1100px, mobile first. Verified at 360px, 390px, 768px, 1400px.

## Accessibility

- Semantic landmarks on every page, single `h1`, ordered heading levels
- Skip link to `#main`
- Visible focus ring at 3px with offset, never removed
- All decorative SVG marked `aria-hidden`, gradient visual blocks given `role="img"` and a label
- Form fields all have real `<label>` elements, required fields marked in the label text, hints tied to the label
- FAQ accordions use native `<details>` and `<summary>`, so they work without JavaScript
- Tables use `<caption>` and `scope` attributes
- Site is fully readable and navigable with JavaScript disabled

## SEO and AEO

- Unique title, meta description, and canonical URL per page
- Open Graph and Twitter card tags per page
- JSON-LD on every page: a combined `MedicalBusiness` / `LocalBusiness` / `AudiologyBusiness` node with full NAP, geo, hours, payment methods, `areaServed`, employee, and `makesOffer`, referenced by `@id` from the page-level nodes
- Page-specific schema: `WebSite`, `AboutPage`, `ContactPage`, `ItemList` of `MedicalProcedure`, `Blog` with `BlogPosting` children, `ReserveAction` on the booking page, and `BreadcrumbList` on all inner pages
- `FAQPage` schema on all eight pages, with answers written answer-engine style: direct, self-contained, and under about 60 words
- `SpeakableSpecification` on the hero and FAQ answers of key pages
- Non-branded local targeting: hearing test near me, hearing aids Wilmington, audiologist Cape Fear, plus the nine served communities in copy, footer, and schema

## Compliance rules enforced in this build

No em-dashes or en-dashes. No exclamation points. No no-cost-offer wording. No emojis. No third-party build attribution in markup, comments, or footer. Phone rendered in one exact format. "and" used in place of "&" outside the business name.

Verify with:

```bash
grep -rn $'\u2014\|\u2013' --include='*.html' --include='*.css' --include='*.js' .   # expect 0
grep -rnP '\x21' --include='*.html' . | grep -v 'DOCTYPE'                             # expect 0
grep -rni '\bf''ree' --include='*.html' --include='*.css' --include='*.js' .          # expect 0
grep -rnP '[^\x00-\x7F]' --include='*.html' --include='*.css' --include='*.js' .     # expect 0
grep -rho '(910) [0-9-]*' --include='*.html' . | sort -u                             # expect one value
```

## Before launch

Read `REVISIONS.md`. Every placeholder is listed there: NAP, provider name and bio, hours, reviews, insurance specifics, imagery, form endpoints, and the canonical domain.

## Medical content note

All clinical copy is general patient education. It does not diagnose, and it states in the footer that it does not replace a diagnostic evaluation or advice from a licensed provider. Claims are kept to widely accepted audiology practice. No outcome guarantees, no invented statistics, no invented credentials.
