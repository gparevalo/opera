# Project Architecture

## 1. Project Overview

### Purpose of the project
This repository currently delivers a bilingual personal-brand / authority landing page for **Mariángel Hernández**, focused on innovation, startups, AI, and business growth in Ecuador and Latin America. The active frontend experience is centered on a single public landing page plus a localized 404 page.

### Application type
- Primary type: **personal brand landing page / corporate authority site**
- Current scope: **single-page marketing site**
- Secondary infrastructure present: **minimal full-stack scaffold** with Express server and unused data-layer boilerplate

### Complete technology stack
- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS
- **Routing:** Wouter
- **Styling helpers:** `clsx`, `tailwind-merge`, CSS custom properties
- **Animations:** Framer Motion
- **SEO:** `react-helmet-async`, JSON-LD structured data
- **Internationalization:** custom React Context with local JSON translations
- **UI primitives:** Radix UI based `shadcn/ui`-style components
- **Data utilities available:** TanStack Query, `apiRequest`, generic query client
- **Backend:** Express + custom Vite dev integration + static serving in production
- **Database scaffold present but unused by the active frontend:** Drizzle ORM, Drizzle Kit, PostgreSQL schema, in-memory storage adapter

### General architecture
The project is a **monorepo-style full-stack template** where:

- `client/` contains the Vite React app.
- `server/` contains the Express server that runs Vite in development and serves the built frontend in production.
- `shared/` contains shared schema definitions for the backend scaffold.

The **currently active product architecture is frontend-heavy**:

- `App.tsx` wires global providers and the router.
- `BaseLayout` wraps the public page with navbar, animated main container, and footer.
- `pages/Home` is the only routed content page and currently delegates almost all visible structure to layout + SEO.
- `components/seo.tsx` centralizes metadata and structured data injection.
- `i18n/index.tsx` provides the language context and translation object.

### Important conventions detected
- The frontend source lives in **`client/src`**, not in repo-root `src`.
- The app is **dark-first**. `client/index.html` includes `<html class="dark">`.
- Visual language is **cinematic/editorial/premium**, with black backgrounds, red accent, long letter-spacing, italics, glow, blur, and large spacing.
- Layout widths are controlled with **custom arbitrary Tailwind widths** like `max-w-[1400px]`, `max-w-[1440px]`, and `max-w-6xl`.
- i18n is **object-based**, not key-string lookup; components read nested properties directly from `t`.
- There is a large `components/ui` library available, but only a small subset of the repo is active in the public experience today.
- Several routes/links are referenced in markup for SEO or future expansion, but **only two actual content routes currently exist**.

## 2. Tech Stack Detected

- **Framework principal:** React 18
- **Language:** TypeScript
- **Bundler / dev server:** Vite 7
- **CSS framework:** Tailwind CSS 3
- **PostCSS:** PostCSS + Autoprefixer
- **Routing:** Wouter
- **State management:** React Context for i18n; local component state with `useState`
- **Server state / data fetching:** TanStack React Query configured globally, but not actively used by the current public page
- **i18n:** custom `I18nProvider` + `en.json` / `es.json`
- **Animations:** Framer Motion
- **UI libraries:** Radix UI primitives, `class-variance-authority`, Lucide Icons, `react-icons`
- **Form libraries:** React Hook Form, `@hookform/resolvers` present; no active form flow in current routed UI
- **Carousel / advanced UI libs available:** Embla Carousel, Recharts, Vaul, React Day Picker
- **SEO:** `react-helmet-async`
- **CMS integration:** none detected
- **API integrations:** none detected in active frontend
- **Backend:** Express
- **ORM / database scaffold:** Drizzle ORM + PostgreSQL schema + Drizzle Kit

## 3. Folder Structure Explanation

### Root-level architectural structure

#### `/client`
Contains the full Vite frontend application. This is the actual app root for the React/Tailwind codebase.

#### `/client/src`
Houses all frontend source code: app bootstrap, pages, layout, components, hooks, i18n, and utility modules.

