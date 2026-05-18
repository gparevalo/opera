# Ópera Surgical Center

A world-class cinematic website for Ópera Surgical Center (Quito, Ecuador), targeting specialist physicians who want to rent premium operating rooms.

## Run & Operate

- `pnpm --filter @workspace/opera run dev` — run the web app (port 23671)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Web: React 18 + Vite 7 + Wouter + Tailwind v4
- Animations: Framer Motion, GSAP + ScrollTrigger, Lenis smooth scroll
- i18n: Custom I18nProvider (ES/EN JSON)

## Where things live

- `artifacts/opera/src/pages/Home/` — Home page with 8 cinematic sections
- `artifacts/opera/src/pages/` — All other pages (About, Infraestructura, Especialidades, Para Especialistas, Contacto)
- `artifacts/opera/src/layout/` — Navbar, Footer, Layout
- `artifacts/opera/src/index.css` — Full design token system
- `artifacts/opera/src/i18n/translations/` — ES + EN translation files
- `artifacts/opera/src/lib/site.ts` — Contact info, WhatsApp helper

## Design system

**Palette (non-negotiable):**
- `--op-ink: #07090c` — Near-black background (NOT navy)
- `--op-graphite: #161a20` — Section alt background
- `--op-amber: #c9a84c` — Sole accent color (amber/gold)
- `--op-fog: #c4c8cc` — Text muted
- `--op-white: #fafafa` — Pure text

**Component classes:**
- `.card-glass` — Glassmorphism card with amber hover border
- `.btn-amber` — Primary CTA button
- `.btn-ghost` — Secondary ghost button
- `.t-display-xl`, `.t-display`, `.t-headline` — Typography scale
- `.t-eyebrow` — Section label with amber line prefix
- `.cta-panel-dark` — Full-width dark CTA block
- `.gallery-card` — Hover cinematic gallery item
- `.feat-item` — Dashboard feature row
- `.specialty-pill` — Ecosystem pill hover
- `.testimonial-card` — Editorial testimonial
- `.scene-glow-dark / .scene-glow-blue` — Ambient background radials

## Home sections (in order)

1. `HeroSection` — Fullscreen cinematic, geometric SVG overlay, floating metric panels, amber gradient headline
2. `WhySection` — 5 glass cards horizontal with hover amber border
3. `JourneySection` — GSAP-animated vertical timeline, sticky left column
4. `GallerySection` — Masonry gallery 6 cards with cinematic hover zoom
5. `IncludesSection` — 10-item dashboard grid (futuristic HUD style)
6. `SpecialtiesSection` — Pill ecosystem with hover amber glow
7. `TestimonialsSection` — Editorial 3 quotes with monogram avatars
8. `FinalCtaSection` — Powerful dark panel, giant headline, amber gradient text

## Contact info

- WhatsApp: `593999999999`
- Email: `coordinacion@operasurgicalcenter.com`

## User preferences

- NO navy-heavy design — graphite/black are the primary darks
- Amber is the SOLE accent color — no other accent
- NO traditional medical imagery or clichés
- Apple / Porsche / Aman aesthetic — premium, cinematic, architectural
- ES/EN bilingual — always check both language keys exist in translations
- All section content hardcoded in components (not i18n) for faster iteration

## Architecture decisions

- i18n via custom hook (`useLanguage`) — not a library — for simplicity
- GSAP only for scroll-driven animations (parallax, timeline draws)
- Framer Motion for component-level reveals and hover transitions
- Tailwind v4 with custom `@theme` — avoid `tailwind.config.js`
- All CSS custom properties prefixed `--op-` for brand tokens
- Geometric SVG overlays (no images) — no stock photography anywhere
