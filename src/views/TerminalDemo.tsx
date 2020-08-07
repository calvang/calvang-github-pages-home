import React, { Component } from 'react';
import '../css/Projects.css';
import '../css/Home.css';
import '../css/App.css';

interface DemoProps {
  openTerm: any;
}

export default class TerminalDemo extends Component<DemoProps, any> {
  constructor(props: DemoProps) {
    super(props);
    props.openTerm();
  }

  render() {
    const height = Math.ceil(window.innerHeight * 1.2);
    return (
      <div className="App-font Contact-container parallax-scroll" id="main"
        style={{ height: `${height}px` }}>
        {/* title page */}
        <header className="w3-content w3-center">
          <div style={{paddingTop: "6%"}}>
            <h1 className="w3-jumbo"><span className="w3-hide-small">Integrated Website</span> Terminal</h1>
      
              <h2 className="w3-xlarge">Features:</h2>
              <ul style={{ width: "70%", maxWidth: "450px", margin: "auto", textAlign: "left"}}>
                <li>Resizable and draggable similar to a desktop application</li>
                <li>Automatic detection of system configuration</li>
                <li>Website DOM navigation and sitemap display</li>
                <li>Toggable via an access button on the bottom right corner</li>
                <li>A few fun easter eggs and one not so fun one...</li>
              </ul><br />
            <b>
              Enter the 'help' command to get started.
            </b>
          </div>
        </header>
      </div>
    );
  }
}