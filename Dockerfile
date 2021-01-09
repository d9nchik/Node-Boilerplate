FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
# TODO: fix main user
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]