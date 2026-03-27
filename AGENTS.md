## Project Operating System

This repository is a high-standard AI engineering workspace for building a production-grade:
- `NestJS` backend
- `Next.js` frontend
- shared monorepo platform

The AI agent must behave like a disciplined senior engineer, not a code generator.

## Stack defaults

- Backend framework: `NestJS`
- Backend style: `RESTful API`
- Backend architecture: `modular monolith`
- Backend inspiration baseline: `brocoders/nestjs-boilerplate`
- Frontend framework: `Next.js App Router`
- Frontend architecture: `feature-based modules`
- Frontend default rendering approach: `Server Components first`
- Workspace style: `pnpm` + `turbo`

## Global execution rules

- Prefer maintainable, explicit, testable code over clever code.
- Keep boundaries clear across apps, packages, modules, and features.
- Write code that is easy to extend later, not just fast to generate now.
- Use typed contracts, validation, structured errors, and tests.
- Add succinct documentation where future maintainers need context.
- Treat database design, auth, API contracts, and SEO as first-class concerns.
- Do not ship shortcuts that create hidden coupling or future rewrite pressure.
- Preserve the project structure and architectural intent in every change.
- Think through the full request professionally before writing code.
- Do not write random code, duplicate logic casually, or patch symptoms without understanding the system.
- Implement changes as a professional engineer would: coherent, connected, and structurally consistent.
- Do not treat placeholder, mock, or TODO-only behavior as finished implementation.
- Do not treat disconnected frontend UI as complete when the feature is supposed to use real backend data.
- Edit source files, not generated outputs or derived artifacts, unless the task explicitly requires generator work.

## Research rules

- If a task depends on unstable facts, package versions, framework behavior, browser behavior, search-engine behavior, security guidance, or provider APIs, search the web first.
- Prefer official documentation and other primary sources.
- Prefer `Context7` first for current library, framework, and package documentation when it is available.
- For auth and security-sensitive work, verify current guidance before implementation.
- For React, Next.js, metadata, SEO, and caching behavior, verify current official guidance before implementation when details may have changed.
- If a better library, safer package, or newer official pattern may exist for the task, search the web before deciding.
- Use web research to confirm best libraries, latest stable releases, and current best practices when the choice is time-sensitive.

## Skill usage rules

- Always use the most relevant local skill when the task matches it.
- If multiple skills apply, combine the smallest useful set.
- Do not improvise around an existing skill when the skill already covers the concern.
- For cross-cutting work, apply architecture skill first, then concern-specific skills.
- For review tasks, use the appropriate review/refactor skill in addition to the concern skill.
- For implementation tasks, use `.codex/skills/workflow-playbooks` to follow a repeatable execution path.
- For multi-layer or ambiguous delivery tasks, use `.codex/skills/engineering-team-orchestration` to think and execute like a coordinated engineering team.

## Rules system

The repo includes `.codex/rules/` as a rulepack layer beneath this file.

Use it as follows:
- `00-*` priority and decision rules first
- `10-*` execution workflow rules second
- `11-*` to `19-*` and `29-*` for research, dependencies, impact, `Context7`, real-implementation discipline, full-stack integration, request understanding, decomposition, acceptance criteria, and module/prerequisite detection
- `20-*` to `28-*` for concern-specific implementation, module-boundary rules, full-stack feature rules, UI state rules, microcopy rules, backend reliability, and outbound resilience next
- `30-*` to `34-*` for quality, security, release, and breaking-change gates before finishing
- `40-*` to `42-*` for reviews, documentation expectations, and handoff discipline
- `50-*` and `60-*` for done criteria and placement discipline
- `61-*` to `63-*` for naming, comments, and generated-file discipline during editing

## Context7 rules

- Use `Context7` for library and framework documentation research before generic web search when it is available.
- Use `Context7` when evaluating package APIs, setup steps, configuration patterns, migration notes, and version-specific usage.
- Prefer the `resolve-library-id` then `query-docs` flow for MCP-based research.
- If `Context7` is incomplete, fall back to official docs and other primary sources.
- Treat `Context7` as a documentation accelerator, not as a replacement for repo-local reasoning or security judgment.

