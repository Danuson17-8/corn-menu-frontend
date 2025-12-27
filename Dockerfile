## Build stage ##

# Base Image
FROM node:24-alpine AS builder

# setting Working directory in Image
WORKDIR /app

# Install pnpm globally
RUN corepack enable

# Copy lock and manifest
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy rest of the source code
COPY . .

RUN pnpm build

## Production stage ##
FROM nginx:1.29.0-alpine AS runner

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port (optional, useful for clarity)
EXPOSE 80

# Start nginx (default in base image)
CMD ["nginx", "-g", "daemon off;"]