---
name: frontend-auth-session-permission-integration
description: Integrate authentication, sessions, and permission-aware UI in Next.js frontends. Use this for login flows, cookie-based sessions, auth state handling, protected UX, role-aware rendering, session expiry, and frontend integration with backend auth systems.
---

# Frontend Auth Session Permission Integration

Use this skill whenever the task affects login UX, session handling, permission-aware UI, or frontend auth integration.

## Core rules

- backend remains the source of truth
- prefer secure cookie-based session or token strategies aligned with backend auth
- distinguish unauthenticated from unauthorized states
- handle session expiry gracefully

## Required concerns

- login and logout UX
- redirect-after-login
- current-user loading behavior
- permission-aware rendering
- session expiry and refresh behavior
- safe logout state clearing

## Review checklist

Reject or fix:
- secrets exposed in client code
- frontend-only authorization assumptions
- no session expiry handling
- unclear loading state around current user
- permission checks mixed haphazardly across components
