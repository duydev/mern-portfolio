FROM node:8.11
COPY . /src
WORKDIR /src
RUN apt update 
RUN apt install xsel
RUN npm install -g serve
RUN yarn
RUN yarn build
EXPOSE 5000
CMD [ "serve", "-s", "build"]
