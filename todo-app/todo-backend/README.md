# Express application

Install dependencies with `npm install`

Run with `npm start`

Or in development mode with `npm run dev`

# Visit counter

When running the server, visit http://localhost:3000 to see visit counter, or give environment variable `PORT` to change the port.

# MongoDB

The application has /todos crud which requires a MongoDB. Pass connection url with env `MONGO_URL`

# Redis

Pass connection url with env `REDIS_URL`

# My comments

Read README one folder up and use those docker compose files. 

Old:

For the Dockerfile:

`docker build -t part12backend .`

`docker run -p 3000:3000 part12backend`

Using the compose file:

`docker compose up`

`docker compose -f docker-compose.dev.yml up -d`

`docker compose -f docker-compose.dev.yml down`



