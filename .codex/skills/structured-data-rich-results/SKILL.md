---
name: structured-data-rich-results
description: Implement structured data and rich-result markup for Next.js applications. Use this for JSON-LD, entity modeling, rich-result eligibility, schema selection, safe structured-data rendering, and search-engine-readable page semantics.
---

# Structured Data Rich Results

Use this skill whenever the task affects JSON-LD, schema markup, or structured search semantics.

## Official direction

Follow current Next.js guidance:
- render JSON-LD as a `<script>` tag in `layout` or `page`
- sanitize payloads to avoid unsafe injection

## Required concerns

- entity type selection
- page-to-entity alignment
- safe JSON-LD rendering
- canonical entity identification
- avoiding misleading schema markup

## Review checklist

Reject or fix:
- schema type not matching page reality
- unsanitized JSON-LD rendering
- duplicate or conflicting entity markup
- structured data added to pages with weak canonical intent
