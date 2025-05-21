FROM node:20 AS base
WORKDIR /usr/src/app

# If the tests fail, the whole Dockerfile build will fail. 
FROM base AS test
# USER node
# COPY --chown=node:node . .
COPY . .
RUN npm ci --include=dev
RUN npm run test

# Copy the code from the testing stage to the build stage. This ensures that you are building the tested code.
FROM test AS build
# This must be defined before build because this will be hardcoded into the static files during build. 
# React/frontend doesn't have "real" environment variables that can be read during run time. 
ENV VITE_BACKEND_URL "http://localhost:3000"
RUN npm run build

# Everything before this is gone, except for the files that we want to COPY
FROM nginx:1.25-alpine
# COPY the directory dist from the build stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
