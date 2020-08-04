import React, { Component } from 'react';
import Terminal from './Terminal';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import '../../css/Terminal.css';

interface DraggableTerminalProps {
  startup: string[],
  placeholder: string,
  width: number,
  height: number,
  userId: string,
}
interface DraggableTerminalState {
  width: number,
  height: number
}

export default class DraggableBlock extends Component<DraggableTerminalProps, DraggableTerminalState> {
  constructor(props: DraggableTerminalProps) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height
    }
  }

  onResize = (event: any, {element, size, handdle}: any) => {
    this.setState({width: size.width, height: size.height});
  };

  render() {
    const { startup, placeholder, userId } = this.props;
    const { width, height } = this.state;
    return (
      <Draggable handle="strong" >
        <div className="term-block">
          <Resizable height={height} width={width}
            onResize={this.onResize} minConstraints={[150, 100]}
            resizeHandles={["sw", "se", "nw", "ne", "w", "e", "n", "s"]}>
            <div style={{width: width + "px", height: height + "px"}}>
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
              <Terminal width={width} height={height}
                startup={startup} placeholder={placeholder} userId={userId} />
            </div>
          </Resizable>
        </div>
      </Draggable>
    )
  }
}