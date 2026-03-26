---
description: Comprehensive frontend review workflow for a specific point or full surface covering architecture, UX, accessibility, performance, and resilience.
---

# Frontend Audit

Use this workflow to review a specific frontend area or the whole frontend with professional depth.

## 1. Define the review target

- Identify the exact page, component tree, module, route group, or UI flow.
- Clarify whether the review is issue-driven or broad quality review.
- Note device, rendering, auth, and user-state assumptions.

## 2. Inspect the implementation structure

- Check whether `app/` stays route-focused.
- Check whether feature logic lives inside `modules/`.
- Review component boundaries, hooks, API access, and state ownership.

## 3. Review user experience quality

- Check clarity of the flow, loading states, empty states, error states, and success feedback.
- Check responsiveness and layout behavior across breakpoints.
- Check whether the UI feels intentional rather than generic where design matters.

## 4. Review engineering quality

- Check data-fetching flow, caching, client-versus-server boundaries, and hydration needs.
- Check accessibility, semantics, keyboard support, and focus behavior.
- Check frontend security, unsafe rendering, redirect behavior, and public config exposure.
- Check performance risks such as unnecessary client components, large payloads, or render-heavy patterns.

## 5. Classify findings

- Separate bugs, maintainability issues, accessibility gaps, performance issues, and UX weaknesses.
- Explain severity, user impact, and affected files.
- Distinguish confirmed defects from improvement opportunities.

## 6. Recommend fixes aligned with the architecture

- Suggest changes that preserve the current design system and project structure.
- Prefer structural improvements over superficial UI patching.
- Include verification expectations for high-risk paths.

## 7. Close with a clear frontend review summary

- Report:
- `Scope`
- `Major findings`
- `Architecture concerns`
- `Recommended fixes`
- `Verification gaps`
