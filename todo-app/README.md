
# How to run
To run the whole application, i.e. both the frontend, backend and the other services, use the docker compose files in this folder.

For development:
```bash
docker compose -f docker-compose.dev.yml up
```

For production:
```bash
docker compose -f docker-compose.yml up
```

# Some comments

Note that nginx is used twice in the whole setup. First as a reverse-proxy in the compose file. Then as a web server that serves static react file in todo-frontend->Dockerfile. 

Only nginx service needs to define the ports in the compose file since that container is the only container that will talk with outside world. The rest of the services can talk with each oher because they are on the same internal Docker network. Use the service name (or container name) and port nuber to talk to it. Like e.g. from inside the backend code ``redis://redis:6379``. 

# Problems with mongo credentials and authentication
https://fullstackopen.com/en/part12/building_and_configuring_environments#still-problems

If problems with mongo credentials and authentication, run these commands:
```bash
docker compose -f docker-compose.dev.yml down --volumes
docker image rm mongo
```
After these, try to start Mongo again.

If the problem persists, let us drop the idea of a volume altogether and copy the initialization script to a custom image. Create the following Dockerfile to the directory todo-app/todo-backend/mongo:

```yml
FROM mongo
COPY ./mongo-init.js /docker-entrypoint-initdb.d/
```

Build it to an image with the command:

```bash
docker build -t initialized-mongo .
```

Now change the ``docker-compose.dev.yml`` file to use the new image:

```yml
  mongo:
    image: initialized-mongo    ports:
     - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
      MONGO_INITDB_DATABASE: the_database
```
  