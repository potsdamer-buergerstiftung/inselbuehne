FROM mhart/alpine-node:14 as builder
WORKDIR /app

RUN apk --update add --no-cache curl git python alpine-sdk \
  bash autoconf libtool automake

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

COPY . .
RUN yarn build

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile --production

FROM mhart/alpine-node:slim-14
WORKDIR /app

COPY . . 
COPY --from=production /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["./node_modules/.bin/blitz", "start", "--production"]
