---
name: third-party-integrations
description: Design and implement reliable third-party integrations for NestJS backends. Use this for provider adapters, webhook handling, anti-corruption boundaries, retries, timeouts, provider error mapping, idempotent webhook processing, and integration reliability review.
---

# Third Party Integrations

Use this skill whenever the backend talks to external providers or consumes webhooks.

## Core rules

- Keep provider-specific logic behind explicit boundaries.
- Use timeouts and retry strategy deliberately.
- Make webhook handling idempotent and authenticated.
- Map provider failures into internal error semantics cleanly.

## Required concerns

- adapter boundaries
- timeout and retry strategy
- circuit-breaker thinking where justified
- webhook signature validation
- duplicate webhook protection
- provider error mapping
- observability for provider failures

## Review checklist

Reject or fix:
- provider SDK logic leaking across the codebase
- no timeout strategy
- no webhook authenticity checks
- duplicate webhook side effects
- weak failure visibility
