import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { Order } from "../model/modelOrder";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let activeSessions = 0;

mongoose
  .connect(process.env.MONGO_URL || "")
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

io.on("connection", (socket) => {
  activeSessions++;
  io.emit("activeSessionsUpdate", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("activeSessionsUpdate", activeSessions);
  });
});

app.get("/api/orders", async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Ошибка получения заказов" });
  }
});

app.delete("/api/orders/:id", async (req: Request, res: Response) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Ошибка удаления заказа" });
  }
});

app.delete("/api/orders/:orderId/products/:productId", async (req: Request, res: Response) => {
  const { orderId, productId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: "Заказ не найден" });

    order.products = order.products.filter(p => p.id !== Number(productId));
    await order.save();

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Ошибка удаления продукта" });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
