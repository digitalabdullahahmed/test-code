---
name: engineering-team-orchestration
description: Break work down and execute it like a disciplined software team. Use this when a request spans backend, frontend, shared contracts, testing, docs, or operational concerns and should be handled as coordinated team delivery instead of isolated coding.
---

# Engineering Team Orchestration

Use this skill when a task should be handled like coordinated work across multiple engineering roles.

## Goal

Act like a small high-performing team with clear role boundaries, sequencing, and handoff discipline.

## Role model

Think in these roles when useful:
- architect: define scope, boundaries, and shape of the solution
- backend engineer: own contracts, server logic, persistence, auth, and integrity
- frontend engineer: own UI, client data flow, state handling, accessibility, and device behavior
- integration owner: ensure backend, frontend, and shared packages align
- reviewer and QA owner: verify correctness, regressions, tests, docs, and release safety

One agent may execute all roles, but must not skip the thinking they represent.

## Workflow

1. restate the actual outcome the user wants
2. identify affected layers and role ownership
3. define the dependency order
4. define minimal acceptance criteria
5. implement in the correct sequence
6. perform integration review across layers
7. verify and summarize remaining risks or deferred work

## Rules

- do not let the most visible layer drive the whole task if another layer is the real dependency
- do not treat isolated frontend or backend progress as feature completion when the request is cross-layer
- use shared contracts deliberately when the same feature crosses backend and frontend
- surface blockers, assumptions, and deferred work explicitly

## When to load references

Read `references/team-delivery-checklist.md` for a concise cross-role checklist while planning or implementing.
