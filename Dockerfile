FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production
RUN yarn run build
COPY dist .
CMD ["node", "main.js"]