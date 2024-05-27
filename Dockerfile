# 첫번째 스테이지
FROM node:20-alpine AS builder
RUN addgroup -S nextjs && adduser -S -G nextjs nextjs
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production;
COPY . .
RUN yarn build && rm -rf ./.next/cache

#두번째 스테이지
FROM node:20-alpine AS runner
RUN addgroup -S nextjs && adduser -S -G nextjs nextjs
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["yarn", "start"]