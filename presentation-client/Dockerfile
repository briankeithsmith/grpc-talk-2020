FROM node:13.7.0-alpine3.10

WORKDIR /app
COPY server/ ./server/

COPY dist/ ./dist/

WORKDIR /app/server
RUN npm ci

WORKDIR /app/
CMD node /app/server/index.js