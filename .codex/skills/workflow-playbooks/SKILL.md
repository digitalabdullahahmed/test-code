---
name: workflow-playbooks
description: Execute project work through consistent playbooks. Use this for new features, bug fixes, backend modules, frontend pages, SEO work, refactors, and reviews when the agent should follow a disciplined workflow instead of improvising ad hoc steps.
---

# Workflow Playbooks

Use this skill whenever the task should follow a repeatable engineering workflow.

## Core rule

Do not improvise the order of work when a standard playbook fits.

## Playbooks

### New feature

1. identify affected apps, modules, and contracts
2. choose the relevant concern skills
3. inspect current implementation and neighboring patterns
4. research only if facts may be unstable
5. implement end to end
6. verify with the right checks
7. summarize outcome and remaining risks

For multi-layer requests, combine this with `engineering-team-orchestration`.

### Bug fix

1. identify failing behavior precisely
2. localize the fault before broad edits
3. fix the smallest coherent scope
4. add or update checks that would catch the bug again
5. verify no obvious regression was introduced

### Backend module

1. apply architecture and backend rules
2. define module boundary and use cases
3. define DTOs, errors, and persistence changes
4. implement module code
5. add tests and docs as needed
6. review operational reliability, timeouts, and failure behavior where relevant
7. verify typecheck and build

### Frontend page or feature

1. choose visual direction and UX intent
2. define route boundary and module ownership
3. decide server versus client responsibilities
4. implement UI, data flow, loading, and error states
5. verify accessibility, responsiveness, and build

For important frontend work, combine this with:
- `ui-ux-research-thinking` before implementation
- `frontend-design` when strong visual execution matters
- `frontend-device-compatibility` for mobile and cross-device resilience
- `frontend-usability-design-qa` before completion

### Full-stack data feature

1. identify the user flow and required data states
2. confirm or define the contract and affected shared types
3. implement or update the backend path first if it does not already exist
4. verify backend behavior independently
5. implement frontend client, mapping, and UI states against the real contract
6. verify loading, empty, error, auth, and success behavior with real integration
7. summarize any deferred scope explicitly instead of hiding it behind fake data

### SEO work

1. classify the page as public, private, or low-value
2. define metadata and canonical strategy
3. add robots, sitemap, or JSON-LD only where valid
4. verify search-facing output

### Refactor

1. preserve behavior
2. improve names, structure, or boundaries
3. avoid cosmetic churn without value
4. verify no regression

### Review

1. inspect correctness first
2. inspect security and integrity risks
3. inspect tests and docs
4. report findings before summary

## When to load references

Read `references/playbook-checklists.md` for concise checklists while implementing or reviewing.
