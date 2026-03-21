---
name: ui-ux-pro-max
description: Comprehensive design intelligence guide for web and mobile applications. Contains 50+ styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 10 technology stacks. Use when designing new pages, creating/refactoring UI components, choosing color schemes/typography/layout, reviewing UI for accessibility or visual consistency, implementing navigation/animations/responsive behavior, or improving perceived quality/usability.
user-invocable: true
---

# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 50+ styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 10 technology stacks. Searchable database with priority-based recommendations.

## When to Apply

This Skill should be used when the task involves UI structure, visual design decisions, interaction patterns, or user experience quality control.

### Must Use
- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts, etc.)
- Choosing color schemes, typography systems, spacing standards, or layout systems
- Reviewing UI code for user experience, accessibility, or visual consistency
- Implementing navigation structures, animations, or responsive behavior
- Making product-level design decisions (style, information hierarchy, brand expression)
- Improving perceived quality, clarity, or usability of interfaces

### Recommended
- UI looks "not professional enough" but the reason is unclear
- Receiving feedback on usability or experience
- Pre-launch UI quality optimization
- Aligning cross-platform design (Web / iOS / Android)
- Building design systems or reusable component libraries

### Skip
- Pure backend logic development
- Only involving API or database design
- Performance optimization unrelated to the interface
- Infrastructure or DevOps work
- Non-visual scripts or automation tasks

Decision criteria: If the task will change how a feature looks, feels, moves, or is interacted with, this Skill should be used.

## Rule Categories by Priority

1. **Accessibility (CRITICAL)** - WCAG 2.1 AA minimum compliance
2. **Touch & Interaction (CRITICAL)** - 44px minimum touch targets
3. **Performance (HIGH)** - Core Web Vitals targets
4. **Style Selection (HIGH)** - Match style to product type and audience
5. **Layout & Responsive (HIGH)** - Mobile-first, fluid grids
6. **Typography & Color (MEDIUM)** - Hierarchy, contrast, palette cohesion
7. **Animation (MEDIUM)** - Purposeful motion, reduced-motion support
8. **Forms & Feedback (MEDIUM)** - Clear validation, loading states
9. **Navigation Patterns (HIGH)** - Consistent, predictable navigation
10. **Charts & Data (LOW)** - Appropriate chart type for data shape

## How to Use This Skill

Follow this workflow when the user requests UI/UX work:

### Step 1: Analyze User Requirements
Identify from context:
- Product type (SaaS, e-commerce, mobile app, dashboard, etc.)
- Target audience (consumer, enterprise, developer, etc.)
- Technology stack (React, Vue, React Native, Flutter, etc.)
- Design constraints (brand guidelines, existing design system, etc.)

### Step 2: Generate Design System (REQUIRED)
Always output a complete design system before writing any component code:
- Color palette (primary, secondary, neutral, semantic colors)
- Typography scale (font families, sizes, weights, line heights)
- Spacing system (base unit, scale)
- Border radius tokens
- Shadow system
- Component-level tokens (if needed)

### Step 2b: Persist Design System (Master + Overrides Pattern)
Save master design system to a file for reuse across sessions. Apply per-screen overrides without rewriting the master.

### Step 3: Supplement with Detailed Searches (as needed)
Reference specific guidelines for:
- Accessibility requirements
- Animation timing and easing
- Form validation patterns
- Navigation structure
- Chart type selection

### Step 4: Stack Guidelines (React Native)
For React Native projects, apply platform-specific patterns:
- iOS: SF Pro fonts, native navigation patterns
- Android: Roboto fonts, Material Design patterns
- Platform-specific touch targets and gestures

## Common Rules for Professional UI

These are frequently overlooked issues that make UI look unprofessional:

**Visual Quality**
- Never use pure black (#000) or pure white (#fff) — always use tinted variants
- Avoid equal visual weight across all elements — establish clear hierarchy
- Don't use more than 2-3 font families in one interface
- Ensure consistent spacing with a defined scale (4px, 8px, 16px, 24px, 32px, etc.)

**Interaction (App)**
- Minimum 44×44px touch targets (iOS) / 48×48dp (Android)
- Provide immediate feedback on all interactive elements (< 100ms)
- Use skeleton screens instead of spinners for content loading
- Never block UI without showing progress

**Accessibility**
- Color contrast minimum 4.5:1 for body text, 3:1 for large text
- Never rely on color alone to convey information
- All interactive elements must be keyboard accessible
- Provide focus indicators that meet contrast requirements

## Pre-Delivery Checklist

Before delivering any UI:

**Visual Quality**
- [ ] Color contrast meets WCAG AA (4.5:1 body, 3:1 large text)
- [ ] Typography hierarchy is clear and consistent
- [ ] Spacing follows defined scale
- [ ] No pure black/white — tinted neutrals only

**Interaction**
- [ ] All touch targets ≥ 44px
- [ ] Loading states defined for all async operations
- [ ] Error states handled gracefully
- [ ] Empty states designed (not just "no data")

**Light/Dark Mode**
- [ ] Colors use semantic tokens (not hardcoded values)
- [ ] Both modes tested for contrast
- [ ] Images/icons work in both modes

**Layout**
- [ ] Responsive at mobile (375px), tablet (768px), desktop (1280px)
- [ ] No horizontal scroll on mobile
- [ ] Content readable without zoom

**Accessibility**
- [ ] Keyboard navigation works
- [ ] Screen reader labels on all interactive elements
- [ ] Focus indicators visible

Source: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