## Backend standards

- Keep controllers thin.
- Keep orchestration in application services or use cases.
- Keep domain rules close to the domain that owns them.
- Keep infrastructure concerns isolated.
- Prefer explicit transactions, idempotency strategy, and observability on important flows.
- Make outbound timeouts, retries, and degradation behavior explicit.
- Fail fast on invalid critical configuration and think about graceful shutdown.
- Do not treat `common` or `shared` as dumping grounds.
- Use clear naming for files, classes, methods, and modules.
- Add comments only when preserving reasoning, tradeoffs, or non-obvious constraints.

## Frontend standards

- Keep `app/` thin and route-focused.
- Keep feature logic inside `modules/`.
- Prefer Server Components by default.
- Use `use client` only when the feature truly requires it.
- Prefer derived state over duplicated or contradictory state.
- Keep API access centralized.
- Build with accessibility, responsive behavior, and performance in mind from the start.
- Require clear loading, empty, success, and error states for meaningful interactions.
- Require clear microcopy, strong hierarchy, and an obvious primary action.
- Avoid generic AI-looking UI. Use clear visual direction, deliberate typography, and meaningful motion.

## SEO standards

- Search-facing pages must have deliberate metadata.
- Use canonical strategy, robots behavior, sitemap generation, and indexability rules explicitly.
- Use structured data only when it matches real page intent.
- Keep internal linking and content architecture aligned with discoverability goals.
- Validate what bots actually see, not just what humans see in the browser.

## Quality gates

No work is complete if any relevant gate is missing:
- architecture fit
- validation
- authorization where needed
- error handling
- test coverage appropriate to risk
- documentation updates where needed
- performance and security review for affected paths
- SEO review for search-facing frontend changes
- follow-on impact review after the main change
- confirmation that related files, imports, contracts, tests, docs, routes, metadata, and configs do not also need updates
- release and migration safety review for rollout-sensitive changes
- breaking-change review for contracts, schema, routes, env vars, and shared packages
- confirmation that no placeholder or fake implementation remains in finished paths
- confirmation that data-driven frontend changes are connected to a real backend contract and verified accordingly
- confirmation that the delivered result matches the actual requested outcome, not only a partial technical interpretation
- cross-layer handoff and integration review for multi-surface tasks
- usability, async state, and microcopy review for meaningful frontend changes
- operational reliability review for meaningful backend changes

## Thinking rules

- Think in English for technical reasoning, planning, and implementation decisions.
- When the request is in English, process it in English-first technical terms for maximum precision.
- Before finishing any task, ask whether the change requires extra updates elsewhere in the project.
- Always prefer the best current standard in naming, structure, testing, documentation, security, performance, and SEO.
- Before starting implementation, decide whether the request needs a new module, an extension of an existing module, or only a local change.
- Detect and surface missing prerequisites explicitly instead of discovering them too late during implementation.

## Skill routing rules

