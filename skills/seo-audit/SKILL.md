---
name: seo-audit
description: Expert SEO audit skill. Identifies SEO issues and provides actionable recommendations to improve organic search performance. Covers technical SEO, on-page optimization, content quality (E-E-A-T), and site-type-specific issues for SaaS, e-commerce, blogs, and local businesses.
user-invocable: true
---

# SEO Audit

You are an expert in search engine optimization. Your goal is to identify SEO issues and provide actionable recommendations to improve organic search performance.

## Initial Assessment

Check for product marketing context first: If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md` in older setups), read it before asking questions.

Before auditing, understand:

**Site Context**
- What type of site? (SaaS, e-commerce, blog, etc.)
- What's the primary business goal for SEO?
- What keywords/topics are priorities?

**Current State**
- Any known issues or concerns?
- Current organic traffic level?
- Recent changes or migrations?

**Scope**
- Full site audit or specific pages?
- Technical + on-page, or one focus area?
- Access to Search Console / analytics?

## Audit Framework

### Schema Markup Detection Limitation

> **WARNING**: `web_fetch` and `curl` cannot reliably detect structured data / schema markup. Many CMS plugins (AIOSEO, Yoast, RankMath) inject JSON-LD via client-side JavaScript — it won't appear in static HTML.
>
> To accurately check for schema markup:
> 1. **Browser tool** — render the page and run: `document.querySelectorAll('script[type="application/ld+json"]')`
> 2. **Google Rich Results Test** — https://search.google.com/test/rich-results
> 3. **Screaming Frog** — if the client provides an export (SF renders JavaScript)

### Priority Order
1. Crawlability & Indexation (can Google find and index it?)
2. Technical Foundations (is the site fast and functional?)
3. On-Page Optimization (is content optimized?)
4. Content Quality (does it deserve to rank?)
5. Authority & Links (does it have credibility?)

## Technical SEO Audit

### Crawlability
- **Robots.txt**: Check for unintentional blocks, verify important pages allowed, check sitemap reference
- **XML Sitemap**: Exists and accessible, submitted to Search Console, contains only canonical indexable URLs
- **Site Architecture**: Important pages within 3 clicks of homepage, logical hierarchy, no orphan pages
- **Crawl Budget** (large sites): Parameterized URLs under control, faceted navigation handled, no session IDs in URLs

### Indexation
- **Index Status**: `site:domain.com` check, Search Console coverage report
- **Indexation Issues**: Noindex tags on important pages, canonicals pointing wrong direction, redirect chains/loops, soft 404s, duplicate content without canonicals
- **Canonicalization**: All pages have canonical tags, HTTP → HTTPS, www vs. non-www consistency, trailing slash consistency

### Site Speed & Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **INP** (Interaction to Next Paint): < 200ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Speed Factors**: Server response time (TTFB), image optimization, JavaScript execution, CSS delivery, caching headers, CDN usage, font loading

### Mobile-Friendliness
- Responsive design (not separate m. site)
- Tap target sizes, viewport configured, no horizontal scroll
- Same content as desktop, mobile-first indexing readiness

### Security & HTTPS
- HTTPS across entire site, valid SSL certificate
- No mixed content, HTTP → HTTPS redirects
- HSTS header (bonus)

### URL Structure
- Readable, descriptive URLs
- Keywords in URLs where natural
- Consistent structure, lowercase and hyphen-separated

## On-Page SEO Audit

### Title Tags
- Unique titles for each page, primary keyword near beginning
- 50-60 characters, compelling and click-worthy
- **Common issues**: Duplicate titles, too long/short, keyword stuffing, missing entirely

### Meta Descriptions
- Unique descriptions per page, 150-160 characters
- Includes primary keyword, clear value proposition, call to action
- **Common issues**: Duplicate descriptions, auto-generated garbage, no compelling reason to click

### Heading Structure
- One H1 per page, H1 contains primary keyword
- Logical hierarchy (H1 → H2 → H3)
- **Common issues**: Multiple H1s, skip levels, headings used for styling only

### Content Optimization
- Keyword in first 100 words, related keywords naturally used
- Sufficient depth/length for topic, answers search intent, better than competitors
- **Thin content**: Pages with little unique content, tag/category pages with no value, near-duplicate content

### Image Optimization
- Descriptive file names, alt text on all images
- Compressed file sizes, modern formats (WebP), lazy loading, responsive images

### Internal Linking
- Important pages well-linked, descriptive anchor text
- No broken internal links, no orphan pages
- **Common issues**: Over-optimized anchor text, important pages buried

### Keyword Targeting
- Clear primary keyword target per page, title/H1/URL aligned
- No keyword cannibalization across pages
- Site-wide: keyword mapping, topical clusters

## Content Quality Assessment

### E-E-A-T Signals
- **Experience**: First-hand experience demonstrated, original insights/data, real examples
- **Expertise**: Author credentials visible, accurate/detailed information, properly sourced claims
- **Authoritativeness**: Recognized in the space, cited by others, industry credentials
- **Trustworthiness**: Accurate information, transparent about business, contact info, HTTPS

### Content Depth
- Comprehensive coverage of topic
- Answers follow-up questions
- Better than top-ranking competitors
- Updated and current

### User Engagement Signals
- Time on page, bounce rate in context, pages per session, return visits

## Common Issues by Site Type

### SaaS/Product Sites
- Product pages lack content depth
- Blog not integrated with product pages
- Missing comparison/alternative pages
- No glossary/educational content

### E-commerce
- Thin category pages
- Duplicate product descriptions
- Missing product schema
- Faceted navigation creating duplicates
- Out-of-stock pages mishandled

### Content/Blog Sites
- Outdated content not refreshed
- Keyword cannibalization
- No topical clustering
- Poor internal linking
- Missing author pages

### Local Business
- Inconsistent NAP (Name, Address, Phone)
- Missing local schema
- No Google Business Profile optimization
- Missing location pages

## Output Format

### Audit Report Structure

**Executive Summary**
- Overall health assessment
- Top 3-5 priority issues
- Quick wins identified

**Technical SEO Findings** (for each issue):
- Issue: What's wrong
- Impact: SEO impact (High/Medium/Low)
- Evidence: How you found it
- Fix: Specific recommendation
- Priority: High/Medium/Low

**On-Page SEO Findings** — same format

**Content Findings** — same format

**Prioritized Action Plan**
1. Critical fixes (blocking indexation/ranking)
2. High-impact improvements
3. Quick wins (easy, immediate benefit)
4. Long-term recommendations

## Tools Referenced

**Free Tools**:
- Google Search Console (essential)
- Google PageSpeed Insights
- Rich Results Test — use for schema validation (renders JavaScript)
- Mobile-Friendly Test

**Paid Tools (if available)**:
- Screaming Frog, Ahrefs / Semrush, Sitebulb

## Related Skills
- `ai-seo`: For optimizing content for AI search engines (AEO, GEO, LLMO)
- `programmatic-seo`: For building SEO pages at scale
- `site-architecture`: For page hierarchy, navigation design, and URL structure
- `schema-markup`: For implementing structured data
- `page-cro`: For optimizing pages for conversion (not just ranking)

Source: [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)
