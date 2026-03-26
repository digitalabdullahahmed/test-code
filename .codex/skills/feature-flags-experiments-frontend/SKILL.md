---
name: feature-flags-experiments-frontend
description: Manage frontend feature flags and experiments in Next.js applications. Use this for rollout controls, experiment-aware UI, client-safe flag consumption, flag ownership, and maintainable feature toggle behavior.
---

# Feature Flags Experiments Frontend

Use this skill whenever the task affects frontend feature flags, experiments, or rollout-aware UI.

## Core rules

- keep flag usage explicit
- flags should not create unreadable branching chaos
- separate experiment logic from permanent product logic
- make ownership and removal expectations clear

## Required concerns

- flag boundaries
- default values
- experiment-aware UI branching
- hydration-safe flag behavior
- stale flag cleanup expectations

## Review checklist

Reject or fix:
- hidden branching logic spread across many components
- no default behavior
- no cleanup path for stale experiments
- flags evaluated in ways that break rendering consistency
