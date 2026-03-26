---
name: authentication-authorization
description: Build or review complete authentication and authorization systems for NestJS modular monolith REST APIs. Use this for login, signup, JWT, refresh token rotation, session management, roles, permissions, guards, account recovery, email verification, API keys, service-to-service auth, OAuth or SSO integration, audit logging, incident response, signing key rotation, and auth security hardening in projects based on brocoders/nestjs-boilerplate.
---

# Authentication & Authorization

Use this skill whenever the backend needs identity, access control, or session security work.

Project target:
- Framework: `NestJS`
- API style: `REST`
- Architecture: `modular monolith`
- Baseline starter: `brocoders/nestjs-boilerplate`

## Primary outcomes

Build an auth system that is:
- secure by default
- modular and easy to extend
- explicit in authorization decisions
- testable end to end
- suitable for production, not demo-grade

## Before writing code

1. Inspect the current module layout, persistence layer, validation setup, and error format.
2. Search the web if versions, package APIs, OAuth details, or security guidance may be outdated.
3. Prefer official docs for NestJS, the boilerplate, auth libraries, and identity providers.
4. Decide whether the project needs:
- local auth only
- local auth plus social login
- enterprise SSO
- RBAC only
- RBAC plus resource ownership checks
- multi-tenant scoping

## Required architecture

Keep auth as a dedicated platform capability with clear boundaries.

Minimum module split:
- `iam` or `auth` module for login, token issuance, and guards
- `users` module for user profile and lifecycle
- `roles` and `permissions` capabilities, either inside `iam` or as adjacent modules
- `sessions` persistence for refresh tokens and device/session tracking

Recommended internal layering:
- `presentation/` for controllers, request DTOs, response DTOs
- `application/` for use cases and orchestration
- `domain/` for entities, value objects, policies, invariants
- `infrastructure/` for ORM repositories, mailers, token stores, adapters

Do not collapse all auth logic into controllers or one giant service.

## Baseline features to implement

For a serious project, include all of the following unless the user explicitly narrows scope:

- user registration
- login
- logout from current session
- logout from all sessions
- access token issuance
- refresh token rotation
- hashed refresh token storage or equivalent secure server-side persistence
- authenticated current-user endpoint
- forgot password
- reset password
- change password
- email verification
- resend verification
- role assignment
- permission checks
- route guards
- resource ownership checks where needed
- audit trail for sensitive auth events
- session/device management
- brute-force protection or rate limiting on sensitive endpoints

Optional extensions when requested:
- social login
- enterprise SSO
- magic links
- MFA or TOTP
- tenant-aware authorization
- API keys
- service-to-service authentication
- signing key rotation and incident response

## Security defaults

These are the default choices unless the project explicitly requires something else:

- Hash passwords with `argon2id` or an officially recommended strong password hashing setup.
- Keep access tokens short lived.
- Use refresh token rotation.
- Treat refresh tokens as session credentials and persist them server side.
- Store refresh tokens hashed when feasible.
- Revoke token families on reuse detection or suspicious rotation failure.
- Prefer `HttpOnly`, `Secure`, `SameSite` cookies for refresh tokens when browser clients are involved.
- If bearer refresh tokens are used, document why and compensate with stronger controls.
- Validate all DTOs.
- Normalize auth errors to avoid leaking account existence or internal state.
- Add rate limiting to login, reset, verification resend, and other abuse-prone endpoints.
- Audit successful and failed security-sensitive operations.
- Invalidate sessions after password reset and other critical account changes when policy requires it.
- Keep signing keys versioned and support controlled rotation.
- Treat machine credentials as first-class secrets with scoped permissions and revocation flows.

## Authorization model

Default authorization model:
- authentication proves identity
- RBAC grants coarse access
- policy or ownership checks enforce resource-level access

Recommended progression:
1. Implement RBAC first.
2. Add permission constants and decorators.
3. Add ownership or scope checks in application services or authorization policies.
4. If the domain becomes complex, introduce explicit policy objects instead of spreading conditions across controllers.

Do not rely only on client-side hiding of actions. Every sensitive action must be enforced server side.

## Recommended data model

Adapt names to the project's ORM and conventions, but the backend usually needs these records:

- `users`
- `roles`
- `permissions`
- `user_roles`
- `role_permissions`
- `sessions` or `refresh_tokens`
- `email_verification_tokens`
- `password_reset_tokens`
- `audit_logs` for auth-relevant events if a shared audit system does not already exist

Useful fields:
- `users`: id, email, password_hash, status, email_verified_at, last_login_at, password_changed_at
- `sessions`: id, user_id, token_hash, user_agent, ip_address, expires_at, revoked_at, replaced_by_session_id
- token tables: hashed token, expires_at, consumed_at, created_at

Never store raw passwords. Avoid storing raw long-lived tokens if hashing works for the use case.

For API keys:
- store only a hashed secret or hashed key material server side
- show the full secret only once at creation time
- include a key prefix or public identifier for lookup
- support expiry, revocation, last-used timestamps, and optional scoped permissions

## Endpoint checklist

