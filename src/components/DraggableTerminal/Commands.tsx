import React from 'react';
import homeData from '../../resources/data/home.json';
import BrowserDetector from './BrowserDetector';
import manjaro from '../../resources/images/manjaro.png';

const Browser = BrowserDetector();
const OS = navigator.platform;
const Language = navigator.language;
var Vendor = navigator.vendor;
if (Vendor === "") Vendor = "Unknown"

export function getIP(): any {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(response => {
      return response.ip;
    });
}

interface DisplayStrProps {
  path: string,
  userId: string
}

export const DisplayStr = ({ path, userId }: DisplayStrProps) => {
  return (
    <>
      <b style={{ color: "lightgreen" }}>
        {userId}@calvang.github.io:
          </b>
      <b style={{ color: "#0080FF" }}>
        {`${path}$`}&nbsp;
          </b>
    </>
  );
}

export const HelpMsg = () => 
<>
  Supported commands: <br />
   - help: print help message <br />
   - whoami: print about blurb <br />
   - cd [path(optional)]: navigate to different pages <br />
   - pwd: print current path <br />
   - ls [path(optional)] list subpaths of specified page; defaults to current page <br />
   - tree [path(optional)]: print path map from specified page; defaults to current page <br />
   - sitemap: alias for tree ~; shows tree from home<br />
   - history: print bash cmd history <br />
   - alias: list current aliases <br />
   - aliases [alias]='[cmd]'': assign new alias <br />
   - sudo help: ??? <br />
</>

export const HiddenMsg = () => 
<>
  Special commands: <br />
   - neofetch: detailed system information <br />
   - screenfetch: replay welcome art <br />
   - blockfetch: blocky logo art <br />
   - spookyfetch: 2spooky4u  <br />
   - tux: summon tux <br />
   - goose: beware the honkening <br />
   - sudo unlock: <i className="fa fa-exclamation-triangle w3-large"></i> <br />
  </>

export const ForbiddenMsg = () => 
<>
  Forbidden commands: <br />
  - {":(){:|:&};:"} (don't try this at home (no seriously don't!!!!)) <br />
   <i><b> DISCLAIMER: </b>I am not responsible for any files or damage that are affected by your choice to execute this. This is purely for experimental purposes and can crash your browser and/or computer.</i> <br />  
</>

export const WhoAmI = () => 
<>
  I am Calvin Huang <br />
  {homeData[1].text} <br />  
</>

export const Screenfetch = () => 
<pre style={{ color: "cyan" }}>
@               __                                _  __   __         __       _     <br /> 
@   ____ ___ _ / /_  __ ___ _ ___  ___ _   ___ _ (_)/ /_ / /  __ __ / /      (_)___ <br /> 
@  / __// _ `// /| |/ // _ `// _ \/ _ `/_ / _ `// // __// _ \/ // // _ \ _  / // _ \<br /> 
@  \__/ \_,_//_/ |___/ \_,_//_//_/\_, /(_)\_, //_/ \__//_//_/\_,_//_.__/(_)/_/ \___/<br /> 
@                                /___/   /___/                                      <br />
@  <b>Operating System: </b><span style={{ color: "white" }}>{OS}</span> <br />
@  <b>Browser: </b><span style={{ color: "white" }}>{Browser}</span> <br />
@  <b>Vendor: </b><span style={{ color: "white" }}>{Vendor}</span> <br />
@  <b>Window: </b><span style={{ color: "white" }}>{`${window.innerWidth}x${window.innerHeight}`}</span> <br />
@  <b>Resolution: </b><span style={{ color: "white" }}>{`${window.screen.availWidth}x${window.screen.availHeight}`}</span> <br />
@  <b>Language: </b><span style={{ color: "white" }}>{Language}</span> <br />
</pre>

export const Blockfetch = () => 
<pre style={{ color: "lightsalmon" }}>
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
#  <b>Operating System: </b><span style={{ color: "white" }}>{OS}</span>                                                                    #<br />
#  <b>Browser: </b><span style={{ color: "white" }}>{Browser}</span>                                                                        #<br />
#  <b>Vendor: </b><span style={{ color: "white" }}>{Vendor}</span>                                                                          #<br />
#  <b>Window: </b><span style={{ color: "white" }}>{`${window.innerWidth}x${window.innerHeight}`}</span>                                    #<br />
#  <b>Resolution: </b><span style={{ color: "white" }}>{`${window.screen.availWidth}x${window.screen.availHeight}`}</span>                  #<br />
#  <b>Language: </b><span style={{ color: "white" }}>{Language}</span>                                                                      #<br />                                               #<br />
#/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/#<br />
</pre>

