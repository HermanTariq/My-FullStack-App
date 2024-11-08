FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g pm2
RUN pm2 init
COPY . .
EXPOSE 5000
CMD ["npm", "start"]

