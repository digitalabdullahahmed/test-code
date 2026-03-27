# Handoff And Integration Review Rules

- before finishing cross-layer work, review how backend, frontend, shared contracts, tests, docs, and release concerns fit together
- verify that each layer can be handed off cleanly to the next without hidden assumptions
- check that names, payloads, status codes, state handling, and permissions align across layers
- treat integration mismatches as real defects even if each file looks locally correct
- summarize deferred work as explicit handoff items, not as silent gaps
