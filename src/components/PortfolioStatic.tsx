import React, { Component } from 'react';
import codesandbox from '../resources/images/codesandbox.png';
import '../css/Projects.css';
import '../css/Home.css';
import '../css/App.css';
import projectData from '../resources/data/projects.json';

interface PortfolioStaticProps {}
interface PortfolioStaticState {
  projects: any[],
}

export default class PortfolioStatic extends Component<PortfolioStaticProps, PortfolioStaticState> {
  constructor(props: PortfolioStaticProps) {
    super(props);
    this.state = {
      projects: projectData.projects,
    };
  }
  
  render() {
    const { projects } = this.state;
    var projectProfiles: string[] = [];
    var imageStatuses: boolean[] = []
    for (let project in projects) {
      if (projects[project].image) {
        const imagePath = process.env.PUBLIC_URL + "/project_profiles/" + projects[project].image;
        //console.log(imagePath)
        projectProfiles.push(imagePath);
        imageStatuses.push(true);
      } else {
        projectProfiles.push("");
        imageStatuses.push(false);
      }
    }

    return (

        <div className="w3-text-dark-grey"
          style={{ height:"auto" }}>
          <table className="w3-content w3-hide-small w3-hide-medium"
            style={{ marginTop:"-40px", marginBottom:"20px", borderCollapse:"separate", borderSpacing:"32px 64px" }}>
            <tbody>
              {
                projects.map((project, i) => {
                  return (
                    <tr key={project.name} style={{ height: "auto" }}>
                      <td className="w3-white w3-card w3-padding-large" colSpan={ imageStatuses[i] ?  1 : 2 }
                        style={{ height: "100%" }}>
                        <h3 className="w3-text-black">{project.name}</h3>
                        <hr className="w3-opacity" style={{ width: "33%", borderTop: "1px solid black" }} />
                        <p className="w3-padding-bottom ">
                          {project.text}
                        </p>
                        <div className="" style={{}}>
                          {
                            'github' in project.links &&
                            <a rel="noopener noreferrer" target="_blank" href={project.links.github}>
                              <i className="fa fa-github w3-xxlarge w3-hover-opacity"></i>
                            </a>
                          }
                          {
                            'codesandbox' in project.links &&
                            <a rel="noopener noreferrer" target="_blank" href={project.links.codesandbox}>
                              <img src={codesandbox} className="w3-hover-opacity" alt="codesandbox"
                                style={{ width: "36px", marginBottom: "18px", marginLeft: "5px" }} />
                            </a>
                          }
                          {
                            'codepen' in project.links &&
                            <a rel="noopener noreferrer" target="_blank" href={project.links.codepen}>
                              <i className="fa fa-codepen w3-xxlarge w3-hover-opacity" style={{ marginLeft: "6px" }}></i>
                            </a>
                          }
                          {
                            'url' in project &&
                            <a className="plain-link" rel="noopener noreferrer" target="_blank" href={project.url}
                              style={{ marginLeft: "20px", fontSize: 18 }}>
                              <span style={{ bottom: "6px", position: "relative" }}>View project</span>
                              <i className="fa fa-angle-double-right w3-xxlarge w3-hover-opacity"
                                style={{ marginLeft: "6px" }}></i>
                            </a>
                          }
                        </div>
                      </td>
                      {
                        'image' in project &&
                        <td className="w3-white w3-card picture-frame w3-hide-small"
                          style={{ width: "50%", height: "100%", backgroundImage: `url(${projectProfiles[i]})` }}
                          onClick={() => window.location.href=project.url}>
                        </td>
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
          {/* for mobile devices and medium screens */}
          <table className="w3-content w3-hide-large"
            style={{ marginTop:"-40px", marginBottom:"20px", borderCollapse:"separate", borderSpacing:"0px 20px" }}>
            <tbody>
              {
                projects.map((project, i) => {
                  return (
                    <tr key={project.name} style={{ height: "auto" }}>
                      <td className="w3-white w3-card w3-padding-large"
                        style={{ height: "100%"  }}>
                        <h3 className="w3-text-black">{project.name}</h3>
                        <hr className="w3-opacity" style={{ width: "100%", borderTop: "1px solid black" }} />
                        {
                          'image' in project &&
                          <>{'url' in project ?
                            <a rel="noopener noreferrer" target="_blank" href={project.url}>
                              <img style={{ width:"100%" }} src={projectProfiles[i]} alt="project preview" />
                            </a>
                            : <img style={{ width:"100%" }} src={projectProfiles[i]} alt="project preview" />
                          }</>
                        }
                        <p className="w3-padding-bottom ">
                          {project.text}
                        </p>
                        <div className="" style={{}}>
                          {
                            'github' in project.links &&
                            <a rel="noopener noreferrer" target="_blank" href={project.links.github}>
                              <i className="fa fa-github w3-xxlarge w3-hover-opacity"></i>
                            </a>
                          }
                          {
                            'codesandbox' in project.links &&
                            <a rel="noopener noreferrer" target="_blank" href={project.links.codesandbox}>
                              <img src={codesandbox} className="w3-hover-opacity" alt="codesandbox"
                                style={{ width: "36px", marginBottom: "18px", marginLeft: "5px" }} />
                            </a>
                          }
                          {
                            'codepen' in project.links &&
                            <a rel="noopener noreferrer" target="_blank" href={project.links.codepen}>
                              <i className="fa fa-codepen w3-xxlarge w3-hover-opacity" style={{ marginLeft: "6px" }}></i>
                            </a>
                          }
                        </div>
                        {
                          'url' in project &&
                          <div>
                            <a className="plain-link" rel="noopener noreferrer" target="_blank" href={project.url}
                              style={{ fontSize: 18 }}>
                              <span style={{ bottom: "6px", position: "relative" }}>View project</span>
                              <i className="fa fa-angle-double-right w3-xxlarge w3-hover-opacity"
                                style={{ marginLeft: "6px" }}></i>
                            </a>
                          </div>
                        }
                      </td>
                    </tr>
                  )

                })
              }
            </tbody>
          </table>     
        </div>
    );
  }
}
