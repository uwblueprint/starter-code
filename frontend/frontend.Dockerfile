FROM node:10

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

EXPOSE 3000
ENTRYPOINT ["npm", "start"]
