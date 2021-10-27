
FROM node:10 As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build --prod


FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/ng-boilerplate/ /usr/share/nginx/html
