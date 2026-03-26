---
name: nextjs-app-architecture
description: Design production-grade Next.js App Router architecture. Use this for route groups, layouts, loading and error boundaries, metadata, app versus modules separation, thin route files, and modern Next.js 2026 architectural decisions.
---

# Next.js App Architecture

Use this skill whenever the task affects route structure, layouts, route groups, metadata, or App Router organization.

Project target:
- `Next.js App Router`
- `Server Components first`
- `feature-based modules`

## Official direction

Use current Next.js guidance:
- App Router, not `pages/`
- fetch data in Server Components by default
- keep `use client` boundaries narrow
- use `loading.tsx`, `error.tsx`, and `not-found.tsx`
- make caching and revalidation explicit

## Recommended structure

- `app/` for routing only
- `modules/` for feature logic
- `components/ui/` for shared UI primitives
- `lib/` for API clients, fetch helpers, auth helpers
- `config/` for env and runtime settings
- `styles/` for globals and tokens

## Route rules

- route files should mostly compose module exports
- keep business logic out of `app/`
- use route groups for public, auth, and dashboard sections
- use nested layouts deliberately
- attach metadata where it belongs

## Review checklist

Reject or fix:
- logic-heavy `app/` files
- missing route boundaries
- broad `use client` usage
- no loading or error handling
- layout duplication across route groups
