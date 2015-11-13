var React = require("react");

var Router = require("react-router");
var Link = Router.Link;

module.exports = React.createClass({

  getInitialState(){
    return {
      navCollapsed: true
    }
  },

  handleNavClick(){
    console.log("clicked");
    this.setState({
      navCollapsed: !this.state.navCollapsed
    });

    console.log("navCollapsed?", this.state.navCollapsed);
  },

  render(){
    return (<nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className={"navbar-toggle " + (this.state.navCollapsed ? "collapsed" : "") } data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" onClick={this.handleNavClick}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to={"/"}>Home</Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to={"profile"}>Profile</Link></li>
            <li><Link to={"send"}>Send SMS</Link></li>
            <li><Link to={"test"}>Test SMS</Link></li>
          </ul>
        </div>
      </div>
    </nav>)
  }
})