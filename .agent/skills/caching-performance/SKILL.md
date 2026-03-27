---
name: caching-performance
description: Optimize NestJS backend performance with deliberate caching and read-path design. Use this for cache strategy, invalidation, hot-path analysis, query optimization, response shaping, throughput improvements, and practical performance tuning without unsafe complexity.
---

# Caching Performance

Use this skill whenever the task affects backend performance, caching, hot paths, or response efficiency.

## Core rules

- Measure before adding complexity.
- Cache only with explicit invalidation rules.
- Optimize known hot paths, not imagined bottlenecks.
- Protect correctness before chasing raw speed.

## Cache rules

- define cache key shape
- define ttl
- define invalidation triggers
- define stale-data tolerance
- avoid cache layers that nobody can reason about

## Performance review points

- repeated queries
- over-fetching
- unbounded list endpoints
- expensive serialization
- chatty internal calls
- unnecessary synchronous work
- slow request paths that should be offloaded to queues or async processing

## Review checklist

Reject or fix:
- cache with no invalidation thinking
- broad caching of sensitive user-specific data without careful scoping
- optimization with no measured target
- unbounded endpoints on high-volume resources
