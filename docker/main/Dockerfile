FROM node:10-alpine

WORKDIR /usr/src/app

RUN npm install -g typescript
COPY ./src/package*.json ./
RUN npm install

COPY ./src .

CMD [ "/bin/sh" ]
