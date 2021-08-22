import React, {Component, createRef } from 'react';
import Portfolio from '../components/PortfolioStatic';
import ContactForm from '../components/ContactForm';
import homeData from '../resources/data/home.json';
import '../css/App.css';

interface HomeProps {
  startRef: number;
}
interface HomeState {
  isMenuOpen: boolean,
  autoscroll: boolean,
  sections: any[],
  currentSection: number,
  scrollPeriod: number,
  timeouts: any[]
  //url: string,
  //homeData: any[]
}

var timeouts: any[];

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    var refs: any[] = [];
    console.groupCollapsed();
    for (let key in homeData) {
      const newRef: any = createRef();
      console.log("Checking if section", key, "loaded");
      refs.push(newRef)
    }
    console.groupEnd()
    this.state = {
      isMenuOpen: false,
      autoscroll: false,
      sections: refs,
      currentSection: props.startRef,
      scrollPeriod: 10000,
      timeouts: []
      // ***FOR DYNAMIC IMPLEMENTATION***
      //url: '/api/',
      //homeData: []
    }
    timeouts = []
  }

  scrollToRef = (ref: any, section: number) => {
    const { currentSection } = this.state;
    if (currentSection !== section) {
      this.setState({ currentSection: section });
    }
    window.scrollTo(0, ref.current.offsetTop)
  }

  autoscrollSections = () => {
    const { autoscroll, sections, currentSection, scrollPeriod, timeouts } = this.state;
    let section = currentSection;
    if (currentSection < homeData.length - 1)
      section = currentSection + 1;
    else
      section = 0
    this.scrollToRef(sections[section], section);
    var timeout1 = timeouts.push(setTimeout(() => {
      if (autoscroll) {
        if (section > 1) {
          var timeout2 = setTimeout(() => {
            this.autoscrollSections();
          }, scrollPeriod * 2);
          this.setState({
            timeouts: [...timeouts, timeout2]
          });
        }
        else
          this.autoscrollSections();
      }
    }, scrollPeriod));
    this.setState({
      timeouts: [...timeouts, timeout1]
    });
  }

  // ***FOR DYNAMIC IMPLEMENTATION***
  // retrieveData() {
    // const { url } = this.state;
    // fetch(url, { credentials: 'same-origin' })
    //   .then((response) => {
    //     if (!response.ok) throw Error (response.statusText);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     var refs: any[] = [];
    //     for (let key in data.sections) {
    //       const newRef: any = createRef();
    //       console.log("Checking if section", key, "loaded");
    //       refs.push(newRef)
    //     }
    //     this.setState({
    //       homeData: data.sections,
    //       sections: refs
    //     })
    //     console.log(data.sections)
    //   })
    //   .catch((error) => console.log(error));
  // }

  componentDidMount() {
    const { startRef } = this.props;
    const { autoscroll, sections, scrollPeriod } = this.state;
    //console.log(window.innerWidth)
    if (window.innerWidth < 601)
      this.setState({ autoscroll: false });
    this.scrollToRef(sections[startRef], startRef);

    var timeout3 = setTimeout(() => {
      //console.log(autoscroll)
      if (autoscroll)
        this.autoscrollSections();
    }, scrollPeriod);
    this.setState({
      timeouts: [...timeouts, timeout3]
    });
  }

  componentDidUpdate() {
    const { startRef } = this.props;
    const { sections } = this.state;
    this.scrollToRef(sections[startRef], startRef);
  }

  componentWillUnmount() {
    const { timeouts } = this.state;
    while (timeouts.length) {
      clearTimeout(timeouts.pop())
    }
  }

  render() {
    const { sections } = this.state;
    return (
      <>
        <div style={{ verticalAlign:"center" }}>
        {/*dotted scroll on large screens*/}
          <div className="scroll-nav w3-small">
            <div className="w3-black w3-opacity w3-hover-opacity-off w3-center">
              {
                sections.map((section, i) => {
                  return (
                    <button key={i} className="w3-button scroll-dot"
                      onClick={() => this.scrollToRef(section, i)}
                      style={{ }}>
                      <i className="fa fa-circle"></i>
                    </button>
                  )
                })
              }
            </div>
          </div> 
        </div>
        <div className="w3-black App-font" id="main">
          {/* title page */}
          <header className="w3-container w3-center Home-container1 parallax-scroll" ref={sections[0]}>
            <div className="vertical-center">
              <img className="" alt="profile" src={process.env.PUBLIC_URL + "/profile/1604274360183.jpeg"}
                style={{ width: "200px", borderRadius: "50%", border: "5px solid white" }}/>
              <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Calvin Huang.</h1>
              <p>{homeData[0].text}</p>
            </div>
          </header>

          {/* whoami section */}
          <div className="w3-container w3-text-dark-grey w3-light-grey" ref={sections[1]}
            style={{ height:"auto" }}>
            <table className="w3-content"
              style={{ marginTop:"64px", marginBottom:"64px", borderCollapse:"separate", borderSpacing:"15px 0" }}>
              <tbody>
                <tr style={{ height: "auto" }}>
                  <td className="w3-rest w3-mobile w3-white w3-card w3-margin-bottom w3-margin-right w3-padding"
                    style={{ height:"100%" }}>
                    <h2 className="w3-text-black">whoami</h2>
                    <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} />
                    {
                      (homeData[1].text as string[]).map((paragraph, i) => {
                        return (
                          <p key={i}>{paragraph}</p>
                        )
                      })
                    }
                  </td>
                  <td className="w3-mobile w3-white w3-card w3-padding"
                    style={{ width: "270px", verticalAlign:"top" }}>
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
                        style={{ position:"relative", top:"8px", paddingBottom: "16px"}}></i>
                      <b className="w3-hover-opacity">LinkedIn</b>
                    </a></p>
                  </td>
                </tr>
              </tbody>
            </table> 
          </div>

          {/* skills section */}
          <div className="w3-container w3-justify w3-text-light-grey w3-padding-large w3-black Home-container2 parallax-scroll"
            id={homeData[2].id} ref={sections[2]}>
            <table className="w3-content"
              style={{ marginTop:"64px", marginBottom:"64px", borderCollapse:"separate", borderSpacing:"15px 0" }}>
              <tbody>
                <tr>
                  <td>
                    <h2 className="w3-text-white">My Skills</h2>
                    <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid grey" }} />
                    {/* skill categories */}
                    <p className="w3-wide w3-large">Languages</p>
                    <div className="w3-row w3-mobile w3-center w3-section w3-light-gray w3-card-4">
                      <div className="w3-half w3-section w3-padding">
                        <span className="w3-xlarge">{homeData[2].data?.languages[0].title}</span><br />
                        <span className="w3-padding-large">{homeData[2].data?.languages[0].content}</span>
                      </div>
                      <div className="w3-half w3-section w3-padding">
                        <span className="w3-xlarge">{homeData[2].data?.languages[1].title}</span><br />
                        <span className="w3-padding-large">{homeData[2].data?.languages[1].content}</span>
                      </div>
                    </div>

                    <p className="w3-wide w3-large">Frameworks</p>
                    <div className="w3-row w3-mobile w3-center w3-section w3-light-gray w3-card-4">
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">{homeData[2].data?.frameworks[0].title}</span><br />
                        <span className="w3-padding">{homeData[2].data?.frameworks[0].content}</span>
                      </div>
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">{homeData[2].data?.frameworks[1].title}</span><br />
                        <span className="w3-padding">{homeData[2].data?.frameworks[1].content}</span>
                      </div>
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">{homeData[2].data?.frameworks[2].title}</span><br />
                        <span className="w3-padding">{homeData[2].data?.frameworks[2].content}</span>
                      </div>
                    </div>

                    <p className="w3-wide w3-large">Infrastructures</p>
                    <div className="w3-row w3-mobile w3-center w3-section w3-light-gray w3-card-4">
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">{homeData[2].data?.infrastructures[0].title}</span><br />
                        <span className="w3-padding">{homeData[2].data?.infrastructures[0].content}</span>
                      </div>
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">{homeData[2].data?.infrastructures[1].title}</span><br />
                        <span className="w3-padding">{homeData[2].data?.infrastructures[1].content}</span>
                      </div>
                      <div className="w3-third w3-section w3-padding">
                        <span className="w3-xlarge">{homeData[2].data?.infrastructures[2].title}</span><br />
                        <span className="w3-padding">{homeData[2].data?.infrastructures[2].content}</span>
                      </div>
                    </div>

                    <p className="w3-wide w3-large">Certifications</p>
                    <div className="w3-row w3-mobile w3-center w3-section">
                      <div className="">
                        <a rel="noopener noreferrer" target="_blank" href={homeData[2].data?.certifications[0].link}>
                          <img alt={homeData[2].data?.certifications[0].title} 
                            src={homeData[2].data?.certifications[0].image} 
                            style={{ width: "300px" }}/>
                        </a>
                      </div>
                    </div>
                    
                    {/* resume link */}
                    <a rel="noopener noreferrer" target="_blank" href={homeData[2].resume}
                      className="w3-button w3-light-gray w3-padding-large w3-section">
                      <i className="fa fa-download"></i> View Resume
                    </a><br/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* portfolio/project preview section */}
          <div className="w3-container w3-text-dark-grey w3-padding-large w3-light-gray" ref={sections[3]}
            style={{ height:"auto" }}>
            {/* <div className="w3-padding-large w3-content w3-white w3-text-dark-gray" id="photos"> */}
            <div className="w3-content w3-light-grey w3-padding" style={{
              marginTop: "32px", marginBottom:"-32px" }}>
              <h2 className="w3-text-black">Project Showcase</h2>
              <hr className="w3-opacity" style={{ width: "300px", borderTop: "1px solid black" }} />
            </div>
            <Portfolio />
          </div>

          {/* contact form */}
          <div ref={sections[4]}>
            <ContactForm />
          </div>
        </div>
      </>
    );
  }
}
