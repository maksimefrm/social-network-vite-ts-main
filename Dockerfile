FROM node:latest

WORKDIR /social-network-vite-ts-main

COPY . /social-network-vite-ts-main

EXPOSE 3000

RUN npm i

CMD ["npm", "run", "dev"]