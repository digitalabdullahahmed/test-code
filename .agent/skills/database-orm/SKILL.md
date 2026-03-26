---
name: database-orm
description: Design, implement, migrate, review, and optimize production-grade database and ORM systems. Use this for PostgreSQL or MySQL schema design, SQL constraints, indexes, transactions, migrations, seeders, relationships, Prisma, Eloquent ORM, data integrity, performance tuning, security hardening, backup and restore planning, and database testing.
---

# Database & ORM

Use this skill whenever work touches schema, persistence, SQL behavior, migrations, seed data, ORM models, query performance, or data integrity.

Project target defaults:
- database engine: `PostgreSQL` preferred unless the project explicitly chooses `MySQL`
- Node.js ORM default: `Prisma`
- Laravel ORM default: `Eloquent`

For this repository's backend direction, prefer:
- `PostgreSQL`
- `Prisma`

Only choose differently if the project or user explicitly requires it.

## Primary outcomes

Build a persistence layer that is:
- correct
- explicit
- rollback-safe
- secure
- observable
- scalable enough for expected load
- easy to extend without data corruption

## Before writing code

1. Inspect the existing module boundaries, domain language, and aggregate ownership.
2. Determine the source of truth for identifiers, timestamps, soft deletes, tenant scoping, and audit requirements.
3. Verify database and ORM version details from official docs when behavior may be version-sensitive.
4. Decide engine and ORM based on project stack:
- NestJS or Node.js: default to `Prisma`
- Laravel or PHP: default to `Eloquent`
5. Define expected cardinality, write volume, read volume, retention, and consistency requirements before creating tables.

## Core design rules

- Model the domain first, then encode it in schema and ORM.
- Use database constraints to enforce invariants whenever the database can enforce them safely.
- Keep naming consistent across tables, columns, indexes, migrations, and ORM models.
- Prefer explicit join tables over magical many-to-many abstractions when extra metadata may be needed later.
- Avoid premature denormalization, but do not ignore clear read-path bottlenecks.
- Keep migrations deterministic and reviewable.
- Treat schema changes as production changes, not local-only edits.

## Engine selection

Use `PostgreSQL` by default when:
- the project is new
- rich indexing is useful
- JSONB, partial indexes, or advanced SQL features are likely useful
- predictable transactional behavior matters

Use `MySQL` when:
- the environment or organization standard requires it
- the hosting platform strongly prefers it
- ecosystem compatibility depends on it

Do not switch engines casually after schema growth begins.

## ORM selection

Use `Prisma` when:
- the stack is Node.js or NestJS
- you want explicit schema, generated client types, and clear migrations

Use `Eloquent` when:
- the stack is Laravel
- you need Laravel-native model, scope, cast, and factory behavior

Do not mix multiple ORMs in the same bounded context unless there is a hard reason.

## Schema design

Every production-grade schema should deliberately define:
- primary keys
- foreign keys
- nullability
- uniqueness
- defaults
- check constraints when supported and useful
- indexes aligned to real query paths
- audit timestamps
- delete behavior

Preferred defaults:
- use `uuid` or `ulid` when cross-system merges, external exposure, or distributed generation matter
- use integer keys only when the operational tradeoff is justified and consistent
- include `created_at` and `updated_at`
- add `deleted_at` only when soft delete is truly needed

Do not:
- use nullable columns where absence is not a real state
- rely on ORM validation alone for integrity
- create foreign-key-like columns without actual referential constraints unless there is a documented reason

## Relationships

Support and model all common relationship types correctly:

- one-to-one
- one-to-many
- many-to-many
- polymorphic only when the stack and domain justify the complexity
- self-referential hierarchies

Relationship rules:
- one-to-one should usually be enforced with a unique foreign key
- one-to-many should have clear ownership and delete/update semantics
- many-to-many should usually use an explicit pivot or join table
- join tables may later evolve into full entities, so name them cleanly
- avoid hidden cascade behavior that can delete critical data unexpectedly

## Transactions and consistency

Use transactions for:
- multi-step writes that must succeed or fail together
- balance or inventory style operations
- auth/session changes with multiple dependent writes
- workflow state transitions that must remain coherent

Rules:
- keep transactions short
- do not put long remote calls inside transactions
- use row locking or concurrency controls when race conditions matter
- document retry expectations for serialization or deadlock failure paths

When the architecture requires eventual consistency, make it explicit with outbox or event patterns instead of accidental inconsistency.

## Migrations

Treat migrations as production artifacts.

Required migration standards:
- one concern per migration
- descriptive names
- forward migration reviewed before execution
- rollback considered even if down migration is not always possible
- no manual production hotfixes without corresponding migration artifacts

Safe migration practices:
- expand and contract for risky changes
- add nullable column first, backfill, then enforce not-null later
- rename with compatibility steps when downtime is unacceptable
- batch large backfills
- measure lock impact for destructive or heavy operations

Never:
- rewrite old committed migrations casually
- combine many unrelated schema changes in one migration
- assume local SQLite behavior matches PostgreSQL or MySQL production behavior

## Seeders and fixtures

Use seeders for:
- required reference data
- local development bootstrapping
- test fixtures when appropriate

Rules:
- seeders must be idempotent where feasible
- separate reference seed data from demo or fake data
- do not depend on seeders for production data repair unless explicitly building an operational script
- keep secrets out of seed files

Reference data examples:
- roles
- permissions
- countries or currencies if the product truly needs them
- feature flags only if bootstrapping requires it

## Query design

Optimize for correctness first, then known query paths.

Rules:
- avoid `SELECT *` in performance-sensitive paths
- load only needed columns
- paginate lists
- index foreign keys and common filters
- review sorting patterns before adding indexes
- avoid N+1 query patterns
- use batching or eager loading intentionally
- separate command and query concerns when a use case becomes complex

