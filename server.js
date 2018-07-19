const http = require("http");
const express = require("express");
const socketio = require('socket.io');
const app = express();
app.use(express.static(`${__dirname}/../client`));
const server = http.createServer(app);

const io = socketio(server);

io.on('connection', function (socket) {
  console.log("User connected");
  socket.emit("message", "Welcome!");

  socket.on("message", function(data) {
    io.emit("message", data);
  })
});

server.listen(.listen(process.env.PORT || 5000)

, function () {
  console.log("Server Started");
});
