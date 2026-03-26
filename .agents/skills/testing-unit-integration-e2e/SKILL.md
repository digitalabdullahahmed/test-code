---
name: testing-unit-integration-e2e
description: Design and implement production-grade backend testing strategy for NestJS. Use this for unit tests, integration tests, e2e tests, test data setup, migration-aware testing, critical path verification, and test quality gates for backend changes.
---

# Testing Unit Integration E2E

Use this skill whenever the task affects backend testing strategy or requires new or updated tests.

## Core rules

- Test behavior, not framework ceremony.
- Match test depth to risk.
- Prefer real integration boundaries for persistence and auth-critical flows.
- Cover unhappy paths, not just happy paths.

## Test layers

Use:
- unit tests for domain logic, policies, and isolated services
- integration tests for repositories, database behavior, and infrastructure edges
- e2e tests for critical API flows

## Required coverage for serious backend work

- success path
- validation failures
- authorization failures
- conflict and not-found paths
- persistence-critical edge cases
- risky retry or idempotency paths where applicable

## Test data

Rules:
- keep fixtures readable
- isolate test data per scenario where practical
- avoid brittle shared global state
- use real schemas and migrations for important persistence tests

## Review checklist

Reject or fix:
- no tests for critical backend changes
- only happy-path coverage
- fake database tests for persistence-critical logic
- unreadable fixtures
- unstable tests with hidden shared state
