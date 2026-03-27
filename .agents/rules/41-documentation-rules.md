# Documentation Rules

- update documentation whenever the change alters setup, architecture, behavior, contracts, runtime requirements, or operational expectations
- keep documentation close to the concern it explains: API docs for endpoints, architecture docs for structure, Storybook for components, README for onboarding
- prefer concise, maintainable documentation over long stale prose
- document non-obvious design choices, cross-module constraints, and operational caveats
- ensure generated docs such as OpenAPI, metadata helpers, or Storybook config remain aligned with the code
- when introducing a new dependency, service, queue, env var, or workflow, document how it is used and why it exists
