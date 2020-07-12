import React, { Component } from 'react';
import ProjectData from '../resources/data/projects.json';
import '../css/App.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-half">
          <img src="/w3images/wedding.jpg" style={{ width: "100%" }} alt="img" />
          <img src="/w3images/rocks.jpg" style={{ width: "100%" }} alt="img" />
          <img src="/w3images/sailboat.jpg" style={{ width: "100%" }} alt="img" />
        </div>

        <div className="w3-half">
          <img src="/w3images/underwater.jpg" style={{ width: "100%" }} alt="img" />
          <img src="/w3images/chef.jpg" style={{ width: "100%" }} alt="img" />
          <img src="/w3images/wedding.jpg" style={{ width: "100%" }} alt="img" />
          <img src="/w3images/p6.jpg" style={{ width: "100%" }} alt="img" />
        </div>
      </div>
    );
  }
}
