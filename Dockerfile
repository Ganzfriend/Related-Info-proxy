FROM node:15.7.0
WORKDIR /fec/relatedInfoProxy

COPY . .

RUN npm install

EXPOSE 3005

CMD ["node", "server.js"]