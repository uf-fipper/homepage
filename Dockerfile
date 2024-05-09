FROM node:20

EXPOSE 8080

RUN npm install

RUN npm run dev
