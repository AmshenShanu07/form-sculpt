FROM node:18
WORKDIR /usr/src/app

EXPOSE 3000
EXPOSE 3001
EXPOSE 3002

COPY package*.json ./

RUN npm i -g lerna@6.6.2
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run clean
RUN npm run bootstrap

CMD [ "npm", "run", "start:dev" ]