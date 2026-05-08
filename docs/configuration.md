# Configuration

---

## Environment Variables

Copy `.env.sample` to `.env` before running the app locally. The `.env` file is gitignored and must never be committed.

| Variable | Purpose |
|---|---|
| `NODEMAILER_*` | SMTP credentials for sending contact form emails |
| `MONGODB_URI` | MongoDB connection string — no longer required as the test-ride registration form has been removed |
| `JWT_SECRET` | Secret key for signing JWT tokens |

The exact variable names are defined in `.env.sample`.

---

## `next.config.mjs`

Minimal configuration. Enables `forceSwcTransforms` so the SWC compiler handles all transforms (useful when certain Babel plugins would otherwise take over).

```js
const nextConfig = {
  experimental: {
    forceSwcTransforms: true
  }
};
```

---

## `next-sitemap.config.js`

Runs automatically after every production build via the `postbuild` npm script. Generates `sitemap.xml` and `robots.txt` in the project root.

```js
module.exports = {
  siteUrl: "https://www.evolve.nitb.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
```

---

## `postcss.config.mjs`

Standard PostCSS setup for Tailwind CSS 4 using `@tailwindcss/postcss`.

---

## `eslint.config.mjs`

Uses `eslint-config-next` — the standard Next.js ESLint ruleset. Run with `npm run lint`.

---

## `jsconfig.json`

Standard Next.js JS config. Sets up path aliases so `@/` resolves to `src/`.

---

## `globals.css`

- Imports Tailwind CSS
- Hides scrollbars globally (`::-webkit-scrollbar { display: none }`)
- Sets `overflow-x: hidden` on `body` to prevent horizontal scroll

---

## Deployment

The site is deployed on **Vercel** at [https://evolve.nitb.in](https://evolve.nitb.in).

On every push to the main branch, Vercel:
1. Runs `npm run build`
2. The `postbuild` script runs `next-sitemap` to regenerate `sitemap.xml` and `robots.txt`
3. Vercel `SpeedInsights` and `Analytics` are active via the packages already integrated in `layout.js`

### Manual / self-hosted deployment

```bash
npm run build
npm run start
```

Ensure all environment variables from `.env` are set in your hosting environment before building.

---

## Brand Reference

| Token | Value |
|---|---|
| Primary green | `#10b981` (Tailwind `emerald-500`) |
| Dark green | `#059669` (Tailwind `emerald-600`) |
| Background dark | `#1e201e` |
| Background black | `#000000` |
| Logo (dark bg) | `public/Evolve_Logo.png` |
| Logo (light bg) | `public/EV logo White copy.svg` |
