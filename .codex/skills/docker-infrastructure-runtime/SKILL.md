---
name: docker-infrastructure-runtime
description: Design and review production-grade container runtime setup for backend systems. Use this for Dockerfiles, compose setups, container startup behavior, health checks, runtime hardening, local dev containers, and deployment-friendly backend containerization.
---

# Docker Infrastructure Runtime

Use this skill whenever the backend needs containerization or runtime packaging.

## Core rules

- Build minimal, reproducible images.
- Separate build and runtime stages when useful.
- Keep secrets out of images.
- Make health and startup behavior explicit.

## Required concerns

- Dockerfile hygiene
- build cache strategy
- runtime image size
- health checks
- startup commands
- env injection
- non-root execution where practical
- local dev compose behavior

## Review checklist

Reject or fix:
- oversized runtime images
- secrets baked into images
- weak health behavior
- runtime containers doing build-time work unnecessarily
- unclear startup sequencing
