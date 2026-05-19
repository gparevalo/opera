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

**AESTHETIC: Luxury healthcare editorial — light, airy, premium minimalism**
Apple/Linear/Awwwards-winning biotech. Off-white backgrounds, soft teal atmospheric gradients, huge breathing room. NOT dark SaaS.

**Palette (non-negotiable):**
- `--op-canvas: #F2F6F9` — Main page background (off-white, barely blue-tinted)
- `--op-surface: #FFFFFF` — Card/panel background (pure white)
- `--op-ink: #0B0E12` — Primary text (near-black)
- `--op-slate: #3D4E60` — Secondary text
- `--op-mist: #6B7D90` — Muted text
- `--op-fog: #9AAAB8` — Tertiary/placeholder text
- `--op-amber: #2B7A8C` — PRIMARY accent (surgical teal) — all buttons, eyebrows, icons
- `--op-warm: #946251` — SECONDARY accent (copper) — warm contrast moments
- `--op-border: rgba(15,25,40,0.07)` — Card borders
- `--op-amber-dim: rgba(43,122,140,0.08)` — Teal tinted backgrounds
- `--op-amber-line: rgba(43,122,140,0.2)` — Teal borders

**Fonts:**
- Display: Satoshi (Fontshare) → Plus Jakarta Sans fallback (700)
- Body: Inter (400/500/600)

**Component classes (ALL light-themed):**
- `.card` / `.card-glass` — Pure white card, soft shadow, teal hover border (1.75rem radius)
- `.bento-card` — Floating white stat card (1.75rem radius)
- `.btn-amber` — Primary CTA (surgical teal #2B7A8C, pill 100px radius)
- `.btn-ghost` — Ghost button (white bg, dark border, pill)
- `.btn-white` — White button for use inside `.cta-panel-dark`
- `.btn-warm` — Copper accent CTA
- `.btn-whatsapp` — WhatsApp green CTA
- `.t-display-xl`, `.t-display`, `.t-headline`, `.t-lead`, `.t-body`, `.t-label` — Typography scale
- `.t-eyebrow` — Teal pill label (teal bg + border + text)
- `.cta-panel-dark` — ONLY dark element: deep teal gradient panel for final CTA
- `.gallery-card` — Dark abstract card for facility gallery
- `.feat-item` — White feature grid item
- `.specialty-pill` — White pill, teal hover
- `.testimonial-card` — White editorial testimonial (2rem radius)
- `.scene-glow-dark / .scene-glow-blue / .scene-glow-warm` — Subtle atmospheric radials on light bg
- `.gradient-text-amber` — Animated teal→copper shimmer text
- `.icon-well` — Teal-tinted icon container
- `.s-canvas` — Background: var(--op-canvas)
- `.s-white` — Background: #FFFFFF with border

**Section pattern:** Light canvas alternating with white surface. Only `.cta-panel-dark` uses dark color.
**All inline rgba() values: teal (43,122,140) or copper (148,98,81) — NEVER old amber (201,168,76) or dark rgba(255,255,255,...) glass**

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
