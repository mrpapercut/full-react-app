FROM node:17.0.1-alpine3.13

WORKDIR /app

COPY ./.babelrc ./.babelrc
COPY ./.eslintrc.js ./.eslintrc.js
COPY ./config.json ./config.json
COPY ./jest.config.js ./jest.config.js
COPY ./package.json ./package.json
COPY ./webpack.config.js ./webpack.config.js

COPY ./assets ./assets
COPY ./src ./src
COPY ./tests ./tests

RUN chown -R node:node /app

USER node

RUN npm install --legacy-peer-deps
