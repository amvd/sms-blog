var React = require("react");

var Header = require("./header");

var Posts = require("./posts");

var io = require("socket.io-client");
var socket = io.connect();

module.exports = React.createClass({
  render() {
    return <div>
      <Header />
      { this.content() }
      <center>
        <br/>
        <p>Armand De Asis 2015</p>
      </center>
    </div>
  },

  content() {
    if(this.props.children) {
      return this.props.children
    } else {
      return <Posts io={io} socket={socket} />
    }
  },
  componentDidMount(){
    socket.on("connect", function(){
      console.log("Connected!");
    })
  }
})