#AI Safety Incident Dashboard
An interactive dashboard for monitoring and reporting AI safety incidents across your organization, built with React and Tailwind CSS.

#Features
Display a list of AI safety incidents with their titles, severity levels, and reported dates
Filter incidents by severity level (Low, Medium, High, or All)
Sort incidents by date (newest first or oldest first)
Expand/collapse incident details
Report new incidents through a form with validation
Responsive design for all device sizes

##Tech Stack
Frontend Framework: React.js 
Styling: Tailwind CSS 
Icons: Lucide React 
Build Tool: The build tool here is Vite.
npm create vite@latest


##Prerequisites:
Node.js 
npm 

##Setup and Installation
Install dependencies:
npm install

Start:
npm run dev

Building for Production
To create an optimized production build:
npm run build

Project Structure
ai-safety-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── AISafetyDashboard.jsx      # Main dashboard component
│   │   ├── SeverityBadge.jsx          # Severity indicator component
│   │   ├── IncidentCard.jsx           # Individual incident display
│   │   ├── FilterControls.jsx         # Filter and sort controls
│   │   └── IncidentForm.jsx           # Form for new incidents
│   ├── data/
│   │   └── mockIncidents.js           # Mock data 
│   ├── utils/
│   │   └── dateFormatter.js           # Date formatting utility
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                   
│   └── index.css                      
├── package.json
└── README.md

Design Decisions and Challenges
Component Architecture
I chose a modular component-based architecture to promote:

Reusability: Components like SeverityBadge can be reused across the application
Maintainability: Each component has a single responsibility
Testability: Smaller components are easier to test in isolation

State Management
For this project size, React's built-in useState hook provides sufficient state management. For larger applications, I would consider:

Context API for deeper component trees
Redux for more complex state management requirements
React Query for server state management
Responsive Design Approach
The dashboard uses Tailwind's responsive utility classes to ensure a good experience across devices:

Mobile-first design philosophy
Flex layouts that adapt to different screen sizes
Grid layouts for the form and filter controls

Challenges and Solutions
Handling Incident Expansion State:
Initially implemented expansion state in the parent component
Refactored to local state in each card component for better performance

Filter and Sort Logic:
Combined filtering and sorting operations
Applied filters before sorting to optimize performance

Form Validation:
Implemented basic form validation to ensure required fields
Future enhancement would include more robust validation patterns

Severity Visualization:
Used color-coding and badges to make severity levels immediately recognizable
Ensured accessible color contrast for all severity levels