- If the task touches login, signup, password hashing, password reset, email verification, sessions, refresh tokens, JWT, RBAC, permissions, guards, access control, audit trails, account recovery, SSO, OAuth, multi-device session management, or security hardening, use `.codex/skills/authentication-authorization`.
- If the task touches API keys, machine-to-machine authentication, service credentials, token revocation incidents, signing key rollover, compromise response, or auth-related incident recovery, use `.codex/skills/authentication-authorization`.
- If the task touches schema design, data modeling, SQL, PostgreSQL, MySQL, Prisma, Eloquent, migrations, seeders, indexes, constraints, transactions, database performance, backup, data retention, relationships, or ORM review, use `.codex/skills/database-orm`.
- If the task touches NestJS backend structure, modular monolith boundaries, module layout, folder naming, service design, code organization, comments, naming conventions, backend scalability, backend performance, backend documentation, or backend testing strategy, use `.codex/skills/nestjs-modular-monolith-architecture`.
- If the task touches REST design, DTO contracts, status codes, pagination, filtering, sorting, API versioning, idempotency, or request and response schema design, use `.codex/skills/api-design-contracts`.
- If the task touches validation, serialization, exception filters, error envelopes, input parsing, response shaping, or request lifecycle correctness, use `.codex/skills/validation-serialization-error-handling`.
- If the task touches repositories, data-access abstractions, transactions, query composition, persistence orchestration, or raw SQL escape hatches, use `.codex/skills/repository-and-data-access`.
- If the task touches NestJS controllers, services, use cases, handlers, endpoint organization, or request-flow implementation patterns, use `.codex/skills/rest-controller-service-patterns`.
- If the task touches domain rules, aggregates, value objects, internal boundaries, or domain-driven module design, use `.codex/skills/domain-driven-module-design`.
- If the task touches unit tests, integration tests, e2e tests, test data, test strategy, or backend quality gates, use `.codex/skills/testing-unit-integration-e2e`.
- If the task touches backend security, headers, CSRF, SSRF, unsafe file handling, request abuse, secret exposure, or hardening review, use `.codex/skills/security-hardening`.
- If the task touches logging, metrics, tracing, health checks, audit events, correlation IDs, monitoring, or production diagnostics, use `.codex/skills/audit-logging-observability`.
- If the task touches environment config, secrets, runtime options, feature flags, configuration validation, or deployment-safe settings, use `.codex/skills/configuration-env-secrets-management`.
- If the task touches queues, background jobs, scheduling, retries, dead-letter handling, outbox processing, or asynchronous workflows, use `.codex/skills/background-jobs-queues-scheduling`.
- If the task touches caching, cache invalidation, read optimization, hot paths, query performance, response performance, or backend performance tuning, use `.codex/skills/caching-performance`.
- If the task touches OpenAPI, Swagger, API documentation generation, API examples, or documentation quality for backend endpoints, use `.codex/skills/api-documentation-openapi-swagger`.
- If the task touches file uploads, object storage, file validation, media processing, signed URLs, or file lifecycle management, use `.codex/skills/file-storage-upload-management`.
- If the task touches email, SMS, push notifications, templates, delivery workflows, or notification preferences, use `.codex/skills/notifications-email-sms-push`.
- If the task touches search, filtering, sorting, pagination, cursor behavior, or list endpoint query semantics, use `.codex/skills/search-filter-sort-pagination`.
- If the task touches concurrency, idempotency, duplicate protection, locking, retry safety, or consistency under concurrent requests, use `.codex/skills/transactions-concurrency-idempotency`.
- If the task touches internal events, outbox patterns, module-to-module eventing, or event-driven workflows inside the modular monolith, use `.codex/skills/event-driven-internal-architecture`.
- If the task touches throttling, rate limiting, abuse prevention, quotas, or defensive request controls, use `.codex/skills/rate-limiting-throttling-abuse-protection`.
- If the task asks for review, refactor, naming cleanup, comment quality, maintainability improvements, or backend code quality review, use `.codex/skills/code-review-refactor-standards`.
- If the task touches backend coding style, file organization discipline, method size, readability, naming, comment quality, review heuristics, or maintainability standards during implementation, use `.codex/skills/backend-coding-standards`.
- If the task touches Docker, container runtime behavior, local development containers, production containerization, health checks, runtime images, or service startup behavior, use `.codex/skills/docker-infrastructure-runtime`.
- If the task touches CI, CD, pipelines, release safety, build verification, deployment workflows, or environment promotion, use `.codex/skills/ci-cd-release-deployment`.
- If the task touches external APIs, webhooks, provider SDKs, integration retries, anti-corruption boundaries, or third-party integration reliability, use `.codex/skills/third-party-integrations`.
- If the task touches startup behavior, graceful shutdown, health and readiness, request timeouts and limits, worker coordination, or backend runtime reliability, use `.codex/skills/backend-operational-reliability`.
- If the task depends on current library or framework documentation, package selection, migration notes, setup steps, or version-specific API behavior, use `.codex/skills/context7-docs-research`.
- If the task touches feature flags, runtime toggles, system settings, configurable behavior, or backend-managed product configuration, use `.codex/skills/feature-flags-settings-management`.
- If the task spans backend, frontend, shared packages, testing, docs, or multiple role-like concerns at once, use `.codex/skills/engineering-team-orchestration`.
- If the task touches React, Next.js, frontend architecture, App Router, components, forms, client state, server state, accessibility, UI structure, auth-aware frontend behavior, frontend performance, or frontend testing, use `.codex/skills/react-nextjs-frontend`.
- If the task needs a disciplined implementation path for new features, bug fixes, backend modules, frontend pages, SEO work, refactors, or reviews, use `.codex/skills/workflow-playbooks`.
- If the task includes both frontend UI and backend data behavior, use `.codex/skills/workflow-playbooks` and follow the `Full-stack data feature` playbook instead of treating the frontend in isolation.
- If the task touches frontend coding style, naming, file organization, readability, comment quality, or maintainability standards in Next.js or React code, use `.codex/skills/frontend-coding-standards`.
- If the task touches Next.js route structure, App Router organization, route groups, layouts, loading boundaries, metadata, or overall app layout architecture, use `.codex/skills/nextjs-app-architecture`.
- If the task touches shared UI primitives, design tokens, component variants, visual consistency, or design-system structure, use `.codex/skills/ui-design-system`.
- If the task touches labels, helper text, button text, empty states, error messages, confirmations, or product language in the UI, use `.codex/skills/ux-writing-and-microcopy`.
- If the task touches React component boundaries, composition patterns, hooks, prop design, feature modules, or component maintainability, use `.codex/skills/component-architecture-patterns`.
- If the task touches forms, client validation, submission UX, field errors, pending states, or mutation-oriented user input flows, use `.codex/skills/forms-validation-ux`.
- If the task touches frontend data fetching, server state, client state, TanStack Query, Zustand, cache strategy, or server-versus-client data flow decisions, use `.codex/skills/frontend-data-fetching-state-management`.
- If the task touches API client design, typed frontend contracts, fetch wrappers, axios wrappers, backend contract consumption, or frontend DTO mapping, use `.codex/skills/frontend-api-client-contracts`.
- If the task is a data-driven frontend feature, combine `.codex/skills/frontend-api-client-contracts`, `.codex/skills/frontend-data-fetching-state-management`, and the relevant backend skill instead of building a disconnected UI shell.
- If the task touches auth state in the frontend, cookie-based sessions, permission-aware UI, protected experiences, login flows, or session expiry handling, use `.codex/skills/frontend-auth-session-permission-integration`.
- If the task touches routing guards, middleware, redirects, protected navigation, public/private route grouping, or route access flow, use `.codex/skills/routing-navigation-middleware-guards`.
- If the task touches frontend error states, retries, resilience, route-level fallbacks, degraded UX, or recovery flows, use `.codex/skills/frontend-error-handling-resilience`.
- If the task touches accessibility, semantic markup, keyboard interaction, focus management, screen reader behavior, or inclusive UI quality, use `.codex/skills/frontend-accessibility`.
- If the task touches frontend security, secret exposure, unsafe HTML rendering, redirect safety, CSRF awareness, client-side auth risks, or browser-facing hardening, use `.codex/skills/frontend-security-hardening`.
- If the task touches bundle size, rendering cost, hydration, lazy loading, React performance, image or font optimization, or frontend speed tuning, use `.codex/skills/frontend-performance-optimization`.
- If the task touches responsive layouts, spacing systems, design tokens, breakpoints, layout composition, or cross-device frontend behavior, use `.codex/skills/responsive-layouts-design-tokens`.
- If the task touches mobile behavior, tablet behavior, cross-device compatibility, touch ergonomics, viewport safety, orientation issues, or device-specific frontend resilience, use `.codex/skills/frontend-device-compatibility`.
- If the task touches tables, data grids, search UI, filters, sort controls, pagination UI, or large-list frontend interactions, use `.codex/skills/tables-filters-search-pagination`.
- If the task touches frontend file uploads, previews, progress UI, client-side file validation, or media interaction UX, use `.codex/skills/file-upload-media-frontend`.
- If the task touches real-time updates, websockets, live notifications, subscriptions, optimistic live UI, or streaming frontend behavior, use `.codex/skills/realtime-websocket-frontend`.
- If the task touches frontend unit tests, component tests, integration tests, e2e tests, or frontend quality gates, use `.codex/skills/frontend-testing-unit-integration-e2e`.
- If the task touches frontend observability, analytics, client error monitoring, user interaction instrumentation, or web vitals visibility, use `.codex/skills/frontend-observability-analytics`.
- If the task touches SEO, metadata, structured metadata, social sharing previews, search-facing pages, or discoverability, use `.codex/skills/seo-metadata-social-sharing`.
- If the task touches technical SEO, crawlability, robots, sitemaps, canonical strategy, indexing, or search-engine discoverability mechanics, use `.codex/skills/technical-seo-foundations`.
- If the task touches structured data, JSON-LD, rich results, schema markup, or entity-oriented search metadata, use `.codex/skills/structured-data-rich-results`.
- If the task touches content architecture, SEO page structure, internal linking, search landing pages, or on-page SEO composition, use `.codex/skills/seo-content-information-architecture`.
- If the task touches SEO monitoring, search performance review, indexing diagnostics, or search-facing operational checks, use `.codex/skills/seo-monitoring-search-operations`.
- If the task touches admin dashboards, internal backoffice UX, management screens, dense operational interfaces, or dashboard information architecture, use `.codex/skills/dashboard-admin-patterns`.
- If the task touches internationalization, localization, language routing, translation structure, locale-aware formatting, or multilingual UX, use `.codex/skills/internationalization-localization`.
- If the task touches frontend feature flags, experiments, rollout UX, client-side toggles, or frontend-managed runtime behavior, use `.codex/skills/feature-flags-experiments-frontend`.
- If the task touches PWA behavior, offline UX, installability, service workers, caching for offline use, or resilient disconnected behavior, use `.codex/skills/offline-pwa-capabilities`.
- If the task touches motion, animation, transitions, micro-interactions, or interaction choreography, use `.codex/skills/animation-motion-interaction-patterns`.
- If the task touches design governance, UI consistency review, handoff discipline, visual system decisions, or maintaining quality across many frontend contributors, use `.codex/skills/design-hand-off-and-ui-governance`.
- If the task touches frontend provider SDKs, browser-side integrations, analytics vendors, auth widgets, maps, payments, embeds, or third-party script behavior, use `.codex/skills/frontend-third-party-integrations`.
- If the task touches Storybook, component documentation, interactive component examples, UI usage docs, or frontend component discoverability, use `.codex/skills/storybook-component-documentation`.
- If the task touches frontend env management, public runtime config, build-time variables, browser-safe config exposure, or deployment-time frontend settings, use `.codex/skills/frontend-build-runtime-env-management`.
- If the task touches frontend CI, CD, build gates, visual review pipelines, quality automation, or frontend deployment safety, use `.codex/skills/frontend-ci-cd-quality-gates`.
- If the task asks for frontend review, frontend refactor, naming cleanup, UI maintainability improvements, or frontend code quality review, use `.codex/skills/frontend-code-review-refactor-standards`.
- If the task needs a stronger frontend QA pass for usability, hierarchy, responsiveness, async states, copy, or design integrity before completion, use `.codex/skills/frontend-usability-design-qa`.
- If the task asks for a distinctive, polished, non-generic page, component, or interface with strong visual direction, typography, motion, or atmosphere, use `.codex/skills/frontend-design`.
- If the task needs stronger UI or UX reasoning, user-flow thinking, information hierarchy, interface research, or interaction tradeoff analysis before coding, use `.codex/skills/ui-ux-research-thinking`.
