---
name: frontend-third-party-integrations
description: Integrate browser-side third-party services safely into Next.js applications. Use this for provider SDK wrappers, script loading, maps, embeds, browser analytics vendors, payment widgets, and reliable boundaries around frontend integrations.
---

# Frontend Third Party Integrations

Use this skill whenever the task affects browser-side SDKs, third-party scripts, embeds, or frontend provider integrations.

## Core rules

- isolate provider specifics
- load scripts deliberately
- protect performance and security
- keep fallback behavior clear

## Required concerns

- script loading strategy
- client-only boundary design
- error handling and fallback UX
- provider wrapper boundaries
- privacy and performance implications

## Review checklist

Reject or fix:
- provider SDK logic spread across many components
- blocking heavy scripts with no reason
- no fallback behavior for provider failure
- weak boundary between app logic and vendor APIs
