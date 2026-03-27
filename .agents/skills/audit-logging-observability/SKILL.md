---
name: audit-logging-observability
description: Implement and review production observability for NestJS backends. Use this for structured logging, audit events, metrics, tracing, correlation IDs, health checks, production diagnostics, and safe operational visibility.
---

# Audit Logging Observability

Use this skill whenever the task affects logs, audit events, metrics, tracing, health checks, or operational diagnostics.

## Core rules

- Logs should help operations, not leak secrets.
- Audit trails must cover sensitive actions.
- Observability should make failures explainable.

## Logging

Use structured logs.

At minimum, support:
- request context
- error context
- correlation identifiers where feasible
- safe field redaction

## Audit events

Record sensitive actions such as:
- auth events
- role changes
- data exports
- destructive administrative actions
- payment or billing events where relevant

## Metrics and health

Track when possible:
- latency
- throughput
- failure rates
- queue health
- dependency health
- database connection stress
- timeout and retry behavior on critical outbound dependencies
- startup and readiness failures where operationally important

## Review checklist

Reject or fix:
- unstructured logs only
- no audit trail for sensitive actions
- secrets or PII in logs
- no health check visibility
- no signal for production diagnosis
- no visibility into dependency-driven degradation or retry storms
