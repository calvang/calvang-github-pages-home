import React, { Component } from 'react';
import Home from '../views/Home';
//import About from '../views/About';
import Projects from '../views/Projects';
import Blog from '../views/Blog';
import Post from '../views/Post';
//import Contact from '../views/Contact';
import { Switch, Route, HashRouter } from 'react-router-dom';
import blogData from '../resources/data/blog.json';
import '../css/App.css';

export default class Routes extends Component {
  render() {
    const posts = blogData.posts;
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Projects' component={Projects}></Route>
          <Route exact path='/Blog' component={Blog}></Route>
          {posts.map((post, i) => 
            <Route exact path={`/posts/${posts.length - i}`}
              render={(props: any) => <Post {...props} index={i} />} >
            </Route>
          )}
          <Route path='/404' component={NoMatch}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

function NoMatch() {
  return (
    <div className="App-font w3-container Project-container" id="main">
        {/* title page */}
        <header className="w3-content w3-center">
          <div className="vertical-center">
            <h1 className="w3-jumbo"><span className="w3-hide-small">404 - Page Not Found</span></h1>
          </div>
        </header>
    </div>
  )
}