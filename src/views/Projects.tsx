import React, { Component } from 'react';
import '../css/Home.css';
import '../css/App.css';

interface ProjectProps {}
interface ProjectState {
  projects: any[],
  url: string
}

export default class Project extends Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);
    this.state = {
      projects: [],
      url: "/api/projects"
    };
  }

  componentDidMount() {
    const { url } = this.state;
    fetch(url, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw Error (response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          projects: data.projects
        })
      })
      .catch((error) => console.log(error));
  }
  
  render() {
    const { projects } = this.state;
    return (
      <div className="w3-black App-font" id="main">
        {/* title page */}
        <header className="w3-container w3-center Home-container1 parallax-scroll">
          <div className="vertical-center">
            <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Calvin Huang.</h1>
            <p>Full-stack and desktop student developer.</p>
          </div>
        </header>

        {/* whoami section */}
        <div className="w3-container w3-justify w3-text-dark-grey w3-light-grey"
          style={{ height:"auto" }}>
          <table className="w3-content"
            style={{ marginTop:"64px", marginBottom:"64px", borderCollapse:"separate", borderSpacing:"15px 0" }}>
            <tbody>
              {
                projects.map((project, i) => {
                  return (
                    <tr style={{ height: "auto" }}>
                      <td className="w3-rest w3-mobile w3-white w3-card w3-margin-bottom w3-margin-right w3-padding"
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
        </div>
      </div>
    );
  }
}
