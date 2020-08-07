import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Blog from '../views/Blog/Blog';
import Post from '../views/Blog/Post';
import PrivacyPolicy from '../views/Blog/PrivacyPolicy';
import TerminalDemo from '../views/TerminalDemo';
import Settings from '../components/Settings';
import blogData from '../resources/data/blog.json';
import '../css/App.css';

interface RoutesProps {};
interface RoutesState {
  isTermOpen: boolean;
}

export default class Routes extends Component<RoutesProps, RoutesState> {
  constructor(props: RoutesProps) {
    super(props);
    this.state = {
      isTermOpen: false
    };
    this.openTerm = this.openTerm.bind(this);
  }

  openTerm = () => {
    console.log("Routes terminal update")
    this.setState({ isTermOpen: true });
  }

  toggleTerm= () => {
    const { isTermOpen } = this.state;
    isTermOpen ? this.setState({ isTermOpen: false }) 
      : this.setState({ isTermOpen: true });
  }

  render() {
    const { isTermOpen } = this.state; 
    const posts = blogData.posts;
    var { openTerm, toggleTerm } = this;
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
          <Route exact path='/Blog/Privacy-Policy' component={PrivacyPolicy}></Route>
          <Route exact path='/Terminal-Demo' render={(props: any) => <TerminalDemo {...props} openTerm={openTerm.bind(this)} />}></Route>
          <Route path='/404' component={NoMatch}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
        <Settings isTermOpen={isTermOpen} toggleTerm={toggleTerm.bind(this)}/>
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