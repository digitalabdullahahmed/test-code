# Frontend Security And Performance

Load this reference when reviewing frontend security posture or performance-sensitive UI.

## Security

- Never leak secrets into browser bundles.
- Do not trust hidden UI for authorization.
- Sanitize dangerous HTML if unavoidable.
- Handle cookie-based auth with CSRF awareness.
- Review redirect handling for open redirect risk.

## Performance

- Prefer server components for read-heavy UI.
- Keep client bundles small.
- Lazy-load heavy features.
- Watch list rendering cost.
- Avoid oversized shared providers causing broad re-renders.

## Review points

- client bundle bloat
- unsafe env exposure
- unnecessary hydration
- no loading boundaries
- expensive list rendering
