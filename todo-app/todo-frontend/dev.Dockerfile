# we shall use dev.Dockerfile for development configurations and Dockerfile otherwise.

FROM node:20

WORKDIR /usr/src/app

COPY package.json .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

COPY . .

ENV VITE_BACKEND_URL "http://localhost:3000"

# npm run dev is the command to start the application in development mode
# "The extra parameters -- --host in the CMD are needed to expose the development server to be visible outside the Docker network. 
# By default the development server is exposed only to localhost, and despite we access the frontend still using the localhost address, 
# it is in reality attached to the Docker network."
CMD ["npm", "run", "dev", "--", "--host"]

