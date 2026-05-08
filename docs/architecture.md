# Architecture

## Overview

Evolve NITB is a **Next.js 15 App Router** application. All content is statically defined in data files — there is no CMS. The site is deployed on Vercel at [https://evolve.nitb.in](https://evolve.nitb.in).

---

## Directory Structure

```
EVOLVE-NITB-Website/
├── public/                    # Static assets served at /
│   ├── Evolve_Logo.png
│   ├── EV logo White copy.svg
│   ├── evolve-car.json        # Lottie animation data
│   ├── gallery/               # ~30 gallery images
│   ├── Team/                  # Team member photos (Founders/, Final_Year/, Pre_Final_Year/)
│   ├── Events/                # Event cover images
│   ├── projects/              # Project images
│   ├── Achievement/           # Achievement images
│   ├── Brochure/              # Event brochures (webp/jpeg + PDF)
│   └── domains/               # Domain section images (About page)
│
├── src/app/
│   ├── layout.js              # Root layout — metadata, analytics, scroll-to-top
│   ├── page.js                # Home page (/)
│   ├── globals.css            # Global styles
│   ├── not-found.jsx          # 404 page
│   ├── aboutUs/page.jsx       # /aboutUs
│   ├── events/page.jsx        # /events
│   ├── projects/page.jsx      # /projects
│   ├── team/page.jsx          # /team
│   ├── components/            # All React components
│   ├── data/                  # Static content (team, projects, events)
│   ├── libs/                  # Utility functions
│   └── api/                   # Next.js API route handlers
│
├── next.config.mjs
├── next-sitemap.config.js
├── postcss.config.mjs
├── eslint.config.mjs
├── jsconfig.json
└── package.json
```

---

## Routing

Uses Next.js **file-based App Router**. Each folder under `src/app/` with a `page.jsx` becomes a route.

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.js` | Home, client component, session-based loading animation |
| `/aboutUs` | `src/app/aboutUs/page.jsx` | |
| `/events` | `src/app/events/page.jsx` | |
| `/projects` | `src/app/projects/page.jsx` | |
| `/team` | `src/app/team/page.jsx` | |
| `*` | `src/app/not-found.jsx` | Catches all unmatched routes |

---

## Data Flow

```
Static data files (src/app/data/)
    └── Imported directly into page components
            └── Passed as props to display components
                    └── Rendered as static HTML

User interactions (contact form, registration)
    └── Axios POST → Next.js API routes (src/app/api/)
            └── Nodemailer (email) / Mongoose (MongoDB) / googleapis
```

All page content (projects, events, team members) is **read from local JS files at build time** — no runtime database queries for display.

---

## Root Layout (`layout.js`)

The root layout wraps every page and handles:

- **Metadata** — title template, description, Open Graph tags, canonical URL
- **JSON-LD schema** — `WebSite` structured data for SEO
- **Google Site Verification** meta tags
- **Favicon** and canonical link
- **Global components** — `ScrollToTop`, Vercel `SpeedInsights`, Vercel `Analytics`

---

## Loading Animation

The home page (`page.js`) shows a full-screen `LoadingPage` component on the **first visit per browser session**.

- Duration: 6s on desktop, 5s on mobile
- Uses `sessionStorage` key `evolve-loading-shown` to skip on return visits
- Cleanup: `clearTimeout` on component unmount

---

## Client vs Server Components

Almost all components use `"use client"` due to Framer Motion animations, `useState`/`useEffect` hooks, and event handlers. The root `layout.js` is a server component (no `"use client"` directive).

---

## SEO

- Open Graph and Twitter card metadata in `layout.js`
- JSON-LD `WebSite` schema injected via `<script>` tag
- `next-sitemap` generates `sitemap.xml` and `robots.txt` on every production build (`postbuild` script)
- Canonical URL: `https://evolve.nitb.in/`
- Social profiles linked via `sameAs` in JSON-LD (LinkedIn, Instagram)
