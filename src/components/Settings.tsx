import React, { Component } from 'react';
import DraggableTerminal from './DraggableTerminal/DraggableTerminal';
//import '../resources/data/terminal.json';
import '../css/App.css';
import '../css/Home.css';

interface SettingsProps {
  isTermOpen: boolean,
  toggleTerm: any
}
interface SettingsState {
  userId: string
}

export default class Settings extends Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);
    this.state = {
      userId: `guest${Math.floor(Math.random() * 10000)}`
    }
  }

  render() {
    const { userId } = this.state;
    const { isTermOpen, toggleTerm } = this.props;
    const startupMessages: string[] = [
      "Welcome to the integrated terminal! You can use Linux commands to navigate the site. Type help to list the commands..."    
    ]
    const termWidth = Math.floor(0.951 * window.innerWidth);
    const termHeight= Math.floor(0.48 * window.innerHeight);
    return (
      <>
        {isTermOpen ?
          <div>
            <DraggableTerminal startup={startupMessages} placeholder={""}
              width={termWidth} height={termHeight} userId={userId}/>
          </div> : ''}
          <div>
            <nav className="w3-bottom w3-opacity w3-hover-opacity-off"
              style={{ width: "auto", right: "0", zIndex: 3 }}
              id="mySidebar">
              <div className="w3-bar-block w3-center">
                <button className="w3-bar-item w3-button"
                  onClick={toggleTerm}>
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