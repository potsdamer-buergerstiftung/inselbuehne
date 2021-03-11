FROM node:stretch as builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install --pure-lockfile --production
RUN cp -R node_modules /tmp/node_modules

RUN yarn install --pure-lockfile
COPY . .

ENV NODE_ENV production
RUN yarn build

FROM node:slim
WORKDIR /app
COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./

ENV PORT 3000
EXPOSE 3000

CMD [ "yarn", "start" ]
