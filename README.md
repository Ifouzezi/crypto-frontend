# Crypto Assets Viewer

A minimal React + Vite single-page application that fetches live cryptocurrency market data from the CoinGecko public API and displays asset name, symbol, and current USD price.

The implementation prioritizes clean code, separation of concerns, and reliable data handling over visual styling.

---

## Features

- Fetches live data from the CoinGecko API
- Displays:
  - Asset name
  - Symbol
  - Current price (USD)
- Loading state during data fetch
- Friendly error handling
- Client-side search by asset name
- Simple, maintainable component architecture

---

## Tech Stack

- React (Vite)
- TailwindCSS
- Fetch API
- Functional components and React hooks

---

 ## Project Structure
```
src/
├── api/          # API calls
├── hooks/        # Data lifecycle and state management
├── components/   # Reusable UI components
├── pages/        # Page composition
└── utils/        # Helpers and formatters
```

## Installation

```bash
npm install
npm run dev


Production Build
npm run build
npm run preview

Deployment
Designed for static hosting platforms such as:
Netlify


Netlify settings
Build command: npm run build
Publish directory: dist

