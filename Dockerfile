FROM node:lts-alpine as builder

ENV PAYPAL_CLIENT_ID \
    SMTP_USER="" \
    SMTP_PASSWORD=""

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn 

COPY ./ /app/

RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3000