---
trigger: always_on
---

# Breaking Change Rules

- identify whether a change can break public APIs, internal contracts, database assumptions, route behavior, SEO surfaces, or deployment workflows before implementation
- avoid breaking changes when an additive path or staged migration is realistic
- when a breaking change is required, update contracts, docs, tests, and migration notes in the same task
- explicitly review consumers of changed types, endpoints, env vars, config keys, queues, events, and shared utilities
- call out breaking changes clearly in the final summary instead of burying them in implementation details
- do not silently change naming, payload shape, route semantics, or database meaning without updating dependent surfaces

