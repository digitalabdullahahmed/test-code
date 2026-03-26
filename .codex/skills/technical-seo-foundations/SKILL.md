---
name: technical-seo-foundations
description: Implement and review technical SEO foundations for Next.js applications. Use this for crawlability, indexing strategy, robots, sitemap generation, canonical rules, metadata behavior, route discoverability, and technical search-engine readiness.
---

# Technical SEO Foundations

Use this skill whenever the task affects crawlability, indexing, metadata plumbing, robots, sitemaps, or canonical behavior.

## Official direction

Prefer current Next.js conventions:
- `generateMetadata` for route-aware metadata
- `app/robots.ts` or `robots.txt`
- `app/sitemap.ts` or nested sitemap files
- explicit canonical strategy

## Required concerns

- canonical URLs
- `robots` directives
- sitemap generation
- crawlable internal links
- route discoverability
- index or noindex intent
- pagination and faceted-route indexing strategy

## Review checklist

Reject or fix:
- missing sitemap or robots behavior on a public site
- duplicate search-facing URLs with no canonical strategy
- accidental indexing of low-value or private surfaces
- discoverability relying only on JavaScript flows with weak linking
