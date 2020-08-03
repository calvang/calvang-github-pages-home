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
    const startupMessages: string[] = [
      "Welcome to the integrated terminal. More features will be implemented soon! Type help to learn more..."    
    ]
    const termWidth = Math.floor(0.951 * window.innerWidth);
    const termHeight= Math.floor(0.48 * window.innerHeight);
    return (
      <>
        {isMenuOpen ?
          <div>
            <DraggableTerminal startup={startupMessages} placeholder={""}
              width={termWidth} height={termHeight} />
          </div> : ''}
          <div>
            <nav className="w3-bottom w3-opacity w3-hover-opacity-off"
              style={{ width: "auto", right: "0", zIndex: 3 }}
              id="mySidebar">
              <div className="w3-bar-block w3-center">
                <button className="w3-bar-item w3-button"
                  onClick={this.toggleMenu}>
                  <i className="fa fa-cogs fa-fw w3-xlarge w3-hide-small"></i>
                  <i className="fa fa-cogs fa-fw w3-large w3-hide-medium w3-hide-large"></i>
                </button> 
                
              </div>
            </nav>
          </div>
        
      </>

    );
  }
}