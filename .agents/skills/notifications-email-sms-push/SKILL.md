---
name: notifications-email-sms-push
description: Design and implement backend notification systems for NestJS. Use this for email, SMS, push notifications, templates, delivery orchestration, user preferences, retries, provider abstraction, and notification reliability review.
---

# Notifications Email SMS Push

Use this skill whenever the task affects delivery of notifications or notification preferences.

## Core rules

- Keep message composition separate from transport delivery.
- Make notification sending observable and retry-aware.
- Respect user preferences and channel suitability.

## Required concerns

- template management
- provider abstraction where useful
- retry and failure handling
- idempotency for duplicated send triggers
- preference checks
- audit or delivery visibility for important notifications

## Review checklist

Reject or fix:
- hardcoded templates scattered in business logic
- synchronous notification sending in hot paths without reason
- no retry or failure visibility
- no preference handling where the product requires it
