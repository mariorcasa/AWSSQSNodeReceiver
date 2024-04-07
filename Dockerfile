FROM node

COPY receiver.js .

COPY package.json .

RUN npm install

CMD ["node", "receiver.js"]