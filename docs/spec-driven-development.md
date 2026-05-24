# Fabimar Spec-Driven Development

## Purpose

This file is the development control document for Fabimar. Every implementation step should reference the active spec ID from this document before code is written.

The first delivery target is a visually polished frontend MVP. The broader AWS architecture remains documented in [architecture-blueprint.md](architecture-blueprint.md), but the current build should follow the staged specs below and avoid backend work unless a future spec explicitly brings it in.

## Global Workflow

Use this loop for every development step:

1. Select the active spec ID.
2. Confirm the task is listed under that spec.
3. If the task is missing, add or revise the spec before coding.
4. Implement only the listed task scope.
5. Validate against the spec acceptance criteria.
6. Mark completed work in the relevant spec task list.
7. Do not pull future-stage work forward without updating this file first.

## Global Rules

- Specs are the source of truth for what is in scope.
- The MVP uses Vite React, TypeScript, and fixture data.
- No production backend is part of the MVP.
- No database, auth, admin CRUD, PDF generation, or real 360/3D pipeline is part of the MVP.
- Backend and infrastructure needs should be captured as future integration notes, not built early.
- Keep each spec small enough to finish, review, and validate independently.
- Acceptance criteria define "done."
- Every PR, commit, or development session should name the spec ID it advances.

## Stage Overview

Current stages:

- `STAGE-0`: Product and visual foundation.
- `STAGE-1`: Frontend app foundation.
- `STAGE-2`: Public MVP experience.
- `STAGE-3`: Conversion simulation and demo readiness.
- `STAGE-4`: Post-MVP backend planning.

## STAGE-0: Product And Visual Foundation

### SPEC-000: MVP Scope And Content Direction

Status: Not started

Goal: define the exact frontend MVP scope, demo content, and visual direction before implementation begins.

In scope:

- MVP page selection.
- Demo product, brand, category, and service list.
- Content tone rules.
- Placeholder imagery strategy.
- Fixture data format decision.

Out of scope:

- Production backend.
- Admin interface.
- Real data migration.
- Final copywriting for all production pages.

Tasks:

- [ ] Select MVP pages from the requirements.
- [ ] Define the minimum demo product categories.
- [ ] Define the minimum demo products.
- [ ] Define the minimum demo brands.
- [ ] Define the minimum demo services.
- [ ] Choose placeholder imagery sources or production image requirements.
- [ ] Define tone rules for product, service, and purpose copy.
- [ ] Decide whether fixture content lives in TypeScript files, JSON files, or markdown.
- [ ] Decide whether the first demo is local only or deployed to a preview URL.

Acceptance criteria:

- [ ] The MVP scope can be understood without reading the original requirement PDFs.
- [ ] The selected content is enough to exercise product browsing, brand browsing, service browsing, and WhatsApp CTAs.
- [ ] The team can point to this spec before starting implementation.

## STAGE-1: Frontend App Foundation

### SPEC-001: Project Setup

Status: Complete

Goal: create the technical foundation for the Vite React frontend MVP.

In scope:

- Vite React TypeScript app.
- Basic workspace project structure.
- `pnpm` workspace for package management.
- Routing.
- Lint, typecheck, and build scripts.
- Initial fixture data structure.

Out of scope:

- Backend API clients.
- Authentication.
- Deployment automation beyond simple static build readiness.

Tasks:

- [x] Add repository `.gitignore`.
- [x] Configure Git remote origin.
- [x] Create workspace folders for frontend, backend, and infrastructure.
- [x] Configure `pnpm` workspace package management.
- [x] Initialize Vite React with TypeScript.
- [x] Add route structure for MVP pages.
- [x] Add scripts for dev, build, lint, and typecheck.
- [x] Create initial folder structure for components, pages, data, hooks, and styles.
- [x] Create placeholder fixture files for products, brands, categories, services, and CTAs.
- [x] Add a basic app shell route smoke test or manual verification step.

Acceptance criteria:

- [x] The app runs locally.
- [x] The app builds successfully.
- [x] A developer can navigate between placeholder MVP routes.

### SPEC-002: Visual System And Layout Primitives

Status: Complete

Goal: establish the premium visual system used across the MVP.

In scope:

- Typography scale.
- Color tokens.
- Spacing tokens.
- Responsive layout primitives.
- Image ratios.
- CTA styles.
- Header and footer.
- Restrained motion primitives for smooth fade and blur transitions.

Out of scope:

- Final brand identity redesign.
- Complex animation system.
- Component library packaging.

Tasks:

- [x] Define global typography and spacing.
- [x] Define color tokens for light, calm, premium UI.
- [x] Build page shell.
- [x] Build header navigation.
- [x] Build footer.
- [x] Build section layout primitive.
- [x] Build visual card primitive.
- [x] Build CTA button/link primitive.
- [x] Build responsive grid primitive.
- [x] Build drawer or panel primitive if product details need it.
- [x] Add restrained fade, blur, and hover motion primitives.
- [x] Add accessibility defaults for focus, landmarks, headings, link labels, and reduced motion.

