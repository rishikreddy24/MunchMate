# MunchMate Architecture

## 1. Architecture Goal

The architecture must allow MunchMate to start as a frontend prototype using mock data and later connect to a real backend and database with minimal frontend changes.

The core principle is:

> UI should not be tightly coupled to the data source.

---

# 2. High-Level Architecture

Phase 1:

User
 ↓
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Service Layer
 ↓
Mock Data


Phase 2:

User
 ↓
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Service Layer
 ↓
API
 ↓
Node.js + Express
 ↓
MongoDB


Real-Time Phase 2:

Restaurant
 ↓
Node.js / Express
 ↓
Socket.IO
 ↓
Customer
