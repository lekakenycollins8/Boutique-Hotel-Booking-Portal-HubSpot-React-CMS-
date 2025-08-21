# Boutique Hotel Booking Portal — Architecture

## Overview
This project is a re-creation of a boutique hotel website on **HubSpot CMS with React CMS cards**.  
The goal is to showcase advanced skills in **HubL, HubDB, React CMS, and Serverless Functions**, with at least 70% of the logic custom-coded while still leveraging HubSpot drag-and-drop modules.

## High-Level Design
- **Frontend:** HubSpot CMS + React CMS components
- **Backend:** HubSpot Serverless Functions + HubDB
- **Data Layer:** HubDB tables for rooms, bookings, amenities
- **Deployment:** HubSpot Developer Sandbox
- **Repo Management:** GitHub repo with branches for each feature
- **Docs:** `.md` files tracked inside `/docs/`

## Pages
1. Homepage
2. Rooms & Suites
3. Room Details (dynamic HubDB-driven)
4. Booking Page
5. Contact Page

## Custom Components
- **Room Availability Checker** (React island + HubDB integration)
- **Booking Workflow (Multi-Step Form)** (React + Serverless API)
- *(Optional Stretch)* Dynamic Room Filter

## HubDB Schema
- `rooms` table: room_id, name, description, price_per_night, category, amenities, images
- `bookings` table: booking_id, room_id, guest_name, email, check_in, check_out, status

## Project Folder Structure
project-root/
│
├── src/
│ ├── assets/ # static files (images, icons)
│ ├── styles/ # global CSS or Tailwind
│ ├── components/
│ │ ├── partials/ # layout parts (Header, Footer, Layout)
│ │ ├── modules/ # React CMS modules (RoomsList, RoomDetails, BookingForm)
│ │ └── islands/ # interactive components (AvailabilityCalendar)
│ └── serverless/ # HubSpot Functions (availability.js, booking.js)
│
├── hubdb/
│ ├── rooms.csv
│ └── bookings.csv
│
├── docs/
│ ├── ARCHITECTURE.md
│ ├── HUBDB_SCHEMA.md
│ ├── SERVERLESS_API.md
│ └── COMPONENTS.md
│
└── package.json


## Development Workflow
1. Define features in `/docs/`
2. Build modules and islands in `/components/`
3. Implement backend APIs in `/serverless/`
4. Test locally via HubSpot CLI
5. Deploy to HubSpot sandbox
6. Validate against project scope in docs

---
