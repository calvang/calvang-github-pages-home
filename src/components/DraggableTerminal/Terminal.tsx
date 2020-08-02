import React, { Component } from 'react';
import '../../css/Terminal.css';

interface DisplayStrProps {
  path: string,
}

interface TermProps {
  startup: string[],
  placeholder: string,
  width: number,
  height: number
}
interface TermState {
  history: any[],
  bashHistory: string[],
  input: string,
  currentDir: string,
}

const DisplayStr = ({ path }: DisplayStrProps) => 
  <>
    <b style={{color:"lightgreen"}}>
      calvin.github.io:
    </b>
    <b style={{color:"#0080FF"}}>
      {`${path}$`}&nbsp;
    </b>
  </>

export default class Term extends Component<TermProps, TermState> {
  constructor(props: TermProps) {
    super(props);
    var message;
    var startupMessages: any[] = []
    for (message in props.startup) {
      startupMessages.push(
        <><DisplayStr path="~" />{ props.startup[message] } < br /></>
      );
    }
    this.state = {
      history: startupMessages,
      bashHistory: [],
      input: "",
      currentDir: "~"
    }
  }

  handleChange = (event: any) => {
    this.setState({ input: event.target.value });
  }

  handleCommands = (newHistory: any[], newDir: any, input: string) => {
    const { bashHistory } = this.state;
    // handle commands
    switch(input.trim()) {
      case "cd":
        newDir = "~";
        break;
      case "pwd":
        newHistory.push(<>{newDir}<br /></>);
        break;
      case "history":
        for (let i = 0; i < bashHistory.length; ++i) {
          newHistory.push(<>{bashHistory[i]}<br /></>);
        }
        break;
      case "whoami":
        newHistory.push(<>Calvin Huang<br /></>)
        break;
      case "help":
        newHistory.push(<>help command has not been implemented at this time<br /></>);
        break;
      default:
        if (input.substr(0, 2) === "cd") {
          newDir = newDir+ "/" + input.substr(3, input.length - 3);
        }
    }
    return newDir;
  }

  handleSubmit = (event: any) => {
    const { history, bashHistory, input, currentDir } = this.state;
    event.preventDefault();

    var newHistory = history;
    var newDir = currentDir;
    newHistory.push(
      <><DisplayStr path={currentDir} />{input}<br /></>
    );

    newDir = this.handleCommands(newHistory, newDir, input);

    // remove oldest history
    while (newHistory.length >= 1000) {
      newHistory.shift();
    }
    this.setState({
      history: newHistory,
      bashHistory: [...bashHistory, input],
      input: "",
      currentDir: newDir
    })
  }

  render() {
    const { height } = this.props;
    const { history, input, currentDir } = this.state;
    return (
      <div className="w3-padding term-body"
        style={{ height: `${height - 40}px` }}>
        {history.map((line, i) =>
          <span key={i}>
            {line}
          </span>
        )}
        <span style={{ display:"flex" }}>
          <form className="form-inline"
            onSubmit={ this.handleSubmit } >
            <label className="form-label"><DisplayStr path={currentDir} /> </label>
            <input className="term-input" contentEditable="true" type="text"
              style={{ flex: 1 }}
              placeholder={this.props.placeholder} autoComplete="false" autoCorrect="false"
              onChange={this.handleChange} value={input}/>
          </form>
        </span>
		  </div>
    );
  }
}