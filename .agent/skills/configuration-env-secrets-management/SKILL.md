---
name: configuration-env-secrets-management
description: Design and implement production-safe configuration for NestJS backends. Use this for environment validation, secret management, runtime settings, feature flags, configuration layering, deployment-safe defaults, and operational configuration review.
---

# Configuration Env Secrets Management

Use this skill whenever the task affects environment variables, runtime config, secrets, or deployment-safe settings.

## Core rules

- Validate configuration at startup.
- Separate required and optional settings.
- Never hardcode secrets.
- Keep runtime behavior explicit through configuration, not scattered literals.

## Required practices

- central config module
- typed config access
- environment validation
- `.env.example` or equivalent documentation
- secret-safe logging
- production-safe defaults or explicit required values

## Secrets

Handle carefully:
- database URLs
- signing keys
- API tokens
- mail credentials
- storage credentials

Rules:
- never commit secrets
- never print secrets in logs
- rotate when compromise is suspected

## Review checklist

Reject or fix:
- missing env validation
- secrets in code
- magic values scattered across modules
- undocumented required configuration
- unsafe defaults in production-sensitive settings
