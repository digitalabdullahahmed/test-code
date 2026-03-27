---
name: nestjs-modular-monolith-architecture
description: Design, implement, and review production-grade NestJS modular monolith backends. Use this for module boundaries, folder and file naming, service and controller design, code quality rules, comments and documentation standards, scalability, performance, security foundations, testing strategy, observability, operational readiness, and long-term maintainability for RESTful backend systems.
---

# NestJS Modular Monolith Architecture

Use this skill whenever the task affects backend structure, module boundaries, code organization, service design, naming, comments, testability, scalability, performance, or operational quality in a NestJS backend.

Project target defaults:
- framework: `NestJS`
- architecture: `modular monolith`
- API style: `REST`
- database direction: `PostgreSQL` with `Prisma` unless explicitly changed
- starter baseline: `brocoders/nestjs-boilerplate`

## Primary outcomes

Build a backend that is:
- modular
- explicit
- secure by default
- easy to understand
- easy to extend
- operationally safe
- scalable enough for production growth
- testable at every important layer

## Before writing code

1. Inspect the current repository layout and existing conventions.
2. Identify bounded contexts, shared platform concerns, and cross-module dependencies.
3. Verify current NestJS and package guidance if APIs, lifecycle behavior, or integrations may have changed.
4. Decide what belongs in:
- platform or shared infrastructure
- domain modules
- integration adapters
- background processing
5. Define the ownership boundary for each module before writing files.

## Core architecture rules

- Build the system as a modular monolith, not as a tangled layered blob.
- Each module should own a clear business capability.
- Modules may collaborate, but boundaries must stay explicit.
- Prefer composition over hidden coupling.
- Keep shared code small, stable, and generic.
- Do not move domain-specific logic into `common` or `shared` just to avoid thinking about boundaries.

Use the modular monolith when:
- the system is one product backend
- strong deployment simplicity matters
- the domain is growing but not yet split across independent services

Do not prematurely create microservices. First create clean module boundaries that could be extracted later if needed.

## Module design

Each serious backend module should be coherent around one business capability.

Examples:
- `iam`
- `users`
- `projects`
- `tasks`
- `billing`
- `notifications`
- `audit`

Each module should define:
- its public use cases
- its internal domain rules
- its persistence needs
- its external integrations
- its emitted or consumed internal events if any

Do not let controllers from one module directly orchestrate another module's internals.

## Recommended folder structure

Use a feature-first backend layout.

Default backend structure:
- `src/main.ts`
- `src/app.module.ts`
- `src/config/`
- `src/common/`
- `src/modules/<module-name>/`

Recommended module internals for non-trivial modules:
- `presentation/`
- `application/`
- `domain/`
- `infrastructure/`
- `tests/` when module-local tests improve clarity

Example file categories:
- `presentation/controllers/`
- `presentation/dto/`
- `presentation/serializers/`
- `application/use-cases/`
- `application/services/`
- `domain/entities/`
- `domain/value-objects/`
- `domain/policies/`
- `domain/events/`
- `infrastructure/persistence/`
- `infrastructure/repositories/`
- `infrastructure/mappers/`
- `infrastructure/integrations/`

Keep the structure proportional to complexity. Do not create empty abstraction layers with no purpose.

## Naming conventions

Use names that explain business purpose, not framework mechanics.

Rules:
- module folders use kebab-case
- files use kebab-case
- classes use PascalCase
- functions and methods use clear verb-based camelCase names
- DTO names describe intent, not transport only
- use case names describe business outcomes
- avoid vague names like `DataService`, `Helper`, `UtilManager`, or `CommonProcessor`

Examples:
- `CreateUserUseCase`
- `AssignRoleUseCase`
- `UsersController`
- `PrismaUserRepository`
- `PasswordPolicy`

Prefer domain terms that product engineers will still understand in one year.

## Controllers

Controllers should:
- expose HTTP endpoints
- validate and transform request input
- delegate to application services or use cases
- map outputs to response shapes
- stay thin

