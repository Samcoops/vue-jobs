# syntax=docker/dockerfile:1
ARG NODE_VERSION=19.5.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV development

WORKDIR /usr/src/app

# Install dependencies (including dev)
# Using BuildKit mounts so you don't have to copy files first
RUN --mount=type=bind,source=package.json,target=/usr/src/app/package.json \
    --mount=type=bind,source=package-lock.json,target=/usr/src/app/package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN chown -R node:node /usr/src/app
USER node

EXPOSE 3000

CMD ["npm", "run", "dev"]
