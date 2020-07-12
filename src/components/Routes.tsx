import React, { Component } from 'react';
import Home from '../views/Home';
//import About from '../views/About';
import Projects from '../views/Projects';
//import Contact from '../views/Contact';
import { Switch, Route, HashRouter } from 'react-router-dom';
import '../css/App.css';

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Projects' component={Projects}></Route>
        </Switch>
      </HashRouter>
    );
  }
}
