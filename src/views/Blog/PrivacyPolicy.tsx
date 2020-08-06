import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import '../../css/Blog.css';
import '../../css/Home.css';
import '../../css/App.css';

interface PrivacyProps {}
interface PrivacyState {
  markdown: any
}

export default class PrivacyPolicy extends Component<PrivacyProps, PrivacyState> {
  constructor(props: PrivacyProps) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  reloadPage = () => {
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    var now = Date.now();
    var timeDiff = currentDocumentTimestamp + 1000;
    if (now > timeDiff) {
        window.location.reload();
    }
  }

  componentDidMount() {
    const file = process.env.PUBLIC_URL + "Privacy-Policy.md";
    const filePath = file;

    // force reload for Facebook plugins
    this.reloadPage();

    fetch(filePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text
        })
      })
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="App-font w3-container Blog-container blog-parallax-scroll" id="main">
        <div className="w3-text-dark-grey"
          style={{ height:"auto" }}>
          <table className="w3-content w3-hide-small"
            style={{ marginTop:"40px", marginBottom:"20px", borderCollapse:"separate", borderSpacing:"32px 64px" }}>
            <tbody>
              <tr>
                <td className="w3-white w3-card w3-padding-large">
                  <Markdown options={{ forceBlock: true }}>
                    {markdown}
                  </Markdown>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w3-content w3-hide-medium w3-hide-large"
            style={{ marginTop:"40px", marginBottom:"20px", borderCollapse:"separate", borderSpacing:"0px 20px" }}>
            <tbody>
              <tr>
                <td className="w3-white w3-card w3-padding-large">
                  <Markdown options={{ forceBlock: true }}>
                    {markdown}
                  </Markdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}