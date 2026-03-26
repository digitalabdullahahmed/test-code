---
name: security-hardening
description: Harden NestJS backends for production. Use this for secure defaults, headers, request abuse protection, CSRF considerations, unsafe file handling, SSRF defenses, secret exposure review, logging safety, input and output hardening, and backend security review.
---

# Security Hardening

Use this skill whenever the task affects backend security posture or needs a security review.

## Core rules

- Default to secure-by-default behavior.
- Treat every input as untrusted.
- Limit blast radius through least privilege and tight boundaries.
- Log safely.

## Security areas to review

- validation and sanitization
- auth and authorization enforcement
- rate limiting and abuse protection
- secret handling
- file upload safety
- SSRF and unsafe outbound calls
- unsafe redirects
- logging and PII leakage
- dependency and configuration risk

## Runtime hardening

Consider:
- secure headers where applicable
- request size limits
- file type and size validation
- outbound allowlists for risky integrations
- safe timeout defaults
- safe error messages

## Review checklist

Reject or fix:
- sensitive data in logs
- weak validation
- trust in frontend-only authorization
- unsafe file handling
- no abuse controls on sensitive routes
- outbound requests with no SSRF thinking
- secrets in code or docs
