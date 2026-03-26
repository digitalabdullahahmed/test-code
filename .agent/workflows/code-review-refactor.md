---
description: Professional code review and refactor review workflow focused on findings first, architectural fit, and safe improvement guidance.
---

# Code Review And Refactor Review

Use this workflow when the task is to review code, review a refactor, or assess maintainability and regression risk before or after changes.

## 1. Define the review scope

- Identify the exact target: file, module, feature, pull-request-sized change, or wider surface.
- Clarify whether the task is a defect-focused review, refactor review, maintainability review, or broad engineering review.
- Note the expected behavior and the intended architectural boundary.

## 2. Inspect the code before judging it

- Read the relevant implementation and neighboring files first.
- Understand the real request-flow or UI-flow end to end.
- Check how the code fits the current project structure instead of reviewing it in isolation.

## 3. Review in severity order

- Check correctness and behavioral regressions first.
- Check security risks and unsafe trust-boundary handling next.
- Check data loss, data integrity, and concurrency risk where relevant.
- Check performance risks on hot paths or user-critical flows.
- Check maintainability, naming, readability, duplication, and boundary discipline.
- Check missing or weak tests.
- Check documentation drift when behavior or workflow changed.

## 4. Look for structural issues, not only local mistakes

- Identify hidden coupling, misplaced responsibilities, and weak module boundaries.
- Flag symptom patches that should be replaced with owner-module fixes.
- Check whether contracts, validation, authorization, or error handling are incomplete.

## 5. Evaluate refactor quality when applicable

- Confirm the refactor preserved behavior.
- Check whether complexity actually decreased instead of merely moving around.
- Check whether new abstractions are justified and named clearly.
- Check whether old paths, dead code, or stale references remain.

## 6. Review follow-on impact

- Check imports, contracts, shared types, tests, docs, configs, routes, and metadata for required follow-up updates.
- Check whether the change introduced breaking-change or rollout risk.
- Call out missing verification when confidence is limited.

## 7. Report findings first

- Present findings before summaries.
- Order findings by severity and impact.
- For each finding, include:
- `What is wrong`
- `Why it matters`
- `Where it is`
- `What should change`

## 8. Close with concise review context

- After findings, summarize overall quality briefly.
- State open questions or assumptions if any.
- If there are no findings, say so explicitly and mention any residual testing or verification gaps.
