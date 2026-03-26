---
name: frontend-security-hardening
description: Harden browser-facing React and Next.js applications. Use this for secret exposure prevention, unsafe HTML review, redirect safety, CSRF awareness, session handling risks, environment variable safety, and frontend security review.
---

# Frontend Security Hardening

Use this skill whenever the task affects browser security posture or frontend security review.

## Core rules

- never leak secrets into client code
- do not trust hidden UI as real authorization
- sanitize dangerous HTML if rendering is unavoidable
- handle redirects and session state safely

## Required concerns

- `NEXT_PUBLIC_*` exposure review
- cookie-based auth awareness
- open redirect risk
- unsafe HTML rendering
- browser storage risk
- auth failure behavior

## Review checklist

Reject or fix:
- secrets in browser bundles
- unsafe `dangerouslySetInnerHTML` without sanitation
- redirect flows with no safety checks
- auth-sensitive state stored unsafely
- UI-only authorization assumptions
