---
name: validation-serialization-error-handling
description: Implement and review production-grade request validation, response serialization, and error handling for NestJS backends. Use this for DTO validation, transformation, exception filters, error envelopes, response shaping, parsing rules, and request lifecycle correctness.
---

# Validation Serialization Error Handling

Use this skill whenever the task affects input validation, output shaping, request parsing, or error behavior.

## Core rules

- Validate every public input path.
- Serialize outputs deliberately.
- Keep error behavior stable across modules.
- Never leak internal exceptions, stack traces, secrets, or raw ORM messages.

## Validation

Rules:
- validate body, params, query, and headers where relevant
- reject unknown or dangerous fields where appropriate
- use consistent parsing and coercion rules intentionally, not accidentally
- normalize parsing rules consistently
- keep DTOs small and explicit
- separate create and update DTOs unless the contract is truly identical

## Serialization

Rules:
- never expose sensitive fields accidentally
- map domain or persistence outputs into API-safe responses
- serialize dates, enums, and booleans consistently
- keep list response structure stable

## Error handling

Use centralized exception handling.

Required behavior:
- explicit validation errors
- explicit auth and permission errors
- explicit not-found and conflict errors
- safe internal error handling
- correlation-friendly error logging
- machine-readable error codes where the API surface benefits from them

## NestJS guidance

Use:
- DTO classes for request contracts
- validation pipes
- exception filters
- interceptors only when they improve shared response behavior cleanly

Avoid:
- ad hoc try-catch blocks in every controller
- controllers manually building many inconsistent error shapes
- leaking persistence exceptions directly
- mixing transport validation, business rules, and persistence exceptions into one vague failure path

## Review checklist

Reject or fix:
- missing validation
- sensitive fields in responses
- inconsistent error shapes
- broad catch blocks that hide real failure semantics
- DTO drift between docs and code
