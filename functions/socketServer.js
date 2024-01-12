// functions/socketServer.js
const { Server } = require("socket.io");
const serverless = require("serverless-http");
const express = require("express");

const app = express();
const server = require("http").createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

module.exports.handler = serverless(app);
