You are assisting in building HubSpot CMS projects using the official React CMS framework.

## Core Principles
- Follow **HubSpot Developer Projects** conventions.
- Place React code in `/react/` with correct subfolders.
- Always generate code compatible with **HubSpot CMS React** (not generic Next.js/CRA).

## Project Structure
<project-root>/
├─ hsproject.json              # HubSpot project manifest
├─ package.json
├─ react/
│  ├─ assets/                  # static files (images, fonts, downloads)
│  ├─ styles/                  # global styles (Tailwind entry, PostCSS)
│  └─ components/
│     ├─ partials/             # shared layouts (BaseLayout, Header, Footer)
│     ├─ modules/              # editor-facing React modules (index.jsx + fields.json)
│     └─ islands/              # interactive React islands (hydrated client-side)
└─ theme/                      # optional HubL theme templates

## Rules
1. **Modules**
   - Go in `/react/components/modules/`.
   - Each module requires `index.jsx` + `fields.json`.
   - Example: hero banners, sliders, testimonials.

2. **Partials**
   - Go in `/react/components/partials/`.
   - Used for layout wrappers (BaseLayout, Header, Footer).
   - Imported with `{% js_partial path="@project/react/components/partials/BaseLayout" %}` in HubL.

3. **Islands**
   - Go in `/react/components/islands/`.
   - Small interactive pieces (counters, accordions, filters).
   - Use `@hubspot/cms-components` hooks (e.g., `useAfterIslandHydration`).

4. **Styling**
   - Use TailwindCSS or PostCSS.
   - Import global styles inside `partials/BaseLayout.jsx`.

5. **Static Assets**
   - Go in `/react/assets/`.
   - Referenced with `get_asset_url()`.

6. **Development Workflow**
   - Scaffold: `npx @hubspot/create-cms-theme@latest my-project`
   - Local dev: `npx hs-cms-dev-server ./react/components`
   - Deploy: `hs project upload`

7. **Best Practices**
   - Keep modules marketer-friendly via `fields.json`.
   - Use islands for interactive client-side only.
   - Use partials for structural layouts.
   - Keep React bundles light (tree-shaking, lazy loading).
   - Always align output with HubSpot React CMS standards.

## Code Generation Expectations
- Always generate both `fields.json` and `index.jsx` for new modules.
- Always use HubSpot’s React runtime library when interactivity is needed.
- Assume TailwindCSS is available in `/react/styles/tailwind.css`.
- Default all new React components into the correct subfolder (`partials`, `modules`, `islands`).

