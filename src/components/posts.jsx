var React = require("react");

var $ = require("jquery");

module.exports = React.createClass({

  getInitialState(){
    return {
      posts: []
    }
  },

  render() {
    return (<div>
      { this.renderPosts() }
    </div>)
  },

  renderPosts(){
    return this.state.posts.slice(0,20).map(function(post){
      return <div key={post._id}
        className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>{post.title}</h3>
          </div>
          <div className="panel-body">
            <p>Author: {post.author}</p>
            <p>Content: {post.body}</p>
          </div>
        </div>
      </div>
    })
  },

  componentDidMount(){

    $.get("/posts", function(results){
      this.setState({
        posts: results
      })
    }.bind(this));

    this.props.socket.on("new post", function(post){
      this.state.posts.push(post);
      this.setState({
        posts: this.state.posts
      });
    }.bind(this));

    this.props.socket.on("post updated", function(post){

      for (var i = 0; i < this.state.posts.length; i++){
        if(this.state.posts[i]._id == post._id){
          this.state.posts[i] = post;
          this.setState({
            posts: this.state.posts
          });
          break;
        }
      }

    }.bind(this))
    
  }
})