Use raw SQL deliberately when the ORM makes a critical query unclear or inefficient. Document why.

## Indexing

Indexes must be tied to actual query patterns.

Common index candidates:
- foreign keys
- unique business identifiers
- lookup columns used in `WHERE`
- common sort columns
- composite filters used together
- partial indexes for skewed query patterns where supported

Avoid:
- over-indexing write-heavy tables
- duplicate indexes
- indexes added only because a column "looks important"

After adding indexes:
- inspect query plans
- verify improvement against expected workload

## Data integrity

Use the database to enforce:
- uniqueness
- referential integrity
- valid state transitions where constraints can express them
- tenant scoping keys where applicable

Use application rules to enforce:
- complex business workflows
- cross-aggregate policies
- authorization-sensitive domain logic

Integrity checklist:
- every foreign key has deliberate delete behavior
- business-unique fields have unique constraints where required
- enum or status values are controlled
- money and quantity fields use safe types
- timestamps use consistent timezone handling

## Type choices

Use correct types deliberately:
- money: decimal or numeric, never floating point
- booleans: real boolean type
- timestamps: timezone-aware strategy with consistent serialization rules
- JSON: only when structure is legitimately variable
- enums: use engine-native enum only when lifecycle is stable, otherwise prefer checked text pattern or reference table

## Security

Database and ORM security standards:
- parameterize queries
- never concatenate untrusted input into SQL
- apply least privilege for database users
- separate migration credentials from app runtime credentials when possible
- encrypt secrets at rest when the platform supports it
- avoid exposing internal IDs if the threat model says not to
- mask or exclude sensitive fields from logs
- hash secrets and tokens, do not store them in plaintext when avoidable
- define retention and deletion rules for personal data

For sensitive domains:
- consider column-level encryption or application-level encryption where justified
- document key management strategy
- document backup exposure risk

## Observability

At minimum, support:
- query logging in safe, non-sensitive form
- slow query visibility
- migration history visibility
- failure alerts for critical migration or connection issues
- metrics for pool exhaustion, latency, and error rates

Do not log raw passwords, tokens, API keys, or unredacted PII.

## Backup, restore, and operational safety

Production database work is incomplete without operational thinking.

Plan for:
- automated backups
- restore testing
- migration rollback or mitigation strategy
- point-in-time recovery if the system justifies it
- retention policy
- data archival strategy for high-growth tables

At minimum, document:
- backup frequency
- restore owner
- restore validation approach
- migration rollout and rollback approach

## Multi-tenant and soft-delete concerns

If the product is multi-tenant:
- make tenant boundaries explicit in schema
- index tenant-scoped queries
- enforce tenant scoping at application and query layers
- never rely on UI filtering for tenant isolation

If soft deletes are used:
- document why
- ensure all queries account for them
- add supporting indexes if soft-deleted rows become numerous
- define restore and purge behavior

## ORM implementation guidance

### Prisma

Use Prisma for NestJS or Node.js projects by default.

Required standards:
- keep `schema.prisma` clear and grouped by bounded context when feasible
- use named relations where ambiguity exists
- model uniqueness and indexes explicitly
- use generated types instead of re-declaring database shapes
- use transactions for coordinated writes
- keep raw SQL isolated and documented

Preferred Prisma practices:
- repository or data-access abstraction where the codebase benefits from boundary isolation
- explicit select/include usage
- migration review before applying
- separate seed logic from schema logic

### Eloquent

Use Eloquent for Laravel projects.

Required standards:
- keep models focused
- define guarded or fillable policy deliberately
- use casts intentionally
- define relationships explicitly
- keep heavy query logic out of controllers
- use database transactions for coordinated writes
- use factories and seeders cleanly

Preferred Eloquent practices:
- use scopes for reusable query constraints
- keep model events limited and understandable
- do not hide critical write logic in magical side effects

## Testing requirements

Do not mark database work complete without tests.

Minimum coverage:
- schema and migration application succeeds on a clean database
- rollback or mitigation path is validated for risky changes
- key constraints behave as expected
- relationship queries behave correctly
- transactions preserve consistency on failure
- seeders produce expected baseline records
- indexes or query strategy are validated for critical performance-sensitive paths
- tenant or ownership scoping is tested if applicable

Test at multiple levels:
- repository or data-access unit tests where useful
- integration tests against a real database engine
- end-to-end tests for critical persistence flows

Avoid pretending an in-memory substitute fully validates PostgreSQL or MySQL behavior.

## Delivery checklist

Before finishing, ensure the implementation includes:
- reviewed schema changes
- migrations
- seeders if needed
- indexes aligned to query paths
- constraints enforcing real invariants
- transaction handling where required
- query pagination where needed
- sensitive-field handling
- operational notes for risky migrations
- tests
- updated documentation for new tables and relationships when complexity warrants it

## Review checklist

Reject or fix these problems:
- missing foreign keys where they should exist
- nullable columns without a real nullable meaning
- plaintext secrets or tokens in the database
- floating point used for money
- many-to-many relationships without deliberate join table design
- missing indexes on obvious lookup paths
- over-indexed write-heavy tables
- giant migrations mixing unrelated concerns
- ORM models doing business orchestration that belongs elsewhere
- hidden N+1 query behavior
- migrations with unsafe destructive changes and no rollout plan
- seeders that are not deterministic enough for their purpose
- tenant data leakage risk
- no backup or restore thinking for production-critical data

## When to load references

Read `references/engine-selection.md` for PostgreSQL vs MySQL guidance.
Read `references/prisma.md` when implementing or reviewing Prisma.
Read `references/eloquent.md` when implementing or reviewing Laravel Eloquent.
