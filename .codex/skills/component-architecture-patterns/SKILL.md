---
name: component-architecture-patterns
description: Design maintainable React component architecture for Next.js frontends. Use this for feature modules, component boundaries, composition, hook design, prop contracts, render structure, and long-term maintainable UI organization.
---

# Component Architecture Patterns

Use this skill whenever the task affects React component boundaries, composition, hooks, or module-level UI organization.

## Core rules

- split by feature ownership first
- keep props explicit
- keep hooks purposeful
- separate orchestration from presentation when complexity grows

## Recommended module structure

Within `modules/<feature>/`, prefer:
- `components/`
- `hooks/`
- `services/`
- `types/`
- optional `schemas/` or `state/` when needed

## Review checklist

Reject or fix:
- god components
- deeply nested prop drilling caused by poor boundaries
- hooks that do unrelated work
- feature logic pushed into shared components
- `components/` becoming a dumping ground
