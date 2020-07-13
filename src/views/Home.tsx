import React, { Component } from 'react';
import Portfolio from '../components/PortfolioPreview';
import homeData from '../resources/data/home.json';
import codesandbox from '../resources/images/codesandbox.png';
import '../css/Home.css';
import '../css/App.css';

interface HomeProps {}
interface HomeState {
  isMenuOpen: boolean
}

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  render() {
    return (
      <div className="w3-black" id="main">
        {/* title page */}
        <header className="w3-container w3-center Home-container1" id="home">
          <div className="vertical-center">
            <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Calvin Huang.</h1>
            <p>Full-stack web and desktop app student developer.</p>
          </div>
        </header>

        {/* whoami section */}
        <div className="w3-container w3-justify w3-text-dark-grey w3-padding-large w3-light-grey" id="whoami"
          style={{ height:"400px" }}>
          <div className="w3-content" style={{ marginTop:"64px" }}>
            <div className="w3-bar w3-row-padding">
              <div className="w3-bar-item w3-white w3-card-4 w3-margin-right w3-margin-top w3-margin-bottom w3-padding"
                style={{ width:"65%", height:"100%" }}>
                <h2 className="w3-text-black">whoami</h2>
                <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} />
                <p>{homeData.whoami.text}</p>
              </div>
              <div className="w3-bar-item w3-white w3-card-4 w3-margin-top w3-margin-bottom w3-padding"
                style={{ width: "32%", height:"100%" }}>
                {/* <h2 className="w3-text-black">My Info</h2>
                <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} /> */}
                <p><i className="fa fa-map-marker fa-fw w3-text-teal w3-xxlarge w3-margin-right"></i>
                Cincinnati, OH
                </p>
                <p><i className="fa fa-certificate fa-fw w3-text-teal w3-xxlarge w3-margin-right"></i>
                University of Michigan
                </p>
                <p><i className="fa fa-phone fa-fw w3-text-teal w3-xxlarge w3-margin-right"></i>
                Phone: +01 (513) 693-5266
                </p>
                <p><a href="mailto:calvang@umich.edu">
                  <i className="fa fa-envelope fa-fw w3-text-teal w3-xxlarge w3-margin-right"></i>
                  Email: calvang@umich.edu
                </a></p>
                {/* <p>
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/calvang">
                    <i className="fa fa-github fa-fw w3-xxlarge w3-hover-opacity w3-margin-right"></i>
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/calvin-huang-9385ba165">
                    <i className="fa fa-linkedin-square fa-fw w3-xxlarge w3-hover-opacity w3-margin-right"
                      style={{ color: "steelblue" }}></i>
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" target="_blank" href="https://codesandbox.io/u/calvang">
                  <i className="fa fa-fw w3-xxlargew3-margin-right"></i>
                    <img src={codesandbox} className="w3-hover-opacity" alt="codesandbox"
                      style={{ width:"36px", marginBottom:"11px" }}/>
                  </a>
                </p>
                <p>
                  <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/calvang">
                    <i className="fa fa-codepen fa-fw w3-xxlarge w3-hover-opacity w3-margin-right"></i>
                  </a>
                </p> */}
              </div>
            </div>
          </div> 
        </div>

        {/* skills section */}
        <div className="w3-container w3-justify w3-text-grey w3-padding-large w3-black Home-container2" id="about">
          <div className="w3-content w3-margin-top w3-margin-bottom">
            <h2 className="w3-text-white">My Skills</h2>
            <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid grey" }} />
            {/* skill categories */}
            <p className="w3-wide w3-large">Languages</p>
            <div className="w3-row w3-center w3-section w3-darkest-gray w3-card-4">
              <div className="w3-half w3-section w3-padding">
                <span className="w3-xlarge">Programming/Query</span><br />
                <span className="w3-padding-large">{homeData.skills.languages.programming}</span>
              </div>
              <div className="w3-half w3-section w3-padding">
                <span className="w3-xlarge">Markup</span><br />
                <span className="w3-padding-large">{homeData.skills.languages.markup}</span>
              </div>
            </div>
            <p className="w3-wide w3-large">Frameworks</p>
            <div className="w3-row w3-center w3-section w3-darkest-gray w3-card-4">
              <div className="w3-third w3-section w3-padding">
                <span className="w3-xlarge">Frontend</span><br />
                <span className="w3-padding">{homeData.skills.frameworks.frontend}</span>
              </div>
              <div className="w3-third w3-section w3-padding">
                <span className="w3-xlarge">Backend</span><br />
                <span className="w3-padding">{homeData.skills.frameworks.backend}</span>
              </div>
              <div className="w3-third w3-section w3-padding">
                <span className="w3-xlarge">Databases</span><br />
                <span className="w3-padding">{homeData.skills.frameworks.databases}</span>
              </div>
            </div>
            <p className="w3-wide w3-large">Infrastructures</p>
            <div className="w3-row w3-center w3-section w3-darkest-gray w3-card-4">
              <div className="w3-third w3-section w3-padding">
                <span className="w3-xlarge">Cloud</span><br />
                <span className="w3-padding">{homeData.skills.infrastructures.cloud}</span>
              </div>
              <div className="w3-third w3-section w3-padding">
                <span className="w3-xlarge">Deployment</span><br />
                <span className="w3-padding">{homeData.skills.infrastructures.deployment}</span>
              </div>
              <div className="w3-third w3-section w3-padding">
                <span className="w3-xlarge">Servers</span><br />
                <span className="w3-padding">{homeData.skills.infrastructures.servers}</span>
              </div>
            </div>
            {/* resume link */}
            <a className="w3-button w3-darkest-gray w3-padding-large w3-section"
              href={homeData.resume}>
              <i className="fa fa-download"></i> View Resume
            </a>
          </div>
        </div>
        
        {/* portfolio/project preview section */}
        <div className="w3-container w3-justify w3-text-dark-grey w3-padding-large w3-light-grey" id="portfolio"
          style={{ height:"400px" }}>
          {/* <div className="w3-padding-large w3-content w3-white w3-text-dark-gray" id="photos"> */}
          <div className="w3-content" style={{ marginTop: "64px" }}>
            <h2 className="w3-text-black">Project Showcase</h2>
            <hr style={{ width: "200px" }} className="w3-opacity" />
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
        <footer className="w3-bar w3-content w3-padding-64 w3-text-black">
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
    );
  }
}
