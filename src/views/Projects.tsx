import React, { Component } from 'react';
import Portfolio from '../components/Portfolio';
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
        {/* whoami section
        <div className="w3-justify w3-text-dark-grey"
          style={{ height:"auto" }}>
          <table className="w3-content"
            style={{ marginTop:"-20px", marginBottom:"20px", borderCollapse:"separate", borderSpacing:"15px 64px" }}>
            <tbody>
              {
                projects.map((project, i) => {
                  return (
                    <tr key={project.name} style={{ height: "auto" }}>
                      <td className="w3-rest w3-mobile w3-light-grey w3-card w3-margin-bottom"
                        style={{ height:"100%" }}>
                        <h3 className="w3-text-black">{project.name}</h3>
                        <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} />
                        {project.text}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
        </div> */}
      </div>
    );
  }
}
