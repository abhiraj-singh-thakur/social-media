FROM node:18.12.1

ENV NODE_ENV development

WORKDIR /react-app

COPY package.json /react-app/package.json
RUN npm install

COPY ..

CMD npm start

