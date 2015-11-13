var accountSid = '';
var authToken = '';
var client = require('twilio')(accountSid, authToken);

module.exports = (function(){
  return {
    sendSMS(req,res){
      console.log("request body: ", req.body);
      client.sendMessage({
        body: req.body.message,
        to: req.body.number,
        from: "+16305341237"
      }, function(err, message){
        // process.stdout.write(message.sid);
        if (err){
          console.log("Error:", err);
        } else {
          console.log("Message:", message);
          res.json({message: message.sid});
        }
        // res.send(message.sid);
      });

    }
  }
})();