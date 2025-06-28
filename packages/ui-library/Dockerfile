# Use the official Bun runtime as a parent image
FROM oven/bun:1 as base
WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the library
RUN bun run build

# Development stage
FROM base as development
EXPOSE 3001
CMD ["bun", "run", "dev"]

# Production stage - for publishing or serving built assets
FROM oven/bun:1 as production
WORKDIR /app

# Copy built library
COPY --from=base /app/dist ./dist
COPY --from=base /app/package.json ./

# Install only production dependencies
RUN bun install --production --frozen-lockfile

# Default to production
FROM production 