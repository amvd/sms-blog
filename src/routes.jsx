// Modules
var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require("react-router/lib/HashHistory");

// Components
var Main = require("./components/main");
var Profile = require("./components/profile");
var SMSForm = require("./components/smsForm");
var PostTest = require("./components/post-test");

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="profile" component={Profile} />
      <Route path="send" component={SMSForm} />
      <Route path="test" component={PostTest} />
    </Route>
  </Router>
);