FROM node:18-alpine AS base

RUN npm install -g yarn --force
RUN yarn set version berry
WORKDIR /usr/src/app

# 프로젝트 빌드를 위한 스테이지
# FROM base AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache libc6-compat
<<<<<<< HEAD
COPY package.json .
COPY yarn.lock .
# 필수 패키지 파일을 이미지 내부로 복사하고, yarn 명령어로 설치합니다
# COPY package.json ./app

# RUN yarn config set "strict-ssl" false -g
# RUN yarn set version berry

COPY . .
# RUN rm -rf node_modules
# RUN rm -rf package-lock.json
=======
# COPY package.json ./
# COPY yarn.lock ./

# RUN yarn config set nodeLinker pnp
# RUN yarn install
>>>>>>> develop

COPY ./ ./
# # RUN rm -rf node_modules
# # RUN rm -rf package-lock.json
RUN yarn install
RUN yarn run build

# # 프로젝트 실행을 위한 스테이지
# FROM base AS runner
# WORKDIR /usr/src/app
EXPOSE 3000
<<<<<<< HEAD
WORKDIR /app

COPY --from=builder /app .

# 앱 시작 명령어"를 시작합니다.
ENTRYPOINT ["yarn", "start"]
=======

# COPY --from=builder /usr/src/app ./

ENTRYPOINT ["yarn", "start"]
>>>>>>> develop
