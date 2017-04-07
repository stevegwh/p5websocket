var express = require("express");
var app = express();
var socket = require('socket.io');

var server = app.listen(3000 || process.env.PORT);
console.log("Running on port 3000");
app.use(express.static('public'));

app.get("/", function(req, res) {
  res.render('index.html');
})

var io = socket(server);

function newConnection(socket) {
  console.log("New connection!");
  console.log(socket.id);
  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    console.log(data);
  }
}

io.sockets.on('connection', newConnection);
