# syntax=docker/dockerfile:1
FROM node:16-alpine
EXPOSE 3000
WORKDIR /api-mock
COPY . .
RUN npm install
CMD ["node", "webserver-start.js"]
