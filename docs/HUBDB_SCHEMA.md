# HubDB Schema — Boutique Hotel Booking Portal

## Overview
The portal uses **HubDB** as the primary data layer for rooms, bookings, and amenities.  
This schema ensures consistency across React components, HubL templates, and serverless APIs.

---

## Tables

### 1. `rooms`
Stores room inventory and details.

| Column Name      | Type        | Description |
|------------------|-------------|-------------|
| room_id          | Number (PK) | Unique identifier for each room |
| name             | Text        | Room name (e.g., "Ocean View Suite") |
| description      | Rich Text   | Long-form room description |
| price_per_night  | Number      | Base nightly rate |
| category         | Select      | One of: Single, Double, Suite |
| amenities        | Multi-Select Text | Amenities list (e.g., Wi-Fi, Pool, Balcony) |
| image            | File        | Main room image |
| gallery          | File (multi) | Optional gallery of images |

---

### 2. `bookings`
Stores guest booking details.

| Column Name     | Type        | Description |
|-----------------|-------------|-------------|
| booking_id      | Number (PK) | Unique booking ID (auto-increment) |
| room_id         | Number (FK) | References `rooms.room_id` |
| guest_name      | Text        | Full name of guest |
| email           | Email       | Guest email |
| check_in_date   | Date        | Check-in date |
| check_out_date  | Date        | Check-out date |
| status          | Select      | Booking status: Pending, Confirmed, Cancelled |

---

### 3. `amenities` (Optional Helper Table)
Used if we want a central amenity list instead of multi-select in `rooms`.

| Column Name | Type | Description |
|-------------|------|-------------|
| amenity_id  | Number (PK) | Unique amenity ID |
| name        | Text | Amenity label (e.g., "Free Breakfast") |
| icon        | File | Amenity icon (SVG/PNG) |

---

## Data Relationships

- **1-to-Many:**  
  - `rooms` → `bookings`  
  - One room can have multiple bookings, linked via `room_id`.

- **Many-to-Many (optional):**  
  - `rooms` ↔ `amenities` if using separate table.  

---

## Example Data

### Rooms Table
| room_id | name             | price_per_night | category | amenities                    | image         |
|---------|------------------|-----------------|----------|------------------------------|---------------|
| 1       | Ocean View Suite | 180             | Suite    | Wi-Fi, Balcony, Free Parking | ocean.jpg     |
| 2       | Garden Room      | 95              | Double   | Wi-Fi, Breakfast Included    | garden.jpg    |

### Bookings Table
| booking_id | room_id | guest_name | email              | check_in_date | check_out_date | status   |
|------------|---------|------------|--------------------|---------------|----------------|----------|
| 1          | 1       | John Doe   | john@example.com   | 2025-09-10    | 2025-09-15     | Confirmed |
| 2          | 2       | Sarah Lee  | sarah@example.com  | 2025-09-12    | 2025-09-14     | Pending   |

---

## Notes
- `room_id` and `booking_id` are integers for easier querying.  
- Serverless functions will **validate dates** before creating a new booking row.  
- Bookings table can optionally sync with external DB/CRM if client requires.  

---
