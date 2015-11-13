var mongoose = require("mongoose");

var Posts = mongoose.model("Posts");

module.exports = (function(){

  return {
    addToPost(req,res){
      console.log("DING controller addToPost");
      // res.header('Content-Type', 'json');
      console.log("msg:",req.body.Body);

      var msg = req.body.Body;

      // Extract Author/Title Info

      var headingBegin = msg.indexOf('[');
      var headingEnd = msg.indexOf(']');

      var heading = msg.slice(headingBegin + 1, headingEnd);

      var postInfo = heading.split("/");

      var author = postInfo[0];
      var title = postInfo[1];

      // Extract Content

      var content = msg.slice(headingEnd + 1).trim();

      Posts.findOne({$and: [{author: author}, {title: title}]}, function(err, result){
        if(err) {
          console.log(err);
        } else {
          if (result === null) { // if not in db, add new post
            var newPost = new Posts({
              author: author,
              title: title,
              body: content
            });

            newPost.save(function(err, response){
              if(err){
                console.log("Error: Post could not be added.");
              } else {
                console.log("Response:", response);
                res.json(response);
              }
            })
          } else { // append message to post, update date
            result.body += " " + content;
            result.updated_at = new Date();
            result.save(function(err, response){
              if(err){
                console.log("Error: Post could not be added.");
              } else {
                console.log("Post updated:", response);
                res.json(response);
              }
            })
          }
        }
      })

    }
  }

})();
