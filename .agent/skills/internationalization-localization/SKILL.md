---
name: internationalization-localization
description: Design multilingual and locale-aware Next.js frontends. Use this for language routing, translation structure, locale-aware formatting, text externalization, RTL considerations, and scalable localization architecture.
---

# Internationalization Localization

Use this skill whenever the task affects multilingual UI, locale-aware formatting, or translation structure.

## Core rules

- externalize translatable text
- make locale behavior explicit
- support formatting for dates, times, numbers, and currency
- keep translation ownership maintainable

## Required concerns

- route-level locale strategy
- translation key structure
- fallback behavior
- locale-aware formatting
- RTL support when relevant

## Review checklist

Reject or fix:
- hardcoded user-facing strings in complex product surfaces
- translation keys with no structure
- locale formatting handled inconsistently
- multilingual routing with weak fallback behavior
