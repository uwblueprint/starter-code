FROM node:latest as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000

cmd npm start