---
name: transactions-concurrency-idempotency
description: Design and implement safe concurrent write behavior for NestJS backends. Use this for transactions, locking, race condition control, duplicate protection, idempotency keys, retry-safe APIs, and consistency under concurrent access.
---

# Transactions Concurrency Idempotency

Use this skill whenever the task affects multi-step writes, race conditions, retries, duplicate requests, or consistency-sensitive workflows.

## Core rules

- Identify the real consistency boundary first.
- Use transactions deliberately.
- Protect retry-sensitive operations from duplication.
- Make concurrency behavior explicit, not accidental.

## Required concerns

- transaction scope
- locking or optimistic concurrency where needed
- duplicate submission protection
- idempotency for retry-prone endpoints
- replay-safe external side effects
- separation between transactional database work and post-commit side effects

## Review checklist

Reject or fix:
- multi-write workflows with no transaction boundary
- duplicate-prone endpoints with no protection
- race-sensitive updates with no concurrency strategy
- retries that can produce double side effects
- external side effects triggered inside fragile transaction scopes with no recovery thinking
