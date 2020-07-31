import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import '../css/Home.css';
import '../css/App.css';

interface PostProps {
  file: string,
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
    const { file } = this.props;
    const filePath = require(file);

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
      <Markdown options={{ forceBlock: true }}>
        {markdown}
      </Markdown>
    );
  }
}