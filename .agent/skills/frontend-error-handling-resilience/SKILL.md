---
name: frontend-error-handling-resilience
description: Design resilient frontend failure handling for Next.js applications. Use this for route-level error boundaries, loading fallbacks, recoverable UX, retry behavior, degraded states, and clear handling of network, auth, and rendering failures.
---

# Frontend Error Handling Resilience

Use this skill whenever the task affects error states, retries, resilience, fallbacks, or degraded UX.

## Core rules

- users should see meaningful recovery paths
- route-level and feature-level failures should not collapse the whole app unnecessarily
- loading and error states must be designed together

## Required concerns

- `error.tsx`
- `loading.tsx`
- empty states
- retry behavior where appropriate
- session-expired handling
- safe degraded UX for failed network operations

## Review checklist

Reject or fix:
- blank screens
- silent failures
- no recoverable error UX
- inconsistent loading and error handling
- auth failures presented as generic unknown errors