#### `/server`
Contains the Express server. Its current architectural role is mostly operational:
- in development, it mounts Vite middleware
- in production, it serves the built frontend
- it includes an empty route registration file for future API growth

#### `/shared`
Contains shared backend/domain schema (`shared/schema.ts`). This is not currently connected to the active landing page UI, but it indicates the project originated from or still retains a full-stack starter template.

#### `/attached_assets`
Stores local image assets referenced through the Vite alias `@assets`.

#### `/docs`
Documentation directory. This architecture file is intended to become the canonical reference for future agents.

### Frontend subfolders in `client/src`

#### `/client/src/components`
Contains reusable frontend building blocks.

Architecturally this folder is split into:
- `components/ui`: low-level reusable UI primitives, mostly `shadcn/ui` / Radix-based
- `components/layout`: higher-level section wrappers such as `UnifiedSection` and `UnifiedSectionBlack`
- `components/seo.tsx`: cross-cutting SEO component

This folder is the reusable layer between page/layout composition and raw HTML/Tailwind.

#### `/client/src/pages`
Contains route-level components. Current usage is intentionally simple:
- `Home/index.tsx` is the public landing page route
- `not-found.tsx` handles unmatched routes

This folder is the page entry layer for Wouter routes.

#### `/client/src/sections`
The folder exists but is **currently empty**. Architecturally, it appears intended to store page-specific content sections, but that pattern is not active in the current codebase.

Future agents should treat this as a likely destination for new homepage/content sections if the team wants to separate page composition from shared components.

#### `/client/src/hooks`
Contains reusable hooks:
- `use-toast.ts`
- `use-mobile.tsx`

These are support utilities, not central architectural pillars in the current landing page.

#### `/client/src/i18n`
Contains the localization system:
- provider/context logic in `index.tsx`
- translation dictionaries in `translations/en.json` and `translations/es.json`

This is the authoritative source for text content that has been internationalized.

#### `/client/src/lib`
Contains generic utilities shared across the app:
- `queryClient.ts` for API request/query defaults
- `utils.ts` for class name merging with `cn()`

Architecturally, this folder holds cross-cutting helpers, not product-domain logic.

#### `/client/src/layout`
Contains page shell components:
- `navbar.tsx`
- `footer.tsx`
- `base-layout.tsx`

This is the structural composition layer that wraps routed pages.

### Requested folders that do not exist in the current repo

The following folders were requested in the brief, but **are not present as active architecture directories** in the current codebase:

- `/src` at repo root: not used; actual source root is `client/src`
- `/context`: replaced by `client/src/i18n/index.tsx`
- `/utils`: replaced by `client/src/lib`
- `/assets`: replaced by `attached_assets` and `client/public`
- `/services`: not present
- `/layouts`: not present; the repo uses singular `layout`

## 4. Component Architecture Strategy

### Current organization strategy
The project uses a **layered composition model** rather than strict Atomic Design:

1. **Route layer**
   `client/src/pages/*`

2. **Shell/layout layer**
   `client/src/layout/*`

3. **Reusable feature/layout components**
   `client/src/components/layout/*`, `client/src/components/seo.tsx`

4. **Low-level UI primitives**
   `client/src/components/ui/*`

### Detected separation patterns

#### Layout vs page
- `BaseLayout` owns the recurring shell: navbar, main wrapper, footer, global spacing (`pt-20`), and canonical hidden SEO nav.
- `Home` owns route-specific metadata and page-specific hidden SEO links.

This is a good separation between shell and route entry.

#### Shared UI vs page-specific content
- `components/ui` provides generic components.
- `components/layout/UnifiedSection*` suggests a future pattern for standardized full-width cinematic content blocks.
- However, those section wrappers are **not currently consumed by routed pages**.

### Modular composition
Yes, but lightly used in the current active page set:
- `SEO` is a clear reusable cross-page module.
- `Navbar` and `Footer` are reusable shell modules.
- `I18nProvider` encapsulates language state globally.
- `cn()` centralizes Tailwind class merging.

