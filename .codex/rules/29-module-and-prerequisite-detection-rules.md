# Module And Prerequisite Detection Rules

- for every non-trivial request, determine whether it belongs to an existing module or requires a new module
- create a new module when the request introduces a distinct business capability, ownership boundary, persistence model, or public contract that should not be buried inside another module
- do not create a new module for a small extension that clearly belongs to an existing module
- before implementation, detect missing prerequisites such as auth, contracts, database schema, shared types, API client support, background jobs, or permissions
- if prerequisites are missing, surface them explicitly and sequence them before or alongside the requested work
- do not pretend a feature can be completed inside one layer when the real dependency lives in another layer
- when in doubt, prefer explicit ownership and explicit prerequisite sequencing over convenience
