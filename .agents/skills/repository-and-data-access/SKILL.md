---
name: repository-and-data-access
description: Design and review data-access layers for NestJS backends. Use this for repository boundaries, Prisma data access, transactions, query composition, raw SQL escape hatches, persistence orchestration, and clean separation between application logic and storage concerns.
---

# Repository And Data Access

Use this skill whenever the task affects repositories, query design, transaction orchestration, or persistence boundaries.

## Core rules

- Keep persistence concerns out of controllers.
- Let application services coordinate cross-repository workflows.
- Keep repository responsibilities explicit.
- Use raw SQL only when it is clearer or more efficient than the ORM, and document why.

## Repository design

Repositories should:
- expose business-relevant persistence operations
- keep calling code insulated from storage details where useful
- return clear types
- avoid becoming giant generic CRUD dumpsters

## Transactions

Use transactions for multi-write consistency.

Rules:
- keep them short
- avoid remote calls inside them
- remember that one transaction runs on one connection, so independent expensive work inside it does not become magically parallel
- document duplicate and retry behavior where needed
- prefer nested write patterns for dependent relational writes when the ORM supports them cleanly

## Query quality

Rules:
- avoid N+1 queries
- paginate large reads
- select only needed fields
- use indexes aligned to the read path
- measure critical queries
- make connection and transaction usage predictable under load

## Review checklist

Reject or fix:
- persistence logic in controllers
- repositories with vague names and catch-all methods
- no transaction boundary for multi-write workflows
- raw SQL with no explanation
- query code that obviously over-fetches
- remote calls or retry loops hidden inside transaction scopes