Acceptance criteria:

- [x] A blank route using the shell already feels visually aligned with the Fabimar direction.
- [x] Components behave cleanly on mobile and desktop.
- [x] Visual primitives can support home, product, brand, service, and wishlist routes.

## STAGE-2: Public MVP Experience

### SPEC-003: Home Experience

Status: Complete

Goal: deliver the premium first impression and route users clearly into Productos or Servicios.

In scope:

- Home hero.
- Manifesto phrase.
- Productos and Servicios entry cards.
- Subtle Proposito entry.
- Contact or WhatsApp entry.

Out of scope:

- CMS-driven home modules.
- Complex personalization.
- Analytics dashboard.

Tasks:

- [x] Build home hero with dominant image.
- [x] Add manifesto phrase.
- [x] Add Productos entry card.
- [x] Add Servicios entry card.
- [x] Add Proposito link or section teaser.
- [x] Add contact or WhatsApp CTA.
- [x] Tune mobile layout for the two primary doors.
- [x] Add route metadata.

Acceptance criteria:

- [x] A first-time visitor understands the two main paths within seconds.
- [x] The page feels calm, premium, and image-led.
- [x] Primary CTAs work on mobile and desktop.

### SPEC-004: Product Showroom

Status: Complete

Goal: validate product discovery by category, brand, and new/used-selected state.

In scope:

- Product fixture data.
- `/productos` entry.
- Category/product browsing.
- Nuevo and Usado Seleccionado filters.
- Brand filter.
- Brand grid.
- Brand universe page.
- Product cards.

Out of scope:

- Real inventory.
- Backend filtering.
- Admin product management.
- Price or checkout behavior.

Tasks:

- [x] Define product fixture type.
- [x] Define brand fixture type.
- [x] Define category fixture type.
- [x] Create representative product fixtures.
- [x] Create representative brand fixtures.
- [x] Create representative category fixtures.
- [x] Build `/productos` dual-entry page.
- [x] Build product/category browsing view.
- [x] Add Nuevo filter.
- [x] Add Usado Seleccionado filter.
- [x] Add Marca filter.
- [x] Build brand grid.
- [x] Build brand universe page.
- [x] Build image-led product cards.
- [x] Add subtle visual treatment for Usado Seleccionado.
- [x] Add empty states for filter combinations.

Acceptance criteria:

- [x] A reviewer can browse by product/category.
- [x] A reviewer can browse by brand.
- [x] New and used-selected product states are visible and understandable.
- [x] Product cards are visually strong enough to support the showroom concept.

### SPEC-005: Product Detail And CTA

Status: Complete

Goal: present a product as a premium object and make inquiry frictionless.

In scope:

- Product detail route or panel.
- Gallery.
- Short benefit.
- State, condition, and warranty.
- Optional 360/3D badges.
- Wishlist action.
- WhatsApp CTA with pre-filled message.

Out of scope:

- Real 360 viewer.
- Real 3D viewer.
- Real quote persistence.
- Seller routing backend.

Tasks:

- [x] Build product detail route or panel.
- [x] Render product gallery.
- [x] Render short benefit and description.
- [x] Render product state.
- [x] Render condition.
- [x] Render warranty.
- [x] Render optional 360 badge.
- [x] Render optional 3D badge.
- [x] Build WhatsApp URL helper using fixture data.
- [x] Add Hablar con asesor CTA.
- [x] Add Agregar a wishlist action.
- [x] Add responsive detail layout.

Acceptance criteria:

- [x] A reviewer can open a product and understand why it is desirable.
- [x] WhatsApp opens with a product-specific pre-filled message.
- [x] 360/3D are communicated as future-ready without implying full functionality.

### SPEC-006: Services Showroom

Status: Complete

Goal: validate the parallel services world with a sober, professional visual treatment.

In scope:

- Service fixture data.
- `/servicios` route.
- Service cards.
- Service detail route or panel.
- Benefits.
- Geographic scope.
- Service-specific CTA.

Out of scope:

- Complex quote builder.
- Backend service management.
- Long corporate content pages.

Tasks:

- [x] Define service fixture type.
- [x] Create fixtures for Mudanzas.
- [x] Create fixtures for Distribucion B2B.
- [x] Create fixtures for Logistica Integral.
- [x] Create fixtures for Transporte Especializado.
- [x] Build services listing route.
- [x] Build large visual service cards.
- [x] Build service detail route or panel.
- [x] Render benefits.
- [x] Render geographic scope.
- [x] Add service-specific WhatsApp CTA.
- [x] Tune visual tone to feel more corporate than products.

Acceptance criteria:

- [x] A reviewer understands the service offering without reading a long page.
- [x] Services feel related to products but more sober and trust-oriented.
- [x] Each service can trigger a relevant inquiry CTA.

### SPEC-007: Purpose Page

Status: Complete

Goal: include the Fabimar purpose message without making it mystical or heavy.

In scope:

- `/proposito` route.
- Brief manifesto copy.
- Human Awakening reference.
- Link back to product/service paths.

Out of scope:

