FROM node:12

WORKDIR /app

COPY package*.json ./

# npm ci installs strictly from package-lock.json
RUN npm ci
 

COPY package*.json ./

ENV PORT=8080

EXPOSE 8080

CMD ["node","server.js"]