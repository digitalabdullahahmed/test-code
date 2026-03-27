---
name: background-jobs-queues-scheduling
description: Design and implement production-grade asynchronous processing for NestJS backends. Use this for queues, background jobs, scheduling, retries, dead-letter handling, outbox processing, idempotent workers, and operationally safe asynchronous workflows.
---

# Background Jobs Queues Scheduling

Use this skill whenever work affects asynchronous processing, background jobs, scheduled tasks, or queue-backed workflows.

## Core rules

- Move slow side effects out of hot request paths when practical.
- Keep jobs idempotent where retries are possible.
- Make retry behavior explicit.
- Keep payloads small, stable, and version-tolerant.

## Good uses for queues and jobs

- email delivery
- notifications
- image or file processing
- reconciliation work
- retry-heavy integrations
- cleanup jobs
- reporting tasks

## Scheduling

Rules:
- use scheduled jobs only for work that is naturally time-based
- avoid hidden business-critical work that nobody monitors
- make failure visibility explicit

## Operational safety

At minimum, define:
- retry behavior
- dead-letter handling if supported
- idempotency strategy
- logging and alerting expectations
- job ownership and purpose
- worker shutdown and in-flight job behavior where relevant

## Review checklist

Reject or fix:
- slow side effects inside synchronous request handlers
- jobs with no retry policy
- no idempotency thinking
- oversized unstable payloads
- scheduled work with no monitoring
- workers with unclear shutdown or duplicate-processing behavior
