## TwoWaits — Travel Platform (Frontend + Backend)

This repository contains a React frontend and a Node/Express backend for the TwoWaits travel website. The project was originally scaffolded with Create React App for the frontend and uses a small Express API backend with Mongoose models for authentication and data endpoints.

This README describes the project structure, available dashboards, routes, components, how to run locally, build steps, and notes for integrating real backend APIs.

Project status: UI dashboards scaffolded, lazy-loaded routes implemented, API service stubs added (Axios + fallback mocks). The code was pushed to GitHub and is ready for backend integration and polishing.

---

## Key features
- Modern React SPA using React Router v5
- Lazy-loaded dashboard pages and Suspense fallbacks
- Reusable dashboard layout components (Sidebar, Topbar)
- Six production-style dashboards (Worldwide Tours, Travel Planning, Hotel Booking, Flight Booking, Travel Insurance, Support)
- Lightweight chart and table components with skeleton/loading states
- Axios-based API service modules with graceful fallback mocks
- Responsive layout and theme consistent with existing Navbar/Footer

## Tech stack
- Frontend: React 17, react-router-dom v5, react-scripts (CRA)
- Styling: CSS modules / component CSS (existing project styles)
- HTTP client: Axios
- Backend: Node.js + Express (small API server in `backend/`)
- Database: MongoDB / Mongoose (backend models present)

## Project structure (important files)
- `frontend/` — React app
	- `src/App.js` — app routes + lazy dashboard imports
	- `src/components/dashboard/` — reusable layout and small UI components
	- `src/components/dashboard/pages/` — dashboard pages (WorldwideTours, TravelPlanning, HotelBooking, FlightBooking, TravelInsurance, Support)
	- `src/api/dashboardService.js` — Axios service stubs with mock fallbacks
	- `public/images/` — project images used by UI
- `backend/` — Express API, auth routes, Mongoose models, tests

## Dashboard routes
Each service card on the `/services` page links to a complete dashboard:

- `/dashboard/worldwide-tours` — Worldwide Tours dashboard
- `/dashboard/travel-planning` — Travel Planning dashboard
- `/dashboard/hotel-booking` — Hotel Booking dashboard
- `/dashboard/flight-booking` — Flight Booking dashboard
- `/dashboard/travel-insurance` — Travel Insurance dashboard
- `/dashboard/support` — Support dashboard

## How to run locally

1. Install dependencies (from repository root):

```bash
cd twowaits_website/frontend
npm install
cd ../backend
npm install
```

2. Start backend (default port configured in backend):

```bash
cd twowaits_website/backend
npm start
```

3. Start frontend dev server:

```bash
cd twowaits_website/frontend
npm start
```

Open http://localhost:3000 and navigate to `/services` to access the Services page. Click any card's "Open" button to jump to its dashboard. Dashboard routes are lazy-loaded and show a fallback while loading.

## Build for production

From `frontend/`:

```bash
npm run build
```

Serve the `build/` folder with a static server (for example `serve -s build`) or integrate into your preferred hosting.

## API services and integration notes

- The frontend includes `src/api/dashboardService.js` which uses Axios and implements `withFallback` behavior returning mock data when the backend is unreachable. Replace the endpoints with your backend API paths when available.
- Example endpoints expected by the stubs (backend should implement):
	- `GET /api/tours/overview`
	- `GET /api/tours/chart`
	- `GET /api/bookings/recent`

Place real implementations in `backend/routes/` and update `frontend/src/api/dashboardService.js` to remove fallbacks.

## Development notes & next steps
- Connect service stubs to real backend endpoints and implement server-side pagination for tables.
- Replace simple chart placeholders with a charting library (Recharts/Chart.js) for interactive charts.
- Add authentication guards for `/dashboard/*` routes (JWT-based). The backend already contains auth routes and middleware scaffolding.
- Improve accessibility (aria attributes, keyboard navigation) and add unit/integration tests for dashboard components.

## Contributing
- Fork the repository, create a feature branch, and open a pull request describing your changes.

## License
- This repository currently does not include an explicit license file. Add `LICENSE` if you want to apply an open-source license.

---

If you want, I can:
- Wire the dashboard service stubs to actual backend endpoints (provide API specs),
- Add richer charts using `recharts`, or
- Implement route protection with a local JWT mock for testing.

If you'd like me to commit and push this README update, I can do that now.

