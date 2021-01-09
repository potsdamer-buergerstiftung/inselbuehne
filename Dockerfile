FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn 

COPY ./ /app/

RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3000