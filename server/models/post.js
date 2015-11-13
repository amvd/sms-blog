var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
  title: String,
  created_at: {type: Date, default: new Date},
  updated_at: {type: Date, default: new Date},
  author: String,
  body: String
});

mongoose.model("Posts", PostSchema);