Controllers should not:
- contain complex business logic
- perform direct multi-step persistence orchestration
- decide low-level infrastructure behavior
- become the place where security rules are improvised

## Application layer

Use the application layer for:
- orchestration
- transaction coordination
- policy invocation
- cross-repository workflows
- domain event publication

Application services or use cases should:
- be explicit
- operate on domain concepts
- return stable result shapes or domain outputs
- not leak transport-layer concerns everywhere

## Domain layer

Use the domain layer for:
- entities
- value objects
- invariants
- policies
- domain events

The domain layer should not depend on NestJS decorators, HTTP concerns, or ORM-specific details unless the project consciously accepts a lighter approach for a simple area.

## Infrastructure layer

Use the infrastructure layer for:
- ORM repositories
- external APIs
- mailers
- queues
- storage providers
- cache providers
- message publishers

Infrastructure should implement interfaces or contracts when that separation improves clarity and replaceability.

## Shared code rules

`src/common/` or `src/shared/` must stay small.

Place only stable cross-cutting code here, such as:
- base exceptions
- interceptors
- pipes
- guards that truly span many modules
- logger abstractions
- config primitives
- pagination primitives if shared across the whole API

Do not place:
- user-specific logic
- billing-specific logic
- ad hoc helper dumps
- random utility collections with no ownership

## Security foundations

Every module and endpoint must be secure by default.

Minimum backend security expectations:
- DTO validation
- explicit auth guards where needed
- authorization enforced server side
- structured exception handling
- safe logging
- secret management through configuration, not literals
- rate limiting or abuse controls for exposed sensitive paths
- safe serialization of sensitive fields

Always consider:
- input validation
- output filtering
- resource ownership checks
- replay or duplicate-submission risk
- data exposure risk in logs and responses

## Operational reliability

Every serious backend module should remain operationally understandable.

Required concerns:
- startup config validation
- graceful shutdown behavior
- readiness and dependency health
- bounded request behavior
- timeout and retry discipline for outbound work
- background processing for slow or retry-heavy side effects

Do not leave runtime behavior to accidental defaults when the path is important.

## API behavior and error handling

Backend behavior should be predictable.

Rules:
- use consistent HTTP status codes
- use stable error response format
- distinguish validation errors, auth errors, not-found cases, conflict cases, and unexpected failures
- avoid leaking internal stack traces or database errors
- keep exception naming explicit

Do not mix business-rule failures and infrastructure failures into one generic error bucket.

## Scalability

A strong modular monolith should scale before splitting into services.

Design for scalability through:
- clean module boundaries
- stateless request handling where possible
- efficient query design
- caching where justified
- background jobs for slow side effects
- bounded synchronous workflows
- idempotent write patterns for retry-sensitive endpoints

Use async processing for:
- email delivery
- heavy file processing
- notifications
- reporting jobs
- expensive integration retries

Do not hide scalability problems under premature abstraction. Measure real bottlenecks first.

## Performance

Backend performance standards:
- keep request paths lean
- avoid N+1 persistence access
- avoid unnecessary synchronous I/O
- paginate large datasets
- cache carefully selected read paths
- reduce over-fetching
- profile critical flows before optimizing blindly

Review:
- repeated database calls
- wide DTO serialization
- expensive synchronous cryptography in hot loops
- unbounded list endpoints
- chatty internal service calls

## Caching

Cache only where:
- the read path is expensive
- staleness is acceptable or controlled
- invalidation strategy is clear

Never add cache without answering:
- what is cached
- when it expires
- what invalidates it
- how stale data affects correctness

## Comments and documentation

Comments are required when they preserve reasoning, not when they restate syntax.

Good comment targets:
- non-obvious business rules
- tricky concurrency or security decisions
- migration rollout constraints
- unusual framework workarounds
- reasons behind design tradeoffs

