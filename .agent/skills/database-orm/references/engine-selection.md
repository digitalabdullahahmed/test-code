# Engine Selection

Load this reference when choosing between PostgreSQL and MySQL.

## PostgreSQL

Prefer PostgreSQL when:
- the project is greenfield
- strong transactional behavior matters
- advanced indexing is useful
- JSONB or partial indexes may help
- rich SQL support is valuable

Good fit for:
- most modern product backends
- analytics-adjacent operational systems
- modular monoliths that will evolve

## MySQL

Prefer MySQL when:
- existing infrastructure standardizes on it
- hosting or managed platform support is materially better
- team operational experience strongly favors it

Good fit for:
- systems with strong MySQL operational maturity
- compatibility-driven deployments

## Shared rules

- model invariants explicitly
- test against the real engine
- do not assume features are identical across engines
- review locking and migration behavior before risky changes
