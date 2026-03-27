---
description: Professional bugfix workflow that finds the root cause first, then implements and verifies the fix directly.
---

# Bugfix Diagnose And Fix

Use this workflow when the task requires full bug analysis plus direct implementation.

## 1. Define the bug clearly

- Restate actual versus expected behavior.
- Identify the impacted user flow, endpoint, module, or component.
- Note severity, regression risk, and likely blast radius.

## 2. Reproduce and trace

- Reproduce the issue locally when possible.
- Inspect the relevant call path end to end.
- Confirm where the behavior diverges from the expected flow.

## 3. Find the root cause before editing

- Test multiple hypotheses against the code.
- Verify the root cause with direct evidence.
- Avoid symptom patches that do not explain the failure mode.

## 4. Design the smallest safe fix

- Change the owning module instead of adding workaround glue.
- Preserve project structure and contracts.
- Include validation, error handling, and authorization updates where needed.

## 5. Implement the fix

- Update only the files needed for the coherent fix.
- Keep the implementation explicit and maintainable.
- Add tests that would fail before the fix and pass after it.

## 6. Verify aggressively

- Run focused tests first.
- Run broader checks when the surface area justifies them.
- Confirm there is no obvious regression in adjacent flows.

## 7. Close with root-cause clarity

- Report:
- `Bug`
- `Root cause`
- `Fix applied`
- `Verification performed`
- `Residual risk or follow-up`

