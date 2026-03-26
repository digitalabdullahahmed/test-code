# Context7 MCP

This workspace uses `Context7` as the preferred documentation lookup layer for current library and framework usage.

Use it when a task depends on:
- package or framework APIs
- setup or configuration steps
- migration notes
- version-specific behavior
- choosing between external libraries

Prefer `Context7` before generic web search for documentation-driven work.

## Official sources checked

- Upstash Context7 README: `https://github.com/upstash/context7`
- npm package `@upstash/context7-mcp`
- npm package `ctx7`

## Current package names

As checked on `2026-03-27`:
- MCP server package: `@upstash/context7-mcp`
- MCP server bin: `context7-mcp`
- CLI package: `ctx7`
- CLI bin: `ctx7`

## Recommended setup

Use the official guided setup:

```bash
pnpm context7:setup
```

This runs:

```bash
npx ctx7 setup
```

The official setup flow handles authentication and can install either CLI + skills mode or MCP mode depending on the target client.

## MCP usage model

When `Context7` is available through MCP, use this sequence:

1. resolve the library id
2. query docs with the exact task and version context
3. implement using the retrieved current docs
4. fall back to official docs if the result is incomplete

Typical tool flow:

1. `resolve-library-id`
2. `query-docs`

## Query guidance

Good queries include:
- library name
- task intent
- exact version when known
- framework mode when relevant

Examples:
- `Next.js 16 middleware cookies auth redirect`
- `NestJS 12 validation pipe transform whitelist`
- `Prisma PostgreSQL transaction isolation level`

## Project rule

Use `Context7` automatically for library and framework research even if the user does not explicitly request it, when that research can materially improve correctness or freshness.

## Notes

- `Context7` is for external docs, not for repo-local architecture decisions
- prefer official docs if the answer needs legal, billing, or provider-account specifics
- still verify sensitive security choices against primary official sources
