---
name: ui-design-system
description: Build and govern a reusable design system for Next.js frontends. Use this for shared UI primitives, design tokens, variants, visual consistency, responsive UI foundations, and scalable component library structure.
---

# UI Design System

Use this skill whenever the task affects shared UI components, primitives, tokens, or design consistency.

## Core rules

- design tokens come first
- primitives should be reusable and predictable
- variants must be explicit
- visual consistency matters more than one-off styling shortcuts
- typography and motion belong to the system, not as afterthoughts
- the system should support expressive, memorable surfaces, not just safe defaults

## Recommended structure

- `components/ui/` for primitives
- `styles/` for global tokens and theme variables
- feature modules compose primitives, they do not reinvent them

## Required concerns

- color, spacing, radius, typography, and motion tokens
- button, input, modal, card, table, and form primitives
- variant strategy
- accessible states
- desktop and mobile behavior
- display and body font strategy
- background, border, and surface language

## Review checklist

Reject or fix:
- copy-pasted styling across modules
- inconsistent variants
- no design tokens
- primitives coupled to one feature
- inaccessible component states
- generic typography with no visual intent
- motion behavior with no system rules
