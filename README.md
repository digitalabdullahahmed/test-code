# Workspace

Production-oriented monorepo scaffold for a serious product built with:

- `Next.js 16` frontend
- `NestJS 11` backend
- shared workspace packages for contracts, types, and utilities

This repository is designed to grow into a production-grade system with strong architecture, testing discipline, documentation, and operational safety.

## What this repo is for

- building a modular `NestJS` backend
- building a high-quality `Next.js` frontend
- sharing stable contracts and types across apps
- enforcing strong engineering standards through rules, skills, and workflows

## Primary stack

### Backend

- framework: `NestJS`
- style: `RESTful API`
- architecture: `modular monolith`
- data direction: `PostgreSQL + Prisma`
- admin direction: `AdminJS` for internal administration when needed
- baseline inspiration: `brocoders/nestjs-boilerplate`

### Frontend

- framework: `Next.js`
- router: `App Router`
- rendering direction: `Server Components first`
- feature organization: module-based frontend structure

### Workspace

- package manager: `pnpm`
- build orchestration: `turbo`

## Repository structure

- `apps/web`: Next.js frontend
- `apps/api`: NestJS backend
- `packages/contracts`: shared API contract types
- `packages/types`: shared cross-app types
- `packages/utils`: shared framework-agnostic utilities
- `.codex/skills`: local engineering skills
- `.codex/rules`: local engineering rules
- `docs/`: architecture and operational documentation

## Core documents

- [PROJECT_VISION.md](/Client Projects/test-code/PROJECT_VISION.md): project purpose, engineering direction, and product intent
- [overview.md](/Client Projects/test-code/docs/architecture/overview.md): architecture summary
- [tech-stack.md](/Client Projects/test-code/docs/architecture/tech-stack.md): backend, frontend, tooling, and planned stack decisions
- [context7-mcp.md](/Client Projects/test-code/docs/context7-mcp.md): `Context7` documentation workflow
- [AGENTS.md](/Client Projects/test-code/AGENTS.md): central execution and quality rules for the coding agent

## Agent workflows

Repository-specific execution workflows live in `.agents/workflows/`.

- `project-implementation.md`: default disciplined implementation workflow
- `bugfix-diagnose-first.md`: bug investigation workflow that stops after root-cause analysis and proposed fix
- `bugfix-diagnose-and-fix.md`: bug investigation plus direct implementation workflow
- `feature-brainstorm-plan-first.md`: step-by-step feature planning workflow that waits for approval
- `feature-brainstorm-and-implement.md`: step-by-step feature planning plus direct implementation workflow
- `security-audit.md`: professional security review workflow
- `seo-audit.md`: deep SEO review workflow
- `frontend-audit.md`: comprehensive frontend review workflow
- `code-review-refactor.md`: findings-first code review and refactor review workflow
- `documentation.md`: strong documentation writing and update workflow
- `test-implementation.md`: risk-based test design and implementation workflow

## Commands

- `pnpm install`
- `pnpm dev`
- `pnpm dev:web`
- `pnpm dev:api`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm context7:setup`
- `pnpm context7:mcp`

## Engineering principles

- keep architecture explicit and modular
- keep `app/` thin in the frontend and move feature logic into modules
- keep NestJS modules cohesive and avoid dumping logic into shared buckets
- prefer explicit contracts, validation, and structured errors
- verify changes before claiming completion
- update documentation when behavior or decisions change

## Current state

The repository currently contains the monorepo scaffold, initial `NestJS` and `Next.js` app foundations, SEO scaffold for the frontend, and a strong local rules-and-skills system for guided implementation.
