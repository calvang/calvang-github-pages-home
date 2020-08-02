import React, { Component } from 'react';
import '../../css/Terminal.css';

interface DisplayStrProps {
  path: string,
}

interface TermProps {
  startup: string[],
  placeholder: string
}
interface TermState {
  history: any[],
  input: string,
  currentDir: string
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
      input: "",
      currentDir: "~"
    }
  }

  handleChange = (event: any) => {
    this.setState({ input: event.target.value });
  }

  handleSubmit = (event: any) => {
    const { history, input, currentDir } = this.state;
    event.preventDefault();
    console.log(input);
    var newHistory = history;
    var newDir = currentDir;
    newHistory.push(
      <><DisplayStr path={currentDir} />{input}<br /></>
    );
    if (input.trim() === "cd") {
      newDir = "~";
    }
    else if (input.substr(0, 2) === "cd") {
      newDir = currentDir + "/" + input.substr(3, input.length - 3);
      console.log("cd", newDir);
    }
    else if (input.trim() === "pwd") {
      newHistory.push(<>{currentDir}<br /></>)
      console.log("pwd", currentDir)
    }
    else if (input.trim() === "help") {
      newHistory.push(<>Help has not been implemented at this time</>);
    }
    this.setState({
      history: newHistory,
      input: "",
      currentDir: newDir
    })
  }

  render() {
    const { history, input, currentDir } = this.state;
    return (
      <div className="w3-padding term-body">
        {history.map((line, i) =>
          <span key={i}>
            {line}
          </span>
        )}
        <span>
          <form className="form-inline"
            onSubmit={ this.handleSubmit } >
            <label className="form-label"><DisplayStr path={currentDir} /> </label>
            <input className="term-input" contentEditable="true" type="text"
              placeholder={this.props.placeholder} autoComplete="false" autoCorrect="false"
              onChange={this.handleChange} value={input}/>
          </form>
        </span>
		  </div>
    );
  }
}