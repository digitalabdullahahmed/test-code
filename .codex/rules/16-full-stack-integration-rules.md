# Full-Stack Integration Rules

- any frontend feature that depends on application data is not complete until it is connected to a real backend path or explicitly labeled as scaffolding
- do not treat static arrays, mock adapters, or hard-coded view models as finished integration for data-driven features
- align the flow end to end: contract, backend endpoint, application logic, persistence, frontend client, and UI states
- if the backend path does not exist yet and the user asked for a real feature, build the minimum coherent backend path instead of faking the frontend
- implement and verify loading, empty, error, unauthorized, and success states for real data flows
- keep permission enforcement on the server and reflect permissions in the UI without duplicating server authority
- when integration is intentionally deferred, state that explicitly in code comments only where necessary and in the final summary
- do not call a task complete if the UI shape no longer matches the real backend contract
