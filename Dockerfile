FROM node:10
EXPOSE 8091
WORKDIR /dist
COPY server.js config.js package.json ./
RUN npm i
CMD node index.js
