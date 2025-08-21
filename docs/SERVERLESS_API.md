# Serverless API — Boutique Hotel Booking Portal

## Overview
This file documents all **HubSpot Serverless Functions** used in the project. 
Endpoints power room availability checks, booking creation, and optional extensions.

All functions live in:
[src/serverless/](src/serverless/)


## Endpoints

### 1. `GET /api/rooms`

- **File:** [rooms.js](src/serverless/rooms.js)
- **Purpose:** Fetch all rooms from `rooms` HubDB table.
- **Input:** None
- **Output:** JSON array of room objects


### 2. GET /api/availability/:roomId

- **File:** [availability.js](src/serverless/availability.js)
- **Purpose:** Fetch unavailable dates for a given room.
- **Input:**
  - `roomId` (path param)
- **Process:**
  - Query bookings table for given roomId.
  - Return check-in/check-out ranges as blackout dates.
- **Output:** JSON array of date ranges
  - `[ { "start": "2025-09-10", "end": "2025-09-15" }, { "start": "2025-09-20", "end": "2025-09-22" } ]`


### 3. POST /api/bookings

- **File:** [booking.js](src/serverless/booking.js)
- **Purpose:** Create a new booking.
- **Input:** JSON body
  - `room_id` (number)
  - `guest_name` (string)
  - `email` (string)
  - `check_in_date` (string)
  - `check_out_date` (string)
- **Process:**
  - Validate room availability.
  - Insert booking row into bookings HubDB table with status = Pending.
  - Optionally send confirmation email via HubSpot Workflows.
- **Output:**
  - `{ "booking_id": 12, "status": "Pending", "message": "Booking request received" }`


### 4. POST /api/contact

- **File:** [contact.js](src/serverless/contact.js)
- **Purpose:** Submit contact form inquiries to HubSpot CRM.
- **Input:** JSON body
  - `name` (string)
  - `email` (string)
  - `message` (string)
- **Process:**
  - Validate input (dates, emails, IDs).
  - Optionally send confirmation email via HubSpot Workflows.
- **Output:**
  - `{ "status": "success" }`


## Security

HubSpot Functions run in a sandboxed environment with access to HubDB + HubSpot APIs.

All endpoints should validate input (dates, emails, IDs).


### Integration Notes

RoomsList module → /api/rooms

AvailabilityCalendar island → /api/availability/:roomId

BookingForm module → /api/bookings

ContactForm module → /api/contact

