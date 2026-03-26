---
name: seo-metadata-social-sharing
description: Optimize Next.js frontends for SEO, metadata, and social sharing. Use this for generateMetadata, canonical URLs, open graph metadata, discoverability, metadata quality, and share-preview behavior for search-facing pages.
---

# SEO Metadata Social Sharing

Use this skill whenever the task affects search-facing pages, metadata, or share previews.

## Core rules

- search-facing pages should render server-first
- metadata should be explicit and maintained
- canonical and share-preview behavior should not be accidental

## Required concerns

- `generateMetadata`
- page titles and descriptions
- canonical handling
- open graph and sharing metadata
- route-group-aware metadata strategy
- indexability intent
- metadata inheritance and override behavior across layouts

## Review checklist

Reject or fix:
- generic metadata on important pages
- missing share previews
- search pages with weak discoverability setup
- metadata drift across route groups
- unsafe or unclear metadata generation behavior
