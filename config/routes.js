var Twilio = require('../server/controllers/twilio_controller.js');

var Posts = require('../server/controllers/posts_controller.js')

module.exports = function(app){
  app.get("/", function(req,res){
    res.render("../index");
  });

  app.post("/sendSMS", function(req,res){
    console.log("DING routes '/sendSMS'");
    Twilio.sendSMS(req,res);
  });

  app.post('/sms-receive', function(req,res){
    console.log("DING routes '/sms-receive'");
    Posts.addToPost(req,res);
  });
}