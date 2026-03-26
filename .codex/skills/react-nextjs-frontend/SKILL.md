---
name: react-nextjs-frontend
description: Design, implement, review, and optimize production-grade React and Next.js frontends. Use this for Next.js App Router architecture, React component design, forms, data fetching, client and server rendering decisions, accessibility, frontend security, performance, testing, auth-aware UX, and maintainable feature-based frontend structure.
---

# React & Next.js Frontend

Use this skill whenever work touches React, Next.js, components, pages, layouts, UI state, forms, routing, rendering strategy, frontend auth flows, accessibility, or frontend performance.

Project target defaults:
- framework: `Next.js`
- rendering model: `App Router`
- component model: `React`
- structure style: feature-oriented

For this repository's direction, prefer:
- `Next.js`
- `React`
- App Router

## Primary outcomes

Build a frontend that is:
- maintainable
- accessible
- predictable
- performant
- secure
- easy to extend
- visually intentional rather than generic
- memorable and context-specific

## Before writing code

1. Inspect route structure, shared UI patterns, design tokens, and data flow.
2. Verify current Next.js and React guidance if APIs or rendering behavior may have changed.
3. Identify whether the page or feature should be:
- server-rendered
- client-interactive
- partially streamed
- statically generated
4. Define the feature boundary before writing components.
5. Determine how auth state, permissions, loading states, and error states should appear in the UI.
6. Commit to a deliberate aesthetic direction before implementation.

## Core design rules

- Organize by feature where complexity exists, not by dumping everything into global component folders.
- Keep components small enough to reason about, but not artificially fragmented.
- Separate presentation concerns from data orchestration when a feature becomes complex.
- Prefer explicit props and state flow over hidden coupling.
- Build for future change, not only initial generation speed.
- Keep visual systems consistent through tokens, primitives, and reusable patterns.
- Avoid generic AI-looking output.
- Commit to a visual point of view instead of default SaaS sameness.

## Visual direction

Before coding, decide:
- purpose
- audience
- tone
- one memorable quality

Examples of valid directions:
- editorial
- brutally minimal
- luxury refined
- industrial
- playful
- retro-futuristic
- organic
- brutalist

The direction matters less than the discipline of execution.

## Application architecture

Default structure for a serious Next.js app:
- `app/` for routes, layouts, route groups, loading, error, and metadata
- `src/features/` for feature-specific components, hooks, schemas, and orchestration
- `src/components/` for shared presentational building blocks
- `src/lib/` for API clients, auth helpers, utilities, and shared config
- `src/styles/` for tokens, globals, and thematic foundations

Prefer route groups and layout composition to avoid duplicated shell logic.

## Rendering strategy

Choose rendering deliberately.

Prefer server components when:
- the UI mostly reads data
- interactivity is limited
- SEO matters
- the page can benefit from lower client bundle size

Prefer client components when:
- the feature requires browser APIs
- the feature has rich local interaction
- form state or immediate UI state transitions dominate

Rules:
- do not turn large trees into client components without need
- keep client boundaries narrow
- push data fetching toward the server when it simplifies the app
- only fetch on the client when the feature genuinely requires it

## Routing and layouts

Use Next.js routing deliberately:
- create nested layouts for shared structure
- use loading and error boundaries
- keep route files thin when the feature is complex
- move real UI and orchestration into feature modules

At minimum, handle:
- loading state
- empty state
- error state
- unauthorized state
- not found state where relevant

## Component design

Component standards:
- one clear responsibility per component
- explicit prop contracts
- semantic HTML first
- accessible interactions
- avoid deeply coupled god components
- extract repeated patterns only when repetition is meaningful

Component categories:
- primitives
- composed UI blocks
- feature components
- route-level orchestration components

Do not mix heavy fetching, mutation handling, and large presentation trees in one file when the feature is non-trivial.

## State management

Use the lightest state strategy that fits the problem.

Default guidance:
- local UI state stays local
- server state should use a deliberate data-fetching strategy
- shared client state should exist only when multiple distant components truly need it

Use:
- React state for local interactions
- URL state for shareable filter, pagination, and navigation state
- server data caches or dedicated query tools when repeated async state management becomes complex
- context sparingly for stable cross-cutting concerns

Avoid:
- global state for short-lived local concerns
- duplicated sources of truth
- hidden mutation side effects

## Forms and validation

Production-grade forms must include:
- clear schema validation
- accessible labels and errors
- disabled and pending states
- optimistic behavior only when justified
- server error handling
- success and failure UX

