# FROM instruction will tell Docker that the base for the image should be node:20.
FROM node:20

# Some frameworks and libraries may only turn on the optimized configuration that is suited to production if that NODE_ENVenvironment variable is set to production.
# E.g setting this for Express applications will enable performace and sercurity features.
ENV NODE_ENV production

# ensure we don't interfere with the contents of the image. 
# It will guarantee all of the following commands will have /usr/src/app set as the working directory. 
# If the directory doesn't exist in the base image, it will be automatically created.
WORKDIR /usr/src/app

# "Copy everything from the current directory on your host (.) into the current working directory of the image (.), 
# and set the owner and group of the copied files to the user node and group node."
COPY --chown=node:node . .

# Install app dependencies. Don't install devDependencies.
# ( Old way for npm v6 and below: RUN npm ci --only=production )
RUN npm ci --omit=dev

# Don't run as root, run as a user with lower privileges. 
# The official node Docker image include a least-privileged user of the same name: node. 
USER node

# CMD instruction tells what happens when docker run is used. 
# CMD is the default command that can then be overwritten with the argument given after the image name.
CMD npm start

