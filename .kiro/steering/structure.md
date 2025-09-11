# Project Structure

## Root Directory

```
├── .env                    # Environment variables (not in git)
├── .env.sample            # Environment template
├── package.json           # Dependencies and scripts
├── next.config.mjs        # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── eslint.config.mjs      # ESLint configuration
└── jsconfig.json          # JavaScript project configuration
```

## Source Structure (`src/app/`)

Uses Next.js App Router with file-based routing:

```
src/app/
├── layout.js              # Root layout component
├── page.js                # Home page
├── globals.css            # Global styles
├── favicon.ico            # Site favicon
├── components/            # Reusable React components
├── data/                  # Static data files
├── libs/                  # Utility functions
├── api/                   # API routes
├── events/                # Events page
├── projects/              # Projects page
└── team/                  # Team page
```

## Component Organization

- **Components**: Reusable UI components in `src/app/components/`
- **Pages**: Route-specific pages using Next.js App Router
- **Data**: Static data files in `src/app/data/` (team.js, projectData.js, eventData.js)
- **Utils**: Helper functions in `src/app/libs/utils.js`

## Public Assets (`public/`)

```
public/
├── Evolve_Logo.png        # Main logo
├── Evolve_Logo.ico        # Favicon
├── EV logo White copy.svg # Logo variant
├── gallery/               # Image gallery assets
├── Team/                  # Team member photos
├── Events/                # Event images
├── Brochure/              # Marketing materials
└── evolve-car.json        # Lottie animation data
```

## Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.jsx`, `TeamCard.jsx`)
- **Pages**: lowercase with hyphens for routes
- **Data files**: camelCase (e.g., `projectData.js`)
- **Assets**: descriptive names with spaces/underscores

## File Extensions

- `.jsx` for React components
- `.js` for utilities and data files
- `.mjs` for ES module configs
