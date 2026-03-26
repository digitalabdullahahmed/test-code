# Eloquent Reference

Load this reference when the project uses Laravel or PHP with Eloquent ORM.

## Core rules

- Keep relationships explicit.
- Use casts intentionally.
- Choose `fillable` or `guarded` deliberately.
- Keep heavy domain workflows out of models when they become hard to reason about.
- Use transactions for multi-write consistency.

## Relationship coverage

- one-to-one
- one-to-many
- many-to-many with pivot tables
- polymorphic relations only when justified

## Common review items

- business logic hidden in model events
- weak transaction boundaries
- implicit lazy loading causing N+1 queries
- missing database constraints because "the model handles it"
