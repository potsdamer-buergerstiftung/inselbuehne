FROM node:lts-alpine as builder

ARG NEXT_PUBLIC_PAYPAL_CLIENT_ID

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn 

COPY ./ /app/

RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3000