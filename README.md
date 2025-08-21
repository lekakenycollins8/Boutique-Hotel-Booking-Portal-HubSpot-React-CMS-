# Project Overview

Boutique Hotel Booking Portal built on HubSpot CMS using React CMS components, HubDB, HubL, and HubSpot Serverless Functions. Target: 70%+ custom UI/logic while leveraging drag‑and‑drop for standard content.

## Goals

- Data‑driven room inventory & availability (HubDB).
- Reactive UI (React modules + islands) for search, calendar, booking.
- Secure booking workflow via serverless API.
- Clean architecture, reusable components, and CI/CD via HubSpot Projects.

## High‑Level Features

- Rooms Listing (filterable)
- Room Details (amenities, gallery)
- Availability Checker (calendar with blackout dates)
- Booking (multi‑step form, confirmation)
- CMS‑managed marketing blocks (testimonials, CTAs)

## Repository Layout
<project-root>/
├─ hsproject.json
├─ package.json
├─ src/
│ ├─ assets/
│ ├─ styles/
│ └─ components/
│ ├─ partials/
│ ├─ modules/
│ └─ islands/
└─ theme/