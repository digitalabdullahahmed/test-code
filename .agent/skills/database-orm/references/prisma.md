# Prisma Reference

Load this reference when the project uses NestJS, Node.js, or Prisma.

## Core rules

- Keep `schema.prisma` organized and readable.
- Name relations explicitly where ambiguity exists.
- Use `@@index`, `@@unique`, and field attributes deliberately.
- Avoid overusing broad `include` when a narrow `select` is sufficient.
- Keep raw SQL isolated and justified.

## Recommended use

- Prefer Prisma for NestJS projects in this repository.
- Use generated types instead of duplicating persistence shapes.
- Keep migration files reviewable and small.
- Wrap coordinated writes in transactions.

## Common review items

- missing uniqueness
- weak relation naming
- nullable drift
- accidental cascade behavior
- oversized includes
- no pagination on list queries
