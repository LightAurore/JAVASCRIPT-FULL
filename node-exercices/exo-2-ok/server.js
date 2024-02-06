const http = require("http");

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// Normalize
const normalizePort = (val) => {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  } else if (port >= 10) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT);

app.set("port", port);

app.get("/", (req, res, next) => {
  // res.json({ port: process.env.PORT });
  res.render({ port: process.env.PORT });
});

const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const address = server.address();

  const bind = typeof address === "string" ? "pipe" + address : "port: " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges. ");
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use. ");
      process.exist(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);
server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  // const bind = typeof address === "string" ? "pipe" + address : "port: " + port;
  const bind = typeof address === "string" ? "pipe" + address : port;
  console.log("Listening on port http://localhost:" + bind);
});

server.listen(port);
