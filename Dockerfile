FROM node:lts-alpine as builder

ARG paypal_client_id

ENV NEXT_PUBLIC_PAYPAL_CLIENT_ID=$paypal_client_id

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn 

COPY ./ /app/

RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3000