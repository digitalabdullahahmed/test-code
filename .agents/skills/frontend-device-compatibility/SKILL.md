---
name: frontend-device-compatibility
description: Build Next.js frontends that work reliably across mobile, tablet, laptop, desktop, touch, pointer, and high-density displays. Use this for cross-device layout behavior, mobile-first UX, viewport constraints, touch ergonomics, safe areas, and compatibility review.
---

# Frontend Device Compatibility

Use this skill whenever a frontend task must work well on mobile and across device classes.

## Primary goal

Ship interfaces that remain usable, readable, and performant across:
- small mobile screens
- large mobile screens
- tablets
- laptops
- desktop monitors
- touch and pointer devices
- high-density displays

## Core rules

- design mobile-first, then scale upward deliberately
- prefer fluid layouts before adding breakpoint overrides
- avoid fixed widths that break on narrow screens
- respect safe areas, keyboard overlap, and browser UI chrome on mobile
- keep hit targets, spacing, and gestures touch-friendly
- verify orientation, overflow, and long-content behavior

## Required concerns

- viewport sizing and container behavior
- safe-area insets
- touch target size and spacing
- scroll behavior and sticky elements on mobile
- virtual keyboard and form usability
- responsive media handling
- dark and light contrast resilience if both themes exist
- cross-device navigation patterns

## Review checklist

Reject or fix:
- desktop-first layouts that collapse badly on mobile
- hidden overflow causing clipped actions or text
- tiny tap targets
- fixed-height sections that break with dynamic content
- sticky headers or drawers that interfere with mobile scrolling
- components that require hover to remain usable
- layout assumptions tied to one screen size or one input type
