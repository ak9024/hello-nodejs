<changes><change><info>Update README.md with more detailed instructions and project structure information</info><content># hello-nodejs

Simple NodeJS server to serve HTML with NodeJS as REST API.

## Project Structure

```
├── public/             # Static files
│   ├── css/            # CSS stylesheets
│   ├── js/             # Client-side JavaScript
│   └── index.html      # Main HTML page
├── src/                # Server source code
│   ├── controllers/    # Request handlers
│   ├── services/       # Business logic and external API calls
│   ├── utils/          # Utility functions
│   ├── server.js       # Server configuration
│   └── index.js        # Application entry point
└── package.json        # Project configuration
```

## Features

- Serves static HTML, CSS, and JavaScript files
- Provides a REST API endpoint that fetches data from an external API
- Modern ES modules syntax
- Proper error handling
- Clean code organization

## Prerequisites

- Node.js 21.0 or higher

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hello-nodejs.git
cd hello-nodejs

# Install dependencies
npm install
```

## Running the Application

```bash
# Start the server
npm start

# For development with auto-reload
npm run dev
```

Open in your browser: `http://localhost:5000`

## API Endpoints

- `GET /api/todos` - Fetches todo items from JSONPlaceholder API</content></change>
          </changes>