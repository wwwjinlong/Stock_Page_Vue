FROM node:14-alpine as build-stage

WORKDIR /admim



COPY . .
ARG NODE_ENV=""
RUN npm install --registry=https://registry.npmmirror.com
RUN npm run build

## -- stage: dist => nginx --
FROM nginx:alpine

ENV TZ=Asia/Shanghai

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /admim/dist /usr/share/nginx/html

EXPOSE 80
