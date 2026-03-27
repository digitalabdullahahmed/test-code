# Outbound Resilience Rules

- every outbound call needs explicit timeout thinking
- retries must be selective, bounded, and safe for the operation being retried
- do not retry non-idempotent side effects blindly
- map provider and network failures into stable internal semantics
- prefer clear adapter boundaries around external dependencies
- validate webhook authenticity and duplicate protection for inbound provider callbacks
- make provider failure visibility explicit through logs, metrics, and alerts where relevant
