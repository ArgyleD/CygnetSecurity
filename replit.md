# Cygnet Security - Cybersecurity Consulting Website

## Overview

Cygnet Security is a professional cybersecurity consulting website for Ryan Ward-McConville, a freelance security consultant founded in 2018. The application showcases bespoke consulting services, fixed-price security packages, case studies, and thought leadership content through a blog. The site emphasizes trust, technical credibility, and business-aligned security outcomes with a modern, dark-themed aesthetic inspired by contemporary cybersecurity platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (home page, services page, blog listing, blog posts, 404 page)

**UI Component System**
- Radix UI primitives for accessible, unstyled components (dialogs, dropdowns, navigation, etc.)
- shadcn/ui component library with "new-york" style variant
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theme customization supporting dark/light modes

**State Management & Data Fetching**
- TanStack React Query v5 for server state management and caching
- React Context API for theme management (ThemeProvider)
- localStorage for theme persistence and system preference detection

**Design System**
- Custom color palette with dark theme as default (navy backgrounds, teal/cyan accents)
- Typography: Space Grotesk for headings, Inter/IBM Plex Sans for body text
- Responsive grid layouts with mobile-first approach
- Consistent spacing scale using Tailwind units (4, 8, 12, 16, 20, 24, 32)

**Key Features**
- Multi-page application with smooth scroll navigation to sections within pages
- Dedicated Services page (/services) with 4 comprehensive service offerings
- Services navigation dropdown with hash-based section links
- Dark/light theme toggle with system preference detection
- Fully responsive design optimized for desktop, tablet, and mobile
- Blog system with markdown-like content rendering (hidden in first release)
- Static asset management for images (headshots, backgrounds, blog headers)

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the HTTP server
- ESM module system (type: "module" in package.json)
- Custom middleware for request logging and JSON response capture

**Development & Production**
- Development: tsx for running TypeScript directly with hot reload
- Production: esbuild for fast bundling with platform=node, external packages
- Vite integration in development for frontend HMR and middleware mode

**Routing Strategy**
- API routes prefixed with `/api` (currently placeholder structure)
- Static file serving for production builds
- Vite dev server middleware in development mode
- Fallback to index.html for client-side routing

**Storage Interface**
- Abstract IStorage interface defining CRUD operations
- In-memory implementation (MemStorage) as default
- Prepared for database integration with existing schema structure

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM v0.39.1 for type-safe database operations
- PostgreSQL dialect configured via Neon serverless driver (@neondatabase/serverless)
- Schema-first approach with migrations stored in `./migrations` directory
- Database connection via DATABASE_URL environment variable

**Schema Design**
- Users table with UUID primary keys (gen_random_uuid())
- Zod integration for runtime validation (drizzle-zod)
- Type inference for Insert and Select operations
- Currently minimal schema (users only) prepared for expansion

**Session Management**
- connect-pg-simple for PostgreSQL-backed sessions (installed but not yet implemented)
- Configured to work with Express sessions for authentication flows

### External Dependencies

**Third-Party UI Libraries**
- @radix-ui/react-* (v1.x/v2.x): 20+ accessible component primitives
- embla-carousel-react: Touch-enabled carousel component
- cmdk: Command menu interface component
- lucide-react: Icon library for consistent iconography

**Form & Validation**
- react-hook-form: Form state management
- @hookform/resolvers: Validation resolver integration
- zod: Schema validation library

**Utilities**
- class-variance-authority: Component variant management
- clsx + tailwind-merge: Conditional className composition
- date-fns: Date formatting and manipulation
- nanoid: Unique ID generation

**Development Tools**
- @replit/vite-plugin-*: Replit-specific development plugins
  - runtime-error-modal: Error overlay
  - cartographer: Code navigation
  - dev-banner: Development environment indicator
- drizzle-kit: Database migration and introspection CLI

**Content & Assets**
- Static content stored in `attached_assets/` directory
- Brand guidelines documented in `design_guidelines.md`
- Generated images for hero backgrounds, blog headers, and professional photos
- Experience data in JSON format for case studies

