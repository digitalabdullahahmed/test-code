---
name: offline-pwa-capabilities
description: Design offline-friendly and installable Next.js experiences. Use this for PWA setup, offline UX, service-worker-aware behavior, install prompts, cached assets, and resilient disconnected interactions where product value justifies it.
---

# Offline PWA Capabilities

Use this skill whenever the task affects PWA behavior, installability, offline use, or disconnected UX.

## Core rules

- offline support should be deliberate, not accidental
- users need clear feedback about offline capability and limitations
- caching strategy must align with product correctness

## Required concerns

- installability behavior
- offline-ready routes or assets
- stale data messaging
- sync or retry expectations
- service-worker lifecycle awareness

## Review checklist

Reject or fix:
- offline claims with no degraded UX plan
- caching correctness-sensitive data blindly
- installability with no product value
- no user feedback during disconnected operation
