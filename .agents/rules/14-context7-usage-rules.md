# Context7 Usage Rules

- use `Context7` first when the task needs current library or framework documentation, setup steps, API usage, migration notes, or version-specific examples
- prefer `Context7` over generic web search for package and framework docs when it is available and the task is documentation-driven
- resolve the library id first, then query docs with a version-aware question
- mention the exact library and version in the query when known
- if `Context7` does not provide the needed material, fall back to official docs and other primary sources
- do not treat `Context7` as authority for product-specific business rules, deployment secrets, or repo-local architecture decisions
- when a code change depends on external library behavior, cite that the decision was based on `Context7` or the official docs it pointed to
