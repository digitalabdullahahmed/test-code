---
description: High-discipline feature workflow that brainstorms deeply, chooses the best architecture-fit approach, then implements and verifies it directly.
---

# Feature Brainstorm And Implement

Use this workflow when a new feature must be thought through carefully and then built end to end.

## 1. Clarify the feature outcome

- Restate the user goal and system goal.
- Identify affected apps, packages, routes, modules, and contracts.
- Separate required behavior from optional polish.

## 2. Inspect and map the current architecture

- Read the existing implementation around the feature area.
- Find the owning module or feature boundary.
- Trace related contracts, API clients, schemas, metadata, and tests.

## 3. Brainstorm with structure

- Break the feature into sub-problems.
- Evaluate multiple approaches before committing.
- Prefer the approach that best fits the repository’s structure, not the fastest patch.

## 4. Design the end-to-end implementation

- Define the request-flow or UI-flow step by step.
- Identify contracts, validation, permissions, persistence, loading states, errors, and analytics or observability when relevant.
- Review related docs, SEO surfaces, env requirements, and release safety.

## 5. Implement the feature coherently

- Make the smallest complete change set that delivers the feature correctly.
- Keep backend logic in owning modules and frontend logic in feature modules.
- Update contracts, types, and docs when truly needed.

## 6. Verify the behavior

- Add or update tests appropriate to the risk.
- Run focused verification, then broader checks where justified.
- Review neighboring flows for regressions.

## 7. Close with implementation reasoning

- Report:
- `Chosen approach`
- `Key files changed`
- `Why this structure fits`
- `Verification performed`
- `Remaining risks or follow-up`
