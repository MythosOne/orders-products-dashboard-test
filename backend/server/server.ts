import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let activeSessions = 0;

io.on("connection", (socket) => {
  activeSessions++;
  io.emit("activeSessionsUpdate", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("activeSessionsUpdate", activeSessions);
  });
});

server.listen(3001, () => {
  console.log("Server listening on port 3001");
});
