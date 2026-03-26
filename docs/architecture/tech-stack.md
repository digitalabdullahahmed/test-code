# Tech Stack

## Status model

This file separates:
- `current`: already scaffolded or committed in the repository
- `planned`: approved technical direction that may not be fully implemented yet

## Backend

### Current

- `NestJS 11`
- `REST API`
- modular-monolith project structure
- `class-validator`
- `class-transformer`

### Planned

- `brocoders/nestjs-boilerplate` patterns as implementation baseline
- `PostgreSQL` as the primary relational database
- `Prisma` as the ORM and migration layer
- `AdminJS` for internal administration and operational backoffice screens
- structured logging, audit trails, health checks, and observability modules
- OpenAPI and generated API documentation

### Backend conventions

- thin controllers
- explicit application services or use cases
- strong DTO validation
- structured error handling
- isolated infrastructure concerns
- transaction and migration discipline

## Frontend

### Current

- `Next.js 16`
- `React 19`
- `App Router`
- route groups
- metadata and SEO scaffold

### Planned

- feature-based `modules/` organization
- shared `components/ui` design system
- centralized API client layer
- auth-aware route protection and session integration
- structured loading, error, and empty states
- Storybook for component documentation when UI surface grows

### Frontend conventions

- keep `app/` route-only and thin
- prefer Server Components first
- use `use client` only when required
- centralize API access and contracts
- design for accessibility, performance, and responsive behavior from the start

## Shared workspace

### Current

- `pnpm` workspaces
- `turbo`
- shared packages for:
  - contracts
  - types
  - utilities

### Planned

- shared lint and formatting config packages
- stronger test tooling across apps
- CI quality gates
- container and local-service orchestration

## Search and documentation tooling

### Current

- local rules and skills system under `.codex/`
- `Context7` usage rules and setup documentation

### Planned

- active `Context7 MCP` setup on the local coding agent
- library research routed through `Context7` before generic web search

## Decision notes

- `PostgreSQL + Prisma` is the default backend data direction unless a future product constraint clearly requires another choice
- `AdminJS` is the preferred admin panel direction for internal tools unless product-specific UX requires a custom Next.js backoffice
- the frontend and backend should mirror each other conceptually through feature and module boundaries
