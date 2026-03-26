---
trigger: always_on
---

# Impact Analysis Rules

- after every meaningful change, ask what else must change because of it
- review imports, types, contracts, tests, docs, metadata, configs, routes, and shared packages
- when removing code, check for dead references and stale behavior
- when adding code, check whether related tests, docs, env vars, route metadata, or contracts must also be added
- do not declare completion until follow-on impact has been reviewed

