# Machine Auth And Key Rotation

Load this reference when the task includes API keys, service principals, incident handling, or signing key rotation.

## API keys

- Create a public identifier plus a secret component.
- Store only a hash of the secret.
- Show the full secret once at creation time.
- Bind keys to scopes, owner, and optional expiry.
- Record last use and revoke instantly when needed.

## Service authentication

- Prefer service principals over pretending a service is a user.
- Prefer short-lived issued tokens over long-lived static credentials.
- Separate machine guards and strategies from human session auth.
- Keep scopes narrow and auditable.

## Token signing keys

- Version signing keys with `kid`.
- Allow verification with old keys during planned rollover.
- Define emergency rotation for compromise.
- Record when rotations happen and which tokens are affected.

## Incident handling

- Support revoke current session, revoke all sessions, revoke key, and disable principal.
- Audit suspicious token reuse and revoked credential attempts.
- Ensure admins have a controlled path to force invalidation.
