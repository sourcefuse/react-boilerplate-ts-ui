# build environment
FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx/gzip.conf /etc/nginx/conf.d/gzip.conf
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY ./.env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
