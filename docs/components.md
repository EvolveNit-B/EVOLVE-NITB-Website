# Components

All components live in `src/app/components/`. This page documents each one — its purpose, where it's used, and any notable behavior.

---

## Layout & Navigation

### `Navbar.jsx`

**Used on:** Every page (imported directly in each page file)

Fixed top navigation bar with scroll-aware styling. After scrolling 20px, the background shifts from `bg-black/90` to `bg-black/95` with a stronger backdrop blur and a bottom border.

Nav links: Home · About · Projects · Events · Team

A "Collab and Build with us" CTA button routes to `/#contact`.

**Mobile behavior:** A hamburger button opens a slide-in drawer from the right (Framer Motion spring animation). The drawer overlays the page with a dark backdrop. Each nav item animates in with a staggered delay.

---

### `Footer.jsx`

**Used on:** Every page

Three-column layout:
1. Brand column — logo, club description, Instagram and LinkedIn icon links
2. Quick links — navigation links
3. Domains — list of technical domains

Below the columns: an embedded Google Maps `<iframe>` showing MANIT Bhopal's location.

A "Meet the Developers" button opens a modal that renders two `TeamCard` components for the site's developers (Aadi Jain and Yatharth Upmanyu).

---

### `Scroll.jsx`

**Used on:** Every page (in root `layout.js`)

Floating "scroll to top" button. Appears after the user scrolls 300px. Clicking it calls `window.scrollTo({ top: 0, behavior: 'smooth' })`. Animated with Framer Motion (fade + slide up).

---

## Home Page Sections

### `HeroSection.jsx`

Full-screen hero. Contains:
- Club tagline and subtitle text
- Lottie animation loaded from `/evolve-car.json`
- Three stat cards: **15+ Projects**, **10+ Hackathon Wins**, **100+ Members**
- Decorative SVG gear and chip icons in the background

---

### `Aboutus.jsx`

Two-column section:
- Left: club description text
- Right: `about_us_pic.jpg`

Below: a 4-card domain grid with images from `/public/domains/`:
- AI / ML
- Robotics
- IoT & Embedded Systems
- Software & Web Development

---

### `Achievements.jsx`

Masonry-style grid of 11 achievement cards. Data is hardcoded inline in this component (not sourced from a data file). Each card shows:
- Image (from `/public/Achievement/`)
- Title and organization
- Achievement badge
- Short description
- Year

---

### `Gallery_bento.jsx`

Photo gallery using a CSS bento grid. Images are from `/public/gallery/` with hardcoded paths. Grid cells have varied `col-span` and `row-span` values for visual variety. Cards scale up slightly on hover.

---

### `Contact.jsx`

Contact/collaboration form. Fields: name, email, subject, message.

On submit: POSTs to `/api/contact-us` via Axios. Shows a success or error toast via React Hot Toast. The submit button shows a loading spinner during the request.

Background: animated radial gradient.

---

### `UpcomingEvent.jsx` *(commented out)*

Intended to display upcoming events using `Showcase_card`. Currently hardcoded with two entries (Water Robo Race, BATTSIM). Not rendered on the home page — the import and JSX are commented out in `page.js`.

---

## Page-Specific Components

### `EventCard.jsx`

**Used on:** `/events`

Displays a single event. Shows:
- Cover image
- Event name
- Tag pills (green, rounded)
- Description
- "View Brochure" button — navigates to `brochureLink` (image or PDF path)

---

### `ProjectModal.jsx`

**Used on:** `/projects`

Full-screen animated overlay triggered by clicking a project card. Uses Framer Motion `AnimatePresence` for enter/exit transitions. Shows:
- Project image
- Lucide icon + title
- Long description
- Tag pills
- Contributor names list

Closes on backdrop click or the × button.

---

### `TeamMemberCard.tsx` *(TypeScript)*

**Used on:** `/team`

Card with a 3:4 aspect-ratio photo. A green glow circle sits behind the image. Name and position are overlaid at the bottom. LinkedIn and Instagram icon buttons appear on hover.

---

### `TeamCard.jsx`

**Used in:** `Footer.jsx` developer modal only

Alternative team card design. Shows photo, name, role, and three social buttons: LinkedIn, Instagram, GitHub.

---

### `LabSection.jsx`

**Used on:** `/aboutUs`

Grid of 6 lab photos. Below the photos: Vision card (Lightbulb icon) and Mission card (Rocket icon) with descriptive text.

---

### `CollaborateSection.jsx`

**Used on:** `/aboutUs`

Six cards highlighting collaboration strengths:
- Industry Network
- Innovation Culture
- (and four others)

Ends with a "Partner with Us" CTA button that links to `/#contact`.

---

### `Showcase_card.jsx`

**Used by:** `UpcomingEvent.jsx` (currently inactive)

Rich event card with: image, name, description, date, venue, contact info, and a registration link button.

---

### `Registration.jsx` *(commented out)*

Auto-displays after a 20-second delay on the home page. A modal form for event test-ride registration. Fields: name, email, mobile number.

On submit: POSTs to `/api/register`, then POSTs to `/api/register_mail` with the returned token. Can be minimized to a floating pill button in the corner.

---

## Utility Components

### `Loading/LoadingPage.jsx`

Full-screen loading animation shown on the first visit per browser session.

**Desktop:** 3-column grid layout with a `CountUp` counter animating from 0 → 100 Kmph, and a Lottie car animation that slides across the screen.

**Mobile:** Simplified — logo drops in from above.

---

### `React-bits/CountUp.jsx`

Animated number counter using Framer Motion spring physics.

| Prop | Type | Description |
|---|---|---|
| `from` | number | Starting value |
| `to` | number | Ending value |
| `direction` | `'up' \| 'down'` | Count direction |
| `duration` | number | Animation duration in seconds |
| `separator` | string | Thousands separator (e.g. `','`) |
| `delay` | number | Delay before animation starts |
| `onStart` | function | Callback when animation starts |
| `onEnd` | function | Callback when animation ends |

---

## Utility Functions

### `src/app/libs/utils.js`

```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

Standard `cn()` helper for merging Tailwind classes conditionally. Also duplicated at `src/app/components/lib/utils.js` with a TypeScript declaration file alongside it.
