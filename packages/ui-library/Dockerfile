# Use the official Bun runtime as a parent image
FROM oven/bun:1 AS base
WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy source code
COPY ./src ./src
COPY ./tsconfig.json ./

# Build the library
RUN bun run build

# Production stage - for publishing or serving built assets
FROM base AS production
WORKDIR /app

# Copy built library
COPY --from=base /app/dist ./dist
COPY --from=base /app/package.json ./

# Install only production dependencies
RUN bun install --production --frozen-lockfile

# Default to production
FROM production 
# End of Selection