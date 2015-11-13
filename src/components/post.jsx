var React = require("react");

module.exports = React.createClass({

  render() {
    return (<div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
      <div className="panel panel-primary post">
        <div className="panel-heading">
          <h4>{this.props.title}</h4>
        </div>
        <div className="panel-body">
          <p>{this.props.body}</p>
        </div>
        <div className="panel-footer">
          <strong>By:</strong> {this.props.author}
        </div>
      </div>
    </div>)
  }

})