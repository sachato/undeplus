FROM node:13

ADD . /app
WORKDIR /app

RUN npm install

EXPOSE 8888
CMD npm start