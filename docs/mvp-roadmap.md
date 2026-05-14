# Fabimar MVP Frontend Roadmap

## MVP Intent

The first stage is not the full Fabimar platform. It is a visually stunning frontend MVP that validates the premium showroom concept, navigation model, and WhatsApp-led conversion path.

The MVP should feel close to the final brand experience while keeping implementation light:

- Vite React app.
- Static or local JSON content.
- No production backend.
- No real admin/backoffice.
- No authentication.
- No database.
- No PDF generator.
- No real 360 or 3D viewer unless a simple visual placeholder is needed.

The goal is to make stakeholders feel the site, review the product/service structure, and decide what deserves backend investment.

Detailed execution should be tracked in [spec-driven-development.md](spec-driven-development.md). This roadmap is the milestone summary; the spec file is the source of truth for development tasks and acceptance criteria.

## MVP Success Criteria

- The home page immediately communicates a premium, calm, image-led brand.
- Users can understand that Fabimar has two main worlds: Productos and Servicios.
- Users can browse a small representative product catalogue by category and brand.
- Users can see the distinction between Nuevo and Usado Seleccionado.
- Users can open a product detail experience with gallery, benefit, state, warranty, and CTA.
- Users can browse service cards and open a service detail page.
- WhatsApp CTAs open pre-filled messages.
- The app performs well on mobile and desktop.
- The implementation is ready to receive real API data later without rewriting the UI.

## Explicit Non-Goals For MVP

- Full backoffice CRUD.
- Seller login.
- Customer login.
- Real quote workflow persistence.
- PDF catalogue generation.
- Production analytics dashboard.
- Production PostgreSQL schema implementation.
- Lambda/API Gateway buildout.
- Real media processing pipeline.
- Full 360/3D upload and rendering workflow.

## Milestone 0: Product And Visual Foundation

Status: Not started

Purpose: lock the lightweight scope and visual direction before building screens.

Tasks:

- [ ] Select the MVP pages from the requirements.
- [ ] Define the minimum demo catalogue: product categories, products, brands, and services.
- [ ] Collect or choose placeholder imagery with the right premium tone.
- [ ] Define the voice rules: short, calm, human, non-technical copy.
- [ ] Decide whether MVP content lives in local JSON, TypeScript fixtures, or markdown.
- [ ] Decide hosting target for the demo: local only, S3/CloudFront, or another temporary preview.

Acceptance check:

- [ ] A reviewer can look at the selected scope and understand what is intentionally in or out.

## Milestone 1: App Shell And Design System

Status: Not started

Purpose: create the visual base that every screen will share.

Tasks:

- [ ] Initialize Vite React with TypeScript.
- [ ] Add routing.
- [ ] Establish typography scale, spacing tokens, colors, and image ratios.
- [ ] Create base layout components: page shell, header, footer, section, grid, card, drawer/panel, CTA button.
- [ ] Create responsive behavior for mobile-first browsing.
- [ ] Add basic accessibility defaults: semantic landmarks, focus states, alt text conventions.

Acceptance check:

- [ ] A blank page using the shell already feels aligned with the Apple/Patagonia/Tesla-style calm premium direction.

## Milestone 2: Home Experience

Status: Not started

Purpose: make the first impression strong and clarify the two primary paths.

Tasks:

- [ ] Build the home hero with dominant image and manifesto phrase.
- [ ] Add two clear entry cards: Productos and Servicios.
- [ ] Add a subtle Proposito block or link.
- [ ] Add a contact/WhatsApp entry point.
- [ ] Tune mobile layout so the two doors remain obvious and tactile.

Acceptance check:

- [ ] A first-time visitor understands within seconds where to go for products or services.

## Milestone 3: Product Showroom

Status: Not started

Purpose: validate the product browsing model and product detail presentation.

Tasks:

- [ ] Create product fixture data with category, brand, state, condition, warranty, benefit, images, and CTA message.
- [ ] Build `/productos` with dual entry: Explorar por Productos and Explorar por Marcas.
- [ ] Build product/category browsing with filters for Nuevo, Usado Seleccionado, and Marca.
- [ ] Build brand grid.
- [ ] Build brand universe page with logo, description, and products.
- [ ] Build product cards with image-led layout and subtle used-selected differentiation.
- [ ] Build product detail page or drawer with gallery, short benefit, state, warranty, and WhatsApp CTA.
- [ ] Add simple 360/3D badges for products that would support future rich media.

Acceptance check:

- [ ] A reviewer can browse by product and by brand, find a demo product, understand its status, and trigger a WhatsApp inquiry.

## Milestone 4: Services Showroom

Status: Not started

Purpose: validate the parallel services world without making it text-heavy.

Tasks:

- [ ] Create service fixture data for Mudanzas, Distribucion B2B, Logistica Integral, and Transporte Especializado.
- [ ] Build `/servicios` with large visual service cards.
- [ ] Build service detail route or panel with image, description, benefits, geographic scope, and CTA.
- [ ] Make services feel more sober and corporate than products while staying within the same brand system.
- [ ] Add WhatsApp/contact CTA messages per service.

Acceptance check:

- [ ] A reviewer can understand the service offering without reading a long corporate page.

## Milestone 5: Lightweight Lead And Wishlist Simulation

Status: Not started

Purpose: demonstrate the conversion idea without backend persistence.

Tasks:

- [ ] Implement WhatsApp deep links with pre-filled messages.
- [ ] Add a local wishlist using browser state or local storage.
- [ ] Add an "Agregar a wishlist" action on product details.
- [ ] Build `/wishlist` showing selected products and a simulated quote request CTA.
- [ ] Add a simple contact form UI that does not persist, or stores only locally for demo purposes.
- [ ] Add clear copy explaining the human follow-up model.

Acceptance check:

- [ ] A reviewer can add products to a wishlist and understand how that becomes a quote conversation later.

## Milestone 6: Polish, Performance, And Demo Readiness

Status: Not started

Purpose: make the MVP feel intentional and credible enough for stakeholder review.

Tasks:

- [ ] Audit mobile layouts across all MVP routes.
- [ ] Optimize image sizes and loading behavior.
- [ ] Add page transitions or micro-interactions only where they reinforce calm navigation.
- [ ] Add empty states and fallback states for filters.
- [ ] Add basic SEO metadata per route.
- [ ] Run accessibility checks for keyboard navigation, contrast, headings, and alt text.
- [ ] Run build, lint, and type checks.
- [ ] Deploy the demo if a preview environment is desired.

Acceptance check:

- [ ] The MVP is smooth enough to present as a high-confidence direction, even though the backend is not built yet.

## Backlog After MVP Approval

These items should remain outside the first frontend MVP unless explicitly pulled forward:

- Admin/backoffice CRUD.
- Cognito authentication.
- Seller management.
- Real quote persistence.
- API Gateway and Lambda services.
- Production RDS PostgreSQL database.
- S3 signed media uploads.
- PDF catalogue generation.
- Production analytics dashboard.
- 360 viewer.
- 3D viewer.
- Draft/publish workflow.

## Suggested Build Order

1. Milestone 0: Product and visual foundation.
2. Milestone 1: App shell and design system.
3. Milestone 2: Home experience.
4. Milestone 3: Product showroom.
5. Milestone 4: Services showroom.
6. Milestone 5: Lightweight lead and wishlist simulation.
7. Milestone 6: Polish, performance, and demo readiness.

This order keeps the brand impression and navigation model visible early, then layers product depth, service depth, and lightweight conversion behavior.
