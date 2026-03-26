# Module Structure

Load this reference when designing or reviewing a NestJS module's folder structure and ownership boundaries.

## Core rules

- Each module owns one business capability.
- Keep controllers thin.
- Use the application layer for orchestration.
- Keep the domain layer free from transport concerns where practical.
- Isolate persistence and integrations in infrastructure.

## Recommended folders

- `presentation/`
- `application/`
- `domain/`
- `infrastructure/`

## Review points

- module owns too many unrelated concerns
- route handling mixed with business rules
- persistence details leaking across the module
- missing boundary between platform code and domain code