### Reuse patterns detected
- Repeated use of **Tailwind utility-heavy JSX** instead of extracting many custom presentational components.
- Repeated typographic pattern:
  - uppercase labels
  - tight or exaggerated tracking
  - small utility text sizes like `text-[9px]`, `text-[10px]`, `text-[11px]`
- Repeated container pattern:
  - `mx-auto`
  - large custom max widths
  - `px-8`, `lg:px-12`, `lg:px-16`
- Repeated motion pattern:
  - fade/slide in
  - `whileInView`
  - `AnimatePresence` for mobile navigation

### Architectural conclusion
This is **not an atomic-design system**. It is better described as:
- **layout shell + page entries + reusable UI primitives + future section-wrapper layer**

Future development should continue that same composition style instead of introducing a radically different component taxonomy.

## 5. Styling Strategy (Tailwind)

### Tailwind configuration usage
The project uses a real `tailwind.config.ts` with:
- content scanning limited to `./client/index.html` and `./client/src/**/*`
- extended semantic color tokens mapped to CSS variables
- custom font families mapped to CSS variables
- custom border radius scale
- custom keyframes and animations
- `tailwindcss-animate` and `@tailwindcss/typography` plugins

### Custom tokens
The styling system is primarily driven by **CSS custom properties in `client/src/index.css`**, then surfaced through Tailwind theme extensions.

#### Core color tokens
- `--background`
- `--foreground`
- `--border`
- `--card`
- `--popover`
- `--primary`
- `--secondary`
- `--muted`
- `--accent`
- `--destructive`
- `--ring`
- `--sidebar-*`
- `--chart-*`

#### Brand color direction
- Primary brand accent: **Imperial red** style value from `--primary` (`350 87% 54%`)
- Common visible hex references:
  - `#EF233C`
  - `#A4133C` in `gradient-text`
- Base surfaces are near-black / deep charcoal.

### Typography tokens
Fonts are defined in CSS variables and exposed through Tailwind:

```css
--font-sans: 'Reddit Sans', sans-serif;
--font-heading: 'Playfair Display', serif;
--font-serif: 'Playfair Display', serif;
--font-quote: 'Shadows Into Light', cursive;
--font-mono: 'JetBrains Mono', monospace;
```

These are loaded from Google Fonts in `client/index.html`.

### Breakpoints
No custom Tailwind breakpoints were added, so the project uses Tailwind defaults:
- `sm`
- `md`
- `lg`
- `xl`
- `2xl`

Current implementation visibly relies most on:
- `md`
- `lg`

### Container widths
The project does **not** rely on Tailwind's `container` utility as a primary layout system.
Instead, it uses explicit max widths:

- `max-w-[1400px]` in navbar
- `max-w-[1440px]` in unified section wrappers
- `max-w-6xl` in footer
- occasional narrower content blocks like `max-w-md`

### Spacing rules
Spacing is intentionally generous and cinematic:
- vertical section padding: `py-32`, `md:py-40`
- navbar padding changes with scroll state: `py-10` to `py-5`
- desktop horizontal padding commonly uses `px-8`, `lg:px-12`, `lg:px-16`
- grid gaps are large: `gap-16`, `gap-20`

### Responsive convention
The responsive strategy is utility-first and explicit:
- mobile-first base classes
- desktop enhancement at `lg`
- occasional `md` typography scaling

Example:

```tsx
className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20"
```

### Custom utility classes in `index.css`
The project also defines reusable non-Tailwind utilities:
- `.gradient-text`
- `.glow-red`
- `.glass`
- `.btn-glow`
- hover/active elevate utilities

### How Tailwind should continue to be used
- Prefer existing semantic tokens like `bg-background`, `text-foreground`, `text-primary`, `border-border`.
- Preserve the dark, cinematic palette unless the design system is intentionally reworked.
- Prefer current spacing scales and max-width patterns over introducing generic `container`.
- Use arbitrary values when they align with the existing art direction; this codebase already embraces that pattern.
- Reuse current typography language: uppercase micro-labels, large editorial headings, italic accents, and restrained body copy.

## 6. Routing Structure

### Actual registered routes
Defined in `client/src/App.tsx`:

