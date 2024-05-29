FROM node:18-alpine AS base

RUN npm install -g yarn --force
# RUN yarn set version berry

# 프로젝트 빌드를 위한 스테이지
# FROM base AS builder
WORKDIR /usr/src/app
# RUN apk add --no-cache libc6-compat
# COPY package.json ./
# COPY yarn.lock ./

# RUN yarn config set nodeLinker pnp
# RUN yarn install

COPY . .
# # RUN rm -rf node_modules
# # RUN rm -rf package-lock.json
RUN yarn install
RUN yarn build

# # 프로젝트 실행을 위한 스테이지
# FROM base AS runner
# WORKDIR /usr/src/app
EXPOSE 3000

# COPY --from=builder /usr/src/app ./

ENTRYPOINT ["yarn", "start"]
