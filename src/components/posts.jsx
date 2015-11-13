var React = require("react");

var $ = require("jquery");

var PostTest = require("./post-test");

var Post = require("./post");

module.exports = React.createClass({

  getInitialState(){
    return {
      posts: []
    }
  },

  render() {
    return (<div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2 col-xs-8 col-xs-offset-2 text-center">
            <h1>
              SMS Blog
            </h1>
            <h3>A true "micro" blog</h3>
            <hr />
            <h3>
              Send a text to <strong><a href="tel:+16305341237">1-630-534-1237</a></strong> with your name and the post title in brackets ([]) followed by your post content!
            </h3>
            <h3>
              Example: "[Sarah/Hello] Hello, my name is Sarah!"
            </h3>
            <br />
            <h4>Or try it here in the browser:</h4>
            <p><strong style={{color: 'red'}}>(Note: Currently only verified numbers are enabled with Twilio. Please submit with browser for now.</strong></p>
              <PostTest />
            <br />
            <p>
              <strong>Tip</strong>: You can keep adding to the same posts by using the same name and title! Just copy and paste the bracketed part each time.
            </p>
          </div>
        </div>
      </div>
      <div className="dark-background">
        <div className="container light-on-dark">
          { this.renderPosts() }
        </div>
      </div>
    </div>)
  },

  renderPosts(){
    return this.state.posts.slice(0,20).map(function(post){
      return <Post key={post._id} {...post} />
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