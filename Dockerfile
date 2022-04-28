# syntax=docker/dockerfile:1

# Stage 1: Build an Angular Docker Image
FROM node:14-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app
RUN npm run build-prod

# Stage 2

FROM nginx
# configure reverse proxy
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/apc-ui/ /usr/share/nginx/html
