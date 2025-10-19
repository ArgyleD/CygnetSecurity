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
- Wouter for lightweight client-side routing (home page, blog listing, blog posts, 404 page)

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
- Single-page application with smooth scroll navigation to sections
- Dark/light theme toggle with system preference detection
- Fully responsive design optimized for desktop, tablet, and mobile
- Blog system with markdown-like content rendering
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

**Future Integration Points**
- LinkedIn profile integration (configured URL: https://www.linkedin.com/in/rysward)
- Contact email: contact@cygnetsecurity.co.uk
- Blog content management (currently hardcoded, ready for CMS or headless integration)
- Analytics and tracking (prepared structure, not yet implemented)