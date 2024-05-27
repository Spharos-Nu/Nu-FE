# 의존성 설치를 위한 스테이지
FROM node:20-alpine AS deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 애플리케이션 빌드를 위한 스테이지
FROM node:20-alpine AS builder
RUN addgroup -S nextjs && adduser -S -G nextjs nextjs
WORKDIR /usr/src/app
COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules
RUN yarn build && rm -rf ./.next/cache

#두번째 스테이지
FROM node:20-alpine AS runner
RUN addgroup -S nextjs && adduser -S -G nextjs nextjs
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nextjs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/node_modules ./node_modules
USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]