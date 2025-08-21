You are assisting with a HubSpot React CMS project. Obey these rules:


1) Architecture
- React source in `/react/` with `assets/`, `styles/`, `components/{partials,modules,islands}`.
- Each **module** has `index.jsx` + `fields.json`.
- **Partials** are layout wrappers, included via `{% js_partial %}`.
- **Islands** are client-hydrated pieces used inside modules.


2) Data & APIs
- Data comes from HubDB tables: Rooms, Bookings, Blackouts.
- Use serverless endpoints: `/rooms`, `/availability`, `/booking`.
- Never expose secrets client-side; all writes go through serverless.


3) Coding
- Tailwind in `/react/styles/`, imported in `partials/BaseLayout.jsx`.
- Accessibility is mandatory (keyboard, ARIA, contrast).
- Keep bundles lean; lazy-load islands where heavy.


4) Output Expectations
- When generating a new module, always output both `fields.json` and `index.jsx` under `react/components/modules/<Name>/`.
- Prefer data-fetching from serverless; do not hardcode sample data unless requested.
- Follow naming: PascalCase components, camelCase props.


5) Scope Control
- Use this docs pack as source of truth. If a request conflicts, ask to align with `architecture.md`.