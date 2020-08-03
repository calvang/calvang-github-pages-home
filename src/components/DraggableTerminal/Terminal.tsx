import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import homeData from '../../resources/data/home.json';
import blogData from '../../resources/data/blog.json';
import siteData from '../../resources/data/sitemap.json';
import '../../css/Terminal.css';
import tux from '../../resources/images/tux.png';

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

const HelpMsg = () => 
  <>
    Currently supported commands: <br />
     - cd [path] (incomplete): navigate to different pages <br />
     - pwd: print current path <br />
     - history: print bash cmd history <br />
     - whoami: print about blurb <br />
     - help: print help message <br />
     - ls (incomplete): list subpaths of current page <br />
     - tree (incomplete): sitemap from current page <br />
     - sudo help: ??? <br />
  </>

const HiddenMsg = () => 
  <>
    Special commands: <br />
     - neofetch | screenfetch | spookyfetch: show ascii art <br />
     - tux: summon tux <br />
  </>

const WhoAmI = () => 
  <>
    I am Calvin Huang <br />
    {homeData[1].text} <br />  
  </>

const Screenfetch = () => 
  <pre>
@               __                                _  __   __         __       _     <br /> 
@   ____ ___ _ / /_  __ ___ _ ___  ___ _   ___ _ (_)/ /_ / /  __ __ / /      (_)___ <br /> 
@  / __// _ `// /| |/ // _ `// _ \/ _ `/_ / _ `// // __// _ \/ // // _ \ _  / // _ \<br /> 
@  \__/ \_,_//_/ |___/ \_,_//_//_/\_, /(_)\_, //_/ \__//_//_/\_,_//_.__/(_)/_/ \___/<br /> 
@                                /___/   /___/                                      <br />
  </pre>

const Neofetch = () => 
  <pre>
#/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/#<br />
#                  ___                                                           __     __                __                          #<br />
#                 /\_ \                                                      __ /\ \__ /\ \              /\ \          __             #<br />
#    ___      __  \//\ \    __  __     __       ___       __            __  /\_\\ \ ,_\\ \ \___    __  __\ \ \____    /\_\     ___    #<br />
#   /'___\  /'__`\  \ \ \  /\ \/\ \  /'__`\   /' _ `\   /'_ `\        /'_ `\\/\ \\ \ \/ \ \  _ `\ /\ \/\ \\ \ '__`\   \/\ \   / __`\  #<br />
#  /\ \__/ /\ \L\.\_ \_\ \_\ \ \_/ |/\ \L\.\_ /\ \/\ \ /\ \L\ \   __ /\ \L\ \\ \ \\ \ \_ \ \ \ \ \\ \ \_\ \\ \ \L\ \ __\ \ \ /\ \L\ \ #<br />
#  \ \____\\ \__/.\_\/\____\\ \___/ \ \__/.\_\\ \_\ \_\\ \____ \ /\_\\ \____ \\ \_\\ \__\ \ \_\ \_\\ \____/ \ \_,__//\_\\ \_\\ \____/ #<br />
#   \/____/ \/__/\/_/\/____/ \/__/   \/__/\/_/ \/_/\/_/ \/___L\ \\/_/ \/___L\ \\/_/ \/__/  \/_/\/_/ \/___/   \/___/ \/_/ \/_/ \/___/  #<br />
#                                                         /\____/       /\____/                                                       #<br />
#                                                         \_/__/        \_/__/                                                        #<br />
#                                                                                                                                     #<br />
#/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/#<br />
  </pre>

const Spookyfetch = () =>
  <pre>
!   ▄▄·  ▄▄▄· ▄▄▌  ▌ ▐· ▄▄▄·  ▐ ▄  ▄▄ •  ▄▄ • ▪ ▄▄▄▄▄ ▄ .▄▄• ▄▌▄▄▄▄· ▪        <br />
!  ▐█ ▌▪▐█ ▀█ ██• ▪█·█▌▐█ ▀█ •█▌▐█▐█ ▀ ▪▐█ ▀ ▪██•██  ██▪▐██▪██▌▐█ ▀█▪██ ▪     <br />
!  ██ ▄▄▄█▀▀█ ██▪ ▐█▐█•▄█▀▀█ ▐█▐▐▌▄█ ▀█▄▄█ ▀█▄▐█·▐█.▪██▀▐██▌▐█▌▐█▀▀█▄▐█· ▄█▀▄ <br />
!  ▐███▌▐█ ▪▐▌▐█▌▐▌███ ▐█ ▪▐▌██▐█▌▐█▄▪▐█▐█▄▪▐█▐█▌▐█▌·██▌▐▀▐█▄█▌██▄▪▐█▐█▌▐█▌.▐▌<br />
!  ·▀▀▀  ▀  ▀ .▀▀▀. ▀   ▀  ▀ ▀▀ █▪·▀▀▀▀▀·▀▀▀▀ ▀▀▀▀▀▀ ▀▀▀ · ▀▀▀ ·▀▀▀▀▀▀▀▀ ▀█▄▀▪<br />
  </pre>

export default class Term extends Component<TermProps, TermState> {
  siteMap = siteData;
  constructor(props: TermProps) {
    super(props);

    // add blog posts to sitemap
    const posts = blogData.posts
    var blogSubpaths: any[] = [];
    for (let i = 0; i < posts.length; ++i) {
      blogSubpaths.push({
        name: posts[i].file.slice(0, -3),
        path: `/#/Blog/${posts[i].file.slice(0, -3)}`
      });
    }
    this.siteMap.subpaths[1] = {
      ...this.siteMap.subpaths[1],
      ...{ subpaths: blogSubpaths }
    };
    console.log(this.siteMap);

    // generate welcome message
    var message;
    var startupMessages: any[] = []
    for (message in props.startup) {
      startupMessages.push(
        <>
          <Screenfetch />
          <DisplayStr path="~" />{props.startup[message]} < br />
        </>
      );
    }
    this.state = {
      history: startupMessages,
      bashHistory: [],
      input: "",
      currentDir: "~"
    }
  }

  navigatePath = (currentDir:string, destDir: string) => {
    
    // switch (destDir.trim()) {
    //   case
    // }
    // jump to new page
    let routerHistory = useHistory();
    routerHistory.push('/')
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
        newHistory.push(<WhoAmI />)
        break;
      case "screenfetch":
        newHistory.push(<Screenfetch />)
        break;
      case "neofetch":
          newHistory.push(<Neofetch />)
        break;
      case "spookyfetch":
        newHistory.push(<Spookyfetch />)
        break;
      case "tux":
        newHistory.push(<><img src={tux} alt="tux"/><br /></>)
        break;
      case "help":
        newHistory.push(<HelpMsg />);
        break;
      case "sudo help":
        newHistory.push(<HiddenMsg />);
        break;
      default:
        if (input.substr(0, 3) === "cd ") {
          newDir = newDir+ "/" + input.substr(3, input.length - 3);
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