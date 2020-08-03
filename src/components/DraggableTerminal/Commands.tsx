import React from 'react';
import homeData from '../../resources/data/home.json';
import BrowserDetector from './BrowserDetector';

const Browser = BrowserDetector();
const OS = navigator.platform;
const Language = navigator.language;
const Vendor = navigator.vendor;

interface DisplayStrProps {
  path: string,
}

export const DisplayStr = ({ path }: DisplayStrProps) => 
<>
  <b style={{color:"lightgreen"}}>
    calvin.github.io:
  </b>
  <b style={{color:"#0080FF"}}>
    {`${path}$`}&nbsp;
  </b>
</>

export const HelpMsg = () => 
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

export const HiddenMsg = () => 
<>
  Special commands: <br />
   - neofetch | screenfetch | spookyfetch: show ascii art <br />
   - tux: summon tux <br />
</>

export const WhoAmI = () => 
<>
  I am Calvin Huang <br />
  {homeData[1].text} <br />  
</>

export const Screenfetch = () => 
<pre style={{ color:"cyan" }}>
@               __                                _  __   __         __       _     <br /> 
@   ____ ___ _ / /_  __ ___ _ ___  ___ _   ___ _ (_)/ /_ / /  __ __ / /      (_)___ <br /> 
@  / __// _ `// /| |/ // _ `// _ \/ _ `/_ / _ `// // __// _ \/ // // _ \ _  / // _ \<br /> 
@  \__/ \_,_//_/ |___/ \_,_//_//_/\_, /(_)\_, //_/ \__//_//_/\_,_//_.__/(_)/_/ \___/<br /> 
@                                /___/   /___/                                      <br />
@  <b>Operating System: </b><i style={{ color: "white" }}>{OS}</i> <br />
@  <b>Browser: </b><i style={{ color: "white" }}>{Browser}</i> <br />
@  <b>Vendor: </b><i style={{ color: "white" }}>{Vendor}</i> <br />
@  <b>Window: </b><i style={{ color: "white" }}>{`${window.innerWidth}x${window.innerHeight}`}</i> <br />
@  <b>Resolution: </b><i style={{ color: "white" }}>{`${window.screen.availWidth}x${window.screen.availHeight}`}</i> <br />
@  <b>Language: </b><i style={{ color: "white" }}>{Language}</i> <br />
</pre>

export const Neofetch = () => 
<pre style={{ color:"lightsalmon" }}>
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
#  <b>Operating System: </b><i style={{ color: "white" }}>{OS}</i>                                                                    #<br />
#  <b>Browser: </b><i style={{ color: "white" }}>{Browser}</i>                                                                        #<br />
#  <b>Vendor: </b><i style={{ color: "white" }}>{Vendor}</i>                                                                          #<br />
#  <b>Window: </b><i style={{ color: "white" }}>{`${window.innerWidth}x${window.innerHeight}`}</i>                                    #<br />
#  <b>Resolution: </b><i style={{ color: "white" }}>{`${window.screen.availWidth}x${window.screen.availHeight}`}</i>                  #<br />
#  <b>Language: </b><i style={{ color: "white" }}>{Language}</i>                                                                      #<br />                                               #<br />
#/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/#<br />
</pre>

export const Spookyfetch = () =>
<pre style={{ color:"magenta" }}>
!   ▄▄·  ▄▄▄· ▄▄▌  ▌ ▐· ▄▄▄·  ▐ ▄  ▄▄ •  ▄▄ • ▪ ▄▄▄▄▄ ▄ .▄▄• ▄▌▄▄▄▄· ▪        <br />
!  ▐█ ▌▪▐█ ▀█ ██• ▪█·█▌▐█ ▀█ •█▌▐█▐█ ▀ ▪▐█ ▀ ▪██•██  ██▪▐██▪██▌▐█ ▀█▪██ ▪     <br />
!  ██ ▄▄▄█▀▀█ ██▪ ▐█▐█•▄█▀▀█ ▐█▐▐▌▄█ ▀█▄▄█ ▀█▄▐█·▐█.▪██▀▐██▌▐█▌▐█▀▀█▄▐█· ▄█▀▄ <br />
!  ▐███▌▐█ ▪▐▌▐█▌▐▌███ ▐█ ▪▐▌██▐█▌▐█▄▪▐█▐█▄▪▐█▐█▌▐█▌·██▌▐▀▐█▄█▌██▄▪▐█▐█▌▐█▌.▐▌<br />
!  ·▀▀▀  ▀  ▀ .▀▀▀. ▀   ▀  ▀ ▀▀ █▪·▀▀▀▀▀·▀▀▀▀ ▀▀▀▀▀▀ ▀▀▀ · ▀▀▀ ·▀▀▀▀▀▀▀▀ ▀█▄▀▪<br />
!  <b>Operating System: </b><i style={{ color: "white" }}>{OS}</i> <br />
!  <b>Browser: </b><i style={{ color: "white" }}>{Browser}</i> <br />
!  <b>Vendor: </b><i style={{ color: "white" }}>{Vendor}</i> <br />
!  <b>Window: </b><i style={{ color: "white" }}>{`${window.innerWidth}x${window.innerHeight}`}</i> <br />
!  <b>Resolution: </b><i style={{ color: "white" }}>{`${window.screen.availWidth}x${window.screen.availHeight}`}</i> <br />
!  <b>Language: </b><i style={{ color: "white" }}>{Language}</i> <br />
</pre>
