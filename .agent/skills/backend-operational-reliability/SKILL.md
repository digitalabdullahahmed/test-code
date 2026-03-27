---
name: backend-operational-reliability
description: Harden NestJS backends for production operations. Use this for startup and shutdown behavior, health and readiness, request timeouts and limits, resource usage, graceful degradation, worker and API coordination, and production-safe reliability review.
---

# Backend Operational Reliability

Use this skill whenever a backend task affects production readiness, runtime behavior, or operational safety.

## Goal

Make the backend behave like a reliable production system, not just code that works locally.

## Core concerns

- startup validation and failure-fast behavior
- graceful shutdown
- request timeouts and size limits
- health, readiness, and dependency reporting
- background worker coordination
- cache and queue dependency impact
- failure visibility
- safe operational defaults

## Core rules

- fail fast on invalid runtime configuration
- shut down gracefully instead of dropping work silently
- expose health and readiness with real dependency awareness
- prefer bounded work, bounded retries, and bounded payloads
- make operational failure modes visible and explainable

## Review checklist

Reject or fix:
- startup that succeeds with invalid critical config
- no graceful shutdown thinking for API, queue, or scheduler work
- health checks that only prove the process is alive
- unbounded request or job behavior
- reliability assumptions hidden in code with no operational visibility
