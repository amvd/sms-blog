var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./client")));

// require mongoose and routes here

require("./config/mongoose.js");

var routes = require("./config/routes.js")(app);

var port = process.env.PORT || 7000;

var server = app.listen(port, function(){
  console.log("Listening on port 7000.");
});