# Project Vision

## Purpose

This repository is the engineering foundation for a high-standard product built with:
- `NestJS` for the backend
- `Next.js` for the frontend
- a shared monorepo platform for contracts, types, and utilities

The goal is to build a production-grade system that is:
- modular
- maintainable
- secure
- scalable
- SEO-aware where public pages matter
- easy to evolve without structural rewrites

## Product direction

This project is intended to operate like a serious software product, not a prototype.

Core expectations:
- clean modular architecture
- explicit boundaries between frontend, backend, and shared code
- strong authentication and authorization
- reliable data and migration discipline
- high documentation quality
- automated verification before completion

## Engineering vision

The system should feel like it was built by an experienced engineering team.

This means:
- backend modules are cohesive and predictable
- frontend features are modular and route boundaries stay thin
- contracts are typed and version-safe
- naming is clear
- comments are rare but useful
- documentation explains decisions, not obvious code
- changes are tested and checked for follow-on impact

## Primary technical direction

### Backend

- framework: `NestJS`
- architecture: `modular monolith`
- API style: `RESTful API`
- baseline inspiration: `brocoders/nestjs-boilerplate`
- database direction: `PostgreSQL`
- ORM direction: `Prisma`
- admin/backoffice direction: `AdminJS` when an internal administration surface is required

### Frontend

- framework: `Next.js`
- router: `App Router`
- rendering approach: `Server Components first`
- feature organization: feature-based modules
- UI direction: shared design system plus module-owned feature components

### Workspace

- package manager: `pnpm`
- build orchestration: `turbo`
- shared packages: contracts, types, utilities

## Documentation model

This repo uses a simple documentation hierarchy:

- `README.md`: quick entry point, setup, structure, commands
- `PROJECT_VISION.md`: product and engineering vision
- `docs/architecture/overview.md`: high-level architecture summary
- `docs/architecture/tech-stack.md`: chosen stack, rationale, current and planned tools
- `docs/context7-mcp.md`: external documentation lookup workflow

## Delivery principles

- do not trade long-term structure for short-term speed
- prefer additive, safe changes over fragile shortcuts
- research current framework and package behavior before important decisions
- preserve architecture in every change
- verify changes before claiming completion
