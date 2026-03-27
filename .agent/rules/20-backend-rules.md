# Backend Rules

- keep controllers thin
- keep orchestration in application services or use cases
- keep domain rules close to the owning module
- isolate persistence and integrations
- use validation and structured errors
- make timeouts, retries, and failure behavior explicit where relevant
- name files and services by business purpose
- do not turn `common` into a dumping ground
- add tests for risk-bearing paths
- keep runtime behavior production-safe, not only locally functional
