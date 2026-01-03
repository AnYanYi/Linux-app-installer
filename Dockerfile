# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build Next.js application (static export to /app/out)
RUN npm run build

# Stage 2: Serve static files with nginx
FROM nginx:alpine AS runner

# Copy custom nginx config for SPA routing
RUN echo 'server { \
    listen 80; \
    listen [::]:80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ $uri.html /index.html; \
    } \
    location /_next/static/ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    gzip on; \
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript; \
}' > /etc/nginx/conf.d/default.conf

# Copy static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