Design clear REST endpoints. A common baseline:

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `POST /auth/logout-all`
- `GET /auth/me`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`
- `POST /auth/change-password`
- `POST /auth/verify-email`
- `POST /auth/resend-verification`
- `GET /auth/sessions`
- `DELETE /auth/sessions/:sessionId`

Administration endpoints when needed:
- `GET /roles`
- `POST /roles`
- `PATCH /roles/:id`
- `GET /permissions`
- `POST /users/:id/roles`

Machine auth endpoints when needed:
- `POST /api-keys`
- `GET /api-keys`
- `PATCH /api-keys/:id`
- `DELETE /api-keys/:id`
- `POST /service-auth/token`

Keep controller code thin. Authorization decisions should be expressed through guards, decorators, and application-level policies.

## NestJS implementation guidance

Use NestJS primitives deliberately:

- guards for authentication and top-level authorization checks
- decorators for current user, required permissions, and public routes
- interceptors only for cross-cutting behavior, not auth business rules
- pipes for validation and transformation
- providers for token services, password services, and authorization services

Typical building blocks:
- `JwtAccessGuard`
- `JwtRefreshGuard` or equivalent refresh-session validation guard
- `RolesGuard`
- `PermissionsGuard`
- `ApiKeyGuard`
- `ServicePrincipalGuard`
- `@CurrentUser()`
- `@Public()`
- `@RequirePermissions(...)`

## Token and session strategy

Default strategy:
- short-lived access JWT for API access
- refresh token tied to a persisted session
- session rotation on refresh
- revocation support per session and globally per user

When implementing refresh:
- create a new session or rotate the existing one with lineage tracking
- invalidate old refresh token on use
- detect replay where feasible
- capture metadata useful for session management and security review

When implementing machine auth:
- separate human identities from service principals
- scope API keys and service tokens to explicit permissions
- prefer short-lived signed service tokens over permanent bearer credentials where possible
- support immediate revocation and key disablement
- track creator, owner, last use, source IP, and intended integration

## Password and recovery flows

Password flows must include:
- strong password policy suited to product requirements
- secure password hashing
- reset tokens with expiry and one-time use
- generic responses for forgot-password to avoid account enumeration
- session invalidation strategy after reset or password change

## Email verification flows

Verification flows must include:
- expiring verification token
- one-time consumption
- resend endpoint with abuse controls
- ability to gate parts of the product until email is verified if required

## API keys and service authentication

Use API keys for external integrations and service credentials only when they fit the trust model.

Required capabilities:
- key creation with one-time secret display
- hashed storage
- permission or scope binding
- optional environment or tenant scoping
- expiry support
- revocation support
- last-used tracking
- audit logging

Preferred key format:
- public prefix for identification
- secret component with enough entropy
- no recoverable plaintext copy after creation

For service-to-service auth, prefer one of these in order:
1. short-lived signed tokens issued to a service principal
2. OAuth client credentials style flow if the ecosystem requires it
3. API keys only when simpler integration is needed and risk is understood

Service auth design rules:
- define service principals explicitly
- scope permissions tightly
- avoid reusing human roles for machines unless the domain is simple and documented
- keep separate guards or auth strategies for machine callers
- add throttling, auditing, and revocation

## Security incident handling and token key rotation

Auth design is incomplete without incident response capabilities.

At minimum, design for:
- user session revocation
- global user logout after compromise
- API key revocation
- service credential disablement
- signing key rotation
- emergency token invalidation policy
- audit review of suspicious auth events

Signing key rotation requirements:
- support key versioning with `kid` or an equivalent identifier
- keep active and previous verification keys available during controlled rollout
- rotate keys without breaking valid in-flight sessions unless an incident requires hard cutover
- document how new tokens are signed and how old tokens are verified during migration
- define emergency rotation behavior for compromise scenarios

Incident response expectations:
- detect and record suspicious refresh reuse, unusual login patterns, and revoked credential use
- provide operational commands or admin endpoints for revocation actions
- invalidate affected sessions or credentials quickly
- rotate secrets and signing keys when compromise is suspected
- document blast radius and recovery steps in code comments or runbook references when needed

## Auditing and observability

At minimum, record:
- registration
- login success
- login failure
- logout
- logout-all
- password reset requested
- password reset completed
- email verification completed
- role or permission changes
- suspicious token reuse or revoked token activity
- API key creation, rotation, use anomaly, and revocation
- service principal token issuance and revocation
- signing key rotation and emergency auth actions

Prefer structured logging and domain events over ad hoc console output.

## Testing requirements

Do not mark auth work complete without tests.

Minimum test coverage:
- registration success and validation failure
- login success and failure
- refresh success
- refresh replay or revoked-token behavior
- logout current session
- logout all sessions
- forgot-password request
- reset-password success and invalid token failure
- email verification success and invalid token failure
- role-protected route access
- permission-protected route access
- ownership-protected route access when applicable
- API key authentication success and revoked-key failure
- service-to-service auth success and insufficient-scope failure
- signing key rotation compatibility where token verification spans key versions
- incident revocation flows for sessions, API keys, and service credentials

Test at multiple levels:
- unit tests for token, password, and policy services
- integration tests for repositories and persistence rules
- e2e tests for auth flows and guards

## Delivery checklist

Before finishing, ensure the implementation includes:

- migrations or schema updates
- DTO validation
- guards and decorators
- explicit auth configuration
- token expiry configuration
- secure cookie config if used
- rate limiting on sensitive endpoints
- revocation and session management
- API key hashing and one-time reveal behavior if API keys are supported
- service principal scoping if machine auth is supported
- signing key versioning and rotation support if JWT signing keys are managed internally
- audit coverage
- API documentation updates
- test coverage

## Review checklist

Reject or fix these problems:

- access tokens with excessively long lifetime
- refresh tokens without rotation
- raw refresh tokens stored carelessly
- password hashes handled outside a dedicated password service
- authorization logic duplicated across controllers
- missing logout-all or missing session revocation
- API keys stored in plaintext or without scope boundaries
- human and machine auth mixed together without clear principal boundaries
- no key versioning or no rotation plan for token signing material
- no emergency revocation path for compromised credentials
- no audit trail for sensitive operations
- user enumeration in password reset or login errors
- missing tests around failure paths
- auth coupled tightly to unrelated business modules

## When to load references

Read `references/auth-checklist.md` when you need a compact implementation and review checklist during coding or review.
