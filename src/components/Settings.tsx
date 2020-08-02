import React, { Component } from 'react';
import DraggableTerminal from './DraggableTerminal/DraggableTerminal';
//import '../resources/data/terminal.json';
import '../css/App.css';
import '../css/Home.css';

interface SettingsProps {}
interface SettingsState {
  isMenuOpen: boolean,
}

export default class Settings extends Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
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
    // const links = [
    //   {
    //     link: "/",
    //     label: "HOME",
    //     icon: "fa fa-home"
    //   },
    //   {
    //     link: "/#/Projects",
    //     label: "PROJECTS",
    //     icon: "fa fa-code"
    //   },
    //   {
    //     link: "/#/Blog",
    //     label: "BLOG",
    //     icon: "fa fa-user"
    //   },
    //   {
    //     link: "/#/Contact",
    //     label: "CONTACT",
    //     icon: "fa fa-envelope"
    //   }
    // ]
    const startupMessages: string[] = [
      "Welcome to the integrated terminal. More features will be implemented soon! Type help to learn more..."    
    ]
    return (
      <>
        {isMenuOpen ?
          <div>
            <DraggableTerminal startup={startupMessages} placeholder={""} />
          </div> : ''}
          <div>
            <nav className="w3-bottom w3-hide-small w3-opacity w3-hover-opacity-off"
              style={{ width: "auto", right: "0", borderRadius: "25px 0px 0px 0px" }}
              id="mySidebar">
              <div className="w3-bar-block w3-center">
                <button className="w3-bar-item w3-button"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-cogs fa-fw w3-xlarge"></i>
                </button> 
              </div>
            </nav>
          </div>
        
      </>

    );
  }
}