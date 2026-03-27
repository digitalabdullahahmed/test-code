---
name: frontend-accessibility
description: Design and review accessible React and Next.js interfaces. Use this for semantic markup, keyboard access, focus management, form accessibility, screen reader support, accessible component states, and frontend accessibility quality standards.
---

# Frontend Accessibility

Use this skill whenever the task affects interactive UI, forms, overlays, navigation, or accessibility quality.

## Core rules

- accessibility is required, not optional
- semantic HTML comes first
- keyboard access must work
- focus behavior must be deliberate
- use ARIA only when native semantics are insufficient

## Required concerns

- heading hierarchy
- labels and descriptions
- button semantics
- keyboard operability
- visible focus states
- accessible error messaging
- modal and overlay focus management
- landmark structure
- reduced-motion support
- touch target usability

## Review checklist

Reject or fix:
- unlabeled controls
- divs pretending to be buttons
- keyboard traps
- missing focus states
- inaccessible status or error messaging
- ARIA used as a substitute for correct HTML
- interactions that depend only on color, hover, or motion
