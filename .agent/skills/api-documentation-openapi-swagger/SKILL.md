---
name: api-documentation-openapi-swagger
description: Implement and review high-quality API documentation for NestJS backends. Use this for OpenAPI, Swagger, route examples, DTO documentation, auth documentation, response examples, and auto-generated API documentation quality.
---

# API Documentation OpenAPI Swagger

Use this skill whenever backend routes or contracts need generated documentation or documentation review.

## Core rules

- Documentation must match the actual contract.
- Auto-generated docs still require curation.
- Important auth, validation, and error behavior must be visible to consumers.

## Required documentation quality

- route summaries
- request DTO docs
- response DTO docs
- auth requirements
- example payloads for important routes
- pagination and filter docs where relevant
- error cases for important flows

## Review checklist

Reject or fix:
- docs that drift from implementation
- undocumented auth requirements
- undocumented query params
- vague route descriptions
- missing examples for important workflows
