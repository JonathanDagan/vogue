FROM node:alpine

COPY . .

RUN yarn install

RUN yarn build

ENTRYPOINT [ "yarn", "start:prod" ]

