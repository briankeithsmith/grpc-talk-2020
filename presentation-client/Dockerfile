FROM node:13.7.0 as build

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY . .
RUN npm run build


FROM node:13.7.0-alpine3.10 as deploy
COPY server/ /app/server/


WORKDIR /app/server
RUN npm ci
COPY --from=build /app/dist/ /app/dist/

WORKDIR /app/
CMD node /app/server/index.js