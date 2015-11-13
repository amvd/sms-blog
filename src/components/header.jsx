var React = require("react");

var Router = require("react-router");
var Link = Router.Link;

module.exports = React.createClass({
  render(){
    return <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"profile"}>Profile</Link>
      <br />
      <Link to={"send"}>Send SMS</Link>
      <br />
      <Link to={"test"}>Test SMS</Link>
    </div>
  }
})