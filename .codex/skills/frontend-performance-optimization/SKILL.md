---
name: frontend-performance-optimization
description: Optimize React and Next.js frontend performance. Use this for bundle control, hydration cost, lazy loading, render cost review, image and font optimization, list performance, and practical speed improvements for App Router applications.
---

# Frontend Performance Optimization

Use this skill whenever the task affects frontend speed, bundle size, hydration, or rendering performance.

## Core rules

- Server Components first
- keep client bundles lean
- optimize known hot paths
- measure before and after when possible
- treat mobile constraints as the default performance target

## Required concerns

- `use client` scope
- lazy loading
- list rendering cost
- image and font optimization
- hydration cost
- third-party script weight
- cache and revalidation choices
- streaming and suspense boundaries

## Review checklist

Reject or fix:
- huge client component trees
- heavy dependencies with no justification
- unnecessary hydration
- poor image handling
- expensive list rendering
- unbounded third-party script cost
- unclear cache behavior that forces unnecessary refetching or staleness
