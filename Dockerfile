FROM node:14 AS build
WORKDIR /build
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent

FROM node:14-alpine
ENV NODE_ENV=production
RUN mkdir -p /usr/src/app
USER node
WORKDIR /usr/src/app
COPY --from=build /build ./
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]