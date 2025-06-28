# Use the official Bun runtime as a parent image
FROM oven/bun:1 as base
WORKDIR /app

# Copy workspace root package.json
COPY ../../package.json ./
COPY ../../packages/ui-library/package.json ./packages/ui-library/
COPY package.json bun.lockb* ./packages/ui-showcase/

# Install dependencies
RUN bun install --frozen-lockfile

# Copy library source and build it
COPY ../../packages/ui-library ./packages/ui-library
RUN cd packages/ui-library && bun run build

# Copy showcase source
COPY . ./packages/ui-showcase
WORKDIR /app/packages/ui-showcase

# Build the Next.js application
RUN bun run build

# Production stage
FROM oven/bun:1 as production
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