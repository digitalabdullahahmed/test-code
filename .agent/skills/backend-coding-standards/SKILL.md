---
name: backend-coding-standards
description: Enforce high-end backend coding standards for NestJS projects. Use this for naming, method and class design, comment quality, readability, folder hygiene, maintainability, refactoring discipline, and implementation-level best practices across backend code.
---

# Backend Coding Standards

Use this skill whenever writing or reviewing backend code quality, naming, readability, or maintainability.

## Core rules

- Prefer clarity over cleverness.
- Keep code explicit, typed, and easy to scan.
- Name things by business intent.
- Keep file and method size reasonable.
- Add comments only where they preserve reasoning.

## Naming standards

- use business language first
- classes use clear role names
- methods use verbs
- booleans read like questions or state
- avoid vague names like `Helper`, `Manager`, `Processor`, `DataService`, `Util`
- file names match responsibility

## Method and class design

- keep methods focused on one logical task
- extract branches when readability improves
- avoid classes with too many unrelated responsibilities
- prefer guard clauses over deep nesting
- keep side effects visible
- keep failure semantics visible; do not bury important operational behavior behind vague helpers

## Comment standards

- comment why, not what
- explain security, concurrency, migration, or business tradeoffs
- avoid restating obvious syntax
- update comments when behavior changes

## Folder hygiene

- group code by feature or module ownership
- avoid dumping unrelated files into `common`
- keep abstractions proportional to actual complexity

## Review checklist

Reject or fix:
- vague names
- oversized classes
- deeply nested control flow without need
- comment noise
- missing comments around non-obvious decisions
- accidental architectural drift through convenience shortcuts
- operationally important behavior hidden behind unclear abstraction names
