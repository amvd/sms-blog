var React = require("react");

var $ = require("jquery");

module.exports = React.createClass({

  getInitialState(){
    return {
      sentState: ""
    }
  },

  handleTestSubmit(){
    event.preventDefault();

    var sms = {
      body: {
        Body: React.findDOMNode(this.refs.textBody).value.trim()
      }
    }

    $.ajax({
      url: "/sms-receive",
      dataType: 'json',
      type: 'POST',
      data: sms,
      success: function(response) {
        console.log(response);
        this.setState({sentState: "Sent!"});
        React.findDOMNode(this.refs.textBody).value = "";
      }.bind(this),

      error: function(xhr, status, err) {
        this.setState({sentState: "Problem sending."});
      }.bind(this)
    });

    setTimeout(this.clearSentState, 4000);
  },

  render(){
    return (<div>
      <h1>Test Post</h1>
      <form onSubmit={this.handleTestSubmit}>
        <textarea
          ref="textBody"
          placeholder="Message body." />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div>{ this.state.sentState }</div>
    </div>)
  },

  clearSentState(){
    this.setState({ sentState: ""});
  }
})