# React Component Patterns

Load this reference when designing components, local state, shared state, and feature boundaries.

## Component rules

- Keep props explicit.
- Keep responsibilities narrow enough to reason about.
- Avoid premature abstraction.
- Extract repeated patterns when repetition becomes meaningful.

## State rules

- local state stays local
- URL state for shareable filters and navigation state
- server data should not be mirrored into unrelated client state without reason
- avoid global state unless multiple distant features truly need it

## Review points

- god components
- prop drilling that suggests a better boundary
- duplicated async state
- unnecessary context
- avoidable re-renders
