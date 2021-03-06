import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as Cmd from './Commands';
import blogData from '../../resources/data/blog.json';
import siteData from '../../resources/data/sitemap.json';
import '../../css/Terminal.css';
import tux from '../../resources/images/sleepytux.png';

interface TermProps extends RouteComponentProps<any> {
  startup: string[],
  placeholder: string,
  width: number,
  height: number,
  userId: string
}
interface TermState {
  history: any[],
  bashHistory: string[],
  input: string,
  currentDir: string,
  aliases: any[]
}

class Term extends Component<TermProps, TermState> {
  siteMap = siteData;
  publicIP: string = "";
  constructor(props: TermProps) {
    super(props);

    // add blog posts to sitemap
    const posts = blogData.posts
    var blogSubpaths: any[] = [{
      name: "Privacy-Policy",
      path: "/Blog/Privacy-Policy"
    }];
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
          <Cmd.DisplayStr path={page} userId={this.props.userId} />
          {props.startup[message]} < br />
        </>
      );
    }
    this.state = {
      history: startupMessages,
      bashHistory: [],
      input: "",
      currentDir: page,
      aliases: [
        {
          alias: "sitemap",
          cmd: "tree ~"
        },
        {
          alias: "dir",
          cmd: "ls"
        },
        {
          alias: "ll",
          cmd: "ls"
        },
        {
          alias: "about",
          cmd: "whoami"
        },
        {
          alias: "cdproj",
          cmd: "cd Projects"
        },
        {
          alias: "cdblog",
          cmd: "cd Blog"
        },
        {
          alias: "sudo fork-bomb",
          cmd: ":(){:|:&};:"
        }
      ]
    }
  } 

  componentDidMount() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(response => {
      this.publicIP = response.ip;
    });
  }

  // @return cmd for alias
  handleAlias = (input: string): any => {
    const { aliases } = this.state;
    for (let i in aliases) {
      if (aliases[i].alias === input)
        return aliases[i].cmd;
    }
    return false;
  }

  // @return true if alias successfully added
  addAlias = (alias: string, cmd: string) => {
    const aliases = this.state.aliases;
    // if alias in already in, overwrite current alias
    for (let i in aliases) {
      if (aliases[i].alias === alias) {
        aliases[i].cmd = cmd;
        this.setState({ aliases: aliases });
        return;
      }
    }
    aliases.push({
      alias: alias,
      cmd: cmd
    })
    this.setState({ aliases: aliases });
  }

  // @returns true if path found in siteTree
  findPath = (siteTree: any, path: string): any => {
    const { findPath } = this;
    if (siteTree.path === path) {
      return siteTree;
    }
    else if (siteTree.subpaths) {
      for (let i in siteTree.subpaths) {
        let branch: any = findPath(siteTree.subpaths[i], path);
        if (branch) {
          return branch;
        }
      }
    }
    else {
      return false;
    }
  }

  // @return list of subpaths
  getSubpaths = (currentDir: string) => {
    const { siteMap, findPath } = this;
    var currentPath = currentDir.substr(1, currentDir.length - 1);
    if (currentPath === "") currentPath = "/";
    var currentTree: any = findPath(siteMap, currentPath);
    var list: any[] = [];
    if (currentTree && currentTree.subpaths) {
      for (let i in currentTree.subpaths) {
        list.push(currentTree.subpaths[i]);
      }
    }
    return list;
  }

  // recursively generates path tree
  // @return path tree in jsx format
  formatTree = (currentDir: string, layer: number) => {
    const { getSubpaths, formatTree } = this;
    var currentTree = getSubpaths(currentDir);
    var jsxTree: any[] = []; // store everything as a string first before rendering jsx
    var layers: any[] = [];
    for (let i = 0; i < layer; ++i) layers.push(<>|&ensp; </>);
    var index = 0;
    for (var i in currentTree) {
      if (index === currentTree.length - 1)
        jsxTree.push(
          <span>{layers.map((layer, ind) => <span key={ind}>{layer}</span>)}`-- {currentTree[i].name}</span>
        );
      else
        jsxTree.push(
          <span>{layers.map((layer, ind) => <span key={ind}>{layer}</span>)}|-- {currentTree[i].name}</span>
        );
      if (currentTree[i].subpaths) {
        let subTree = formatTree(`~${currentTree[i].path}`, ++layer);
        for (let j in subTree) {
          jsxTree.push(subTree[j]); 
        }
      }
      index++;
    }
    return jsxTree
  }

  // navigates to destDir
  // @returns true if successful, false if not
  navigatePath = (destDir: string) => {
    const { currentDir } = this.state;
    const { siteMap, findPath } = this;
    var currentPath = currentDir.substr(1, currentDir.length - 1);
    var finalPath: string = "";
    if (destDir.trim() === "~") {
      finalPath = "/"
    }
    else if (destDir.trim() === "..") {
      // array of dirs in current path
      var pathArr = currentPath.split('/');
      pathArr.pop();
      if (currentDir === "/")
        finalPath = "/";
      for (let i = 1; i < pathArr.length; ++i) finalPath += `/${pathArr[i]}`;
    }
    else if (destDir.trim() === ".") {
      return true;
    }
    else if (findPath(siteMap, `${currentPath}/${destDir.trim()}`)) {
      finalPath = `${currentPath}/${destDir.trim()}`;
    }
    else {
      return false
    }
    // jump to new page
    this.props.history.push(finalPath)
    return true;
  }

  handleChange = (event: any) => {
    this.setState({ input: event.target.value });
  }

  handleCommands = (newHistory: any[], newDir: any, input: string) => {
    const { bashHistory, currentDir, aliases } = this.state;
    // handle aliases
    input = input.trim()
    var alias = this.handleAlias(input);
    if (alias !== false) {
      console.log(alias)
      input = alias;
    }
    // handle commands
    switch (input) {
      case "alias":
        newHistory.push(
          <>{aliases.map((item, i) => <span key={i}>{`alias ${item.alias}='${item.cmd}'`}<br /></span>)}</>
        );
        break;
      case "cd":
        this.navigatePath("~");
        newDir = "~";
        break;
      case "ls":
        var list: any[] = this.getSubpaths(currentDir);
        newHistory.push(
          <>{ list.map((item, i) => <span key={i}>{item.name}<br /></span>)}</>
        );
        break;
      case "tree":
        let tree: any[] = this.formatTree(currentDir, 0);
        newHistory.push(
          <>{ tree.map((item, i) => <span key={i}>{item}<br /></span>)}</>
        );
        break;
      case "sitemap":
        let siteTree: any[] = this.formatTree("~", 0);
        newHistory.push(
          <>{ siteTree.map((item, i) => <span key={i}>{item}<br /></span>)}</>
        );
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
        newHistory.push(<Cmd.WhoAmI />);
        break;
      case "screenfetch":
        newHistory.push(<Cmd.Screenfetch />);
        break;
      case "blockfetch":
        newHistory.push(<Cmd.Blockfetch />);
        break;
      case "spookyfetch":
        newHistory.push(<Cmd.Spookyfetch />);
        break;
      case "tux":
        newHistory.push(<><img style={{zoom: "50%"}} src={tux} alt="tux" /><br /></>);
        break;
      case "neofetch":
        newHistory.push(
          <Cmd.Neofetch ip={this.publicIP}
            userId={this.props.userId} />
        );
        break;
      // case "ip a":
      //   newHistory.push(<>{this.publicIP}<br /></>)
      //   break;
      // case "ip address":
      //   newHistory.push(<>{this.publicIP}<br /></>)
      //   break;
      case "goose":
        newHistory.push(<Cmd.Goose />);
        break;
      case ":(){:|:&};:":
        var endlessString = "/WHY@DID#YOU$DO%THIS&";
        var pointlessInt = 9;
        for (; ;) {
          pointlessInt *= 9;
          endlessString += endlessString;
          for (let i = 0; i < pointlessInt; ++i) {
            window.open("_blank", 'popUpWindow', 'height=181,width=666,left=3,top=222')
            window.open( "_blank",'popUpWindow','height=181,width=666,right=3,top=222')
          }
          console.error("CRITICAL! Click out of this tab if you want your browser to survive!")
          this.props.history.push(endlessString);
        }
      case "help":
        newHistory.push(<Cmd.HelpMsg />);
        break;
      case "sudo help":
        newHistory.push(<Cmd.HiddenMsg />);
        break;
      case "sudo unlock":
        newHistory.push(<Cmd.ForbiddenMsg />);
        break;
      default:
        if (input.substr(0, 3) === "cd ") {
          let destDir = input.substr(3, input.length - 3).trim();
          if (this.navigatePath(destDir)) {
            if (destDir === "~")
              newDir = "~";
            else if (destDir === "..") {
              let dirArr = newDir.split('/');
              let finalDir = "~";
              dirArr.pop();
              for (let i = 1; i < dirArr.length; ++i) finalDir += `/${dirArr[i]}`;
              newDir = finalDir;
            }
            else if (destDir !== ".")
              newDir += `/${destDir}`;
          }
          else
            newHistory.push(<>cd: {destDir} : No such file or directory<br /></>)
        }
        else if (input.substr(0, 3) === "ls ") {
          let destDir = input.substr(3, input.length - 3).trim();
          if (destDir === "~") destDir = "~";
          else if (destDir === "..") {
            let dirArr = newDir.split('/');
            let finalDir = "~";
            dirArr.pop();
            for (let i = 1; i < dirArr.length; ++i) finalDir += `/${dirArr[i]}`;
            destDir = finalDir;
          }
          else if (destDir === ".") {
            destDir = currentDir;
          }
          else {
            destDir = currentDir + "/" + destDir;
          }
          var listDefined: any[] = this.getSubpaths(destDir);
          newHistory.push(
            <>{listDefined.map((item, i) => <span key={i}>{item.name}<br /></span>)}</>
          );
        }
        else if (input.substr(0, 5) === "tree ") {
          let destDir = input.substr(5, input.length - 5).trim();
          if (destDir === "~") destDir = "~";
          else if (destDir === "..") {
            let dirArr = newDir.split('/');
            let finalDir = "~";
            dirArr.pop();
            for (let i = 1; i < dirArr.length; ++i) finalDir += `/${dirArr[i]}`;
            destDir = finalDir;
          }
          else if (destDir === ".") {
            destDir = currentDir;
          }
          else {
            destDir = currentDir + "/" + destDir;
          }
          let treeDefined: any[] = this.formatTree(destDir, 0);
          newHistory.push(
            <>{ treeDefined.map((item, i) => <span key={i}>{item}<br /></span>)}</>
          );
        }
        else if (input.substr(0, 6) === "alias ") {
          let aliasArray = input.substr(6, input.length - 6).trim().split('=');
          let alias = aliasArray[0];
          let cmd = aliasArray[1].substr(1, aliasArray[1].length - 2);
          this.addAlias(alias, cmd);
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
      <><Cmd.DisplayStr path={currentDir} userId={this.props.userId} />
        {input}<br /></>
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
            <label className="form-label">
              <Cmd.DisplayStr path={currentDir} userId={this.props.userId} />
            </label>
            <input className="term-input" contentEditable="true" type="text"
              style={{ flex: 1 }} autoFocus
              placeholder={this.props.placeholder} autoComplete="false" autoCorrect="false"
              onChange={this.handleChange} value={input}/>
          </form>
        </span>
		  </div>
    );
  }
}

export default withRouter<TermProps, any>(Term);