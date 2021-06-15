# syntax=docker/dockerfile:experimental
FROM node:12.18.2-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN apk add --no-cache openssh-client git
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

RUN echo -e 'http://dl-cdn.alpinelinux.org/alpine/edge/main\nhttp://dl-cdn.alpinelinux.org/alpine/edge/community\nhttp://dl-cdn.alpinelinux.org/alpine/edge/testing' > /etc/apk/repositories
RUN apk update && apk upgrade && apk add --no-cache git openssh yarn
COPY . /usr/src/app/
RUN --mount=type=ssh yarn install

RUN yarn build

EXPOSE 5000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
CMD [ "npm", "start" ]
