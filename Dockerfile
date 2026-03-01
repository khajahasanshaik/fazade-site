FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8185
CMD ["npm", "run", "dev"]
