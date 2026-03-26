# Workspace

Production-oriented monorepo scaffold for:

- `Next.js 16` frontend with App Router and feature modules
- `NestJS 11` backend with modular-monolith foundations
- shared workspace packages for contracts, types, and utilities

## Apps

- `apps/web`: Next.js frontend
- `apps/api`: NestJS backend

## Packages

- `packages/contracts`: shared API contract types
- `packages/types`: shared cross-app types
- `packages/utils`: shared framework-agnostic utilities

## Commands

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`

## Architecture notes

- Keep `app/` thin in the frontend. Feature logic lives in `src/modules`.
- Keep NestJS modules cohesive. Platform concerns stay explicit.
- Use shared packages only for stable cross-app code.
