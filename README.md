# Evolve NITB — Official Website

The official website for **Evolve**, the Interdisciplinary Technical Club of Maulana Azad National Institute of Technology (MANIT), Bhopal.

**Live site:** [https://evolve.nitb.in](https://evolve.nitb.in)  
Built by [Aadi Jain](https://www.linkedin.com/in/aadi-jain-42a765319/) and [Yatharth Upmanyu](https://www.linkedin.com/in/yatharth-upmanyu-b85781320/).

---

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.sample .env

# Start the development server
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev       # Development server
npm run build     # Production build (+ auto-generates sitemap)
npm run start     # Production server
npm run lint      # ESLint
```

---

## Tech Stack

Next.js 15 · React 18 · Tailwind CSS 4 · Framer Motion · Lottie React · Lucide React · Axios · Nodemailer · MongoDB (Mongoose) · Vercel

---

## Documentation

Detailed docs are in the [`docs/`](./docs) folder:

| Doc | Description |
|---|---|
| [Architecture](./docs/architecture.md) | Project structure, routing, and data flow |
| [Components](./docs/components.md) | Every component — purpose, props, and behavior |
| [Data & Content](./docs/data.md) | Data file schemas and how to update content |
| [API Routes](./docs/api.md) | Backend endpoints, payloads, and dependencies |
| [Configuration](./docs/configuration.md) | Next.js, sitemap, environment variables, and deployment |

---

## Pages at a Glance

| Route | Description |
|---|---|
| `/` | Home — hero, about, achievements, gallery, contact |
| `/aboutUs` | Club story, lab photos, collaboration CTA |
| `/events` | All events with brochure downloads |
| `/projects` | Project grid with detail modals |
| `/team` | Team directory by year and role |
