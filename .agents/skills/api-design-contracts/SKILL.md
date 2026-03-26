---
name: api-design-contracts
description: Design and review production-grade REST API contracts for NestJS backends. Use this for route design, resource naming, DTO contracts, status codes, pagination, filtering, sorting, versioning, idempotency, error schema, and OpenAPI-aligned request and response quality.
---

# API Design & Contracts

Use this skill whenever the task defines or changes HTTP routes, request and response schemas, error shapes, or public API behavior.

Project defaults:
- API style: `REST`
- framework: `NestJS`
- architecture: `modular monolith`

## Primary outcomes

Build APIs that are:
- consistent
- predictable
- explicit
- versionable
- easy for frontend and third-party consumers to use

## Core rules

- Design resources around business concepts, not database tables alone.
- Keep route names stable and unsurprising.
- Use nouns for resources and verbs only for actions that are not natural CRUD.
- Keep DTOs explicit and version-aware when the contract may evolve.
- Define success and failure responses deliberately.

## Routes and naming

Prefer:
- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PATCH /users/:id`
- `DELETE /users/:id`

Use action routes only when needed:
- `POST /auth/login`
- `POST /projects/:id/archive`
- `POST /invoices/:id/pay`

Avoid:
- RPC-style sprawl
- route names that mirror internal implementation details
- inconsistent singular and plural patterns

## Request and response contracts

Rules:
- validate all input DTOs
- document required and optional fields
- return stable response shapes
- include pagination metadata for lists
- normalize date and enum serialization
- avoid leaking internal persistence fields

For list endpoints, support:
- pagination
- sorting
- filtering when the domain needs it

## Status codes

Use status codes deliberately:
- `200` for successful reads or updates with body
- `201` for successful creation
- `204` for successful operations without body
- `400` for malformed requests
- `401` for unauthenticated access
- `403` for authenticated but forbidden access
- `404` for missing resources
- `409` for business conflicts
- `422` only if the codebase intentionally differentiates semantic validation from malformed requests

Do not hide all failures behind `400` or `500`.

## Pagination filtering sorting

Rules:
- prefer cursor pagination for high-scale append-heavy resources
- use offset pagination when simpler admin-style lists are acceptable
- make sort fields explicit
- whitelist filters
- document default sort order
- cap page size

## Versioning and compatibility

Prefer compatibility-first evolution.

Rules:
- avoid breaking contract changes casually
- add fields before removing old ones
- deprecate deliberately
- use explicit API versioning when product or client complexity justifies it

## Idempotency

Use idempotency for retry-sensitive operations such as:
- payments
- external side effects
- job-triggering endpoints
- client retry scenarios with duplicate risk

Document:
- idempotency key behavior
- retention window
- duplicate response behavior

## Error schema

Use a stable error envelope.

Errors should clearly separate:
- validation failure
- auth failure
- permission denial
- not found
- conflict
- rate limit
- unexpected internal failure

Do not leak stack traces or raw ORM errors.

## OpenAPI alignment

Keep API contracts aligned with auto-generated docs:
- annotate DTOs and routes clearly
- include examples for important payloads
- document auth and authorization requirements where useful
- document pagination, filters, and error cases

## Review checklist

Reject or fix:
- inconsistent route naming
- unclear DTO fields
- unstable response shapes
- missing pagination strategy
- hidden action semantics in weird routes
- undocumented breaking changes
- vague error responses

## When to load references

Read `references/rest-rules.md` for route and status code conventions.
Read `references/contracts-and-versioning.md` for evolution and compatibility guidance.
