---
description: Professional security review workflow for a specific surface or a broad system area with structured threat analysis and remediation guidance.
---

# Security Audit

Use this workflow for a serious security review of a specific point or an entire feature surface.

## 1. Define the audit scope

- Identify the exact target: endpoint, module, auth flow, upload path, admin area, frontend route, integration, or configuration surface.
- State whether the audit is point-specific or broad.
- Note trust boundaries and attacker entry points.

## 2. Map the attack surface

- Trace all relevant inputs, outputs, secrets, tokens, permissions, storage, and external calls.
- Identify where untrusted data enters and where sensitive actions happen.
- Include both server-side and browser-facing paths when relevant.

## 3. Run structured threat analysis

- Check authentication and authorization correctness.
- Check input validation, serialization, and error exposure.
- Check session handling, token handling, redirects, headers, CSRF, SSRF, XSS, injection, file handling, rate limits, and secret exposure as relevant.
- Check logging, auditability, and abuse controls on sensitive operations.

## 4. Inspect implementation details

- Read the exact code paths instead of relying on assumptions.
- Follow data and permission flow end to end.
- Check configuration defaults, environment assumptions, and unsafe fallbacks.

## 5. Classify findings clearly

- Mark each finding by severity and exploitation path.
- Distinguish confirmed vulnerabilities from suspicious patterns or hardening gaps.
- Explain impact, prerequisites, and affected files or modules.

## 6. Recommend remediation

- Provide the safest fix path for each finding.
- Prefer structural fixes over one-off guards.
- Include verification steps and regression risks.

## 7. Close with a professional audit summary

- Report:
- `Scope`
- `Threat model highlights`
- `Confirmed findings`
- `Hardening recommendations`
- `Verification gaps`
