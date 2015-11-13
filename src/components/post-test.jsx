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
      Body: React.findDOMNode(this.refs.textBody).value.trim()
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
      <form onSubmit={this.handleTestSubmit} className="form-group">
        <textarea className="form-control"
          ref="textBody"
          placeholder="Enter Text Here. Example: '[Michael/Great Day] I had a great day today! This is probably the best day of my life!'" />
        <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      <div>{ this.state.sentState }</div>
    </div>)
  },

  clearSentState(){
    this.setState({ sentState: ""});
  }
})