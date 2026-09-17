# MunchMate AI Handoff

## Current Phase
Phase 1 - Frontend Development

## Project Status
Project planning and architecture completed.

## Current Task
Set up the shared frontend foundation and design system.

## Technology
- HTML
- CSS
- JavaScript
- No Bootstrap
- No React

## Future Technology
- Node.js
- Express.js
- MongoDB
- Socket.IO

## Important Rule
The frontend must be designed so that Phase 2 backend integration requires minimal frontend changes.

## Architecture
Page/UI -> JavaScript Logic -> Service Layer -> Data Source

Phase 1:
Service Layer -> Mock Data / localStorage

Phase 2:
Service Layer -> Backend API -> MongoDB

## AI Roles

### ChatGPT
Lead Architect and Primary Developer.

### Claude
Code Reviewer.
Checks:
- Bugs
- Code quality
- Responsiveness
- Accessibility
- Security
- Phase 2 compatibility

Claude should not redesign the architecture.

### Gemini
UI/UX Reviewer.
Checks:
- Visual design
- Layout
- Navigation
- Mobile responsiveness
- Typography
- Spacing
- Buttons
- Forms
- User experience

Gemini should not redesign the architecture.

## Rules
- Do not change the agreed architecture without discussion.
- Do not add unnecessary features.
- Do not use Bootstrap.
- Do not use React.
- Keep the project simple enough for a college project and viva.
- Do not let multiple AI tools edit the same file at the same time.
- GitHub is the single source of truth.
