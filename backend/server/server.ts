import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import { orders as ordersData, products as productsData } from "./data"

const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let activeSessions = 0;
let orders = [...ordersData];
let products = [...productsData];

io.on("connection", (socket) => {
  activeSessions++;
  io.emit("activeSessionsUpdate", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("activeSessionsUpdate", activeSessions);
  });
});

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.delete("/api/orders/:id", (req, res) => {
  const id = Number(req.params.id);
  orders = orders.filter((order) => order.id !== id);
  res.status(204).send();
});

app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter((product) => product.id !== id);
  res.status(204).send();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
