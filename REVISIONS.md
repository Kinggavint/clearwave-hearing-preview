# REVISIONS: placeholders to replace before launch

Proof build for **Clearwave Hearing & Audiology**, Wilmington, NC.
Everything in this list is a placeholder or an assumption. Nothing below was verified with the client.
Replace each item, then re-run the compliance grep in the README before publishing.

---

## 1. NAP data (name, address, phone)

| Item | Placeholder currently in the build | Where it appears | Action needed |
| --- | --- | --- | --- |
| Phone | `(910) 555-0100` (tel link `+19105550100`) | Top bar, header, footer, every CTA band, book page, contact page, all JSON-LD | Replace with the real tracking or main line. Keep one single format sitewide. |
| Street address | `1234 Military Cutoff Road, Suite 200` | Top bar, footer, about, book, contact, all JSON-LD | Confirm street, suite number, and building name. |
| City, state, ZIP | `Wilmington, NC 28405` | Same as above | Confirm ZIP matches the confirmed street. |
| Geo coordinates | `latitude 34.2495, longitude -77.8266` | JSON-LD `geo` on every page | Replace with the coordinates of the confirmed address. |
| Email | `info@clearwavehearing.com` | Footer, contact page, JSON-LD | Confirm the monitored inbox. |
| Google Maps embed | Query string built from the placeholder address on `contact.html` | Contact page map iframe and the Google Maps link | Swap to the verified Google Business Profile place ID embed once the profile is claimed. |

## 2. Provider identity

| Item | Placeholder | Action needed |
| --- | --- | --- |
| Audiologist name | `Dr. [Audiologist Name], Au.D.` | Real name, credentials, and preferred honorific. Appears on `index.html`, `about.html`, and the `employee` and blog author fields in JSON-LD. |
| Provider biography | Marked in `about.html` as **Placeholder biography** | Replace the two clinical paragraphs with the provider's own degree, institution, NC license, years in practice, memberships (for example AAA or ASHA), and any specialty training. |
| Provider portrait | Gradient placeholder blocks on `index.html` and `about.html`, labeled in the caption | Supply a real headshot. Add width, height, and descriptive alt text. |
| Additional staff | Not present | If there are other audiologists, assistants, or front office staff to feature, supply names and roles. |

## 3. Hours

Currently published as Monday to Thursday 8:00 to 5:00 and Friday 8:00 to 3:00, closed Saturday and Sunday.
This is a reasonable default, not client-confirmed. It appears in the top bar, footer, book page, contact page hours table, and the `openingHoursSpecification` schema on every page. Confirm lunch closures, early-close days, and holiday policy.

## 4. Reviews and trust signals

- All three patient reviews on `index.html` and `about.html` are illustrative placeholders written for layout, clearly labeled as such in the section intro. **Do not publish them as real reviews.** Replace with verified Google reviews, with reviewer first name and city, or remove the section.
- The five-star graphics are decorative. Do not add `AggregateRating` schema until real, verifiable review counts exist.
- No years-in-business claim was invented. If the client wants "serving Wilmington since YYYY," supply the year and it can be added to the About page and the schema `foundingDate`.

## 5. Insurance, pricing, and financing

- `insurance.html` describes coverage in general terms only, with a placeholder note in the "Ways to pay" panel.
- Needed from client: the exact list of accepted carriers, whether the practice is in network or out of network for each, Medicare Advantage networks participated in, whether CareCredit is actually enrolled, and the real terms of any in-house payment plan.
- The hearing aid price range on the Hearing Aids FAQ ("low thousands to mid five thousands") is a regional generality. Replace with the practice's actual price bands or remove the answer.

## 6. Hearing aid manufacturers

`hearing-aids.html` lists Phonak, Oticon, ReSound, and Starkey as commonly fitted. Confirm which manufacturers the practice actually has accounts with, and remove any that are not carried. Brand descriptions are neutral and general, with a trademark note already on the page.

## 7. Blog and patient education

All four articles on `blog.html` are titled, categorized, and summarized but not written. Each card carries a visible "Placeholder article" line and links to the contact page instead of a post URL. Before launch either:

1. Write the four posts as individual pages, add `BlogPosting` schema with real `datePublished` and author, and point the cards at them, or
2. Remove the article grid and keep only the "Quick reference" section.

Article thumbnails are gradient placeholders and need real images with alt text.

## 8. Imagery

No photographs are used anywhere in this build. Gradient blocks with visible placeholder captions stand in at:

- `index.html`: practice/office visual, provider portrait
- `about.html`: provider portrait
- `hearing-aids.html`: real ear measurement visual
- `blog.html`: four article thumbnails

Supply real office, provider, and equipment photography. Every replacement needs descriptive alt text, explicit width and height, and a `loading="lazy"` attribute below the fold. Remove the placeholder captions when photos land.

## 9. Forms

`book.html` and `contact.html` both use `action="#"` with `data-proof-form`, so `assets/js/site.js` intercepts submission and shows a notice that nothing was sent. Before launch:

- Point both forms at the real handler endpoint.
- Remove the `data-proof-form` attribute and the interception block in `site.js`.
- Confirm a HIPAA-appropriate intake path. These forms deliberately ask patients not to include detailed medical information; keep that language or replace the forms with a compliant portal.
- Add spam protection and a server-side validation layer.
- Add a privacy policy page and link it from the consent checkboxes and the footer.

## 10. Canonical URLs, Open Graph, and analytics

- Canonical, `og:url`, and all schema `@id` values currently use `https://kinggavint.github.io/clearwave-hearing-proof`. Update every page to the production domain before launch.
- No `og:image` is set. Add a 1200x630 social share image and reference it on all pages.
- No analytics, tag manager, call tracking, or consent banner is installed. Add per client requirements.
- Add `robots.txt` and `sitemap.xml` once the production domain is set.
- The favicon is an inline SVG data URI. Add a proper `.ico` and Apple touch icon if the client wants them.

## 11. Legal and compliance pages not yet built

Not in the 8 page scope, likely needed at launch: privacy policy, website accessibility statement, notice of privacy practices (HIPAA), and terms of use. Footer links will need to be added.

## 12. Content flags to confirm with the client

- "Doctor of Audiology on staff" and "locally owned and independent" are stated throughout. Confirm both are accurate.
- "We fit the patient, not the quota" is used as a headline on the home page.
- Areas served list (Wilmington, Wrightsville Beach, Carolina Beach, Leland, Hampstead, Ogden, Monkey Junction, Porters Neck, Landfall) came from the brief. Confirm the practice actually draws from all nine, since these signals feed local relevance.
- "Same week appointments are often available" appears on the book page and footer. Confirm scheduling reality before publishing.
- The site says devices purchased elsewhere can often be serviced. Confirm the practice does this.

---

## Compliance status of this build

| Rule | Status |
| --- | --- |
| No em-dashes | Pass, 0 found |
| No en-dashes | Pass, 0 found |
| No exclamation points | Pass, 0 in body copy |
| No no-cost-offer wording | Pass, 0 instances found |
| No emojis | Pass, no non-ASCII characters in source |
| No third-party build attribution or tool branding of any kind | Pass, 0 instances found |
| Phone rendered exactly as (910) 555-0100 | Pass, single format sitewide |
| "and" used instead of "&" in body copy | Pass, "&" appears only in the business name and in HTML entities |
