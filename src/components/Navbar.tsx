import React, { Component } from 'react';
import '../css/App.css';
import '../css/Home.css';
//import { isConditionalExpression } from 'typescript';

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
        link: "/react-github-pages/",
        label: "HOME",
        icon: "fa fa-home"
      },
      {
        link: "/react-github-pages/#/About",
        label: "ABOUT",
        icon: "fa fa-user"
      },
      {
        link: "/react-github-pages/#/Projects",
        label: "PROJECTS",
        icon: "fa fa-code"
      },
      {
        link: "/react-github-pages/#/Contact",
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
              <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-medium">
                <button className="w3-bar-item w3-button w3-padding"
                  style={{ width: "100px" }}
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-xxlarge"></i>
                </button>
                {
                  links.map((page, i) => {
                    return (
                      <a href={page.link} className="w3-bar-item w3-button"
                        style={{ fontSize: "calc(5px + 2vmin)", verticalAlign: "center", width:"22.5%" }}>
                        <i className={page.icon + " w3-xlarge"} ></i>
                        {" " + page.label}
                      </a>
                    )
                  })
                }
              </div>
            </div> 
            {/* <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-hide-medium w3-hide-large w3-center"
              style={{ width: "auto", background: "#222" }}>
              <button className="w3-bar-item w3-button w3-hover-black" 
                  onClick={this.toggleMenu}>
                  <img src={logo} style={{ width: "100%", zoom: "10%" }} alt="logo" />
              </button>
              <div>
                {
                  links.map((page, i) => {
                    return (
                      <a href={page.link} className="w3-bar-item w3-button w3-padding-small w3-hover-black">
                        <i className={page.icon + " w3-xxlarge"}></i>
                        <p>{page.label}</p>
                      </a>
                    )
                  })
                }
              </div>
            </nav>  */}
            {/*Navbar on medium screens*/}
            <div className="w3-top w3-small w3-hide-small w3-hide-large w3-left">
              <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-medium">
                <button className="w3-bar-item w3-button w3-padding"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-xlarge"></i>
                </button>
                {
                  links.map((page, i) => {
                    return (
                      <a href={page.link} className="w3-bar-item w3-button"
                        style={{ fontSize: "calc(1px + 2vmin)", verticalAlign: "center", width:"22.5%" }}>
                        <i className={page.icon + " w3-large"} ></i>
                        {" " + page.label}
                      </a>
                    )
                  })
                }
              </div>
            </div> 
            {/*Navbar on small screens*/}
            <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
              <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-medium">
                <button className="w3-bar-item w3-button"
                  onClick={this.toggleMenu}
                  style={{width: "auto"}}>
                  <i className="fa fa-bars fa-fw w3-large"></i>
                </button>
                {
                  links.map((page, i) => {
                    return (
                      <a href={page.link} className="w3-bar-item w3-button vertical-center"
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
              style={{ width: "100px" }}
              id="mySidebar">
              <div className="w3-bar-block w3-center">
                <button className="w3-bar-item w3-button w3-padding"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-xxlarge"></i>
                </button> 
              </div>
            </nav>
            <nav className="w3-top w3-black w3-hide-large w3-hide-small w3-opacity w3-hover-opacity-off"
              style={{ width: "auto" }}
              id="mySidebar">
              <div className="w3-bar-block w3-center">
                <button className="w3-bar-item w3-button w3-padding"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-bars fa-fw w3-xlarge"></i>
                </button> 
              </div>
            </nav>
            <nav className="w3-top w3-black w3-hide-large w3-hide-medium w3-opacity w3-hover-opacity-off"
              style={{ width: "auto" }}
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