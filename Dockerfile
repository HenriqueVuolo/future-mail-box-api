FROM node:18-alpine3.16 AS base
ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

FROM base AS dev
RUN npm install
COPY . .
CMD [ "npm", "run", "start:dev" ]