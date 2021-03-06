import React from 'react';
import codesandbox from '../resources/images/codesandbox.png';
import '../css/App.css';
import '../css/Home.css';

export default function Footer() {
  return(
    <footer className="w3-bar w3-container w3-white w3-card w3-text-black App-font">
      <div className="w3-content">
        <table className="" style={{ width:"100%" }}>  
          <tbody >
            <tr>
              <td className = "w3-media w3-right">
                <div className="w3-bar-item"
                  style={{ fontSize: 23, position:"relative", top:"6px", marginRight:"-12px" }}>
                  Visit me on:
                </div>
              </td>
              <td className="w3-media ">
                <div style={{ position:"relative", top:"6px", marginLeft:"-12px" }}>
                  <div className="w3-bar-item" style={{ width: "46px" }}>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/calvang">
                      <i className="fa fa-github w3-xxlarge w3-hover-opacity"></i>
                    </a>
                  </div>
                  <div className="w3-bar-item" style={{ width:"44px" }}>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/calvin-huang-9385ba165">
                      <i className="fa fa-linkedin-square w3-xxlarge w3-hover-opacity"
                        style={{ color: "steelblue" }}></i>
                    </a>
                  </div>
                  <div className="w3-bar-item" style={{ width:"50px" }}>
                    <a rel="noopener noreferrer" target="_blank" href="https://codesandbox.io/u/calvang">
                      <img src={codesandbox} className="w3-hover-opacity" alt="codesandbox"
                        style={{ width:"36px", marginBottom:"11px" }}/>
                    </a>
                  </div>
                  <div className="w3-bar-item" style={{ width:"50px" }}>
                    <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/calvang">
                      <i className="fa fa-codepen w3-xxlarge w3-hover-opacity"></i>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}