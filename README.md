# Fabimar 2026 MVP Workspace

Active spec: `SPEC-004: Product Showroom` (next). Completed: `SPEC-001`, `SPEC-002`, `SPEC-003`.

This repository starts as a frontend-only MVP for the Fabimar 2026 showroom. The app lives in `frontend/` and uses Vite, React, TypeScript, local fixture data, and route placeholders for the public MVP experience.

`backend/` and `infrastructure/` are reserved placeholders for later specs. Do not build backend, database, auth, admin, PDF generation, or AWS infrastructure during the frontend MVP.

Package management uses `pnpm` workspaces.

## Scripts

- `pnpm install` installs workspace dependencies.
- `pnpm dev` starts the local Vite server for `frontend/`.
- `pnpm build` runs TypeScript project checks and creates the static build.
- `pnpm lint` runs ESLint.
- `pnpm typecheck` runs TypeScript checks without emitting files.
- `pnpm preview` previews the production build.

## Manual Route Smoke Check

After installing dependencies, run `pnpm dev` and verify these routes render:

- `/`
- `/productos`
- `/productos/samsung-family-hub`
- `/marcas/samsung`
- `/servicios`
- `/servicios/mudanzas`
- `/proposito`
- `/wishlist`

This smoke check satisfies the `SPEC-001` manual verification step. Deeper product, service, wishlist, and visual polish behavior belongs to later specs.
