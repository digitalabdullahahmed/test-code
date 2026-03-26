---
name: code-review-refactor-standards
description: Review and refactor NestJS backend code to professional standards. Use this for naming quality, comment quality, maintainability, code smells, service decomposition, readability, architectural fit, and backend-focused refactoring and review.
---

# Code Review Refactor Standards

Use this skill whenever the task is a review, refactor, cleanup, or backend quality improvement effort.

## Core rules

- Find real risks first, not style trivia.
- Prioritize bugs, security issues, maintainability traps, and architectural drift.
- Use naming and comments to increase clarity, not noise.
- Refactor toward explicitness and cohesion.

## Naming standards

- prefer business-language names
- prefer explicit verbs for methods
- avoid `Helper`, `Utils`, `Manager`, `Processor`, `DataService`
- keep file names aligned to responsibility

## Comment standards

- comment non-obvious reasoning
- comment security and concurrency tradeoffs
- comment migration or operational caveats
- do not narrate trivial code

## Refactor standards

- break apart god services
- remove duplicated orchestration
- move domain rules closer to the domain
- reduce hidden coupling
- preserve behavior while improving structure

## Review checklist

Focus on:
- correctness risks
- security risks
- missing tests
- unclear naming
- poor comments or missing comments where reasoning is non-obvious
- architectural drift
- maintainability regressions
