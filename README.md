# Rick and Morty Character List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v16 or later)
- **npm** (v8 or later) or **yarn** as your package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. **Install dependencies:**
   ```bash
   npm install

3. **Create a .env file in the root directory of the project and add the following:**
   ```bash
    REACT_APP_API_RICK=https://rickandmortyapi.com/graphql

### Installation Available Scripts
In the project directory, you can run:

    npm start


Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

    npm test


Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

    npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

##  Using the API
This application uses the Rick and Morty GraphQL API to fetch character data. The API endpoint is configured in the .env file:
REACT_APP_API_RICK=https://rickandmortyapi.com/graphql

Fetching Characters
Characters are fetched and displayed in a list on the main page. You can search for specific characters using the search bar at the top of the page.

Filtering Results
You can apply filters to refine the list of characters based on different criteria, such as species or status. Filters can be accessed via the settings icon next to the search bar.

## Technologies Used
    React 18
    TypeScript
    Apollo Client for GraphQL data management
    Redux Toolkit and redux-persist for state management
    React Router DOM for routing
    Tailwind CSS for styling


