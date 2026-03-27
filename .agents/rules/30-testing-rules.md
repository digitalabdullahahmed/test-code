# Testing Rules

- no high-risk change is complete without verification
- test behavior, not only implementation detail
- prefer integration coverage for persistence and auth-critical flows
- include unhappy paths where they matter
- frontend search-facing and auth-aware surfaces require targeted checks
- always run the strongest realistic verification before claiming completion
- use multiple verification methods when the change affects multiple layers
- do not stop at one passing check if typecheck, tests, build, or route validation are also relevant
- for data-driven features, verify the real backend-client flow rather than only isolated UI rendering
