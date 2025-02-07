FROM node:22-alpine

# /app 디렉토리 생성
RUN mkdir -p /docker
# /app 디렉토리를 WORKDIR 로 설정
WORKDIR /docker

COPY package.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm build

#3301 -> 3000
EXPOSE 3000

CMD ["pnpm", "run", "dev"]