# Auth Checklist

Use this as a compact checklist while implementing or reviewing authentication and authorization.

## Design

- Separate identity and access concerns from unrelated domain modules.
- Keep controllers thin.
- Centralize password hashing, token issuance, and policy decisions.
- Prefer explicit permission names over magic strings scattered across files.

## Security

- Hash passwords with a strong algorithm.
- Keep access tokens short lived.
- Rotate refresh tokens.
- Persist sessions.
- Revoke sessions on logout and security-sensitive events.
- Add abuse controls to sensitive endpoints.
- Avoid account enumeration.

## Authorization

- Enforce authentication at the guard layer.
- Enforce RBAC with roles and permissions.
- Add ownership or scope checks in application services or policy objects.
- Never trust the frontend for authorization.

## Data

- Store session metadata useful for revocation and security review.
- Track token expiry and one-time consumption for reset and verification tokens.
- Record audit events for sensitive actions.

## Testing

- Cover success and failure paths.
- Test revoked and expired tokens.
- Test protected routes with missing roles and permissions.
- Test password reset and email verification flows end to end.
