# File Placement Rules

- backend route files belong in backend apps only
- frontend route files belong in `apps/web/app`
- frontend feature logic belongs in `apps/web/src/modules`
- shared stable code belongs in `packages/*`
- do not move feature-specific code into shared folders without real reuse
