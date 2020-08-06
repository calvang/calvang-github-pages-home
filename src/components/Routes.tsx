import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Blog from '../views/Blog/Blog';
import Post from '../views/Blog/Post';
import Settings from '../components/Settings';
import blogData from '../resources/data/blog.json';
import '../css/App.css';

export default class Routes extends Component {
  render() {
    const posts = blogData.posts;
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' render={(props: any) => <Home {...props} startRef={0} />}></Route>
          <Route exact path='/Contact' render={(props: any) => <Home {...props} startRef={4} />}></Route>
          <Route exact path='/Projects' component={Projects}></Route>
          <Route exact path='/Blog' component={Blog}></Route>
          <Route exact path='/Contacts' render={(props: any) => <Home {...props} startRef={4} />}></Route>
          {posts.map((post, i) => 
            <Route key={i} exact path={`/Blog/${post.file.slice(0,-3)}`}
              render={(props: any) => <Post {...props} index={i} />} >
            </Route>
          )}
          <Route path='/404' component={NoMatch}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
        <Settings />
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
            <h1 className="w3-jumbo"><span>404 - Page Not Found</span></h1>
          </div>
        </header>
    </div>
  )
}