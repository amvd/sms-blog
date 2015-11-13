var Twilio = require('../server/controllers/twilio_controller.js');

module.exports = function(app){
  app.get("/", function(req,res){
    res.render("../index");
  });

  app.post("/sendSMS", function(req,res){
    console.log("DING routes '/sendSMS'");
    Twilio.sendSMS(req,res);
  });
}