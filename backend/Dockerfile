FROM node:22-alpine AS builder

WORKDIR /workspace

RUN corepack enable && corepack prepare pnpm@12.4.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json tsconfig.base.json ./
COPY backend ./backend
COPY shared-types ./shared-types

RUN pnpm install --frozen-lockfile

ENV NX_DAEMON=false

RUN pnpm nx build backend --configuration=production


FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /workspace/dist/backend/package.json ./
COPY --from=builder /workspace/dist/backend/pnpm-lock.yaml ./
COPY --from=builder /workspace/dist/backend/pnpm-workspace.yaml ./
COPY --from=builder /workspace/dist/backend/main.js ./

RUN node -e "const fs=require('fs'); const p=JSON.parse(fs.readFileSync('package.json')); p.dependencies.tslib='^2.3.0'; fs.writeFileSync('package.json', JSON.stringify(p, null, 2));"

RUN corepack enable && corepack prepare pnpm@12.4.1 --activate \
    && pnpm install --prod --no-frozen-lockfile

EXPOSE 3000

CMD ["node", "main.js"]

