FROM mhart/alpine-node AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build
RUN yarn install --production --frozen-lockfile

FROM mhart/alpine-node:slim as production

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/node_modules ./node_modules

ENV PAYPAL_CLIENT_ID \
    SMTP_USER="" \
    SMTP_PASSWORD=""

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
