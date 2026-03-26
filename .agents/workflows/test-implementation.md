---
description: Strong testing workflow for designing and implementing tests for a specific point with risk-based coverage and clear verification logic.
---

# Test Implementation Workflow

Use this workflow when the task is to add or improve tests for a specific behavior, module, or bugfix.

## 1. Define the test target

- Identify the exact behavior under test.
- State why it matters: regression prevention, contract safety, edge-case coverage, or confidence for refactoring.
- Identify the right test level: unit, integration, component, e2e, or a focused combination.

## 2. Inspect the existing behavior and test surface

- Read the implementation first.
- Read existing tests around the same module or feature.
- Reuse the local testing style, helpers, and fixture patterns.

## 3. Design the test strategy

- Define the main success path.
- Define critical failure paths, edge cases, and regression cases.
- Prefer tests that prove behavior and guard the real risk, not superficial line coverage.

## 4. Choose the smallest effective test layer

- Use unit tests for isolated logic.
- Use integration tests when behavior depends on wiring, persistence, validation, or module interaction.
- Use e2e or component-level flows when user-visible behavior is what actually matters.

## 5. Implement high-signal tests

- Keep setup explicit and readable.
- Avoid brittle assertions tied to irrelevant implementation details.
- Add test names that explain the behavior being protected.

## 6. Verify the tests themselves

- Confirm the test fails for the broken behavior when feasible.
- Run the focused test suite and fix flakes or weak assumptions.
- Expand verification if the risk area is broader than one file.

## 7. Close with testing clarity

- Report:
- `Behavior covered`
- `Test level chosen`
- `Key scenarios added`
- `Verification performed`
- `Remaining coverage gaps`
