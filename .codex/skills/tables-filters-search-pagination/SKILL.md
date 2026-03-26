---
name: tables-filters-search-pagination
description: Design scalable list and table experiences for Next.js frontends. Use this for data grids, filter UX, sorting, search, pagination controls, query-state synchronization, and large dataset interaction patterns.
---

# Tables Filters Search Pagination

Use this skill whenever the task affects list-heavy UI, grids, filters, sorting, or search interfaces.

## Core rules

- query behavior should be explicit to users
- filters should be discoverable and reversible
- query state should be URL-aware when sharability matters
- large collections need careful interaction design

## Required concerns

- empty states
- loading states
- filter chips or clear actions
- sort visibility
- pagination or infinite scroll choice
- URL sync where useful

## Review checklist

Reject or fix:
- hidden active filters
- no empty-state design
- huge tables with no performance thinking
- search and filters not reflected in sharable state when needed
- pagination with unclear metadata
