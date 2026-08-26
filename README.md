# SURYAPUNJAH GRID ENERGY LLP — Website

A 6-page React website for a solar renewable-energy company, built in an industrial B2B
visual language: condensed uppercase display type, flat hairline cards and alternating
light/dark bands. Palette taken from the company logo — deep navy, solar gold/orange, leaf green.

---

## Tech stack

| Layer | Choice |
|---|---|
| Build tool | **Vite 6** — instant dev server, optimised production build |
| UI | **React 19** with the new JSX runtime |
| Routing | **React Router 7** (`BrowserRouter`, clean URLs) with animated page transitions |
| Styling | **Tailwind CSS v4** — CSS-first config, no `tailwind.config.js`; design tokens live in `src/index.css` under `@theme` |
| Animation | **Framer Motion 12** — hero slider, scroll reveals, counters, layout-animated nav pill, accordion, mobile sheet |
| Icons | **lucide-react** |
| Fonts | **Oswald** (condensed uppercase display) + **Hanken Grotesk** (body), via Google Fonts |

---

## Getting started

```bash
npm install      # once
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the built site
```

---

## Pages

| Route | Page | Contents |
|---|---|---|
| `/` | Home | Split hero with inline stats, keyword ticker, about, services + capabilities, process, projects (dark band), why-us, coverage, CTA |
| `/about` | About | Company story, animated journey timeline (2021 → 2026-27), vision/mission/values, why-us, counters |
| `/services` | Services | **Solar Ground Mounted Project EPC**, **Balance of System 0.1 MW to Infinite**, 6 supporting capabilities, process, FAQ accordion |
| `/projects` | Projects | Project cards, work-done register table, coverage area |
| `/directors` | Directors | Two founder profiles, leadership quote, team breakdown |
| `/contact` | Contact | Contact cards, validated enquiry form, Google Map, "what helps us quote faster" |
| `*` | 404 | Branded not-found page |

---

## Where the content lives

**Everything company-specific is in one file: [`src/data/site.js`](src/data/site.js).**
Address, phone numbers, email, services, projects, timeline, directors, FAQs — edit there and every page updates. No need to touch JSX for content changes.

```js
export const company = {
  name: 'SURYAPUNJAH GRID ENERGY LLP',
  address: { full: 'A-610 World Trade Tower, Behind Skoda Showroom, Village Makarba, Taluka Ahmedabad City - 380051' },
  phones: [ { display: '+91 91758 55941', tel: '+919175855941' }, ... ],
  email: 'suryapunjahgridenergy@gmail.com',
}
```

### Work done (as supplied)
| Project | Scope | Location | Year | Status |
|---|---|---|---|---|
| MW Project | Ground mounted execution | Mangalwedha, Dist. Solapur | 2026 | Completed |
| 4.8 MW BOS | Complete balance of system | Mahud, Dist. Solapur | 2026 | Completed |
| MW BOS | BOS + material supply | Dist. Jalgaon | 2026–27 | In progress |

---

## Design system

An industrial B2B layout: condensed uppercase display type, flat hairline cards,
and full-width bands that alternate **white → mist grey → navy**. No heavy shadows,
no glassmorphism — contrast and typography carry the page.

| Token | Hex | Used for |
|---|---|---|
| `navy-950` | `#071021` | Dark bands, footer, page banners |
| `navy-900` | `#0B1A2E` | Buttons, icon tiles |
| `gold-600` | `#E8801B` | Accent word in headings, eyebrows, primary button |
| `gold-500` | `#F5A623` | Accent on dark backgrounds |
| `leaf-500` | `#5CB338` | "In progress" status tags |
| `ink` | `#0C1524` | Headings |
| `body` | `#5A6579` | Body copy |
| `line` | `#E3E8EF` | Hairline card borders and dividers |
| `mist` | `#F1F4F8` | Alternate section band |

Reusable classes in `src/index.css`: `.shell` (container), `.eyebrow` (tiny uppercase label),
`.card` / `.card-dark` (flat hairline card), `.icon-tile` (small dark icon square),
`.ghost-num` (grey step numeral), `.accent` (gold word inside a heading).


---

## Motion & interaction

- **Hero** — light split layout: headline and inline stat row on the left, an auto-crossfading image panel with a caption badge on the right
- **Scroll reveals** — `whileInView` fade/slide with staggered children across every section
- **Animated counters** — stats spring up from zero when scrolled into view
- **Nav** — uppercase letterspaced links with hairline dividers; the active underline slides between them using a shared `layoutId`
- **Keyword ticker** — a thin dark strip of capability keywords scrolling under the hero
- **Hover** — subtle card lift with a border shift, image zoom, icon tiles inverting to gold
- **Page transitions** — fade/slide between routes via `AnimatePresence`
- **Mobile** — spring-animated slide-in sheet menu with staggered links
- Full `prefers-reduced-motion` support

---

## Deploying

```bash
npm run build      # produces dist/
```

Upload the **contents of `dist/`** to your host.

Because the site uses clean URLs (`/about` rather than `/#/about`), the server must serve `index.html` for unknown paths. Both config files are already included and are copied into `dist/` automatically:

- **Apache / cPanel / Hostinger** → `.htaccess` (already in `dist/`)
- **Netlify** → `_redirects` (already in `dist/`)
- **Vercel** → works out of the box
- **Deploying into a subfolder** (e.g. `example.com/site/`)? Set `base: '/site/'` in `vite.config.js` and add the same path to `RewriteBase` in `.htaccess`.

---

## Things to replace before going live

1. **Founder photos — not set.** The names in `src/data/site.js` → `directors` are correct (**Harshil Lakhiyar** and **Anandiben Lakhiyar**, both Founder), but the founder cards currently show a blank panel where the portrait goes. To add the real photographs, drop them into `public/img/` and add an `image: '/img/<file>.jpg'` line back to each entry in `directors` — the card renders the photo automatically when that field is present.
2. **LinkedIn links** — the LinkedIn icon on each founder card points to `#` (in `src/pages/Directors.jsx`). Add the real profile URLs.
3. **Contact form** — the site is fully static, so the form validates the input and then opens the visitor's mail app addressed to `suryapunjahgridenergy@gmail.com`. For direct-to-inbox delivery, point `submit()` in `src/pages/Contact.jsx` at a service like Formspree, EmailJS or your own PHP endpoint.
4. **Photography** — the images in `public/img/` are licence-free stock (Unsplash) standing in for real site photos. Replacing them with photographs from Mangalwedha, Mahud and Jalgaon will make the site considerably stronger. Keep the same filenames and no code changes are needed.
5. **Logo** — `public/img/logo.png` is the real company logo, background removed and cropped tight; `logo-mark.png` and `favicon.png` are the S-mark cut from it. If you receive a vector (AI/EPS/SVG) version from your designer, replace `logo.png` with it for sharper rendering at large sizes.
