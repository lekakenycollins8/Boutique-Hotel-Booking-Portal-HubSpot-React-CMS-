📌 Milestones — Boutique Hotel Booking Portal

## Milestone 1 — Foundation Setup

🎯 Goal: Get the project repo + HubSpot environment ready.

- Initialize HubSpot project via CLI (`hs create project`).
- Setup repo with folders: components/, serverless/, hubdb/, styles/, docs/.
- Upload starter theme to HubSpot sandbox.
- Confirm deployment works (`hs upload`).

Learning Focus: HubSpot project structure, CLI workflow, Windsurf collaboration.

## Milestone 2 — HubDB Schema & Data

🎯 Goal: Define and populate rooms + bookings tables.

- Create rooms HubDB table (schema from HUBDB_SCHEMA.md).
- Create bookings HubDB table.
- Populate sample data (3-5 rooms).

Learning Focus: HubDB design, HubSpot CMS + dynamic data.

## Milestone 3 — Static Components

🎯 Goal: Build non-interactive React CMS components.

- Build RoomCard partial.
- Build RoomsList module → fetch from `/api/rooms` (mocked).
- Style with Tailwind.

Learning Focus: React CMS modules, props, Tailwind integration.

## Milestone 4 — Serverless API

🎯 Goal: Implement and test backend APIs.

- `/api/rooms` → fetch rooms.
- `/api/availability/:roomId` → fetch unavailable dates.
- `/api/bookings` → create booking.

Learning Focus: HubSpot serverless functions, HubDB queries, validation.

## Milestone 5 — Interactive Components (Islands)

🎯 Goal: Add interactivity with React CMS islands.

- AvailabilityCalendar island → show blackout dates.
- BookingForm → POST booking request.

Learning Focus: React islands, state management, API consumption.

## Milestone 6 — Pages & Flow

🎯 Goal: Assemble site into usable flow.

- Homepage → Hero + RoomsList.
- Room detail page → Availability + BookingForm.
- Contact page (optional with `/api/contact`).

Learning Focus: Page assembly, combining modules.

## Milestone 7 — Testing & QA

🎯 Goal: Verify correctness before launch.

- Unit test React components (Jest).
- API endpoint validation (Postman).
- Manual QA on sandbox portal.

Learning Focus: Testing discipline in HubSpot CMS.

## Milestone 8 — Launch & Showcase

🎯 Goal: Package & present project as portfolio-ready.

- Deploy to HubSpot EDU sandbox.
- Write project case study in /docs/PROJECT_OVERVIEW.md.
- Record short walkthrough video for portfolio.

Learning Focus: Solutions architect storytelling, client-facing presentation.
