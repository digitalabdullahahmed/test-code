---
trigger: always_on
---

# Package Selection Rules

- add a dependency only when the platform, framework, or existing workspace code does not already solve the problem cleanly
- prefer mature, well-maintained libraries with strong documentation, clear ownership, and recent stable releases
- prefer official framework tooling and first-party packages before third-party abstractions when quality is comparable
- verify the current stable version and compatibility with the project stack before adoption
- reject dependencies that add broad surface area for a narrow need
- reject dependencies with weak maintenance signals, unclear licensing, or poor TypeScript support unless the user explicitly accepts the tradeoff
- prefer libraries that support tree-shaking, server-safe usage, and predictable security posture
- when adding a new package, document why it was chosen and what alternatives were rejected if the decision is non-obvious
- review whether the dependency belongs in a single app, a shared package, or should stay out of the workspace entirely

