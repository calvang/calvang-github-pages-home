import React, { Component, createRef } from 'react';
import Portfolio from '../components/PortfolioPreview';
import homeData from '../resources/data/home.json';
import codesandbox from '../resources/images/codesandbox.png';
import '../css/Home.css';
import '../css/App.css';

interface HomeProps {}
interface HomeState {
  isMenuOpen: boolean
  sections: any[]
}

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    var refs: any[] = [];
    for (let key in homeData) {
      const newRef: any = createRef();
      console.log("Checking if section", key, "loaded");
      refs.push(newRef)
    }
    this.state = {
      isMenuOpen: false,
      sections: refs
    }
  }

  scrollToRef = (ref: any) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  render() {
    const { sections } = this.state;
    return (
      <>
        <div style={{ verticalAlign:"center" }}>
        {/*DottedScroll on large screens*/}
          <div className="scroll-nav w3-small">
            <div className="w3-black w3-opacity w3-hover-opacity-off w3-center w3-medium">
              {
                sections.map((section, i) => {
                  return (
                    <button key={i} className="w3-button scroll-dot"
                      onClick={() => this.scrollToRef(section)}
                      style={{ }}>
                      <i className="fa fa-circle w3-medium"></i>
                    </button>
                  )
                })
              }
            </div>
          </div> 
        </div>
        <div className="w3-black App-font" id="main">
          {/* title page */}
          <header className="w3-container w3-center Home-container1" id={homeData[0].id} ref={sections[0]}>
            <div className="vertical-center">
              <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Calvin Huang.</h1>
              <p>Full-stack and desktop student developer.</p>
            </div>
          </header>

          {/* whoami section */}
          <div className="w3-container w3-justify w3-text-dark-grey w3-light-grey" id={homeData[1].id} ref={sections[1]}
            style={{ height:"auto" }}>
            <table className="w3-content"
              style={{ marginTop:"64px", marginBottom:"64px", borderCollapse:"separate", borderSpacing:"15px 0" }}>
              <tbody>
                <tr style={{ height: "auto" }}>
                  <td className="w3-rest w3-mobile w3-white w3-card w3-margin-bottom w3-margin-right w3-padding"
                    style={{ height:"100%" }}>
                    <h2 className="w3-text-black">whoami</h2>
                    <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} />
                    <p>{homeData[1].text}</p>
                  </td>
                  <td className="w3-mobile w3-white w3-card w3-padding"
                    style={{ width: "270px", verticalAlign:"top" }}>
                    {/* <h2 className="w3-text-black">My Info</h2>
                    <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} /> */}
                    <p><a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Cincinnati,+OH/"
                      className="plain-link">
                      <i className="fa fa-map-marker fa-fw w3-text-darkest-teal w3-xxlarge w3-hover-opacity w3-margin-right"
                        style={{ position:"relative", top:"8px" }}></i>
                      <b className="w3-hover-opacity">Cincinnati, OH</b>
                    </a></p>
                    <p><a rel="noopener noreferrer" target="_blank" href="https://www.umich.edu"
                      className="plain-link">
                      <i className="fa fa-graduation-cap fa-fw w3-text-darkest-teal w3-xxlarge w3-hover-opacity w3-margin-right"
                        style={{ position:"relative", top:"8px" }}></i>
                      <b className="w3-hover-opacity">University of Michigan</b>
                    </a></p>
                    <p><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/calvin-huang-9385ba165"
                      className="plain-link">
                      <i className="fa fa-linkedin-square fa-fw w3-text-darkest-teal w3-xxlarge w3-hover-opacity w3-margin-right"
                        style={{ position:"relative", top:"8px" }}></i>
                      <b className="w3-hover-opacity">LinkedIn</b>
                    </a></p>
                  </td>
                </tr>
              </tbody>
            </table> 
          </div>

          {/* skills section */}
          <div className="w3-container w3-justify w3-text-grey w3-padding-large w3-black Home-container2" id={homeData[2].id} ref={sections[2]}>
            <table className="w3-content"
              style={{ marginTop:"64px", marginBottom:"64px", borderCollapse:"separate", borderSpacing:"15px 0" }}>
              <tbody>
                <tr>
                  <td>
                    <h2 className="w3-text-white">My Skills</h2>
                    <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid grey" }} />
                    {/* skill categories */}
                    <p className="w3-wide w3-large">Languages</p>
                    <div className="w3-row w3-mobile w3-center w3-section w3-darkest-gray w3-card-4">
                      <div className="w3-half w3-section w3-padding">
                        <span className="w3-xlarge">Programming/Query</span><br />
                        <span className="w3-padding-large">{homeData[2].data?.languages.programming}</span>
                      </div>
                      <div className="w3-half w3-section w3-padding">
                        <span className="w3-xlarge">Markup</span><br />
                        <span className="w3-padding-large">{homeData[2].data?.languages.markup}</span>
                      </div>
                    </div>
                    <p className="w3-wide w3-large">Frameworks</p>
                    <div className="w3-row w3-mobile w3-center w3-section w3-darkest-gray w3-card-4">
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">Frontend</span><br />
                        <span className="w3-padding">{homeData[2].data?.frameworks.frontend}</span>
                      </div>
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">Backend</span><br />
                        <span className="w3-padding">{homeData[2].data?.frameworks.backend}</span>
                      </div>
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">Databases</span><br />
                        <span className="w3-padding">{homeData[2].data?.frameworks.databases}</span>
                      </div>
                    </div>
                    <p className="w3-wide w3-large">Infrastructures</p>
                    <div className="w3-row w3-mobile w3-center w3-section w3-darkest-gray w3-card-4">
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">Cloud</span><br />
                        <span className="w3-padding">{homeData[2].data?.infrastructures.cloud}</span>
                      </div>
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">Deployment</span><br />
                        <span className="w3-padding">{homeData[2].data?.infrastructures.deployment}</span>
                      </div>
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">Servers</span><br />
                        <span className="w3-padding">{homeData[2].data?.infrastructures.servers}</span>
                      </div>
                    </div>
                    {/* resume link */}
                    <a rel="noopener noreferrer" target="_blank" href={homeData[2].resume}
                      className="w3-button w3-darkest-gray w3-padding-large w3-section">
                      <i className="fa fa-download"></i> View Resume
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* portfolio/project preview section */}
          <div className="w3-container w3-justify w3-text-dark-grey w3-padding-large w3-light-gray" id="portfolio" ref={sections[3]}
            style={{ height:"auto" }}>
            {/* <div className="w3-padding-large w3-content w3-white w3-text-dark-gray" id="photos"> */}
            <div className="w3-content w3-white w3-card w3-padding" style={{ marginTop:"64px", marginBottom:"64px" }}>
              <h2 className="w3-text-black">Project Showcase</h2>
              <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} />
              <Portfolio />
            </div>
          </div>


          <div className="w3-padding-large w3-content w3-text-grey" id="contact">
            <h2 className="w3-text-light-grey">Contact Me</h2>
            <hr style={{ width: "200px" }} className="w3-opacity" />

            <div className="w3-section">
              <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Chicago, US</p>
              <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
              <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
            </div><br />
            <p>Let's get in touch. Send me a message:</p>

            <form action="/action_page.php" target="_blank">
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p>
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p>
              <p>
                <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                  <i className="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
              </p>
            </form>

          </div>
          {/* media icons */}
          <footer className="w3-bar w3-container w3-content w3-white w3-card w3-text-black">
              <div className="w3-bar-item" style={{ width:"46px" }}>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/calvang">
                  <i className="fa fa-github w3-xxlarge w3-hover-opacity"></i>
                </a>
              </div>
              <div className="w3-bar-item" style={{ width:"44px" }}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/calvin-huang-9385ba165">
                  <i className="fa fa-linkedin-square w3-xxlarge w3-hover-opacity"
                    style={{ color: "steelblue" }}></i>
                </a>
              </div>
              <div className="w3-bar-item" style={{ width:"50px" }}>
                <a rel="noopener noreferrer" target="_blank" href="https://codesandbox.io/u/calvang">
                  <img src={codesandbox} className="w3-hover-opacity" alt="codesandbox"
                    style={{ width:"36px", marginBottom:"11px" }}/>
                </a>
              </div>
              <div className="w3-bar-item" style={{ width:"50px" }}>
                <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/calvang">
                  <i className="fa fa-codepen w3-xxlarge w3-hover-opacity"></i>
                </a>
              </div>
            </footer>
        </div>
      </>
    );
  }
}
