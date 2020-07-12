import React, { Component } from 'react';
import Portfolio from '../components/PortfolioPreview';
import homeData from '../resources/data/home.json';
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

  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    isMenuOpen ? this.setState({ isMenuOpen: false }) 
    : this.setState({ isMenuOpen: true });
  }

  render() {
    return (
      <div className="w3-black" id="main">
        <header className="w3-container w3-center Home-container1" id="home">
          <div className="vertical-center">
            <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Calvin Huang.</h1>
            <p>Full-stack web and desktop app student developer.</p>
          </div>
        </header>

        <div className="w3-content w3-justify w3-text-grey w3-padding-large" id="about">
          <h2 className="w3-text-light-grey">whoami</h2>
          <hr className="w3-opacity" style={{ width: "200px" }} />
          <p>{homeData.whoami.text}</p>
          <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
          <p className="w3-wide w3-large">Languages</p>
          {/* <hr /> */}
          <div className="w3-row w3-center w3-section w3-light-grey">
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
          <div className="w3-row w3-center w3-section w3-light-grey">
            <div className="w3-third w3-section w3-padding-large">
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
          <div className="w3-row w3-center w3-section w3-light-grey">
            <div className="w3-third w3-section w3-padding-large">
              <span className="w3-xlarge">Cloud</span><br />
              <span className="w3-padding">{homeData.skills.infrastructures.cloud}</span>
            </div>
            <div className="w3-third w3-section w3-padding">
              <span className="w3-xlarge">Application Deployment</span><br />
              <span className="w3-padding">{homeData.skills.infrastructures.deployment}</span>
            </div>
            <div className="w3-third w3-section w3-padding">
              <span className="w3-xlarge">Servers</span><br />
              <span className="w3-padding">{homeData.skills.infrastructures.servers}</span>
            </div>
          </div>

          <button className="w3-button w3-light-grey w3-padding-large w3-section">
            <i className="fa fa-download"></i> View Resume
          </button>
        
        </div>
        
        {/* <!-- Portfolio Section --> */}
        <div className="w3-padding-large w3-content" id="photos">
          <h2 className="w3-text-light-grey">My Photos</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />

          {/* <!-- Grid for Projects --> */}
          <Portfolio />
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

      </div>
    );
  }
}
