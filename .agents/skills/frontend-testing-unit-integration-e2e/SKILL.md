---
name: frontend-testing-unit-integration-e2e
description: Design and implement professional frontend testing strategy for Next.js applications. Use this for unit tests, component tests, integration tests, e2e flows, accessibility assertions, and frontend quality gates for important user journeys.
---

# Frontend Testing Unit Integration E2E

Use this skill whenever the task affects frontend testing strategy or requires test coverage.

## Core rules

- test behavior users rely on
- match test depth to feature risk
- include accessibility and error states where meaningful
- cover auth and critical flows end to end

## Test layers

- unit tests for isolated logic
- component or integration tests for UI behavior
- e2e tests for critical journeys

## Review checklist

Reject or fix:
- no tests for high-risk UI
- only happy-path coverage
- inaccessible behavior untested in critical components
- brittle tests coupled to implementation trivia
