module.exports = function(server){
  

  io.sockets.on("connection", function(socket){
    console.log("Connected to " + socket.id);
  })
}