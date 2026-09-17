# MunchMate Architectural Decisions

This file records important decisions made during development.

The purpose is to prevent AI tools or developers from accidentally changing established project requirements.

---

## Decision 001 — Frontend Technology

Date:
17 September 2026

Decision:

Use only:

- HTML
- CSS
- JavaScript

Do not use:

- React
- Bootstrap
- Other frontend frameworks unless explicitly approved.

Reason:

The project is a college-level frontend prototype and should remain understandable and manageable.

Status:

FINAL

---

## Decision 002 — Two-Phase Development

Decision:

MunchMate will be developed in two major phases.

Phase 1:
Frontend + mock data.

Phase 2:
Backend + database + connectivity.

Reason:

The first project review focuses on frontend development.

Status:

FINAL

---

## Decision 003 — Backend Technology

Planned Phase 2 backend:

- Node.js
- Express.js
- MongoDB
- Socket.IO

Status:

PLANNED

---

## Decision 004 — Three Main Roles

Main system roles:

1. Customer
2. Restaurant
3. Admin

Delivery partners are not treated as a primary registration role during the prototype phase.

Status:

FINAL

---

## Decision 005 — Restaurant Approval

Restaurants can register without immediate approval.

Restaurants can:

- Create account
- Complete profile
- Add menu
- Request approval

However, restaurants become publicly visible only after admin approval.

Possible states:

DRAFT
PENDING_APPROVAL
APPROVED
REJECTED

Status:

FINAL

---

## Decision 006 — Admin Registration

There is no public admin registration.

Admin accounts are controlled separately.

Status:

FINAL

---

## Decision 007 — Delivery Partners

There is no public delivery-partner registration.

Phase 1 uses mock/predefined delivery partners.

The system may automatically assign a mock delivery partner to an order.

Status:

FINAL

---

## Decision 008 — Offers and Coupons

Offers, discounts, and coupons are excluded from the current scope.

Reason:

They are not necessary for demonstrating the core ordering workflow and would add unnecessary complexity.

They may be added in the future.

Status:

FINAL

---

## Decision 009 — Favorites

Favorites/wishlist functionality is excluded from the current scope.

Reason:

It is not essential to the core ordering workflow.

It may be added as a future enhancement.

Status:

FINAL

---

## Decision 010 — Restaurant Ratings

Only restaurants are rated.

Food-item ratings are not required.

Customers can review restaurants after completing an order.

Status:

FINAL

---

## Decision 011 — Location

Customers manually enter delivery addresses.

Restaurant locations are displayed as text.

No:

- GPS
- Maps
- Distance calculation
- Route calculation

during Phase 1.

Status:

FINAL

---

## Decision 012 — Payment

Payment is simulated during Phase 1.

Possible methods:

- UPI
- Card
- Cash on Delivery

Real payment gateway integration is not required for the first review.

Status:

FINAL

---

## Decision 013 — Charges

Delivery fee and tax use simple fixed/sample values during Phase 1.

Dynamic calculation may be implemented in Phase 2.

Status:

FINAL

---

## Decision 014 — Recommendations

Recommended and Trending sections use mock/predefined data during Phase 1.

AI personalization is not required initially.

AI-based recommendations may be added later.

Status:

FINAL

---

## Decision 015 — Mock Data

Phase 1 uses realistic mock data.

Mock data should follow the same structure planned for backend/database data.

Status:

FINAL

---

## Decision 016 — Service Layer

Frontend pages should communicate with a service layer rather than directly depending on mock data.

Reason:

This allows mock data to be replaced with backend APIs with minimal frontend changes.

Status:

FINAL

---

## Decision 017 — AI Collaboration

AI tools may be used for:

- Architecture review
- Code generation
- Code review
- UI/UX suggestions
- Debugging
- Documentation

However, no AI may change the core architecture or technology stack without explicit approval.

ChatGPT acts as the primary architecture/coordination assistant.

Status:

FINAL

---

## Decision 018 — No Unnecessary Complexity

The project should remain:

- Modular
- Clean
- Understandable
- Beginner-friendly
- Professional

Avoid over-engineering.

Status:

FINAL
