---
name: frontend-design-impeccable
description: Context-aware frontend design skill that requires project/audience context before proceeding. Enforces bold aesthetic direction, anti-AI-slop rules, and detailed DO/DON'T guidelines across typography, color, layout, motion, interaction, and responsive design. Apply when doing any front-end design work — especially to avoid generic, templated AI aesthetics.
user-invocable: true
---

# frontend-design (impeccable)

## Context Gathering Protocol

Design skills produce generic output without project context. You MUST have confirmed design context before doing any design work.

Required context — every design skill needs at minimum:
- **Target audience**: Who uses this product and in what context?
- **Use cases**: What jobs are they trying to get done?
- **Brand personality/tone**: How should the interface feel?

**Gathering order:**
1. **Check current instructions (instant)**: If your loaded instructions already contain a Design Context section, proceed immediately.
2. **Check `.impeccable.md` (fast)**: If not in instructions, read `.impeccable.md` from the project root. If it exists and contains the required context, proceed.
3. **Run teach-impeccable (REQUIRED)**: If neither source has context, you MUST run the teach-impeccable skill NOW before doing anything else. Do NOT skip this step. Do NOT attempt to infer context from the codebase instead.

## Design Direction

Commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

CRITICAL: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

Then implement working code that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

### Typography
→ Consult [typography reference](https://github.com/pbakaus/impeccable/blob/HEAD/.claude/skills/frontend-design/reference/typography.md) for scales, pairing, and loading strategies.

Pair a distinctive display font with a refined body font. Use a modular type scale with fluid sizing (`clamp`).

**DO:**
- Use a modular type scale with fluid sizing (`clamp`)
- Vary font weights and sizes to create clear visual hierarchy

**DON'T:**
- Use overused fonts — Inter, Roboto, Arial, Open Sans, system defaults
- Use monospace typography as lazy shorthand for "technical/developer" vibes
- Put large icons with rounded corners above every heading

### Color & Theme
→ Consult [color reference](https://github.com/pbakaus/impeccable/blob/HEAD/.claude/skills/frontend-design/reference/color-and-contrast.md) for OKLCH, palettes, and dark mode.

Commit to a cohesive palette. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

**DO:**
- Use modern CSS color functions (`oklch`, `color-mix`, `light-dark`) for perceptually uniform palettes
- Tint your neutrals toward your brand hue — even a subtle hint creates subconscious cohesion

**DON'T:**
- Use gray text on colored backgrounds — use a shade of the background color instead
- Use pure black (`#000`) or pure white (`#fff`) — always tint; pure black/white never appears in nature
- Use the AI color palette: cyan-on-dark, purple-to-blue gradients, neon accents on dark backgrounds
- Use gradient text for "impact" — especially on metrics or headings; it's decorative rather than meaningful
- Default to dark mode with glowing accents — it looks "cool" without requiring actual design decisions

### Layout & Space
→ Consult [spatial reference](https://github.com/pbakaus/impeccable/blob/HEAD/.claude/skills/frontend-design/reference/spatial-design.md) for grids, rhythm, and container queries.

**DO:**
- Create visual rhythm through varied spacing — tight groupings, generous separations
- Use fluid spacing with `clamp()` that breathes on larger screens
- Use asymmetry and unexpected compositions; break the grid intentionally for emphasis

**DON'T:**
- Wrap everything in cards — not everything needs a container
- Nest cards inside cards — visual noise, flatten the hierarchy
- Use identical card grids — same-sized cards with icon + heading + text, repeated endlessly
- Use the hero metric layout template — big number, small label, supporting stats, gradient accent
- Center everything — left-aligned text with asymmetric layouts feels more designed
- Use the same spacing everywhere — without rhythm, layouts feel monotonous

### Visual Details

**DO:**
- Use intentional, purposeful decorative elements that reinforce brand

**DON'T:**
- Use glassmorphism everywhere — blur effects and glass cards used decoratively rather than purposefully
- Use rounded elements with thick colored border on one side — a lazy accent that almost never looks intentional
- Use sparklines as decoration — tiny charts that look sophisticated but convey nothing meaningful
- Use rounded rectangles with generic drop shadows — safe, forgettable, could be any AI output
- Use modals unless there's truly no better alternative — modals are lazy

### Motion
→ Consult [motion reference](https://github.com/pbakaus/impeccable/blob/HEAD/.claude/skills/frontend-design/reference/motion-design.md) for timing, easing, and reduced motion.

**DO:**
- Use motion to convey state changes — entrances, exits, feedback
- Use exponential easing (`ease-out-quart/quint/expo`) for natural deceleration
- For height animations, use `grid-template-rows` transitions instead of animating `height` directly

**DON'T:**
- Animate layout properties (width, height, padding, margin) — use `transform` and `opacity` only
- Use bounce or elastic easing — they feel dated and tacky; real objects decelerate smoothly

### Interaction
→ Consult [interaction reference](https://github.com/pbakaus/impeccable/blob/HEAD/.claude/skills/frontend-design/reference/interaction-design.md) for forms, focus, and loading patterns.

**DO:**
- Use optimistic UI — update immediately, sync later
- Use progressive disclosure — basic options first, advanced behind expandable sections
- Design empty states that teach the interface

**DON'T:**
- Repeat the same information — redundant headers, intros that restate the heading
- Make every button primary — use ghost buttons, text links, secondary styles; hierarchy matters

### Responsive
→ Consult [responsive reference](https://github.com/pbakaus/impeccable/blob/HEAD/.claude/skills/frontend-design/reference/responsive-design.md) for mobile-first, fluid design, and container queries.

**DO:**
- Use container queries (`@container`) for component-level responsiveness
- Adapt the interface for different contexts — don't just shrink it

**DON'T:**
- Hide critical functionality on mobile — adapt the interface, don't amputate it

### UX Writing
→ Consult [ux-writing reference](https://github.com/pbakaus/impeccable/blob/HEAD/.claude/skills/frontend-design/reference/ux-writing.md) for labels, errors, and empty states.

**DO:** Make every word earn its place.
**DON'T:** Repeat information users can already see.

## The AI Slop Test

Critical quality check: If you showed this interface to someone and said "AI made this," would they believe you immediately? If yes, that's the problem.

A distinctive interface should make someone ask "how was this made?" not "which AI made this?"

Review the DON'T guidelines above — they are the fingerprints of AI-generated work from 2024-2025.

## Implementation Principles

Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices across generations.

Source: [pbakaus/impeccable](https://github.com/pbakaus/impeccable)
