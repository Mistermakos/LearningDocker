FROM node

WORKDIR /app

COPY ./Frontend /app/

RUN npm init -y 
RUN npm i express 

EXPOSE 3000

CMD ["node","server.js"]