Avoid comments like:
- "set variable"
- "call service"
- "return response"

Documentation standards:
- public modules should be understandable from structure and naming first
- add module-level or feature-level docs when the workflow is complex
- keep API documentation current
- document operational caveats for risky jobs, migrations, or integrations

## Auto documentation

For REST APIs, support generated documentation through:
- OpenAPI or Swagger integration
- DTO decorators or schema declarations where appropriate
- examples for important request and response shapes
- auth requirements documented per protected route where practical

Auto-generated docs must still be reviewed for clarity and completeness.

## Testing strategy

Do not mark backend work complete without tests appropriate to the risk.

At minimum, cover:
- unit tests for domain rules and critical services
- integration tests for repositories and infrastructure boundaries
- e2e tests for important API flows
- auth and authorization behavior
- failure paths and validation behavior
- migration or schema safety for risky persistence changes

Testing rules:
- test behavior, not only implementation details
- keep tests readable
- prefer real database integration for persistence-critical flows
- avoid mocks that hide real integration breakage in critical paths

## Transactions, idempotency, and consistency

Use transactions for multi-write consistency.

Use idempotency or duplicate protection when:
- the endpoint may be retried by clients
- payments or external side effects are involved
- job retries can trigger duplicate work

Document:
- consistency boundary
- retry behavior
- duplicate handling strategy

## Background jobs and asynchronous work

Use queues or scheduled jobs for:
- delayed or retried side effects
- email and notification delivery
- cleanup tasks
- reconciliation jobs
- expensive background processing

Rules:
- jobs must be idempotent where possible
- log job failures clearly
- define retry behavior explicitly
- keep payloads minimal and stable

## Configuration and secrets

Configuration standards:
- validate environment variables
- separate required from optional config
- keep defaults explicit
- never hardcode secrets
- document environment variables through example files or config docs

Sensitive values:
- database credentials
- API secrets
- signing keys
- mail provider secrets
- storage access keys

## Observability

Production-quality backend work requires observability.

At minimum, support:
- structured logs
- request correlation where feasible
- error monitoring
- health checks
- audit logs for security-sensitive actions
- metrics for latency, throughput, and failure rates where the environment supports them

Logs should help operations without leaking secrets or private data.

## Operational readiness

Before calling a backend feature production-ready, consider:
- migration rollout safety
- environment configuration
- failure modes
- backup and restore expectations
- health check behavior
- dependency outages
- alerting for critical workflows

## Code quality rules

Strong backend code should be:
- explicit
- typed
- readable
- cohesive
- reviewed
- resistant to accidental misuse

Rules:
- prefer one clear path over multiple inconsistent styles
- avoid deep nesting when guard clauses improve clarity
- keep methods short enough to understand in one read
- avoid giant services that own unrelated behavior
- extract reusable logic only when it is truly shared
- keep framework glue separate from business rules where useful

## Review checklist

Reject or fix these problems:
- controllers containing business workflows
- modules with unclear ownership
- `common` folder becoming a dumping ground
- vague names for files, services, or methods
- no validation on public input
- inconsistent error handling
- missing test coverage for important flows
- no documentation for non-obvious behavior
- synchronous side effects in hot request paths
- scalability assumptions with no operational thinking
- logging of secrets or sensitive data
- giant god services or catch-all helpers

## Delivery checklist

Before finishing, ensure the implementation includes:
- clear module boundaries
- clean folder and file naming
- thin controllers
- explicit application or use-case orchestration
- domain rules placed deliberately
- infrastructure isolated where appropriate
- validation and error handling
- security review of the affected path
- performance review of the affected path
- tests
- API documentation updates if routes changed
- comments or docs for non-obvious decisions

## When to load references

Read `references/module-structure.md` when designing or reviewing module layout.
Read `references/naming-and-comments.md` when reviewing file, class, method, and comment quality.
Read `references/scalability-performance-testing.md` when evaluating scalability, performance, and testing tradeoffs.
