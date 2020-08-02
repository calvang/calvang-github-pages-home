import React, { Component, createRef } from 'react';
import { Terminal } from 'xterm';
import '../css/App.css';
import '../css/Home.css';

interface TermProps {
  onChange?: (e: any) => void;
  onInput?: (e: any) => void;
  onFocusChange?: Function;
  addons?: string[];
  onScroll?: (e: any) => void;
  onContextMenu?: (e: any) => void;
  options?: any;
  path?: string;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
}
interface TermState {
  isFocused: boolean;
}

export default class Term extends Component<TermProps, TermState> {
  term: Terminal = new Terminal();
  containerRef: any = createRef();
  container: HTMLDivElement = document.createElement('div');
  constructor(props: TermProps) {
    super(props);
    this.state = {
      isFocused: false
    }
  }

  applyAddon(addon: any) {
    Terminal.apply(addon);
  }

  componentDidMount() {
    console.log(this.container);
    this.term.open(this.container);
    this.term.write('Helow from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    this.term.write('how goes it?');
    // this.term.on('focus', this.focusChanged.bind(this, true));
    // this.term.on('blur', this.focusChanged.bind(this, false));
    // if (this.props.onContextMenu) {
    //     this.term.element.addEventListener('contextmenu', this.onContextMenu.bind(this));
    // }
    // if (this.props.onInput) {
    //     this.term.on('data', this.onInput);
    // }
    // if (this.props.value) {
    //   this.term.write(this.props.value);
    // }
  }

  componentWillUnmount() {
    let { term } = this;
    if (this.term) {
    }
  }


  // shouldComponentUpdate(nextProps: any, nextState: any) {
  // // console.log('shouldComponentUpdate', nextProps.hasOwnProperty('value'), nextProps.value != this.props.value);
  //   if (nextProps.hasOwnProperty('value') && nextProps.value != this.props.value) {
  //       if (this.term) {
  //         this.term.clear();
  //         setTimeout(()=>{
  //           this.term.write(nextProps.value);
  //         },0)
  //       }
  //   }
  //   return false;
  // }
  // getTerminal() {
  //     return this.term;
  // }
  // write(data: any) {
  //     this.term && this.term.write(data);
  // }
  // writeln(data: any) {
  //     this.term && this.term.writeln(data);
  // }
  // focus() {
  //     if (this.term) {
  //         this.term.focus();
  //     }
  // }
  // focusChanged(focused: any) {
  //     this.setState({
  //         isFocused: focused
  //     });
  //     this.props.onFocusChange && this.props.onFocusChange(focused);
  // }

  // onInput = data => {
  //     this.props.onInput && this.props.onInput(data);
  // };

  // resize(cols: number, rows: number) {
  //     this.term && this.term.resize(Math.round(cols), Math.round(rows));
  // }
  // setOption(key: string, value: boolean) {
  //     this.term && this.term.setOption(key, value);
  // }
  // refresh() {
  //     this.term && this.term.refresh(0, this.term.rows - 1);
  // }

  render() {
    //const termClass= className('ReactXTerm', this.state.isFocused ? 'ReactXTerm--focused' : null, this.props.className);
    return (
      <div ref={this.containerRef} style={{zIndex: 2}} className="w3-bar">
        <div 
          className="w3-bar-item"
          dangerouslySetInnerHTML={{ __html: this.container.innerHTML }} />
      </div>
    );
  }
}