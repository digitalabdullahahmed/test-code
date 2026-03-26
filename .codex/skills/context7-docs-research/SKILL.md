---
name: context7-docs-research
description: Use Context7 as the first-choice documentation lookup flow for library and framework research. Use this when implementation depends on current package APIs, setup steps, migration notes, version-specific examples, or choosing between external libraries.
---

# Context7 Docs Research

Use this skill when a task depends on current external documentation.

## When to use

Use it for:
- framework and library APIs
- installation or setup steps
- migration and version-specific behavior
- selecting between external packages
- current configuration guidance

Do not use it for:
- repo-local architecture decisions
- product business rules
- secrets or account-specific operations

## Core workflow

1. identify the exact library and likely version if known
2. resolve the library id
3. query docs with the task-specific question
4. implement from the retrieved documentation
5. fall back to official docs if the result is incomplete or ambiguous

## Query rules

- include the library name explicitly
- include the exact version when it matters
- include the exact task, not a generic question
- prefer targeted prompts over broad prompts

Examples:
- `Next.js 16 middleware cookies redirect auth`
- `NestJS 12 interceptors response mapping`
- `Prisma PostgreSQL migration rename column safe rollout`

## Tool preference

- prefer `Context7` before generic web search for library docs
- if `Context7` fails to surface the needed information, use official primary documentation next
- cite that the decision came from `Context7` or the official source when the change depends on external behavior
