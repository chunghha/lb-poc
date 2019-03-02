ARG NODE_VERSION=10

FROM node:${NODE_VERSION}-alpine as builder
RUN npm -g i yarn

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/lb-poc
WORKDIR /home/node/lb-poc

# Install app dependencies
COPY --chown=node package.json ./
COPY --chown=node yarn.lock ./
RUN yarn

# Bundle app source code
COPY --chown=node . .
RUN yarn build

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "node", "." ]
