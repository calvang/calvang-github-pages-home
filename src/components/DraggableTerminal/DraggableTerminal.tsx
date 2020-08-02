import React, { Component } from 'react';
import Terminal from './Terminal';
import Draggable from 'react-draggable';
//import { Resizable, ResizableBox } from 'react-resizable';
import '../../css/Terminal.css';

interface DraggableTerminalProps {
  startup: string[],
  placeholder: string
}
interface DraggableTerminalState {}

export default class DraggableBlock extends Component<DraggableTerminalProps, DraggableTerminalState> {
  constructor(props: DraggableTerminalProps) {
    super(props);
    this.state = {}
  }

  render() {
    //const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const { startup, placeholder } = this.props;
    return (<>
      {/* <div style={{
            position: "fixed", zIndex: 2,
            bottom: "2%", left: "2%",
            background: "rgba(0, 0, 0, 0.75)",
            boxShadow: "0px 0px 2px 0px #ffffff"
      }}> */}
        {/* <ResizableBox className="term-resizable" width={500} height={300}
          minConstraints={[150, 100]}>
          hi
        </ResizableBox> */}
      <Draggable handle="strong" >
        <div className="term-block">
          <strong>
            <div className="w3-bar"
              style={{ background: "rgba(40, 50, 50, 1)" }}>
              <div className="w3-bar-item w3-padding-small">
                <i className="fa fa-terminal fa-fw w3-xlarge"></i>
              </div>
              <div className="w3-bar-item">
                  Terminal
              </div>
            </div>
          </strong>
          <Terminal startup={startup} placeholder={placeholder} />
        </div>
      </Draggable>
      </>
    )
  }
}