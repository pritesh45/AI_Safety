# AI Safety Incident Dashboard

An interactive dashboard for monitoring and reporting AI safety incidents across your organization, built with React and Tailwind CSS.

## Features

- Display a list of AI safety incidents with their titles, severity levels, and reported dates
- Filter incidents by severity level (Low, Medium, High, or All)
- Sort incidents by date (newest first or oldest first)
- Expand/collapse incident details
- Report new incidents through a form with validation
- Responsive design for all device sizes

## Tech Stack

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite (`npm create vite@latest`)

## Prerequisites

- Node.js
- npm

## Installation

```bash
npm install
```

## Running the App

```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

## Project Structure

```
ai-safety-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── AISafetyDashboard.jsx
│   │   ├── SeverityBadge.jsx
│   │   ├── IncidentCard.jsx
│   │   ├── FilterControls.jsx
│   │   └── IncidentForm.jsx
│   ├── data/
│   │   └── mockIncidents.js
│   ├── utils/
│   │   └── dateFormatter.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Design Decisions and Challenges

### Component Architecture

- **Reusability:** Components like `SeverityBadge` can be reused across the application.
- **Maintainability:** Each component has a single responsibility.
- **Testability:** Smaller components are easier to test in isolation.

### State Management

- Used React's built-in `useState`.
- For larger applications, Context API, Redux, or React Query can be considered.

### Responsive Design

- Mobile-first approach.
- Tailwind CSS flex and grid layouts used for adaptive designs.

### Challenges and Solutions

- **Handling Incident Expansion State:**  
  Moved expansion state from parent component to local state inside each card for better performance.

- **Filter and Sort Logic:**  
  Applied filtering before sorting to optimize performance.

- **Form Validation:**  
  Basic validation implemented. Future versions can have more robust patterns.

- **Severity Visualization:**  
  Used badges with color codes and ensured accessible contrast.
