/* Dynamic implementation of Portfolio */

import React, { Component } from 'react';
import codesandbox from '../resources/images/codesandbox.png';
import '../css/Projects.css';
import '../css/Home.css';
import '../css/App.css';
import api from '../api.json';

interface PortfolioProps {}
interface PortfolioState {
  projects: any[],
  url: string
}

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
  constructor(props: PortfolioProps) {
    super(props);
    this.state = {
      projects: [],
      url: api.url + "projects"
    };
  }

  componentDidMount() {
    const { url } = this.state;
    //const headers = {}
    fetch(url, { credentials: 'omit' })
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText);
          throw Error(response.statusText);
        }
        let response_json = response.json();
        console.log(response.json);
        return response_json;
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
    var projectProfiles: string[] = [];
    for (let project in projects) {
      if (projects[project].image) {
        const imagePath = process.env.PUBLIC_URL + "/project_profiles/" + projects[project].image;
        console.log(imagePath)
        projectProfiles.push(imagePath);
      }
    }

    return (

        <div className="w3-justify w3-text-dark-grey"
          style={{ height:"auto" }}>
          <table className="w3-content"
            style={{ marginTop:"-40px", marginBottom:"20px", borderCollapse:"separate", borderSpacing:"32px 64px" }}>
            <tbody>
              {
                projects.map((project, i) => {
                  return (
                    <tr key={project.name} style={{ height: "auto" }}>
                      <td className="w3-white w3-card w3-padding-large w3-hide-small"
                        style={{ height: "100%"/*, backgroundImage: `url(${projectProfiles[i]})`*/ }}>
                        {/* <div style={{ display:"inline-block" }}> */}
                        {/* <div style={{ position:"relative"}}> */}
                        <h3 className="w3-text-black">{project.name}</h3>
                        <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} />
                        <p className="w3-padding-bottom ">
                          {project.text}
                          </p>
                        {/* </div> */}
                        {/* {
                          
                          'image' in project &&
                          <img className="shaped" src={process.env.PUBLIC_URL + "/project_profiles/" + project.image} alt="project preview" />
                            
                          } */}
                        {/* </div> */}
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
                          <a className="plain-link" rel="noopener noreferrer" target="_blank" href={project.url}
                            style={{ marginLeft: "20px", fontSize: 18 }}>
                            <span style={{ bottom: "6px", position: "relative" }}>View project</span>
                            <i className="fa fa-angle-double-right w3-xxlarge w3-hover-opacity"
                              style={{ marginLeft: "6px" }}></i>
                          </a>
                        </div>
                      </td>
                      <td className="w3-rest w3-white w3-card picture-frame w3-hide-small"
                        style={{ width:"50%", height:"100%", backgroundImage: `url(${projectProfiles[i]})` }}>
                        
                      {/* {
                          
                          'image' in project &&
                          <img className="shaped" src={process.env.PUBLIC_URL + "/project_profiles/" + project.image} alt="project preview" />
                            
                          } */}
                      </td>
                      <td className="w3-white w3-card w3-padding-large w3-hide-large w3-hide-medium"
                        style={{ height: "100%"/*, backgroundImage: `url(${projectProfiles[i]})`*/ }}>
                        {/* <div style={{ display:"inline-block" }}> */}
                        {/* <div style={{ position:"relative"}}> */}
                        <h3 className="w3-text-black">{project.name}</h3>
                        <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} />
                        {
                          'image' in project &&
                          <img style={{ width:"100%" }} src={projectProfiles[i]} alt="project preview" />
                        }
                        <p className="w3-padding-bottom ">
                          {project.text}
                          </p>
                        {/* </div> */}
                        {/* {
                          
                          'image' in project &&
                          <img className="shaped" src={process.env.PUBLIC_URL + "/project_profiles/" + project.image} alt="project preview" />
                            
                          } */}
                        {/* </div> */}
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
                          <a className="plain-link" rel="noopener noreferrer" target="_blank" href={project.url}
                            style={{ marginLeft: "20px", fontSize: 18 }}>
                            <span style={{ bottom: "6px", position: "relative" }}>View project</span>
                            <i className="fa fa-angle-double-right w3-xxlarge w3-hover-opacity"
                              style={{ marginLeft: "6px" }}></i>
                          </a>
                        </div>
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
