---
name: frontend-coding-standards
description: Enforce professional coding standards for React and Next.js frontends. Use this for naming, file organization, readability, comment quality, hook usage, component clarity, maintainability, and implementation-level frontend best practices.
---

# Frontend Coding Standards

Use this skill whenever writing or reviewing frontend code quality in React or Next.js.

Project defaults:
- framework: `Next.js App Router`
- component model: `React`
- structure style: `feature-based modules`

## Primary outcomes

Write frontend code that is:
- easy to scan
- easy to extend
- easy to review
- hard to misuse accidentally

## Core rules

- prefer clarity over cleverness
- keep names aligned to product language
- keep files focused
- keep state ownership obvious
- comment only when preserving reasoning

## Naming standards

- files and folders use kebab-case
- React components use PascalCase
- hooks start with `use`
- handlers use verbs like `handleSubmit`
- booleans read like state or questions
- avoid vague names like `helper`, `utils`, `manager`, `commonComponent`

## Code structure rules

- route files stay thin
- feature logic belongs in `modules/`
- shared UI belongs in `components/ui`
- shared infrastructure belongs in `lib/` or `config/`
- avoid giant components that mix data, mutation, rendering, and validation

## Comment standards

- comment non-obvious UI logic
- comment tricky auth, caching, or rendering tradeoffs
- do not narrate obvious JSX or state assignments

## Review checklist

Reject or fix:
- vague names
- giant components
- route files with embedded feature logic
- comment noise
- hidden state ownership
- unnecessary `use client`
