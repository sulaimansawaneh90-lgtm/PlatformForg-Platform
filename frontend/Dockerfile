FROM node:22-alpine AS builder

WORKDIR /workspace

RUN corepack enable && corepack prepare pnpm@12.4.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json tsconfig.base.json ./
COPY frontend ./frontend
COPY shared-types ./shared-types

RUN pnpm install --frozen-lockfile

ENV NX_DAEMON=false

RUN pnpm nx build frontend --configuration=production

FROM nginx:alpine

COPY --from=builder /workspace/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