Rules:
- keep field components reusable but not over-abstracted
- validate on both frontend and backend
- never trust client validation alone
- preserve user input where appropriate on failure

## Data fetching and API integration

Design frontend data access deliberately:
- centralize API calling patterns
- normalize error handling
- keep auth token handling and refresh behavior explicit
- do not scatter raw fetch logic across the whole app

Rules:
- define typed response expectations
- handle loading, empty, success, and error states
- make cache and revalidation behavior explicit
- align frontend contracts with backend DTOs and API documentation

When integrating auth:
- handle unauthorized and forbidden responses intentionally
- distinguish session expiry from permission denial
- do not expose secrets in browser code

## Authentication-aware frontend behavior

Frontend auth standards:
- protect private routes appropriately
- render role- and permission-aware UI without trusting UI-only enforcement
- handle session expiry gracefully
- clear auth state correctly on logout
- support redirect-after-login when appropriate
- show clear feedback for forbidden actions without leaking internal rules

The frontend may hide unavailable actions for good UX, but the backend remains the source of truth.

## Accessibility

Accessibility is required, not optional.

Minimum standards:
- semantic markup
- keyboard operability
- visible focus states
- labeled form controls
- meaningful button text
- correct heading hierarchy
- color contrast awareness
- accessible error and status messaging

Review interactive components for:
- focus trapping when needed
- escape handling for overlays
- screen-reader-friendly labels
- disabled state semantics

## Styling and design system

Prefer a deliberate UI system over ad hoc styling.

Rules:
- define tokens for color, spacing, radius, typography, and motion
- reuse primitives consistently
- keep variants predictable
- avoid copy-pasted style fragments across features
- preserve visual hierarchy and spacing discipline
- choose typography with character
- use motion as choreography, not noise
- use backgrounds, texture, layering, or atmosphere intentionally

For this project:
- avoid generic default-looking UI
- choose a clear visual direction
- build components that work well on desktop and mobile
- avoid defaulting to Inter, Arial, Roboto, or system stacks unless preserving an existing product language
- avoid generic purple-on-white gradient SaaS styling

## Performance

Frontend performance standards:
- keep client bundles small
- minimize unnecessary client components
- lazy-load heavy or infrequent UI
- optimize images and fonts
- avoid excessive re-renders caused by poor state boundaries
- paginate or virtualize large collections when needed

Review:
- bundle-heavy dependencies
- repeated client-only wrappers
- unnecessary broad context updates
- expensive rendering in large lists

## Security

Frontend security standards:
- never expose secrets in client bundles
- treat all user input as untrusted
- avoid dangerous HTML injection unless sanitized intentionally
- handle tokens and session data according to the auth strategy
- protect against CSRF when cookie-based auth is used
- do not assume hidden UI equals real authorization

Be explicit about:
- public vs private environment variables
- secure handling of redirects
- storage choices for session information

## Error handling and resilience

Every serious feature should define:
- loading state
- retry behavior where appropriate
- recoverable error messages
- fatal error boundaries when needed
- offline or degraded behavior if relevant

Avoid blank screens and silent failures.

## Testing requirements

Do not mark frontend work complete without tests where the feature risk justifies them.

Minimum coverage for important features:
- component rendering states
- form validation behavior
- successful and failing submissions
- permission-aware rendering
- route protection behavior
- critical accessibility expectations

Test at appropriate levels:
- unit tests for component logic and utilities
- integration tests for feature flows
- end-to-end tests for critical user journeys

## Delivery checklist

Before finishing, ensure the implementation includes:
- clear route structure
- appropriate server vs client component boundaries
- reusable UI primitives where justified
- typed API integration
- loading, error, and empty states
- auth-aware UX handling
- accessibility review
- responsive behavior
- tests for critical flows
- documentation or comments where future maintainers need context

## Review checklist

Reject or fix these problems:
- large client component trees without need
- route files doing too much work
- inaccessible forms or buttons
- scattered fetch logic with inconsistent error handling
- duplicated state sources
- business logic buried in presentational components
- no handling for unauthorized or forbidden responses
- layout shifts or poor mobile behavior
- unsafe HTML rendering
- giant components that combine layout, data, mutation, and validation without structure

## When to load references

Read `references/nextjs-app-router.md` for App Router-specific guidance.
Read `references/react-component-patterns.md` for component and state guidance.
Read `references/frontend-security-and-performance.md` for security and performance review points.
