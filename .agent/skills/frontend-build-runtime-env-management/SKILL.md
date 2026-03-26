---
name: frontend-build-runtime-env-management
description: Manage build-time and browser-safe runtime configuration for Next.js applications. Use this for environment variable discipline, public config exposure, build-time behavior, deployment-safe frontend settings, and configuration review for frontend systems.
---

# Frontend Build Runtime Env Management

Use this skill whenever the task affects frontend environment variables, runtime config, or public configuration exposure.

## Core rules

- expose only what is safe for the browser
- centralize env access
- keep runtime behavior explicit
- avoid scattered direct `process.env` usage

## Required concerns

- `NEXT_PUBLIC_*` review
- config centralization
- build-time versus runtime assumptions
- environment-specific behavior
- documentation of required public config

## Review checklist

Reject or fix:
- unsafe env exposure
- config reads scattered across modules
- weak distinction between server-only and browser-safe config
- undocumented required public variables
