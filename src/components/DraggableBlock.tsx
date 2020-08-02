import React, { Component } from 'react';
import Terminal from './Terminal';
import Draggable from 'react-draggable';
import '../css/App.css';
import '../css/Home.css';
import '../css/Terminal.css';

interface DraggableProps {}
interface DraggableState {}

export default class DraggableBlock extends Component<DraggableProps, DraggableState> {
  constructor(props: DraggableProps) {
    super(props);
    this.state = {}
  }

  render() {
    //const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
      <Draggable handle="strong" >
        <div style={{
            width: "500px", height: "300px",
            position: "fixed", zIndex: 2,
            bottom: "2%", left: "2%",
            background: "rgba(0, 0, 0, 0.7)",
            /*borderRadius: "10px"*/
            boxShadow: "0px 0px 2px 0px #ffffff"
          }}>
          <strong>
            <div className="w3-bar"
              style={{ background: "rgba(50, 60, 50, 1)" }}>
              <div className="w3-bar-item w3-padding-small">
                <i className="fa fa-terminal fa-fw w3-xlarge"></i>
              </div>
              <div className="w3-bar-item w3-padding-small">
                  Terminal
              </div>
            </div>
          </strong>
          <div className="w3-padding">
            <p>
              calvin:/home$ You must click my handle to drag me! <br/>
              calvin:/home$ Enter '--help' for the supported commands. <br/>
              calvin:/home$ Welcome to the integrated terminal. More features will be implemented soon! <br/>
            </p>
          </div>
          {/* <Terminal /> */}
        </div>
      </Draggable>
    )
  }
}