---
description: High-discipline feature workflow that thinks step by step, maps the architecture, proposes the best implementation plan, and waits for approval.
---

# Feature Brainstorm Plan First

Use this workflow when a new feature needs deep architectural thinking before implementation.

## 1. Understand the requested feature

- Restate the desired outcome in product terms.
- Separate hard requirements from assumptions.
- Identify whether the request affects backend, frontend, shared contracts, SEO, auth, data model, or operations.

## 2. Map the existing system first

- Inspect the current structure in `apps/api`, `apps/web`, and shared packages.
- Identify the modules, routes, contracts, services, and components that already own neighboring behavior.
- Reuse the project’s established architecture instead of inventing a parallel path.

## 3. Run structured brainstorming

- Break the request into capabilities, constraints, and edge cases.
- Explore multiple implementation approaches.
- Compare options for architecture fit, maintainability, user impact, and risk.
- Select the strongest approach and explain why the alternatives are weaker.

## 4. Think through the implementation chain

- Define the end-to-end flow step by step.
- Specify data inputs, validation, orchestration, persistence, side effects, UI state, and error behavior.
- Check how the new feature interacts with auth, permissions, logging, caching, SEO, and tests when relevant.

## 5. Produce a concrete implementation blueprint

- List the modules and files likely to change.
- Define new contracts, schemas, routes, components, or services if needed.
- State how the feature should be placed to fit the current repo structure.
- Include acceptance criteria and verification steps.

## 6. Stop before coding

- Report:
- `Feature understanding`
- `Architecture fit`
- `Recommended approach`
- `Affected surfaces`
- `Implementation plan`
- `Risks and open questions`
- Do not implement until explicit approval is given.
