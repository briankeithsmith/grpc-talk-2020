FROM node:13.7.0 as build

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY . .
RUN npm run build


FROM node:13.7.0-alpine3.10
COPY server/ /app/server/
COPY server/ /app/dist/

WORKDIR /app/server
RUN npm ci

WORKDIR /app/
CMD node /app/server/index.js