---
trigger: always_on
---

# Backend Rules

- keep controllers thin
- keep orchestration in application services or use cases
- keep domain rules close to the owning module
- isolate persistence and integrations
- use validation and structured errors
- name files and services by business purpose
- do not turn `common` into a dumping ground
- add tests for risk-bearing paths

