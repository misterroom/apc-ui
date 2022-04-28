# syntax=docker/dockerfile:1
FROM node:14-alpine
EXPOSE 3000
WORKDIR /api-mock
COPY . .
RUN npm ci
CMD ["node", "webserver-start.js"]
