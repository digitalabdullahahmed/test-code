---
name: routing-navigation-middleware-guards
description: Design route access flow for Next.js frontends. Use this for middleware, navigation guards, redirects, protected route groups, public/private route boundaries, auth-aware routing, and maintainable navigation control.
---

# Routing Navigation Middleware Guards

Use this skill whenever the task affects protected routing, middleware, redirects, or navigation control.

## Core rules

- keep route access flow explicit
- use middleware only for logic that belongs at the routing boundary
- keep public, auth, and dashboard sections clearly separated
- avoid scattering guard logic across unrelated components

## Recommended structure

- `app/(public)/`
- `app/(auth)/`
- `app/(dashboard)/`
- `middleware.ts` for route-entry decisions when needed

## Review checklist

Reject or fix:
- ad hoc route protection logic in many components
- no separation between public and private route groups
- redirects with unclear ownership
- middleware doing unrelated business logic
