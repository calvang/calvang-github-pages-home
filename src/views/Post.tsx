import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import blogData from '../resources/data/blog.json';
import '../css/Blog.css';
import '../css/Home.css';
import '../css/App.css';

interface PostProps {
  index: number,
}
interface PostState {
  markdown: any,
}

export default class Post extends Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    console.log("Post mounted")
    const { index } = this.props;
    const file = process.env.PUBLIC_URL + "/posts/" + blogData.posts[index].file;
    const filePath = file //require(file);

    fetch(filePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text
        })
      });
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="App-font w3-container Blog-container parallax-scroll" id="main">
        <div className="w3-justify w3-text-dark-grey"
          style={{ height:"auto" }}>
          <table className="w3-content"
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
        </div>
      </div>
    );
  }
}