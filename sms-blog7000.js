var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./client")));

var port = process.env.PORT || 7000;

var server = app.listen(port, function(){
  console.log("Listening on port 7000.");
});

require("./config/mongoose.js");
var routes = require("./config/routes.js");

// Set up socket.io

var io = require("socket.io").listen(server);

// Pass socket vars to routes
io.sockets.on('connection', function(socket){
  console.log("connected to: " + socket.id);
  routes(app, io, socket);
})
