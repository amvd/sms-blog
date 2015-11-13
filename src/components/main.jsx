var React = require("react");

var Header = require("./header");


module.exports = React.createClass({
  render() {
    return <div>
      <Header />
      <h1>Hi.</h1>
      { this.content() }
    </div>
  },
  content() {
    if(this.props.children) {
      return this.props.children
    } else {
      return <h1>You are awesome.</h1>
    }
  }
})