- `/` -> `Home`
- `/fundadora-startups-innovacion-ecuador` -> `Home`
- fallback route -> `NotFound`

### Router organization
The router is a small inline function in `App.tsx` using Wouter `Switch` and `Route`.

Architectural observations:
- Routing is intentionally flat.
- There is no nested routing structure.
- There is no route config file.
- `ScrollToTop` reacts to `useLocation()` and resets scroll on route change.

### Important route-related caveat
The codebase contains links to additional paths that are **not registered routes today**:

- `/agenda`
- `/keynotes`
- `/media`

Those links currently function as placeholders / future SEO or navigation targets, not active pages.

## 7. I18n Structure

### Implementation model
Internationalization is implemented with:
- a custom `I18nContext`
- `I18nProvider`
- `useLanguage()` hook
- two JSON dictionaries: `en.json` and `es.json`

### Language behavior
- supported languages: `en`, `es`
- default initial state: `es`
- persisted key in localStorage: `tsm-lang`
- `document.documentElement.lang` is updated when language changes

### Translation access pattern
Translations are consumed as a nested object:

```tsx
const { t } = useLanguage();
t.nav.home
t.footer.tagline
t.notFound.title
t.metadata.default_description
```

### Exact structure detected
Current translation namespaces:

- `metadata`
- `nav`
- `footer`
- `notFound`
- `mediaPage`

Examples:

```txt
t.metadata.base_title_suffix
t.metadata.default_description
t.nav.home
t.nav.agendar
t.nav.language_toggle
t.footer.rights
t.footer.tagline
t.notFound.title
t.mediaPage.hero.title
```

### Organizational convention
The convention is **namespace by page/feature area**, not by individual component filename.

Detected grouping logic:
- shared site metadata under `metadata`
- navigation copy under `nav`
- footer copy under `footer`
- 404 page copy under `notFound`
- future media page copy under `mediaPage`

### Important content note
Not all translation content appears fully polished yet. For example, Spanish `metadata.base_title_suffix` and `default_description` currently contain placeholder-like repeated values. This should be treated as current repository truth, not corrected implicitly by future agents without explicit instruction.

## 8. Design System Detected

### Typography
- **Body / UI font:** Reddit Sans
- **Display / heading font:** Playfair Display
- **Quote/accent font available:** Shadows Into Light
- **Mono font token defined:** JetBrains Mono

### Visual scale
The design system leans editorial and cinematic:
- very small uppercase utility labels (`text-[9px]` to `text-[11px]`)
- large dramatic headings (`text-5xl`, `text-7xl`, `text-8xl`)
- wide tracking for labels (`tracking-[0.3em]` to `tracking-[0.6em]`)
- occasional negative tracking for oversized hero/menu text

### Heading hierarchy
Observed hierarchy:
- display statements: large serif or bold uppercase display text
- section labels: very small uppercase labels in primary red
- supporting copy: muted white with lighter weight and longer leading

### Buttons
Current button styling in active layout favors:
- rectangular or lightly rounded shape
- high-contrast fill (`bg-white text-black` or `bg-[#EF233C] text-white`)
- uppercase micro-typography
- strong tracking
- subtle hover color or glow

There is also a generic `components/ui/button.tsx`, but the active navbar/footer/page code often uses hand-authored Tailwind classes directly for bespoke art direction.

### Cards and surfaces
The live public shell uses:
- sparse borders: `border-white/5`
- transparent/dim overlays
- blurred glass effects
- glow and atmospheric background shapes

Traditional boxed card-heavy UI is not the dominant visual pattern in the active landing page.

### Containers
Common container patterns:
- full-width section background
- centered inner container with explicit max width
- lots of negative space
- grid-based large-screen layouts

### Spacing patterns
- section-level spacing is large and dramatic
- footer and navbar avoid dense layouts
- whitespace is used as part of the premium feel, not just for readability

