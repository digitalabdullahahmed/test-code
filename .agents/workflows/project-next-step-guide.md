---
description: Project-aware planning workflow that reads the repository, understands the target product and current state, then tells the user the correct next implementation step based on the request instead of jumping into random execution.
---

# Project Next Step Guide

Use this workflow when the user gives a broad product request, a vague feature direction, or asks what should happen next.

The goal is to convert a high-level request into the strongest next implementation step for this repository.

## 1. Read project context first

Before suggesting the next step, inspect the project context:

- `AGENTS.md`
- `PROJECT_VISION.md`
- `docs/architecture/overview.md`
- `docs/architecture/tech-stack.md`
- `docs/application-build-order.md`
- current files in `apps/api`
- current files in `apps/web`
- relevant shared packages

Do not answer from the request alone.

## 2. Understand the user request in product terms

- Restate the request as a product outcome, not only as code work.
- Identify whether the request is:
- product definition
- architecture
- backend foundation
- frontend foundation
- auth and identity
- first vertical slice
- follow-up feature
- admin and operations
- hardening and release readiness

## 3. Measure current project state

Determine what is already present and what is missing:

- are foundations already built?
- is auth already built?
- are contracts defined?
- is there any real backend data flow?
- are frontend screens already integrated?
- are tests and docs present for the target area?

Do not recommend a step that assumes missing prerequisites are already done.

## 4. Determine the correct next step

Choose the next step by dependency order, not by what sounds exciting.

Prefer:
- scope before implementation
- foundations before business modules
- auth before protected features
- contract and backend path before data-driven frontend
- first vertical slice before broad expansion
- hardening after core feature delivery

If the user asks for something too broad, narrow it to the best next slice.

## 5. Produce a practical next-step answer

Return:
- `Current project state`
- `What the user is really asking for`
- `Correct next step`
- `Why this step comes next`
- `Recommended prompt to run next`
- `What should come after that`

## 6. Important behavior rules

- do not recommend building the full app in one jump
- do not recommend disconnected frontend screens before backend prerequisites
- do not recommend backend expansion when foundations are still missing
- do not recommend later-stage polish when core flows are not real yet
- keep the answer concrete and execution-oriented

## Example use cases

Use this workflow when the user says things like:
- `I want to build this app, what should I do next?`
- `Start this product with me step by step`
- `What is the next correct module to build?`
- `Here is my app idea, what should come first now?`
- `Based on the current repo, what should I ask you to do next?`
