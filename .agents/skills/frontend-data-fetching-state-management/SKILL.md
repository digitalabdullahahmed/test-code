---
name: frontend-data-fetching-state-management
description: Design modern data flow for Next.js frontends. Use this for Server Components, server-first fetching, TanStack Query, Zustand, URL state, cache strategy, and choosing the right state ownership and data-fetching approach in 2026-era Next.js.
---

# Frontend Data Fetching State Management

Use this skill whenever the task affects data fetching, cache behavior, server state, client state, or state ownership.

## Official direction

Prefer current Next.js practice:
- fetch in Server Components by default
- use client fetching only when interaction requires it
- keep caching and revalidation explicit
- use TanStack Query for complex client-side server-state cases
- use Zustand only for real shared client state

## State ownership rules

- local UI state stays local
- URL state for sharable filters and navigation state
- server state should not be duplicated into unrelated client state
- use global client state sparingly

## Review checklist

Reject or fix:
- unnecessary client fetching
- duplicated state sources
- React Query used where server rendering would be simpler
- Zustand used for trivial local state
- unclear cache strategy
