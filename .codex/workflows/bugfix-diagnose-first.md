---
description: Deep bug analysis workflow that identifies root cause, explains the fix, and waits for approval before changing code.
---

# Bugfix Diagnose First

Use this workflow when the task is to understand a bug deeply before making any code change.

## 1. Frame the bug precisely

- Restate the observed behavior in concrete terms.
- Identify the expected behavior.
- Define the affected surface: API, frontend, shared contract, config, data, test, or deployment path.

## 2. Reproduce before reasoning

- Find the exact route, screen, function, or command that shows the issue.
- Reproduce the bug locally when possible.
- Capture the failure shape: error message, incorrect state, missing side effect, regression, or performance degradation.

## 3. Inspect the full request-flow

- Trace the flow from entry point to final effect.
- Map the relevant files and module boundaries before forming conclusions.
- Check contracts, DTOs, validation, auth, state transitions, and data access where relevant.

## 4. Generate and pressure-test hypotheses

- List plausible root-cause candidates.
- Eliminate weak hypotheses using code evidence, logs, tests, or request-flow inspection.
- Prefer the narrowest defensible root cause over a symptom-level explanation.

## 5. Identify the real root cause

- State the exact defect and where it lives.
- Explain why the bug happens now.
- Explain why neighboring code does not prevent it.
- Call out whether this is a logic bug, contract mismatch, state bug, race, validation gap, integration issue, or regression.

## 6. Propose the fix without implementing it

- Describe the smallest coherent fix.
- State which files and boundaries would change.
- Note required tests, docs, config, or contract updates.
- Call out risks, side effects, and rollout concerns.

## 7. Stop and wait

- Report:
- `Observed issue`
- `Root cause`
- `Recommended fix`
- `Affected files`
- `Verification plan`
- Do not modify code until explicit approval is given.
