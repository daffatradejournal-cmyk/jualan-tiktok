---
name: soft-skill
description: >-
  Aesthetic design skill for luxury, tactile, Apple/Linear-grade interfaces.
  Enforces haptic depth, subtle lighting, warm muted tones, spring physics,
  and elevated craftsmanship.
---

# Soft Skill (Apple / Linear Aesthetic)

Guidelines for creating ultra-refined, tactile interfaces that feel premium, deliberate, and high-craft.

---

## 1. Aesthetic Signature

* **Surface Depth**: Subtle layered elevations using multi-stop box shadows rather than single harsh drops.
  ```css
  /* Layered soft shadow */
  box-shadow: 
    0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 8px 16px -4px rgba(0, 0, 0, 0.08),
    0 16px 32px -8px rgba(0, 0, 0, 0.04);
  ```
* **Borders & Insets**: Soft semi-transparent borders (`rgba(255, 255, 255, 0.1)` on dark or `rgba(0, 0, 0, 0.06)` on light) with optional subtle inner highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.6)`).
* **Radii Rhythm**: Standardized nested border radii:
  - Outer card: `16px` to `24px`
  - Inner button/badge: `radius_outer - padding` (e.g., `8px` to `12px`)

---

## 2. Palette & Lighting

* **Backgrounds**: Soft textured whites (`#fbfbfe`, `#f8f9fa`) or deep velvet neutrals (`#09090b`, `#121214`).
* **Accents**: Muted elegance—sage, muted cobalt, warm amber, graphite.
* **Glassmorphism / Frosted Layers**: Use sparingly with `backdrop-filter: blur(12px)` and subtle borders on sticky headers or modals.

---

## 3. Micro-Interactions & Physics

* **Buttons**:
  - `transform: scale(0.98)` on `:active` with smooth cubic-bezier easing (`transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1)`).
  - Subtle hover lift (`translateY(-2px)`) with heightened shadow.
* **Feedback States**: Immediate tactile confirmation on taps, copy-to-clipboard, or link clicks.
