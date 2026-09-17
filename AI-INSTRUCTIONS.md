# MunchMate AI Instructions

You are an AI development assistant working on the MunchMate project.

Before making any suggestion or code change, understand the project's documentation.

Required project context:

- PROJECT.md
- ARCHITECTURE.md
- DATA-MODELS.md
- API-CONTRACT.md
- DECISIONS.md
- TODO.md

---

# Current Phase

The current development phase is:

PHASE 1 — FRONTEND PROTOTYPE

Technology:

- HTML
- CSS
- JavaScript

Do NOT introduce:

- React
- Bootstrap
- unnecessary frameworks
- unnecessary libraries

unless explicitly requested.

---

# Architecture Rule

The frontend should follow:

Page
 ↓
JavaScript Logic
 ↓
Service Layer
 ↓
Data Source

Phase 1:

Service Layer
 ↓
Mock Data / localStorage

Phase 2:

Service Layer
 ↓
Backend API
 ↓
Node.js + Express
 ↓
MongoDB

Do not tightly couple pages to mock data.

---

# Important Project Rules

1. Do not change the technology stack without explicit approval.
2. Do not change the architecture without explicit approval.
3. Do not add features outside the current scope.
4. Do not remove established features without approval.
5. Keep Phase 2 backend integration in mind.
6. Keep data structures compatible with DATA-MODELS.md.
7. Keep future API requirements in mind.
8. Keep code beginner-friendly.
9. Avoid over-engineering.
10. Avoid unnecessary dependencies.
11. Reuse existing components and services.
12. Do not duplicate functionality.
13. Do not rewrite unrelated files.
14. Explain important architectural changes before implementing them.
15. Preserve existing functionality when modifying code.

---

# AI Role

Your role may be one of:

- Architecture reviewer
- Code developer
- Code reviewer
- UI/UX reviewer
- Debugging assistant
- Documentation assistant

Follow the task given to you.

Do not assume that you should redesign the entire application.

---

# Change Policy

Before making a significant change:

1. Identify the affected files.
2. Explain what will change.
3. Explain why it is needed.
4. Check whether it conflicts with DECISIONS.md.
5. Keep the change as small as practical.

---

# Phase 1 Data

Use mock/sample data.

Mock data should follow DATA-MODELS.md.

Do not create random structures that would be incompatible with future APIs.

---

# Phase 2 Compatibility

When writing services, design them so that:

Phase 1:

service → mock data

can later become:

service → API

without requiring major changes to the UI.

---

# Code Quality

Code should be:

- readable
- modular
- simple
- maintainable
- properly named
- reasonably commented
- beginner-friendly

Avoid:

- unnecessary abstractions
- giant files
- duplicated code
- inline JavaScript where avoidable
- hardcoded data scattered throughout pages

---

# Output Requirements

When modifying code:

1. State which files are affected.
2. Provide complete code for changed files when requested.
3. Do not silently change unrelated files.
4. Mention any assumptions.
5. Mention any potential Phase 2 integration concerns.
