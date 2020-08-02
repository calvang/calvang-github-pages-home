import React, { Component } from 'react';
import '../css/App.css';
import '../css/Home.css';

interface NavbarProps {}
interface NavbarState {
  isMenuOpen: boolean,
}

export default class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
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
    const { isMenuOpen } = this.state;
    const links = [
      {
        link: "/",
        label: "HOME",
        icon: "fa fa-home"
      },
      {
        link: "/#/Projects",
        label: "PROJECTS",
        icon: "fa fa-code"
      },
      {
        link: "/#/Blog",
        label: "BLOG",
        icon: "fa fa-user"
      },
      {
        link: "/#/Contact",
        label: "CONTACT",
        icon: "fa fa-envelope"
      }
    ]
    return (
      <>
        {isMenuOpen ?
          <div>
            {/*Navbar on large screens*/}
            <div className="w3-top w3-small w3-hide-small w3-hide-medium w3-left">
              <div className="w3-animate-left w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-medium">
                <button className="w3-bar-item w3-button w3-padding"
                  style={{ width: "100px" }}
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-xxlarge"></i>
                </button>
                {
                  links.map((page, i) => {
                    return (
                      <a key={page.label} href={page.link} className="w3-bar-item w3-button"
                        style={{ fontSize: "calc(5px + 2vmin)", paddingTop: "12px", width:"22.5%" }}>
                        <i className={page.icon + " w3-xlarge"}></i>
                        {" " + page.label}
                      </a>
                    )
                  })
                }
              </div>
            </div> 
            {/*Navbar on medium screens*/}
            <div className="w3-top w3-small w3-hide-small w3-hide-large w3-left">
              <div className="w3-animate-left w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-medium">
                <button className="w3-bar-item w3-button w3-padding"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-xlarge"></i>
                </button>
                {
                  links.map((page, i) => {
                    return (
                      <a key={page.label} href={page.link} className="w3-bar-item w3-button"
                        style={{ fontSize: "calc(1px + 2vmin)", paddingTop: "10px", width:"22.5%" }}>
                        <i className={page.icon + " w3-large"} ></i>
                        {" " + page.label}
                      </a>
                    )
                  })
                }
              </div>
            </div> 
            {/*Navbar on small screens*/}
            <div className="w3-top w3-hide-large w3-hide-medium">
              <div className="w3-animate-left w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-medium">
                <button className="w3-bar-item w3-button"
                  onClick={this.toggleMenu}
                  style={{width: "auto"}}>
                  <i className="fa fa-bars fa-fw w3-large"></i>
                </button>
                {
                  links.map((page, i) => {
                    return (
                      <a key={page.label} href={page.link} className="w3-bar-item w3-button vertical-center"
                        style={{ fontSize: "calc(3px + 2vmin)", width: "20%", paddingTop: "12px" }}>
                        {page.label}
                      </a>
                    )
                  })
                }
              </div>
            </div>
          </div> :
          <div>
            <nav className="w3-top w3-black w3-hide-small w3-hide-medium w3-opacity w3-hover-opacity-off"
              style={{ width: "100px", borderRadius: "0px 0px 25px 0px" }}
              id="mySidebar">
              <div className="w3-bar-block w3-center">
                <button className="w3-bar-item w3-button w3-padding"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-xxlarge"></i>
                </button> 
              </div>
            </nav>
            <nav className="w3-top w3-black w3-hide-large w3-hide-small w3-opacity w3-hover-opacity-off"
              style={{ width: "auto", borderRadius: "0px 0px 25px 0px" }}
              id="mySidebar">
              <div className="w3-bar-block w3-center">
                <button className="w3-bar-item w3-button w3-padding"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-xlarge"></i>
                </button> 
              </div>
            </nav>
            <nav className="w3-top w3-black w3-hide-large w3-hide-medium w3-opacity w3-hover-opacity-off"
              style={{ width: "auto", borderRadius: "0px 0px 25px 0px" }}
              id="mySidebar">
              <div className="w3-bar-block w3-center">
                <button className="w3-bar-item w3-button"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-large"></i>
                </button> 
              </div>
            </nav>
          </div>
        }
      </>

    );
  }
}