# Release And Migration Rules

- plan schema and runtime changes for safe rollout, not only local correctness
- treat migrations, env changes, and contract changes as release events that require ordering discipline
- prefer additive changes before destructive changes
- keep backward compatibility during rollout whenever realistic
- define rollback expectations before making high-risk operational changes
- do not combine risky schema changes, auth changes, and contract-breaking changes casually in one step
- verify startup, health, and migration behavior after release-critical edits
- document required deploy order when backend, frontend, schema, or config changes depend on each other
