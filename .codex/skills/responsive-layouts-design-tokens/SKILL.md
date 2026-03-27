---
name: responsive-layouts-design-tokens
description: Design responsive layouts and shared design-token systems for Next.js frontends. Use this for breakpoints, spacing systems, layout composition, mobile and desktop behavior, token-driven styling, and resilient responsive UI structure.
---

# Responsive Layouts Design Tokens

Use this skill whenever the task affects responsive behavior, layout systems, breakpoints, or token-driven UI structure.

## Core rules

- build mobile and desktop deliberately
- build mobile-first and verify scale-up behavior across tablets and large screens
- use tokens for spacing and rhythm
- keep layout primitives reusable
- avoid one-off breakpoint hacks
- account for touch, pointer, safe-area, and dynamic viewport behavior

## Required concerns

- spacing scale
- typography scale
- breakpoint strategy
- container width strategy
- dashboard and content layout behavior
- touch versus pointer ergonomics
- safe-area and mobile viewport constraints
- orientation and overflow behavior

## Review checklist

Reject or fix:
- inconsistent spacing
- ad hoc breakpoint logic
- desktop-only assumptions
- mobile-only assumptions that break on larger screens
- layout patterns duplicated across features
- tokenless styling sprawl
