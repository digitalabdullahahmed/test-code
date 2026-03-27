---
name: rest-controller-service-patterns
description: Implement clean NestJS request-flow patterns for REST backends. Use this for controller design, service and use-case boundaries, handler structure, endpoint implementation patterns, response mapping, request orchestration, and maintainable backend flow organization.
---

# REST Controller Service Patterns

Use this skill whenever the task affects controller structure, service boundaries, or request-flow implementation inside NestJS.

## Core rules

- Controllers stay thin.
- Use cases or application services own orchestration.
- Business rules do not live in controllers.
- Persistence details do not leak into route handlers.

## Recommended request flow

1. Validate input.
2. Authenticate and authorize.
3. Delegate to an application use case or service.
4. Persist or coordinate dependencies.
5. Map output to API response shape.
6. Ensure failures map into stable API semantics.

## Controller rules

- one controller should represent one clear resource or domain boundary
- avoid giant controllers
- do not embed multi-step transactions in controllers
- do not perform complex condition trees in route handlers

## Service and use-case rules

- name by business outcome
- keep one primary responsibility per use case
- separate orchestration from reusable domain policy helpers
- avoid giant catch-all services

## Review checklist

Reject or fix:
- fat controllers
- generic mega-services
- route handlers that know too much about persistence
- application logic duplicated across endpoints
- unstable or ad hoc failure mapping across similar endpoints
