---
name: tailwind-design-system
description: Build production-ready design systems with Tailwind CSS v4, including CSS-first configuration, design tokens, component variants (CVA), responsive patterns, and accessibility. Apply when creating component libraries, implementing design tokens/theming, building responsive/accessible components, standardizing UI patterns, or migrating from Tailwind v3 to v4.
user-invocable: true
---

# Tailwind Design System (v4)

Build production-ready design systems with Tailwind CSS v4, including CSS-first configuration, design tokens, component variants, responsive patterns, and accessibility.

> **Note:** This skill targets Tailwind CSS v4 (2024+). For v3 projects, refer to the [upgrade guide](https://tailwindcss.com/docs/upgrade-guide).

## When to Use This Skill

- Creating a component library with Tailwind v4
- Implementing design tokens and theming with CSS-first configuration
- Building responsive and accessible components
- Standardizing UI patterns across a codebase
- Migrating from Tailwind v3 to v4
- Setting up dark mode with native CSS features

## Key v4 Changes

| v3 | v4 |
|---|---|
| `tailwind.config.ts` | `@theme` block in CSS |
| `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| `darkMode: "class"` | `@custom-variant dark (&:where(.dark, .dark *))` |
| `theme.extend.colors` | `@theme { --color-*: value }` |
| `require("tailwindcss-animate")` | Native `@keyframes` in `@theme` |
| No `@starting-style` support | Native `@starting-style` for entry animations |

## Quick Start

```css
/* app.css - Tailwind v4 CSS-first configuration */
@import "tailwindcss";

@theme {
  /* Semantic color tokens using OKLCH */
  --color-background: oklch(100% 0 0);
  --color-foreground: oklch(14.5% 0.025 264);
  --color-primary: oklch(14.5% 0.025 264);
  --color-primary-foreground: oklch(98% 0.01 264);
  --color-secondary: oklch(96% 0.01 264);
  --color-muted: oklch(96% 0.01 264);
  --color-muted-foreground: oklch(46% 0.02 264);
  --color-accent: oklch(96% 0.01 264);
  --color-destructive: oklch(53% 0.22 27);
  --color-border: oklch(91% 0.01 264);
  --color-ring: oklch(14.5% 0.025 264);
  --color-card: oklch(100% 0 0);

  /* Radius tokens */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;

  /* Animation tokens */
  --animate-fade-in: fade-in 0.2s ease-out;
  --animate-fade-out: fade-out 0.2s ease-in;
  --animate-slide-in: slide-in 0.3s ease-out;

  @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
  @keyframes slide-in {
    from { transform: translateY(-0.5rem); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
}

/* Dark mode variant */
@custom-variant dark (&:where(.dark, .dark *));

.dark {
  --color-background: oklch(14.5% 0.025 264);
  --color-foreground: oklch(98% 0.01 264);
  --color-primary: oklch(98% 0.01 264);
  --color-muted: oklch(22% 0.02 264);
  --color-muted-foreground: oklch(65% 0.02 264);
  --color-border: oklch(22% 0.02 264);
  --color-ring: oklch(83% 0.02 264);
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground antialiased; }
}
```

## Core Concepts

### 1. Design Token Hierarchy
```
Brand Tokens (abstract)
  └── Semantic Tokens (purpose)
        └── Component Tokens (specific)
Example: oklch(45% 0.2 260) → --color-primary → bg-primary
```

### 2. Component Architecture
```
Base styles → Variants → Sizes → States → Overrides
```

## Pattern 1: CVA (Class Variance Authority) Components

```tsx
// components/ui/button.tsx
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

// React 19: No forwardRef needed — ref is a regular prop
export function Button({ className, variant, size, asChild = false, ref, ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> &
  { asChild?: boolean; ref?: React.Ref<HTMLButtonElement> }
) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
}
```

## Pattern 2: Utility Functions

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const focusRing = cn(
  "focus-visible:outline-none focus-visible:ring-2",
  "focus-visible:ring-ring focus-visible:ring-offset-2",
);

export const disabled = "disabled:pointer-events-none disabled:opacity-50";
```

## Pattern 3: Dark Mode Provider

```tsx
// providers/ThemeProvider.tsx
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'theme' }:
  { children: React.ReactNode; defaultTheme?: Theme; storageKey?: string }
) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    if (stored) setTheme(stored)
  }, [storageKey])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    const resolved = theme === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme
    root.classList.add(resolved)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: (t) => {
      localStorage.setItem(storageKey, t)
      setTheme(t)
    }}}>
      {children}
    </ThemeContext.Provider>
  )
}

const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void } | undefined>(undefined)
export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
```

## Advanced v4 Patterns

### Custom Utilities with @utility
```css
@utility text-gradient {
  @apply bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent;
}
```

### Namespace Overrides
```css
@theme {
  /* Clear all default colors */
  --color-*: initial;
  --color-primary: oklch(45% 0.2 260);
  --color-secondary: oklch(65% 0.15 200);
}
```

### Semi-transparent Color Variants
```css
@theme {
  --color-primary-50: color-mix(in oklab, var(--color-primary) 5%, transparent);
  --color-primary-100: color-mix(in oklab, var(--color-primary) 10%, transparent);
}
```

## v3 to v4 Migration Checklist

- [ ] Replace `tailwind.config.ts` with CSS `@theme` block
- [ ] Change `@tailwind base/components/utilities` to `@import "tailwindcss"`
- [ ] Move color definitions to `@theme { --color-*: value }`
- [ ] Replace `darkMode: "class"` with `@custom-variant dark`
- [ ] Move `@keyframes` inside `@theme` blocks
- [ ] Replace `require("tailwindcss-animate")` with native CSS animations
- [ ] Update `h-10 w-10` to `size-10`
- [ ] Remove `forwardRef` (React 19 passes ref as prop)
- [ ] Consider OKLCH colors for better color perception
- [ ] Replace custom plugins with `@utility` directives

## Best Practices

### Do's
- Use `@theme` blocks — CSS-first configuration is v4's core pattern
- Use OKLCH colors — Better perceptual uniformity than HSL
- Compose with CVA — Type-safe variants
- Use semantic tokens — `bg-primary` not `bg-blue-500`
- Use `size-*` — New shorthand for `w-* h-*`
- Add accessibility — ARIA attributes, focus states

### Don'ts
- Don't use `tailwind.config.ts` — Use CSS `@theme` instead
- Don't use `@tailwind` directives — Use `@import "tailwindcss"`
- Don't use `forwardRef` — React 19 passes ref as prop
- Don't use arbitrary values — Extend `@theme` instead
- Don't hardcode colors — Use semantic tokens
- Don't forget dark mode — Test both themes

Source: [wshobson/agents](https://github.com/wshobson/agents)
