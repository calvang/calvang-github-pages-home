import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as Cmd from './Commands';
import blogData from '../../resources/data/blog.json';
import siteData from '../../resources/data/sitemap.json';
import '../../css/Terminal.css';
import tux from '../../resources/images/tux.png';

interface TermProps extends RouteComponentProps<any> {
  startup: string[],
  placeholder: string,
  width: number,
  height: number
}
interface TermState {
  history: any[],
  bashHistory: string[],
  input: string,
  currentDir: string
}

class Term extends Component<TermProps, TermState> {
  siteMap = siteData;
  constructor(props: TermProps) {
    super(props);
    console.log(navigator);
    // add blog posts to sitemap
    const posts = blogData.posts
    var blogSubpaths: any[] = [];
    for (let i = 0; i < posts.length; ++i) {
      blogSubpaths.push({
        name: posts[i].file.slice(0, -3),
        path: `/Blog/${posts[i].file.slice(0, -3)}`
      });
    }
    this.siteMap.subpaths[1] = {
      ...this.siteMap.subpaths[1],
      ...{ subpaths: blogSubpaths }
    };
    console.log(this.siteMap);

    // get current page
    var page: string;
    if (window.location.href.split('#')[1] === "/")
      page = "~"
    else
      page = "~" + window.location.href.split('#')[1];

    // generate welcome message
    var message;
    var startupMessages: any[] = []
    for (message in props.startup) {
      startupMessages.push(
        <>
          <Cmd.Screenfetch />
          <Cmd.DisplayStr path={page} />{props.startup[message]} < br />
        </>
      );
    }
    this.state = {
      history: startupMessages,
      bashHistory: [],
      input: "",
      currentDir: page 
    }
  } 

  // @returns true if path found in siteTree
  findPath = (siteTree: any, path: string) => {
    console.log(siteTree.path);
    console.log(path)
    if (siteTree.path === path) return siteTree;
    else if (siteTree.subpaths) {
      for (let i in siteTree.subpaths) {
        this.findPath(siteTree.subpaths[i], path);
      }
    }
    else return false;
  }

  listSubpaths = () => {
    
  }

  // navigates to destDir
  // @returns true if successful, false if not
  navigatePath = (destDir: string) => {
    const { currentDir } = this.state;
    const { siteMap, findPath } = this;
    var currentPath = currentDir.substr(1, currentDir.length - 1);
    console.log(currentPath);
    var finalPath: string = "";
    if (destDir.trim() === "~") {
      finalPath = "/"
    }
    else if (destDir.trim() === "..") {
      // array of dirs in current path
      var pathArr = currentPath.split('/');
      pathArr.pop();
      finalPath = "/";
      for (let i = 1; i < pathArr.length; ++i) finalPath += `/${pathArr[i]}`;
    }
    else if (destDir.trim() === ".") {
      return true;
    }
    else if (findPath(siteMap, `${currentPath}/${destDir.trim()}`) !== false) {
      finalPath = `${currentPath}/${destDir.trim()}`;
    }
    else {
      return false
    }
    // jump to new page
    console.log(finalPath);
    //let routerHistory = useHistory();
    this.props.history.push(finalPath)
    return true;
  }

  handleChange = (event: any) => {
    this.setState({ input: event.target.value });
  }

  handleCommands = (newHistory: any[], newDir: any, input: string) => {
    const { bashHistory } = this.state;
    // handle commands
    switch(input.trim()) {
      case "cd":
        this.navigatePath("~");
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
        newHistory.push(<Cmd.WhoAmI />)
        break;
      case "screenfetch":
        newHistory.push(<Cmd.Screenfetch />)
        break;
      case "neofetch":
          newHistory.push(<Cmd.Neofetch />)
        break;
      case "spookyfetch":
        newHistory.push(<Cmd.Spookyfetch />)
        break;
      case "tux":
        newHistory.push(<><img src={tux} alt="tux"/><br /></>)
        break;
      case "help":
        newHistory.push(<Cmd.HelpMsg />);
        break;
      case "sudo help":
        newHistory.push(<Cmd.HiddenMsg />);
        break;
      default:
        if (input.substr(0, 3) === "cd ") {
          let destDir = input.substr(3, input.length - 3).trim();
          if (this.navigatePath(destDir) !== false) {
            console.log("destDir exists")
            if (destDir === "~")
              newDir = "~";
            else if (destDir !== "." && destDir !== "..")
              newDir += `/${destDir}`;
          }
          else
            newHistory.push(<>cd: {destDir} : No such file or directory<br /></>)
        }
        else {
          newHistory.push(<>{input}: command not found <br /></>);
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
      <><Cmd.DisplayStr path={currentDir} />{input}<br /></>
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
            <label className="form-label"><Cmd.DisplayStr path={currentDir} /> </label>
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

export default withRouter<TermProps, any>(Term);