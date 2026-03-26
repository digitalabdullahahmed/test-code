---
name: frontend-observability-analytics
description: Add production visibility to frontend applications. Use this for client error monitoring, web vitals, analytics instrumentation, user interaction tracking, privacy-aware telemetry, and frontend operational diagnostics.
---

# Frontend Observability Analytics

Use this skill whenever the task affects frontend telemetry, analytics, or client-side diagnostics.

## Core rules

- instrumentation must respect privacy and product intent
- capture enough signal to diagnose problems
- avoid analytics sprawl with unclear ownership

## Required concerns

- client error reporting
- web vitals visibility
- analytics event naming
- consent-aware instrumentation where required
- environment separation

## Review checklist

Reject or fix:
- noisy analytics with no taxonomy
- no client error visibility
- privacy-insensitive tracking
- production diagnostics too weak to explain failures
