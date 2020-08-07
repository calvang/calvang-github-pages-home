import React, { Component } from 'react';
import Portfolio from '../components/PortfolioStatic';
import '../css/Projects.css';
import '../css/Home.css';
import '../css/App.css';

export default class Project extends Component {
  render() {
    return (
      <div className="App-font w3-container Project-container parallax-scroll" id="main">
        {/* title page */}
        <header className="w3-content w3-center">
          <div className="vertical-center">
            <h1 className="w3-jumbo"><span className="w3-hide-small">My</span> Projects</h1>
          </div>
        </header>
        <Portfolio />
      </div>
    );
  }
}
