---
inclusion: always
---

# Product Guidelines - Evolve NITB

**Evolve NITB** is the official website for the Interdisciplinary Technical Club of NIT Bhopal.

## Core Functionality

- **Project Showcase**: Display technical projects with detailed descriptions, images, and links
- **Event Management**: List upcoming and past events with registration/information
- **Team Profiles**: Member galleries with photos, roles, and social links
- **Contact Integration**: Functional contact forms with email notifications
- **Responsive Design**: Mobile-first approach for all screen sizes

## Brand & Design Standards

- **Color Scheme**: Primary green/emerald (#10b981, #059669) with dark backgrounds
- **Typography**: Clean, modern fonts with good readability
- **Animations**: Subtle Framer Motion transitions, Lottie animations for engagement
- **Logo Usage**: Use `Evolve_Logo.png` for light backgrounds, `EV logo White copy.svg` for dark
- **Imagery**: High-quality photos in `/public/gallery/`, `/public/Team/`, `/public/Events/`

## Content Guidelines

- **Tone**: Professional yet approachable, technical but accessible
- **Target Audience**: Students, faculty, industry partners, alumni
- **Content Types**: Project descriptions, event details, team bios, technical achievements
- **Call-to-Actions**: Join club, contact team, view projects, attend events

## Development Conventions

- **Component Naming**: Use descriptive names (e.g., `ProjectCard`, `EventListing`, `TeamMember`)
- **Data Management**: Store static data in `/src/app/data/` files (team.js, projectData.js, eventData.js)
- **Image Optimization**: Use Next.js Image component for all photos and graphics
- **Responsive Breakpoints**: Follow Tailwind's standard breakpoints (sm, md, lg, xl)
- **Animation Performance**: Prefer CSS transforms over layout changes for smooth animations

## User Experience Priorities

1. **Fast Loading**: Optimize images, lazy load content, minimize bundle size
2. **Accessibility**: Proper alt text, keyboard navigation, screen reader support
3. **Mobile Experience**: Touch-friendly interactions, readable text sizes
4. **SEO Optimization**: Proper meta tags, structured data, semantic HTML
