# Components — Boutique Hotel Booking Portal

## Overview
This file defines the **React CMS components** (modules, islands, and partials) used in the project.  
Each component specifies:  
- **Type** (partial, module, island)  
- **Props/Fields** (data sources, HubDB fields, CMS fields)  
- **Responsibilities** (what it renders/handles)  

---

## Folder Structure
src/components/
│
├── partials/ # Layout parts shared across pages
│ ├── Header.jsx
│ ├── Footer.jsx
│ └── BaseLayout.jsx
│
├── modules/ # Full React CMS modules (multi-use, data-driven)
│ ├── RoomsList.jsx
│ ├── RoomDetails.jsx
│ ├── BookingForm.jsx
│ └── TestimonialsCarousel.jsx
│
└── islands/ # Interactive React "islands" for dynamic UI
├── AvailabilityCalendar.jsx
└── FilterSidebar.jsx


---

## Partials

### 1. `Header`
- **Type:** Partial  
- **Fields:**  
  - `logo` (image)  
  - `navLinks` (HubSpot menu)  
- **Responsibilities:**  
  - Render site logo and navigation bar.  
  - Pull menu links from HubSpot drag-and-drop menu.  

### 2. `Footer`
- **Type:** Partial  
- **Fields:**  
  - `copyright` (text)  
  - `socialLinks` (repeater: icon + url)  
- **Responsibilities:**  
  - Display footer text and social links.  

### 3. `BaseLayout`
- **Type:** Partial (layout wrapper)  
- **Responsibilities:**  
  - Provides consistent page structure (Header, Main, Footer).  
  - Wraps all pages.  

---

## Modules

### 1. `RoomsList`
- **Type:** Module (React CMS)  
- **Props:**  
  - Fetches from `rooms` HubDB table.  
- **Responsibilities:**  
  - Display a grid of room cards with image, name, price, category.  
  - Link each card → Room Details page.  

### 2. `RoomDetails`
- **Type:** Module (React CMS)  
- **Props:**  
  - `roomId` (from dynamic page context)  
- **Responsibilities:**  
  - Show full details: name, description, amenities, gallery.  
  - Embed `AvailabilityCalendar` island.  

### 3. `BookingForm`
- **Type:** Module (React CMS)  
- **Props:**  
  - `roomId` (optional if pre-selected)  
- **Responsibilities:**  
  - Multi-step form for booking workflow.  
  - Steps: Select room + dates → Guest info → Confirm.  
  - Calls serverless API for booking validation & creation.  

### 4. `TestimonialsCarousel`
- **Type:** Module (React CMS)  
- **Props:**  
  - `testimonials` (array of objects: name, text, image)  
- **Responsibilities:**  
  - Carousel slider of guest reviews.  
  - Reusable across homepage & landing pages.  

---

## Islands

### 1. `AvailabilityCalendar`
- **Type:** Island (interactive React component)  
- **Props:**  
  - `roomId` (number)  
- **Responsibilities:**  
  - Fetch booked dates from `/api/availability/:roomId` serverless function.  
  - Disable blackout dates in calendar picker.  
  - Emit `dateSelected` event → pass into BookingForm.  

### 2. `FilterSidebar` *(Optional Stretch)*
- **Type:** Island  
- **Props:**  
  - `filters` (category, price range, amenities)  
- **Responsibilities:**  
  - Client-side filtering of `RoomsList`.  
  - No full-page reload — updates via React state.  

---

## Notes
- **Modules** are larger reusable blocks that may include islands.  
- **Islands** are lightweight interactive pieces for client-side updates.  
- **Partials** provide consistent layout across pages.  

---
