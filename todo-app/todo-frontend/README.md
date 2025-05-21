# React application

This application is created with [Vite](https://vitest.dev/).

Install dependencies with `npm install`

You can run the application in development mode with `npm run dev`

You can build static files for production release with `npm run build`

## Environment variables

Use env VITE_BACKEND_URL to set where the backend for this application is

# My comments

- Go to backend folder
- Start the backend mongo db and redis services running in containers: ``docker compose -f docker-compose.dev.yml up -d``
- Start the backend express app "outside a container": ``npm run dev``
- Go to frontend folder
- Start the react frontend app: ``docker compose up``

