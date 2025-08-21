# Coding Standards — Boutique Hotel Booking Portal

## Overview
This document defines **style and best practices** for coding in this project.  
It covers React CMS, HubL, serverless functions, and documentation to ensure maintainability and scalability.  

---

## General Principles
- **Consistency over creativity** → follow established patterns.  
- **Separation of concerns** → UI (React), Data (HubDB), Logic (serverless).  
- **Reusability** → build modular components, not one-off hacks.  
- **Documentation-first** → update `/docs/*.md` before writing code.  

---

## React CMS Standards

### File & Folder Naming
- Components live in `src/components/`  
- Use **PascalCase** for React components: `RoomsList.jsx`  
- Use **camelCase** for utility functions: `fetchRooms.js`  
- Group components into:  
  - `partials/` → shared layouts  
  - `modules/` → full React modules  
  - `islands/` → interactive widgets  

### Component Rules
- Each component:
  - Exported as **default function**  
  - Props typed with **PropTypes**  
  - Well-commented at top with description + usage  

Example:
```jsx
/**
 * RoomsList
 * Displays a grid of hotel rooms from HubDB.
 * Usage: <RoomsList />
 */
export default function RoomsList({ rooms }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {rooms.map(room => (
        <RoomCard key={room.room_id} {...room} />
      ))}
    </div>
  );
}



---

## Serverless Standards

Functions live in src/serverless/

One file per endpoint (e.g., booking.js)

Use async/await, never callbacks

Always validate input before processing

Return consistent JSON with status, message, data
