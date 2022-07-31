FROM node:16

WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY index.js ./

ENTRYPOINT [ "npm", "start" ]