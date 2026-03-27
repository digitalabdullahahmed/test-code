---
name: ui-ux-research-thinking
description: Think through UI and UX before implementation. Use this for interaction design, information architecture, user flows, usability reasoning, UX tradeoffs, interface research, and making frontend decisions that align with user goals instead of only visual polish.
---

# UI UX Research Thinking

Use this skill whenever frontend work needs stronger product thinking before coding.

## Primary goal

Design interfaces that are not only attractive, but also understandable, efficient, and aligned with user intent.

## Thinking workflow

1. define the user and the job they are trying to complete
2. identify the primary action, secondary actions, and failure states
3. map the shortest understandable flow
4. decide what should be obvious immediately versus progressively revealed
5. choose the interaction model that reduces confusion and cognitive load
6. only then design the visual and technical implementation

## Required concerns

- user goals and task context
- information hierarchy
- empty, loading, success, and failure states
- form friction and error recovery
- trust and clarity in critical flows
- discoverability of key actions
- consistency with the rest of the product
- accessibility and inclusivity as UX, not only compliance

## Research rules

- prefer simple, testable interaction choices over flashy but confusing patterns
- identify the one thing the user must understand within the first few seconds
- reduce unnecessary steps, fields, and decisions
- choose defaults that help the user complete the task safely
- keep terminology concrete and predictable
- when a flow is high-risk, design for confirmation, recovery, and visibility

## Review checklist

Reject or fix:
- screens with no clear primary action
- dense layouts with weak hierarchy
- forms that ask for unnecessary information
- destructive actions without clarity or recovery
- polished UI that still leaves the user unsure what to do next
- interactions that optimize aesthetics at the expense of comprehension
