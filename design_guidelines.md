# Cygnet Security - Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by modern cybersecurity sites like Rada Cyber Security, emphasizing trust, professionalism, and technical credibility with a dark-themed, sophisticated aesthetic.

## Core Design Principles
- **Trust-First Design**: Professional, credible presentation that converts visitors into consulting leads
- **Technical Authority**: Visual language that conveys deep cybersecurity expertise
- **Business-Aligned**: Clear value propositions connecting technical solutions to business outcomes

## Color Palette

### Dark Theme (Default)
- **Background**: 11 18% 9% (dark navy #0B1220)
- **Surface**: 224 50% 11% (elevated dark #0E152A)
- **Primary Accent**: 174 81% 41% (teal #1FB8A6)
- **Secondary Accent**: 187 100% 50% (electric cyan #00E5FF)
- **Text**: 214 100% 95% (light blue-white #E6F1FF)

### Light Theme
Derive from same palette with high contrast - maintain teal/cyan accents, invert backgrounds to light values while preserving brand colors.

## Typography
- **Headings**: Space Grotesk (modern grotesk style)
- **Body**: Inter or IBM Plex Sans
- **Hierarchy**: Clear distinction between H1 (hero), H2 (sections), H3 (cards)

## Layout System
- **Container**: max-w-7xl for full-width sections, max-w-6xl for content sections
- **Spacing**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent vertical rhythm
- **Desktop sections**: py-20 to py-32
- **Mobile sections**: py-12 to py-16
- **Multi-column grids**: 3-4 columns on desktop, 2 on tablet, 1 on mobile

## Component Library

### Navigation
- **Sticky header** with dark surface background
- **Logo**: Left-aligned with placeholder for easy swap
- **Nav items**: Home, Work with me, Services, About, Blog, Contact Details
- **LinkedIn icon button**: Right side, easily configurable href
- **Theme toggle**: Sun/moon icon, persists to localStorage

### Hero Section
- **Large, impactful** with centered H1 and compelling subtext
- **Dual CTAs**: Primary "Work with me" (teal background), Secondary "View services" (outline with blur background)
- **Generous spacing**: min-h-screen or 80vh
- **Background**: Subtle gradient or tech pattern overlay on dark background
- **Image**: Consider abstract cybersecurity visual (network nodes, shield, or digital lock) as background element

### Section Cards
- **Case Studies (3-4 cards)**: Grid layout with industry, problem → approach → outcome structure
- **Service Packages (4 cards)**: Clear scope, timeline, deliverables, price placeholder, "Request proposal" CTA
- **Visual hierarchy**: Icon/badge at top, title, description, key details, CTA button

### About Section
- **Two-column layout**: Headshot/photo placeholder left, bio content right (stack on mobile)
- **Pull-quote styling**: Large, distinctive typography for founder quote
- **Credibility pillars**: Three columns with icons - "Business-aligned", "Evidence-driven", "Builder's mindset"
- **Certification badges**: Display area for security certifications (placeholders)

### Blog
- **List page**: Card grid with post image placeholder, title, excerpt, tags, date
- **Individual posts**: max-w-prose for readable line length, syntax highlighting for code blocks
- **Typography**: Generous line-height (1.7-1.8) for body text

### Contact Details Page
- **Clean presentation** of phone number and email
- **Two-column option**: Contact info + map/location (if applicable)
- **Professional framing**: Icon + label format

### Footer
- **Three-column layout**: Company summary, Quick links, Contact info
- **Subtle styling**: Lighter text on dark surface
- **Legal links**: Privacy, Terms (if applicable)

## Images

### Hero Image
**Include**: Abstract cybersecurity visual as background element - consider digital lock, network topology visualization, or shield iconography with semi-transparent overlay to maintain text readability. Should convey security, technology, and trust.

### About Section
**Headshot Placeholder**: Professional founder photo - circular or subtle rounded corners, positioned prominently in About section.

### Case Study Cards
**Industry Icons**: Use relevant iconography (healthcare cross, finance building, tech chip) rather than photos to maintain professional, abstract feel.

### Blog Posts
**Header Images**: Each blog post card should have a featured image placeholder - consider abstract tech patterns, code snippets, or security diagrams.

## Dark/Light Mode Implementation
- **Default**: Dark theme on load
- **Toggle behavior**: Smooth transition between modes (200-300ms)
- **Persistence**: Save preference to localStorage
- **System preference**: Respect on first visit if no saved preference
- **Consistency**: All components must support both modes including forms, cards, buttons

## Responsive Breakpoints
- **Mobile**: 360px - 767px (single column, stacked navigation)
- **Tablet**: 768px - 1279px (2-column grids)
- **Desktop**: 1280px+ (3-4 column grids, full nav)
- **Large Desktop**: 1440px+ (max container width, optimal spacing)

## Accessibility
- **Contrast ratios**: WCAG AA minimum (4.5:1 for body text)
- **Focus states**: Visible on all interactive elements
- **Smooth scroll**: For in-page navigation
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Dark mode**: Maintain contrast standards in both themes

## Animations
Use sparingly:
- **Theme toggle**: Smooth color transition
- **Scroll reveal**: Subtle fade-in for sections (optional)
- **Button hover**: Standard elevation/color changes
- **Navigation**: Smooth scroll behavior

## Quality Standards
- Clean, modern cybersecurity aesthetic
- Professional credibility over flashiness
- Clear information hierarchy and CTAs
- Generous whitespace, not cluttered
- Production-ready polish in every detail