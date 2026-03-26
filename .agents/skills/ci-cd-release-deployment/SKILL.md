---
name: ci-cd-release-deployment
description: Design and review production-safe CI/CD and release workflows for backend systems. Use this for build pipelines, test gates, migration-safe deployment steps, environment promotion, release verification, and deployment reliability for NestJS backends.
---

# CI CD Release Deployment

Use this skill whenever the task affects pipeline automation, release safety, or deployment workflows.

## Core rules

- Every release path should be reproducible.
- CI must fail fast on important quality gates.
- Deployment steps must account for migrations and rollback or mitigation.
- Promotion across environments must be explicit.

## Required pipeline concerns

- install and cache strategy
- lint and typecheck
- unit, integration, and e2e gates as appropriate
- artifact build
- migration execution strategy
- environment-specific deployment behavior
- post-deploy verification

## Review checklist

Reject or fix:
- deployment with no migration safety thinking
- missing test gates for risky code paths
- unclear rollback or mitigation plan
- environment drift hidden in ad hoc scripts
