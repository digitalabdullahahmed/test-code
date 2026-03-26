---
name: feature-flags-settings-management
description: Design and implement backend-managed feature flags and runtime settings. Use this for feature toggles, system settings, rollout controls, configurable behavior, environment and tenant overrides, and operationally safe backend configuration features.
---

# Feature Flags Settings Management

Use this skill whenever the backend needs runtime toggles, feature flags, or managed settings.

## Core rules

- Make dynamic behavior explicit and auditable.
- Separate deployment config from product runtime settings.
- Keep flag semantics simple and observable.

## Required concerns

- flag ownership
- default value strategy
- environment override rules
- tenant or account override rules if needed
- auditability of changes
- kill-switch behavior for risky features

## Review checklist

Reject or fix:
- flags with unclear ownership
- hidden runtime behavior with no audit trail
- mixing deployment secrets with product settings
- no default strategy
- long-dead flags left ungoverned forever
