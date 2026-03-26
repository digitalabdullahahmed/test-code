# Naming And Comments

Load this reference when reviewing code readability, naming, comments, and maintainability.

## Naming

- Use business language.
- Prefer explicit verbs for use cases and methods.
- Avoid vague names like `Helper`, `Manager`, `DataService`, or `Processor`.
- Keep file names aligned with their responsibility.

## Comments

- Add comments for reasoning, not for syntax.
- Explain non-obvious rules, constraints, and tradeoffs.
- Document why a workaround exists.
- Do not narrate obvious code.

## Review points

- vague names
- comment noise that adds no value
- missing explanation around security, concurrency, or migration tradeoffs
- file names that do not match business purpose
