FROM node:16-alpine as build

WORKDIR /react
COPY . .

RUN npm i && npm run build

FROM nginx:1.22-alpine as final
WORKDIR /usr/share/nginx/html

COPY --from=build /react/build .

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]