# Backend Operational Reliability Rules

- every production-facing backend change must consider startup behavior, shutdown behavior, health visibility, and failure modes
- configure timeouts, payload limits, and resource usage deliberately instead of relying on vague defaults
- prefer graceful degradation and explicit failure handling over hanging requests or silent retries
- long-running work should move to background processing when synchronous latency or reliability would suffer
- readiness and liveness should reflect real dependency state, not only process existence
- avoid hidden operational coupling between modules, queues, caches, and external dependencies
- when a change increases operational risk, document what should be monitored and how failure will appear
