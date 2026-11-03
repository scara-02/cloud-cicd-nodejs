
# Stage 1: Build the application
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies, including development dependencies
RUN npm ci

# Copy application source
COPY src ./src

# Build production bundle
RUN npm run build


# Stage 2: Production runtime
FROM node:24-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy bundled application from builder stage
COPY --from=builder /app/dist ./dist

# Run as non-root user
USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]
