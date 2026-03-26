---
name: search-filter-sort-pagination
description: Design and implement robust query interfaces for backend list and search endpoints. Use this for pagination, cursor design, filtering, sorting, search semantics, whitelist-based query parsing, and scalable list endpoint behavior.
---

# Search Filter Sort Pagination

Use this skill whenever backend list endpoints need search, filtering, sorting, or pagination.

## Core rules

- Make query behavior explicit.
- Whitelist sortable and filterable fields.
- Cap page size.
- Align indexing strategy with query semantics.

## Required concerns

- offset or cursor pagination choice
- default sort order
- filter field whitelist
- stable cursor semantics if cursor pagination is used
- empty-state behavior
- index alignment

## Review checklist

Reject or fix:
- unbounded list endpoints
- arbitrary field sorting from untrusted input
- unclear pagination metadata
- search behavior with no performance thinking
