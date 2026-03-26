---
name: event-driven-internal-architecture
description: Design internal event-driven flows inside a NestJS modular monolith. Use this for domain events, application events, outbox patterns, decoupled module reactions, internal subscribers, and reliable event-driven coordination without premature microservices.
---

# Event Driven Internal Architecture

Use this skill whenever modules need decoupled reactions, internal events, or outbox-backed workflows.

## Core rules

- Use events to decouple modules, not to obscure business flow.
- Keep event names explicit and business-oriented.
- Prefer reliable event publication for important side effects.
- Use outbox patterns when delivery reliability matters.

## Required concerns

- event naming
- publisher ownership
- subscriber ownership
- delivery reliability
- duplicate handling
- observability

## Review checklist

Reject or fix:
- events used where direct orchestration is clearer
- vague event names
- no reliability thinking for important side effects
- hidden cross-module coupling through undocumented events
