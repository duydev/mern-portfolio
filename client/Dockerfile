FROM node:8.11
COPY . /src
WORKDIR /src
RUN apt update 
RUN apt install xsel
RUN npm install -g serve
RUN yarn
RUN yarn build
CMD [ "serve", "-s", "build"]
