---
description: Strong documentation workflow for a specific concern or broad documentation pass with accuracy, structure, and maintainability checks.
---

# Documentation Workflow

Use this workflow when the task is to write or improve documentation for a specific concern or a larger surface.

## 1. Define the documentation target

- Identify the exact audience: developer, operator, reviewer, or future maintainer.
- Identify the exact concern: setup, architecture, feature behavior, API usage, workflow, release, or troubleshooting.
- Confirm whether the request is for one point or a full pass.

## 2. Inspect the source of truth first

- Read the code, config, scripts, and existing docs before writing.
- Avoid inventing behavior that is not present in the repository.
- Resolve contradictions between docs and code before documenting confidently.

## 3. Decide the correct documentation location

- Keep onboarding guidance in `README.md`.
- Keep architecture decisions in `docs/architecture`.
- Keep feature or operational guidance close to the owning concern when possible.
- Avoid dumping everything into one generic document.

## 4. Write for maintainers, not marketing

- Explain what exists, why it exists, and how it should be used.
- Document non-obvious constraints, tradeoffs, and operational caveats.
- Keep the writing concise, explicit, and easy to scan.

## 5. Validate documentation completeness

- Check commands, paths, env vars, routes, and file names for accuracy.
- Check whether related workflows, tests, contracts, or configs also need documentation updates.
- Remove stale or misleading statements if found.

## 6. Close with documentation confidence

- Report:
- `Documented scope`
- `Sources inspected`
- `Files updated`
- `Important caveats`
- `Remaining doc gaps`
