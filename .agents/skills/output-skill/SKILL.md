---
name: output-skill
description: >-
  Output enforcement skill ensuring complete, production-ready code delivery.
  Strictly bans lazy stubbing, placeholder comments, truncated snippets, and untested omissions.
---

# Output Enforcement Skill

Ensures all generated or edited code is completely functional, unbroken, and ready for production deployment.

---

## 1. Strict Non-Truncation Rules

* **Never Stub Code**: Never write comments like `/* ... rest of the code remains unchanged ... */` inside a file rewrite. Output the complete, working implementation.
* **Preserve Functionality**: When refactoring or redesigning, verify that all existing event handlers, modal logic, WhatsApp link generators, analytics trackers, or scripts continue to work seamlessly.
* **Semantic & Accessible Markup**: Ensure correct semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<dialog>`, `<button>`) and accessible ARIA attributes (`aria-expanded`, `aria-label`).
* **Zero Missing Dependencies**: If a new font or icon library is introduced, include the corresponding `<link>` or `<script>` tags so the code runs standalone without missing assets.
