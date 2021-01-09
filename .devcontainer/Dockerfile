FROM node:14
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]