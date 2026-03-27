# Module Boundary Rules

- keep ownership clear between apps, packages, and feature modules
- do not import from another module's internal implementation when a public contract or stable entry point should be used
- avoid circular dependencies between modules or packages
- do not move unstable feature code into shared packages just to reduce local duplication
- keep backend module communication explicit through contracts, use cases, or deliberate events
- keep frontend modules from scattering API logic outside the approved client and contract layers
- keep admin, internal, and public concerns separated when the surface area differs materially
