FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV VITE_BASE_URL=https://orders-products-dashboard-test.onrender.com

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host" ]