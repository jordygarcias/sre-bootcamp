FROM node:9-alpine

WORKDIR /src

COPY . .
COPY package*.json ./

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start"]

# App must run on port 8000
# Add your instructions to dockerize the application