export const Spookyfetch = () =>
<pre style={{ color: "magenta" }}>
!   ▄▄·  ▄▄▄· ▄▄▌  ▌ ▐· ▄▄▄·  ▐ ▄  ▄▄ •  ▄▄ • ▪ ▄▄▄▄▄ ▄ .▄▄• ▄▌▄▄▄▄· ▪        <br />
!  ▐█ ▌▪▐█ ▀█ ██• ▪█·█▌▐█ ▀█ •█▌▐█▐█ ▀ ▪▐█ ▀ ▪██•██  ██▪▐██▪██▌▐█ ▀█▪██ ▪     <br />
!  ██ ▄▄▄█▀▀█ ██▪ ▐█▐█•▄█▀▀█ ▐█▐▐▌▄█ ▀█▄▄█ ▀█▄▐█·▐█.▪██▀▐██▌▐█▌▐█▀▀█▄▐█· ▄█▀▄ <br />
!  ▐███▌▐█ ▪▐▌▐█▌▐▌███ ▐█ ▪▐▌██▐█▌▐█▄▪▐█▐█▄▪▐█▐█▌▐█▌·██▌▐▀▐█▄█▌██▄▪▐█▐█▌▐█▌.▐▌<br />
!  ·▀▀▀  ▀  ▀ .▀▀▀. ▀   ▀  ▀ ▀▀ █▪·▀▀▀▀▀·▀▀▀▀ ▀▀▀▀▀▀ ▀▀▀ · ▀▀▀ ·▀▀▀▀▀▀▀▀ ▀█▄▀▪<br />
!  <b>Operating System: </b><span style={{ color: "white" }}>{OS}</span> <br />
!  <b>Browser: </b><span style={{ color: "white" }}>{Browser}</span> <br />
!  <b>Vendor: </b><span style={{ color: "white" }}>{Vendor}</span> <br />
!  <b>Window: </b><span style={{ color: "white" }}>{`${window.innerWidth}x${window.innerHeight}`}</span> <br />
!  <b>Resolution: </b><span style={{ color: "white" }}>{`${window.screen.availWidth}x${window.screen.availHeight}`}</span> <br />
!  <b>Language: </b><span style={{ color: "white" }}>{Language}</span> <br />
</pre>

interface NeofetchProps {
  ip: string,
  userId: string, 
}

export const Neofetch = ({ userId }: NeofetchProps) =>
  <pre style={{ color: "lawngreen" }}>
    <div style={{ display: "flex" }}>
      <div style={{ flex: "left", paddingRight: "20px" }}>
        <img src={manjaro} alt="logo" style={{ zoom: "50%" }} />
      </div>
      <div style={{ flex: "left" }}>
        <b>{userId}</b><span style={{ color: "white" }}>@</span><b>calvang.github.io</b> <br />
        <span style={{ color: "white" }}>---------------------------</span> <br />
        <b>OS: </b><span style={{ color: "white" }}>{OS}</span> <br />
        <b>Host: </b><span style={{ color: "white" }}>calvang.github.io</span> <br />
        {/* <b>IP: </b><span style={{ color: "white" }}>{ip}</span> <br /> */}
        <b>Browser: </b><span style={{ color: "white" }}>{Browser}</span> <br />
        <b>Vendor: </b><span style={{ color: "white" }}>{Vendor}</span> <br />
        <b>Window: </b><span style={{ color: "white" }}>{`${window.innerWidth}x${window.innerHeight}`}</span> <br />
        <b>Resolution: </b><span style={{ color: "white" }}>{`${window.screen.availWidth}x${window.screen.availHeight}`}</span> <br />
        <b>Language: </b><span style={{ color: "white" }}>{Language}</span> <br />
      </div>
    </div>
</pre>

export const Goose = () =>
<pre style={{ color: "white" }}>
{"                                   ___       "}<br />
{'                               ,-""   `.     '}<br />
{"            HONK HONK        ,'  _   e )`-._ "}<br />
{"                            /  ,' `-._<.===-'"}<br />
{"                  AM GOOSE /  /              "}<br />
{"                          /  ;               "}<br />
{"              _          /   ;               "}<br />
{` (\\._    _.-"" ""--..__,'    |               `}<br />
{' <_  `-""                     \\              '}<br />
{"  <`-                          :             "}<br />
{"   (__   <__.                  ;             "}<br />
{"     `-.   '-.__.      _.'    /              "}<br />
{"        \\      `-.__,-'    _,'               "}<br />
{"         `._    ,    /__,-'                  "}<br />
{`            ""._\\__,'< <____                 `}<br />
{"                 | |  `----.`.               "}<br />
{"                 | |        \\ `.             "}<br />
{"                 ; |___      \\-``            "}<br />
{"                 \\   --<                     "}<br />
{"                  `.`.<                      "}<br />
{"                    `-'                      "}<br />
</pre>
