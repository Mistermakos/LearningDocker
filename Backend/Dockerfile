FROM node:22

WORKDIR /app

COPY . .

RUN npm ci 


EXPOSE 3000

CMD ["node", "server.js"]