---
name: frontend-api-client-contracts
description: Build typed and maintainable API consumption layers for Next.js frontends. Use this for centralized fetch or axios wrappers, contract typing, response parsing, error normalization, and clean frontend consumption of backend APIs.
---

# Frontend API Client Contracts

Use this skill whenever the task affects API wrappers, frontend contract typing, or backend response consumption.

## Core rules

- centralize API access patterns
- keep auth handling explicit
- normalize error handling
- avoid raw fetch calls scattered across modules

## Recommended structure

- `lib/api-client.ts`
- `lib/fetcher.ts`
- feature-level service files inside `modules/<feature>/services/`

## Review checklist

Reject or fix:
- duplicated fetch setup across modules
- inconsistent response parsing
- no typed contract expectations
- auth headers or cookie logic scattered everywhere
- feature code coupled directly to low-level HTTP details
