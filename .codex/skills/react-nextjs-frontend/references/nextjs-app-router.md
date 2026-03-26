# Next.js App Router

Load this reference when the task specifically involves App Router structure, layouts, loading boundaries, route groups, or server and client component decisions.

## Core rules

- Keep route entries thin.
- Use nested layouts for shared shells.
- Use loading and error boundaries intentionally.
- Prefer server components unless the feature needs client-side behavior.
- Keep client component boundaries narrow.

## Review points

- route file too heavy
- unnecessary client boundary
- repeated layout logic
- missing loading or error handling
- poor separation between route orchestration and feature UI
