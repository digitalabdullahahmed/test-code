# Full-Stack Feature Rules

- for a data-driven feature, define or confirm the contract before finishing the UI
- keep frontend field names, filters, pagination, errors, and status handling aligned with the backend contract
- do not duplicate backend business rules in frontend code when the server should be the source of truth
- keep API client mapping explicit when frontend view models differ from transport models
- ensure auth-sensitive frontend paths consume real authorization-aware backend responses
- prefer a narrow vertical slice that works end to end over a broad disconnected surface
- when backend and frontend change together, review shared packages, env vars, route behavior, docs, and tests together
