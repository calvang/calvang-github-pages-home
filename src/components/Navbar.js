import React from 'react';
import logo from '../resources/logo.png'
import '../App.css';
//import { isConditionalExpression } from 'typescript';

export default class Navbar extends React.Component {
  render() {
    const links = [
      {
        link: "/react-github-pages/",
        label: "HOME",
        icon: "fa fa-home w3-xxlarge"
      },
      {
        link: "/react-github-pages/#/About",
        label: "ABOUT",
        icon: "fa fa-user w3-xxlarge"
      },
      {
        link: "/react-github-pages/#/Projects",
        label: "PROJECTS",
        icon: "fa fa-code w3-xxlarge"
      },
      {
        link: "/react-github-pages/#/Contact",
        label: "Contact",
        icon: "fa fa-envelope w3-xxlarge"
      }
    ]
    return (
      <>
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center"
          style={{width: "120px", background: "#222"}}>
          <img src={logo} style={{width:"100%"}} alt="logo" />
          <div>
          {
            links.map((page, i) => {
              return (
                <a href={page.link} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                  <i className={page.icon}></i>
                  <p>{page.label}</p>
                </a>
              )
            })
          }
          </div>
        </nav>

        {/*Navbar on small screens (Hidden on medium and large screens)*/}
        <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            {
              links.map((page, i) => {
                return (
                  <a href={page.link} className="w3-bar-item w3-button" styles={{width:"25% !important"}}>
                    {page.label}
                  </a>
                )
              })
            }
          </div>
        </div>
      </>

    );
  }
}