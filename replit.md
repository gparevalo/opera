# To Sell More (TSM) - Strategic Growth Consulting Website

## Overview
Premium, cinematic website for "To Sell More" - a strategic growth firm founded by Mariángel Hernández. Built with React, Framer Motion, and TailwindCSS with a dark-first premium aesthetic inspired by lusion.co and premium consultancies.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + Framer Motion
- **Backend**: Express (minimal, serves static content)
- **No database required** - fully static/embedded content
- **Bilingual**: Spanish (default) / English with custom i18n context

## Brand Identity
- **Imperial Red**: #EF233C (HSL 350 87% 54%) - primary accent
- **Vivid Burgundy**: #A4133C - secondary accent
- **Space Cadet**: #2B2D42 - dark theme base
- **Font heading**: Space Grotesk
- **Font body**: Inter
- Always dark mode (html class="dark")
- Gradient text: red-to-burgundy gradient

## Pages (5)
- **Home** (`/`) - Cinematic 3D hero (HeroCanvas) + original hero + 9 content sections (incl. Authority metrics & Case Study)
- **Modelo** (`/modelo`) - Methodology: 4 phases + founding principles
- **Servicios** (`/servicios`) - 3 services: Diagnóstico, Sprint 90 Días, Implementación
- **Mariángel** (`/mariangel`) - Leadership profile with bio, achievements, vision
- **Agenda** (`/agenda`) - Contact form + schedule call CTA

## Key Features
- Language toggle (ES/EN) persisted to localStorage, Spanish default
- Canvas-based particle network animation (neural network style)
- 3D depth-perspective hero canvas (HeroCanvas) with mouse interaction and glowing nodes
- Scroll-triggered animations with Framer Motion
- Full-screen storytelling sections with generous spacing
- Glassmorphism navigation with scroll effect
- Red glow effects and gradient text
- Mobile-responsive with animated hamburger menu
- Reduced motion support

## File Structure
- `client/src/lib/i18n.tsx` - Language context with all EN/ES translations
- `client/src/components/navigation.tsx` - Fixed nav with glass effect
- `client/src/components/footer.tsx` - Premium footer with links
- `client/src/components/particle-network.tsx` - Canvas-based particle animation
- `client/src/components/hero-canvas.tsx` - 3D depth particle canvas for cinematic hero
- `client/src/components/authority-section.tsx` - Credibility metrics (large editorial typography)
- `client/src/components/case-study-section.tsx` - Editorial case study section
- `client/src/components/scroll-reveal.tsx` - Scroll animation wrappers
- `client/src/components/animated-counter.tsx` - Animated number counters
- `client/src/pages/home.tsx` - Homepage with all sections
- `client/src/pages/modelo.tsx` - Methodology page
- `client/src/pages/services.tsx` - Services page
- `client/src/pages/leadership.tsx` - Mariángel profile page
- `client/src/pages/agenda.tsx` - Contact/schedule page

## Development
- `npm run dev` starts both Express server and Vite dev server on port 5000
- No external APIs or secrets required
- Contact form is frontend-only (no backend submission)