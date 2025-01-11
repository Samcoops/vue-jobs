# syntax=docker/dockerfile:1
FROM node:19.5.0

ENV NODE_ENV development

WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files only
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Set permissions for the app
RUN chown -R node:node /usr/src/app
USER node

EXPOSE 3000

# Run the development server
CMD ["pnpm", "run", "dev"]
