# Scalability Performance Testing

Load this reference when reviewing scalability, performance, and test posture in a NestJS backend.

## Scalability

- Keep module boundaries clean before discussing service extraction.
- Use queues for slow side effects.
- Make retry-sensitive writes idempotent when needed.
- Cache only with a clear invalidation strategy.

## Performance

- Avoid unbounded list endpoints.
- Avoid N+1 queries.
- Keep synchronous work off hot paths where possible.
- Measure critical flows before adding complexity.

## Testing

- Unit test domain and policy logic.
- Integration test repositories and key infrastructure paths.
- End-to-end test critical API flows.
- Cover failure paths, not only happy paths.

## Review points

- no queue for expensive side effects
- unbounded endpoints
- missing integration tests on persistence-heavy paths
- fake tests that do not validate real behavior
