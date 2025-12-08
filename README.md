# EVOLVE NIT-B Website

A modern, high-performance website built for EVOLVE NIT-B using Next.js 15 with advanced features including real-time analytics, SEO optimization, and seamless email integration.

## 📋 Project Overview

This is the official website for EVOLVE (The interdisiplinary club of NIT Bhopal) at NIT Bhopal. The website showcases events, projects, team information, and provides a platform for community engagement.

**Version:** 0.1.0  
**Last Updated:** December 2025

## 🚀 Features

- ⚡ Built with **Next.js 15** (App Router)
- 🎨 Styled with **Tailwind CSS v4**
- 📊 Analytics powered by **Vercel Analytics & Speed Insights**
- 🔍 SEO optimized with **next-seo** and **next-sitemap**
- ✉️ Email integration with **Nodemailer**
- 🗄️ Database management with **Mongoose**
- 🎭 Smooth animations with **Framer Motion**
- 🎨 Lottie animations support
- 📱 Fully responsive design
- 🔐 JWT-based authentication
- 🌐 Google APIs integration

## 📦 Technology Stack

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **next** | ^15.5.2 | React framework for production |
| **react** | ^18.3.1 | JavaScript library for UI |
| **react-dom** | ^18.3.1 | React DOM rendering |
| **typescript** | 5.9.2 | Static type checking |

### Framework & Styling

| Package | Version | Purpose |
|---------|---------|---------|
| **tailwindcss** | ^4 | Utility-first CSS framework |
| **@tailwindcss/postcss** | ^4 | PostCSS integration for Tailwind |
| **framer-motion** | ^12.23.12 | Animation library |

### Database & Backend

| Package | Version | Purpose |
|---------|---------|---------|
| **mongoose** | ^8.18.0 | MongoDB object modeling |
| **jsonwebtoken** | ^9.0.2 | JWT authentication |
| **nodemailer** | ^7.0.5 | Email sending |

### Analytics & SEO

| Package | Version | Purpose |
|---------|---------|---------|
| **@vercel/analytics** | ^1.5.0 | Website analytics |
| **@vercel/speed-insights** | ^1.2.0 | Performance monitoring |
| **next-seo** | ^6.8.0 | SEO optimization |
| **next-sitemap** | ^4.2.3 | Sitemap generation |

### UI & UX

| Package | Version | Purpose |
|---------|---------|---------|
| **lottie-react** | ^2.4.1 | Lottie animations |
| **lucide-react** | ^0.533.0 | Icon library |
| **react-hot-toast** | ^2.6.0 | Toast notifications |

### Utilities & APIs

| Package | Version | Purpose |
|---------|---------|---------|
| **axios** | ^1.11.0 | HTTP client |
| **googleapis** | ^155.0.0 | Google APIs integration |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **eslint** | ^9 | Code linting |
| **eslint-config-next** | 15.4.4 | Next.js ESLint config |
| **@eslint/eslintrc** | ^3 | ESLint configuration |
| **@types/node** | 24.3.0 | Node.js type definitions |
| **@types/react** | 19.1.12 | React type definitions |

## 📁 Project Structure

```
EVOLVE-NITB-Website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── aboutUs/           # About Us page
│   │   ├── api/               # API routes
│   │   ├── components/        # React components
│   │   ├── data/              # Static data files
│   │   ├── events/            # Events page
│   │   ├── libs/              # Utility libraries
│   │   ├── projects/          # Projects page
│   │   ├── team/              # Team page
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Home page
│   │   ├── globals.css        # Global styles
│   │   └── not-found.jsx      # 404 page
│   ├── db/                    # Database configuration
│   └── model/                 # Mongoose models
├── public/                    # Static assets
├── .next/                     # Next.js build output
├── node_modules/              # Dependencies
├── package.json               # Project dependencies
├── next.config.mjs            # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mjs          # ESLint configuration
├── next-sitemap.config.js     # Sitemap configuration
└── README.md                  # This file
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** / **yarn** / **pnpm** / **bun**
- **MongoDB** (for database)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EVOLVE-NITB-Website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables (create `.env.local`):
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
GOOGLE_API_KEY=your_google_api_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run postbuild` | Generate sitemap (runs after build) |

## 🔄 Upgrading Dependencies

### Check for Updates

```bash
npm outdated
```

### Update Specific Package

```bash
npm update <package-name>
```

### Update All Packages (Careful!)

```bash
npm update
```

### Major Version Updates

For major version updates, check the migration guides:

- **Next.js:** [Next.js Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading)
- **React:** [React Changelog](https://react.dev/blog)
- **Tailwind CSS:** [Tailwind CSS Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- **Mongoose:** [Mongoose Migration Guide](https://mongoosejs.com/docs/migrating_to_8.html)

### Testing After Updates

```bash
npm run build
npm run start
npm run lint
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/EVOLVE-NITB-Website)

### Build for Production

```bash
npm run build
npm run start
```

## 📚 Documentation & Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - React library documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Mongoose Documentation](https://mongoosejs.com/docs/) - MongoDB object modeling
- [Framer Motion Documentation](https://www.framer.com/motion/) - Animation library

## 📝 Notes for Developers

### Module Update Guidelines

1. **Always test locally** before deploying updates
2. **Read migration guides** for major version updates
3. **Update TypeScript types** (`@types/*` packages) alongside core packages
4. **Check breaking changes** in package changelogs
5. **Update this README** when adding new dependencies

### Version Compatibility

- Next.js 15 requires Node.js 18.17 or higher
- React 18.3 is compatible with Next.js 15
- Tailwind CSS v4 is currently in beta
- TypeScript 5.x is recommended for Next.js 15

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to EVOLVE NIT-B.

## 📧 Contact

For questions or support, please contact the EVOLVE NIT-B team.

---

**Built with ❤️ by EVOLVE NIT-B Team**