- Long institutional microsite.
- Blog or content feed.
- CMS editing.

Tasks:

- [x] Draft concise purpose page fixture copy.
- [x] Build purpose route.
- [x] Add visual layout consistent with the home page.
- [x] Reference Human Awakening in grounded language.
- [x] Add links back to Productos and Servicios.

Acceptance criteria:

- [x] The page supports the brand concept without distracting from conversion.
- [x] The language feels human, calm, and non-technical.

## STAGE-3: Conversion Simulation And Demo Readiness

### SPEC-008: Wishlist And Quote Simulation

Status: Not started

Goal: demonstrate the quote pathway without backend persistence.

In scope:

- Local wishlist state.
- `/wishlist` route.
- Add/remove products.
- Simulated quote request CTA.
- Optional non-persistent contact form UI.

Out of scope:

- User accounts.
- Stored quote requests.
- Email notifications.
- Seller dashboards.

Tasks:

- [ ] Choose local state approach for wishlist.
- [ ] Store selected products locally.
- [ ] Add remove-from-wishlist behavior.
- [ ] Build wishlist route.
- [ ] Show selected product summary.
- [ ] Add simulated quote request CTA.
- [ ] Add optional contact form UI without persistence.
- [ ] Add empty wishlist state.
- [ ] Add copy explaining human follow-up.

Acceptance criteria:

- [ ] A reviewer can add products to a wishlist.
- [ ] A reviewer can understand how wishlist becomes a quote conversation later.
- [ ] No backend dependency exists.

### SPEC-009: Polish, Performance, And Accessibility

Status: Not started

Goal: make the MVP credible enough for stakeholder review.

In scope:

- Responsive pass.
- Image loading pass.
- Accessibility pass.
- Basic SEO metadata.
- Light interaction polish.
- Build validation.

Out of scope:

- Full automated test suite.
- Production observability.
- Advanced animation.

Tasks:

- [ ] Audit all MVP routes on mobile.
- [ ] Audit all MVP routes on desktop.
- [ ] Optimize image sizes and loading behavior.
- [ ] Add empty states for missing or filtered content.
- [ ] Add route metadata.
- [ ] Check keyboard navigation.
- [ ] Check heading hierarchy.
- [ ] Check alt text.
- [ ] Check color contrast.
- [ ] Add restrained transitions where useful.
- [ ] Run lint.
- [ ] Run typecheck.
- [ ] Run production build.

Acceptance criteria:

- [ ] The MVP feels intentional and smooth in review.
- [ ] Core navigation works without a mouse.
- [ ] Build, lint, and typecheck pass.

### SPEC-010: Demo Deployment

Status: Not started

Goal: make the MVP available for review if a shared URL is needed.

In scope:

- Static frontend deployment.
- Minimal AWS hosting if needed.
- Basic deployment notes.

Out of scope:

- Backend deployment.
- Production-grade CI/CD.
- Multi-region hosting.
- WAF or advanced security services.

Tasks:

- [ ] Decide whether deployment is required for review.
- [ ] Choose deployment target.
- [ ] Build static frontend.
- [ ] Deploy static assets if required.
- [ ] Document demo URL and deployment command.
- [ ] Smoke test deployed routes.

Acceptance criteria:

- [ ] Stakeholders can access the MVP without a local development environment if deployment is required.
- [ ] The deployed version matches the local build.

## STAGE-4: Post-MVP Backend Planning

### SPEC-011: Backend Readiness Assessment

Status: Not started

Goal: decide which backend pieces are worth building after stakeholders approve the frontend direction.

In scope:

- Review MVP feedback.
- Identify real content management needs.
- Decide persistence requirements.
- Decide minimum AWS backend slice.
- Prioritize backoffice capabilities.

Out of scope:

- Building backend services during the frontend MVP.
- Enterprise-scale infrastructure.
- Multi-region or high-availability architecture.

Tasks:

- [ ] Review stakeholder feedback from MVP.
- [ ] Decide whether product content needs admin editing immediately.
- [ ] Decide whether quote requests need persistence immediately.
- [ ] Decide whether seller routing is manual or system-managed.
- [ ] Decide whether media uploads need an admin flow.
- [ ] Define smallest useful backend API slice.
- [ ] Define smallest useful RDS PostgreSQL schema.
- [ ] Define deployment and backup needs for single-region production.

Acceptance criteria:

- [ ] Backend work is justified by validated MVP needs.
- [ ] The first backend slice is smaller than the full architecture blueprint.

## Change Control

When project scope changes:

- Update the relevant spec before implementation.
- Add new tasks under the relevant spec rather than hiding work in code.
- If a task does not fit any spec, create a new spec or explicitly mark it out of scope.
- Keep [mvp-roadmap.md](mvp-roadmap.md) as the milestone summary, but use this file as the detailed execution tracker.

## Completion Tracking

Use these status labels next to spec headings when work begins:

- `Status: Not started`
- `Status: In progress`
- `Status: Blocked`
- `Status: Complete`

Do not mark a spec complete until every task and acceptance criterion under that spec is checked.