## Service Offerings

The website showcases four distinct service categories:

1. **Bespoke Consulting** (/services#bespoke-consulting)
   - Tailored engagements for unique security challenges
   - 4 detailed case studies: UK Government Department, Marketing Data & Analytics, Global Engineering Consultancy, Energy Sector
   - Proven outcomes across government, enterprise, and critical infrastructure

2. **Pre-defined Work Packages** (/services#work-packages)
   - Rapid Exposure Review (2-3 weeks)
   - Vulnerability Management Jumpstart (4 weeks)
   - Pen Test Readiness & Remediation (4-6 weeks)
   - Technical Risk Management Accelerator (6-12 weeks)
   - Each package includes clear scope, timelines, deliverables, and pricing

3. **Security Metrics Toolkit Implementation** (/services#security-metrics-toolkit)
   - Professional PowerBI dashboard customization aligned to NIST SP 800-55
   - Based on SecureMetrics.io templates
   - Features: Metrics Matrix™, Excel automation, Teams/OneDrive integration
   - Benefits: Track ANY security metric, target deviation analysis, action dots

4. **Cyber Essentials Implementation** (/services#cyber-essentials)
   - UK Government-backed certification preparation
   - Two levels: Cyber Essentials and Cyber Essentials Plus
   - Covers 5 technical controls: Firewalls, Secure Configuration, Security Updates, User Access Control, Malware Protection
   - Services include gap analysis, readiness assessment, documentation, and certification support

## Navigation Structure

- **Homepage** (/): Hero, Impact metrics, Work with Me (brief), Services (overview), About, Contact
- **Services Page** (/services): Comprehensive service offerings with hash-based navigation
  - Services dropdown menu in navigation with 4 links to specific sections
  - Mobile-responsive dropdown with collapsible submenu
- **Blog** (hidden for first release): Restore by uncommenting in Navigation.tsx and removing from robots.txt

## SEO & Metadata

- Comprehensive structured data: Organization, LocalBusiness, Person, Service schemas
- All 7 service offerings included in Service schema with URLs
- Sitemap includes /services page with priority 0.9
- Open Graph and Twitter Card meta tags
- security.txt with contact email and 2030-01-01 expiry
- Blog excluded from search indexing via robots.txt Disallow

## Company Information

- **Legal Name**: Cygnet Security Ltd
- **Founded**: 2018
- **Company Registration**: 11168915
- **Address**: Aston Rd, Nuneaton, Warwickshire, CV11 5EJ
- **Contact Email**: ryan@cygnetsecurity.co.uk
- **Phone**: +44-7917-666267
- **LinkedIn**: https://www.linkedin.com/in/rysward

## Cloudflare Pages Deployment

The site is configured for static deployment to Cloudflare Pages. The Express backend (in `server/`) is only used for local development in Replit and is not needed for production hosting.

### Build Configuration
- **Build command**: `vite build`
- **Build output directory**: `dist/public`
- **Node.js version**: 20.x

### Included Files for Static Hosting
- `client/public/_redirects` - SPA routing (all routes serve index.html)
- `client/public/_headers` - Security headers and caching rules

### Deployment Steps
1. Push code to GitHub/GitLab
2. Create Cloudflare Pages project and connect the repository
3. Configure build settings:
   - Framework preset: None
   - Build command: `vite build`
   - Build output directory: `dist/public`
4. Add custom domain (cygnetsecurity.co.uk)
5. Configure DNS:
   - Add CNAME record pointing to `<project>.pages.dev`
   - Or use Cloudflare nameservers for full integration

### Security Headers (via _headers file)
- X-Frame-Options: DENY (prevents clickjacking)
- X-Content-Type-Options: nosniff (prevents MIME sniffing)
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: restricts browser features

### Caching Strategy
- Static assets (JS, CSS, images): 1 year immutable cache
- index.html: no-cache (always fresh)

**Future Integration Points**
- Blog content management (currently hidden, ready for CMS or headless integration)
- Analytics and tracking (prepared structure, not yet implemented)