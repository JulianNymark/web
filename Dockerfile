# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.13.1

# ---- Base ----
# Shared base image used across all stages
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Next.js"

WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm directly via npm (avoids corepack key rotation issues)
RUN npm install -g pnpm@10.33.0


# ---- Build stage ----
# Installs ALL dependencies and builds the Next.js app.
# Corepack reads "packageManager": "pnpm@x.y.z" from package.json and uses
# that exact version automatically — no manual pnpm install step required.
FROM base AS build

# Install native build tools needed by some npm packages
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Copy manifests first — these change less often than source code, so Docker
# can cache the dependency-installation layer effectively.
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (dev + prod) required for the build
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the Next.js application.
# Because next.config.ts sets output: "standalone", Next.js will produce a
# self-contained server in .next/standalone that includes only the files it
# actually needs — no node_modules required in the final image.
RUN pnpm run build


# ---- Final / runner stage ----
# Lean production image. Corepack is NOT needed at runtime because we run
# Node.js directly against the standalone server bundle — not via pnpm.
FROM base AS runner

# Copy the three artifacts produced by Next.js standalone output:
#   1. .next/standalone — the minimal server + its own node_modules copy
#   2. .next/static     — hashed client-side assets (CSS, JS chunks, etc.)
#   3. public           — static files served verbatim (images, fonts, etc.)
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000

# HOSTNAME must be 0.0.0.0 so the server listens on all interfaces inside the
# container (Next.js standalone defaults to 127.0.0.1 otherwise).
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
