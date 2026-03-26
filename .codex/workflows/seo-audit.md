---
description: Deep SEO review workflow for a specific page, route group, or the whole frontend surface with technical and search-facing analysis.
---

# SEO Audit

Use this workflow for a strong SEO review of a specific search-facing surface or the wider frontend.

## 1. Define the SEO target

- Identify the page, route group, content area, or whole site scope.
- State whether the target is indexed, should be indexed, or should be excluded from indexing.
- Clarify the search intent the page is meant to satisfy.

## 2. Inspect search-facing architecture

- Review route structure, metadata generation, canonical behavior, robots behavior, sitemap coverage, and rendering approach.
- Check what bots actually receive from the server.
- Identify duplicate, thin, blocked, or conflicting URL patterns.

## 3. Audit page-level SEO quality

- Check title, description, headings, content intent, internal links, and canonical signals.
- Check structured data only where it truly matches the page.
- Review indexability, language signals, and content uniqueness.

## 4. Audit technical SEO quality

- Check metadata correctness in the actual implementation.
- Check robots rules, sitemap inclusion, canonical consistency, redirects, status codes, and crawl traps.
- Check performance-sensitive factors that affect crawlability or user experience when relevant.

## 5. Review architecture fit

- Ensure search-facing logic stays deliberate and maintainable.
- Check whether SEO responsibilities are placed in the correct route or module boundaries.
- Identify missing reusable metadata helpers or duplicated SEO logic.

## 6. Recommend prioritized fixes

- Separate critical indexing issues from quality improvements.
- Explain why each issue matters for discovery, crawling, or ranking.
- Suggest implementation locations aligned with the current Next.js structure.

## 7. Close with an SEO audit summary

- Report:
- `Scope`
- `Critical SEO issues`
- `Important improvements`
- `Suggested implementation areas`
- `Verification gaps`