### How to replicate the design system correctly
- Keep surfaces dark and spacious.
- Use red as the controlled accent, not as a full-surface dominant color.
- Use Playfair Display selectively for emphasis and Reddit Sans for UI/body.
- Prefer uppercase micro-labels and elegant muted body text over standard SaaS-style labels.
- Build with atmosphere: gradients, blur, glows, thin separators, and restrained motion.

## 9. Animation Strategy

### Animation tooling
Active animation library: **Framer Motion**

### Current usage patterns

#### Page transition
`BaseLayout` fades in `<main>` on mount.

#### Navbar
- logo entrance animation
- animated underline for active/hovered links
- mobile menu mounted/unmounted with `AnimatePresence`
- mobile menu items slide in progressively

#### Footer
- multiple columns animate with `whileInView`
- stagger-like delays are applied manually

#### Section wrappers
`UnifiedSection` and `UnifiedSectionBlack` include animated background glow elements using `motion.div`.

### Detected animation styles
- fade in
- slide/fade from x or y offsets
- in-view reveal
- hover state transitions using CSS duration utilities
- atmospheric background motion rather than dense microinteraction systems

### Libraries present but not actively used in current routed UI
- `gsap`
- `scrolltrigger`

Future agents should not assume GSAP is part of the active animation strategy unless new code explicitly adopts it.

## 10. Reusable Patterns For Future Development

This section is the most important for generating future sections consistently.

### 10.1 Page shell pattern

Every new public page should follow this sequence:

1. Add route entry in `client/src/pages/...`
2. Wrap page content with `BaseLayout`
3. Mount `SEO` near the top of the page
4. Use existing typography, spacing, and motion conventions

Example:

```tsx
export default function ExamplePage() {
  return (
    <BaseLayout>
      <SEO title="..." description="..." canonicalPath="/example" />
      {/* page content */}
    </BaseLayout>
  );
}
```

### 10.2 Section wrapper pattern

For future content-heavy landing development, the intended reusable wrapper is likely:
- `UnifiedSection`
- or `UnifiedSectionBlack`

Shared section anatomy:
- full-width `<section>`
- large vertical padding
- dark surface
- centered max-width content container
- optional grid overlay
- optional glow/background atmosphere

### 10.3 Hero-style pattern inferred from current system
Even though the current routed `Home` file is minimal, the surrounding shell strongly suggests the preferred hero/lead-section language:
- oversized editorial headline
- very small uppercase label above it
- restrained supporting text
- strong CTA button
- cinematic background accents

### 10.4 CTA pattern
Detected CTA traits:
- short uppercase label
- compact but bold button
- high contrast fill
- hover tint toward primary red
- sometimes paired with an icon like `ArrowUpRight`

### 10.5 Grid/content section pattern
Detected reusable composition pattern:

```tsx
<section className="...">
  <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
      {/* content columns */}
    </div>
  </div>
</section>
```

### 10.6 Editorial label pattern
Common section label recipe:

```tsx
className="text-primary text-[10px] uppercase tracking-[0.6em] font-bold"
```

### 10.7 Footer/info list pattern
For compact navigation or ecosystem lists:
- uppercase micro labels
- low-contrast default text
- brighter hover text
- subtle icon or line accent

### 10.8 Reusable content rules for future sections
- Favor 1 strong message per section.
- Use asymmetrical but clean layouts.
- Let whitespace carry visual weight.
- Prefer 2-3 content blocks per row on desktop, stacked on mobile.
- Keep copy concise, premium, and authority-driven.

## 11. SEO Structure

### Meta tags
SEO is actively implemented in two layers:

#### Static defaults in `client/index.html`
- base title
- base description
- canonical link
- OG title / description / type
- favicon

#### Dynamic page-level SEO in `components/seo.tsx`
- `<title>`
- description
- robots
- canonical
- Open Graph tags
- Twitter card tags
- `<html lang>`

### Helmet usage
Yes. The app uses `HelmetProvider` at the root and `SEO` wraps `Helmet`.

### Structured data
Yes. `SEO` injects JSON-LD scripts for:
- `Person`
- `Organization` for ToSellMore
- `Organization` for nexito.ai
- `WebSite`

