---
name: design-taste-frontend
description: >-
  Core anti-slop frontend art direction skill for landing pages, marketing sites,
  dashboards, product pages, and app interfaces. Eliminates generic AI boilerplate,
  enforces brief inference, tunable style dials, typography pairing, and visual audit checks.
---

# Design Taste Frontend (Core Anti-Slop Skill)

Anti-slop frontend framework and art direction system distilled from curated design galleries (Awwwards, One Page Love, Godly). Stops AI from producing repetitive, templated "AI slop" (uniform 3-card grids, soft purple/blue gradients, centered headline stacks, and fake placeholder text).

---

## 0. Brief Inference & "Reading the Room"

Before writing code or styling a page, inspect the brief, target audience, and product nature. Derive a single-line **Design Read**:

```text
[Page Kind] + [Vibe Keywords] + [Target Audience] -> [Design Read]
```

### The Three Core Dials (Scale 1–10)
Set these dials explicitly before drafting code:

1. **`DESIGN_VARIANCE` (1–10)**:
   * `1–3`: Conservative, high-trust, corporate, banking/legal portals.
   * `4–7`: Balanced SaaS, modern commerce, structured editorial (default).
   * `8–10`: Asymmetric, editorial magazine, experimental brand showcase.

2. **`MOTION_INTENSITY` (1–10)**:
   * `1–3`: Instant transitions, subtle opacity/transform cues, strict accessibility.
   * `4–6`: Snappy spring physics, smooth dropdowns, micro-feedback (default).
   * `7–10`: Scroll-driven reveals, parallax, magnetic cursor/hover physics.

3. **`VISUAL_DENSITY` (1–10)**:
   * `1–3`: Generous whitespace, luxury pacing, bold sparse headlines.
   * `4–6`: Balanced marketing flow, distinct section breaks (default).
   * `7–10`: Information-dense dashboards, data tables, pro-tool power-user views.

---

## 1. The Anti-Slop Banned Defaults

Unless explicitly requested by the user, **NEVER**:
- Default to `linear-gradient(135deg, #6366f1, #a855f7)` (generic AI purple).
- Lay out 3 identical rounded cards with centered icons and generic 2-line descriptions ("Feature 1, Feature 2, Feature 3").
- Stack a centered eyebrow badge pill, centered `H1`, and centered sub-text on every section.
- Use generic placeholder lorem ipsum ("Empower your workflow with AI solutions"). Use real copy, actual pricing, specific product benefits, and Indonesian/local context where applicable.
- Mix arbitrary icon libraries or use thin, poorly-proportioned generic SVGs. Pick one consistent icon family (Phosphor, Tabler, Radix, or clean SVG set) with matching stroke width.

---

## 2. Typography & Spatial Discipline

### Typography Pairing
- **Display / Heading**: Pick an intentional personality font (e.g., `Plus Jakarta Sans`, `Syne`, `Cabinet Grotesk`, `Instrument Serif`, `Clash Display`, or `Outfit`).
- **Body**: High-legibility workhorse font (e.g., `Inter`, `Geist`, `Plus Jakarta Sans`, system-ui).
- **Hierarchy Scale**: Clear contrast between display titles (`clamp(2rem, 5vw, 3.5rem)`), section subtitles, and body text.
- **Rhythm**: Avoid identical vertical spacing. Hero sections need breathing room (`padding: 80px 0`), while conversion elements (cards, forms) require compact, scannable grouping.

### Color Palette Strategy
- **One Dominant Ground**: Dark or warm off-white (e.g., `#0f172a`, `#fafafa`, `#f8fafc`).
- **One Intentional Accent**: A signature color tied to the business domain (e.g., Emerald/Forest for trust, International Orange for energy, Deep Indigo for precision).
- **Rich Neutrals**: Instead of pure gray `#888888`, use tinted grays (`slate`, `zinc`, or warm sand `#1e2022`).
- **High Contrast**: Ensure body text has at least 4.5:1 contrast ratio against the background.

---

## 3. Layout Variance & Section Blueprints

Replace the repetitive 3-card grid with diverse section structures:
- **Asymmetric Split**: 60/40 layout where primary value proposition is highlighted with an interactive preview or proof element.
- **Stacked Timeline / Step-by-Step Flow**: Linear numbered progression showing how a service or setup works.
- **Comparison / Before & After Table**: Direct side-by-side contrast between old way vs. your solution.
- **Floating Sticky Action Bar / Drawer**: Persistent conversion trigger for mobile screens.

---

## 4. Pre-Flight Visual Self-Inspection

Before declaring code complete, inspect against this checklist:
- [ ] Does this look like an authentic human-designed page, or does it scream "AI template"?
- [ ] Are mobile touch targets at least 44x44px?
- [ ] Is there clear visual hierarchy with distinct focal points?
- [ ] Are CTAs prominent, with high contrast and clear benefit-oriented copy (e.g., *"Konsultasi WhatsApp Sekarang"* vs *"Klik Disini"*)?
- [ ] Are responsive breakpoints smooth without horizontal overflow or clipped badges?
