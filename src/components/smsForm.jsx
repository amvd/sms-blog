var React = require('react');

var $ = require('jquery');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      sentState: ""
    }
  },

  render(){
    return (<div>
      <form onSubmit={ this.handleSubmit }>
        <p>Message</p>
        <input
          type="text"
          ref="message"
          placeholder="Message body." />
        <p>Recipient Number</p>
        <input
          type="text"
          ref="number"
          placeholder="e.g. +18479870190" />
        <input
          type="submit"
          value="Send" />
      </form>
      <div>{this.state.sentState}</div>
    </div>)
  },


  handleSubmit(event){
    event.preventDefault();

    var sms = {
      message: React.findDOMNode(this.refs.message).value.trim(),
      number: React.findDOMNode(this.refs.number).value.trim()
    }

    $.ajax({
      url: "/sendSMS",
      dataType: 'json',
      type: 'POST',
      data: sms,
      success: function(response) {
        console.log(response);
        this.setState({sentState: "Sent!"});
        React.findDOMNode(this.refs.message).value = "";
        React.findDOMNode(this.refs.number).value = "";

        setTimeout(this.clearSentState, 4000);

      }.bind(this),

      error: function(xhr, status, err) {
        this.setState({sentState: "Problem sending."});
      }.bind(this)
    });
  },

  clearSentState(){
    this.setState({ sentState: ""});
  }
})