`Home` also passes an additional `WebPage` schema through `extraSchemas`.

### Semantic HTML usage
Detected semantic elements:
- `nav`
- `main`
- `footer`
- `section` wrappers

There are also hidden navigational blocks (`sr-only`) used as SEO/canonical supporting links.

### Important SEO caveat
Some hidden links point to routes not yet implemented. Future agents should be careful not to expand or remove these without explicit SEO/content direction.

## 12. Performance Strategy

### Detected performance measures
- Vite handles bundling and production asset build.
- Production server statically serves the built app from `dist/public`.
- Vite aliases reduce import complexity and improve maintainability.
- Scroll restoration is simple and manual.

### Not detected in the current frontend
- route-based lazy loading
- React `lazy()` / Suspense splitting
- image optimization pipeline
- explicit memoization strategy
- advanced bundle splitting customizations

### Practical performance assessment
The app is currently simple enough that performance strategy is mostly **structural simplicity** rather than advanced optimization. The live routed surface is small.

Future agents should preserve this simplicity unless a larger page system is reintroduced.

## 13. How AI Agents Should Work With This Project

### Core rule
Treat this repository as a **single-page React/Vite/Tailwind marketing site inside a full-stack scaffold**. Do not assume the unused backend/database tooling is part of the live product unless the task explicitly targets it.

### When creating new sections
- Prefer placing new reusable marketing sections in `client/src/sections` if the team wants page decomposition.
- If the change is route-shell related, use `client/src/layout`.
- If the change is low-level reusable UI, use `client/src/components/ui` or `client/src/components`.
- Wrap new page content with `BaseLayout`.
- Prefer `UnifiedSection` or `UnifiedSectionBlack` for full-width cinematic sections when appropriate.

### When adding new routes
- Register them in `client/src/App.tsx`.
- Add a page entry under `client/src/pages`.
- Add `SEO` metadata immediately.
- Do not assume links like `/agenda`, `/media`, or `/keynotes` already have routed implementations.

### When working with Tailwind
- Reuse existing semantic tokens and CSS variables.
- Preserve the dark-first premium art direction.
- Reuse the current spacing and container widths.
- Prefer existing utility classes like `.gradient-text` and `.btn-glow` when they fit.
- Avoid introducing a generic bright SaaS UI language that conflicts with the current editorial brand.

### When working with naming conventions
- Use PascalCase for React components.
- Keep route-level pages under `pages`.
- Keep shell components in `layout`.
- Keep generic helpers in `lib`.
- Keep translation namespaces feature-oriented (`nav`, `footer`, page namespaces).

### When working with i18n
- Add text to both `en.json` and `es.json`.
- Preserve the nested object structure.
- Access translations through `useLanguage()` and `t.namespace.key`.
- Do not introduce a second i18n system.

### When working with layout structure
- Keep `BaseLayout` as the shell for public pages unless there is a strong reason not to.
- Maintain navbar/footer consistency across public routes.
- Respect current top spacing (`pt-20`) so fixed navbar overlap does not break content.

### When working with the backend
- Assume the Express layer is currently infrastructural, not feature-rich.
- `server/routes.ts` is effectively empty.
- `shared/schema.ts` and `server/storage.ts` are scaffold code unless the task explicitly expands backend functionality.

### When documenting or refactoring
- Trust the current code over historical docs such as `replit.md`; that file describes a broader multi-page site that does not match the active routed code anymore.
- Do not claim sections/pages/components exist unless they are present in the repo.
- Distinguish clearly between:
  - active architecture
  - available infrastructure
  - placeholders for future expansion

## Appendix: Short Architectural Summary For Agents

- Frontend root is `client/src`.
- Active app is a bilingual single-page authority landing site.
- Only `/` and `/fundadora-startups-innovacion-ecuador` render `Home`.
- Styling is Tailwind + CSS variables with a dark cinematic editorial brand.
- Motion uses Framer Motion.
- SEO is centralized in `components/seo.tsx`.
- i18n is custom context-based with direct object access.
- Express/Drizzle exist, but the active product surface is mostly static frontend.
