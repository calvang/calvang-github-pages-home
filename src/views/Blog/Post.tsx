import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import blogData from '../../resources/data/blog.json';
import '../../css/Blog.css';
import '../../css/Home.css';
import '../../css/App.css';

interface PostProps {
  index: number,
}
interface PostState {
  markdown: any,
  fbinit: boolean
}

export default class Post extends Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {
      markdown: "",
      fbinit: false
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
    const { index } = this.props;
    const file = process.env.PUBLIC_URL + "/posts/" + blogData.posts[index].file;
    const filePath = file //require(file);

    // force reload for Facebook plugins
    this.reloadPage();

    fetch(filePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text,
          fbinit: true
        })
      })
    // setTimeout(() => {
    //   this.setState({ fbinit: true });
    // }, 5000)
    // setTimeout(() => {
    //   this.forceUpdate();
    // }, 5000)
  }

  render() {
    const { index } = this.props;
    const { markdown, fbinit } = this.state;
    const postName = blogData.posts[index].file.slice(0, -3);
    const postUrl = `https://calvang.github.io/#/Blog/${postName}`;
    //const numPosts = blogData.posts.length;
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
                  <hr className="w3-opacity" style={{ width: "100%", borderTop: "1px solid black" }} />
                  <div className="fb-like" data-href={postUrl} data-width="" data-layout="button"
                    data-lazy="false" data-action="like" data-size="large" data-share="true"></div>
                </td>
              </tr>
              <tr>
                <td className="w3-white w3-card w3-padding-large">
                  <div className="fb-comments" data-href={postUrl} data-numposts="5" data-width="100%"></div>
                  { !fbinit ? <p>Loading comments...</p> : '' }
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
                  <hr className="w3-opacity" style={{ width: "100%", borderTop: "1px solid black" }} />
                  <div className="fb-like" data-href={postUrl} data-width="" data-layout="button"
                    data-lazy="false" data-action="like" data-size="large" data-share="true"></div>
                </td>
              </tr>
              <tr>
                <td className="w3-white w3-card w3-padding-large">
                  <div className="fb-comments" data-href={postUrl} data-numposts="5" data-width="100%"></div>
                  { !fbinit ? <p>Loading comments...</p> : '' }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}