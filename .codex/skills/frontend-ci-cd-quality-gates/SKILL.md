---
name: frontend-ci-cd-quality-gates
description: Design and review CI/CD and quality gates for Next.js frontends. Use this for build verification, linting, tests, visual review steps, deployment safety, and automation that protects frontend quality and release confidence.
---

# Frontend CI CD Quality Gates

Use this skill whenever the task affects frontend automation, release quality, or deployment safety.

## Core rules

- frontend releases need meaningful gates
- build success alone is not enough
- quality automation should protect user-visible behavior

## Required concerns

- lint and typecheck
- unit and integration test gates
- e2e or smoke coverage where important
- build verification
- visual review or snapshot steps where justified
- deployment-safe environment handling

## Review checklist

Reject or fix:
- frontend shipped with no meaningful quality gates
- build pipeline with weak test coverage for critical UI
- visual regressions ignored in high-risk product surfaces
- deployment assumptions hidden in ad hoc scripts
