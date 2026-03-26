---
name: rate-limiting-throttling-abuse-protection
description: Design and implement defensive request controls for NestJS backends. Use this for rate limiting, throttling, quotas, abuse protection, endpoint risk profiling, and practical defenses against high-volume or malicious request patterns.
---

# Rate Limiting Throttling Abuse Protection

Use this skill whenever the task affects request abuse controls, quotas, or rate limiting.

## Core rules

- Sensitive endpoints need stronger defenses.
- Rate limiting should follow endpoint risk, not a single blind global number.
- Abuse controls must be observable and configurable.

## Required concerns

- endpoint risk classification
- per-user, per-IP, or per-key strategy
- auth endpoint protection
- expensive endpoint protection
- quota behavior where product plans require it
- clear client-facing responses

## Review checklist

Reject or fix:
- no protection on abuse-prone endpoints
- one-size-fits-all limits with no risk thinking
- no monitoring for throttling behavior
- rate limiting that breaks legitimate operational traffic without thought
