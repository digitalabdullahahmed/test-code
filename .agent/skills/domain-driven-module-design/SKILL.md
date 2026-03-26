---
name: domain-driven-module-design
description: Design strong domain-focused backend modules for NestJS modular monoliths. Use this for aggregates, entities, value objects, policies, module boundaries, domain services, internal contracts, and long-term maintainable business logic structure.
---

# Domain Driven Module Design

Use this skill whenever the task affects business boundaries, aggregates, domain rules, or module ownership.

## Core rules

- Model business concepts explicitly.
- Keep aggregate boundaries deliberate.
- Put invariants close to the domain that owns them.
- Do not scatter important rules across controllers, DTOs, and repositories.

## Domain building blocks

- entities
- value objects
- policies
- domain services when entity methods are insufficient
- domain events when modules need decoupled reactions

## Review checklist

Reject or fix:
- unclear aggregate ownership
- invariants enforced only at controller level
- domain concepts flattened into generic CRUD code
- business rules spread across unrelated modules
