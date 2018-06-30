FROM node:8.11-alpine
COPY . /src
RUN npm install -g serve
RUN yarn
CMD [ "serve", "-h", "build" ]
