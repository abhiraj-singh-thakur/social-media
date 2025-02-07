FROM node:18.12.1

WORKDIR /app

COPY package.*/ .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
