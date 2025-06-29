# Use the official Bun runtime as a parent image
FROM oven/bun:1 AS base
WORKDIR /app

# Copy ui-library package files first
COPY packages/ui-library/package.json ./packages/ui-library/package.json
COPY packages/ui-library/tsconfig.json ./packages/ui-library/tsconfig.json

# Copy ui-showcase package files
COPY packages/ui-showcase/package.json packages/ui-showcase/bun.lock* ./packages/ui-showcase/

# Install dependencies for both packages
WORKDIR /app/packages/ui-library
RUN bun install --frozen-lockfile

WORKDIR /app/packages/ui-showcase
RUN bun install --frozen-lockfile

# Copy and build ui-library
WORKDIR /app/packages/ui-library
COPY packages/ui-library/src ./src
RUN bun run build

# Copy ui-showcase source and build
WORKDIR /app/packages/ui-showcase
COPY packages/ui-showcase .
RUN bun run build

# Production stage
FROM base AS production
WORKDIR /app

# Copy built application
COPY --from=base /app/packages/ui-showcase/.next ./.next
COPY --from=base /app/packages/ui-showcase/package.json ./
COPY --from=base /app/packages/ui-showcase/public ./public
COPY --from=base /app/packages/ui-library/dist ../ui-library/dist
COPY --from=base /app/packages/ui-library/package.json ../ui-library/

# Install only production dependencies
RUN bun install --production --frozen-lockfile

EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"] 