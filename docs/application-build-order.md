# Application Build Order

This file defines the recommended implementation order for building a product in this repository.

The goal is to build like a disciplined engineering team:
- not randomly
- not backend-only first
- not frontend-only first
- not giant big-bang delivery

Instead, build in deliberate stages and then deliver features as full vertical slices.

## Core principle

Do not build the whole backend and then the whole frontend later.

Prefer:
- foundations first
- auth and identity early
- one real vertical slice end to end
- then repeat feature by feature

This gives:
- earlier correctness
- real integration
- less architectural drift
- fewer fake or disconnected screens
- easier testing and review

## Recommended global order

1. define product scope
2. define modules and roles
3. build technical foundations
4. build authentication and identity
5. build the first business-critical vertical slice
6. repeat feature delivery one slice at a time
7. harden the system for production

## Stage 1: Product definition

Before writing serious code, define:
- what the product is
- who the users are
- which roles exist
- what the core business modules are
- which 3 features matter first

Recommended request:

```text
Study the current project and define the product scope, main user roles, core business modules, and the first 3 highest-priority vertical slices. Do not write code yet. Produce a concrete implementation order for this repository.
```

## Stage 2: Architecture alignment

After scope is clear, define the module map for backend and frontend.

Recommended request:

```text
Based on this repository rules and skills, define the final module map for the backend and frontend. Use NestJS modular monolith and Next.js modules structure. Keep the design production-grade and scalable.
```

## Stage 3: Backend foundations

Build platform-level backend basics before business modules.

Typical scope:
- config
- env validation
- database setup
- health module
- logging
- validation
- error handling
- OpenAPI baseline

Recommended request:

```text
Build the backend foundations for this project: config module, database setup, health module, error handling, validation, logging, and API documentation baseline. Follow all backend rules and production best practices.
```

## Stage 4: Frontend foundations

Build frontend structure before deep product features.

Typical scope:
- route groups
- app shell
- modules structure
- shared UI foundation
- API client layer
- loading and error boundaries
- auth-aware layout strategy

Recommended request:

```text
Build the frontend foundations for this project: app shell, route groups, modules structure, API client layer, auth-aware layout strategy, loading/error boundaries, and shared UI foundation. Keep app routes thin.
```

## Stage 5: Authentication and identity

Do this early because many later modules depend on it.

Typical scope:
- auth
- sessions
- permissions
- protected routes
- frontend integration
- users and roles foundation

Recommended request:

```text
Build the full authentication and authorization system for this project end to end: backend + frontend integration, roles/permissions, session handling, protected routes, and real API integration. No fake data.
```

## Stage 6: Users and identity management

After auth, build user-facing identity and access management surfaces.

Recommended request:

```text
Build the users and identity management module end to end, including backend APIs, frontend screens, typed contracts, validation, permissions, loading/error states, and tests.
```

## Stage 7: First vertical slice

The first real business feature should be delivered end to end.

This means:
- contract
- backend path
- persistence
- frontend client
- real UI states
- tests
- docs

Recommended request:

```text
Build the first business-critical feature as a full-stack vertical slice. Start from contract and backend implementation, then connect the frontend to real backend data, and verify loading, empty, error, auth, and success states.
```

## Stage 8: Repeat per feature

After the first slice works, continue feature by feature.

Recommended request template:

```text
Build the [feature-name] module as a production-grade full-stack feature. Use real backend integration, preserve architecture, avoid fake data, add tests, docs, and all required UI states.
```

## Stage 9: Admin and internal operations

After core product features are stable, build the internal administration layer.

This may include:
- AdminJS
- internal dashboards
- audit views
- operational actions
- support tools

Recommended request:

```text
Build the internal admin/backoffice layer for the current modules using the approved architecture and AdminJS or custom admin UI where appropriate. Keep permissions, audit logging, and operational safety explicit.
```

## Stage 10: Hardening pass

After core modules exist, run a dedicated production hardening pass.

Typical focus:
- security
- performance
- observability
- documentation
- testing depth
- release safety

Recommended request:

```text
Review and harden the current application for security, performance, testing, observability, documentation, and release safety. Fix weaknesses instead of only listing them.
```

## Best implementation pattern

For most real product work, prefer this repeated cycle:

1. define the feature outcome
2. confirm affected modules and contracts
3. build backend path
4. verify backend behavior
5. build frontend integration
6. verify loading, empty, error, success, and auth states
7. add tests and docs
8. review follow-on impact

## What to avoid

Avoid requests like:
- build the entire app
- build the whole backend first
- build all pages first and connect later
- make a beautiful dashboard quickly

These often lead to:
- disconnected UI
- fake data
- weak contracts
- architectural drift
- delayed integration pain

## Recommended practical order for most products

1. scope and user roles
2. module map
3. config, db, health, logging, validation
4. auth and permissions
5. users
6. first core business module
7. dashboard or public surfaces tied to real data
8. second business module
9. notifications, files, search, or integrations as needed
10. admin and operational tooling
11. hardening and release readiness

## Final rule

Build vertical slices, not disconnected layers.

The system should always prefer:
- real integration
- narrow complete delivery
- explicit contracts
- clear verification

That is the fastest path to a strong production application.
