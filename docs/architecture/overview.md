# Architecture Overview

## Monorepo

- `apps/web` owns the Next.js frontend.
- `apps/api` owns the NestJS backend.
- `packages/*` owns shared contracts, types, and utilities.

## Frontend

- App Router for routing and layout composition.
- Feature modules in `src/modules`.
- Shared UI primitives in `src/components/ui`.

## Backend

- Modular-monolith structure.
- Thin HTTP layer and explicit application flows.
- Platform concerns remain separate from domain modules.
