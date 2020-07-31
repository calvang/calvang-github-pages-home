import React, { Component } from 'react';
import '../css/Blog.css';
import '../css/Home.css';
import '../css/App.css';
import blogData from '../resources/data/blog.json';


interface BlogProps {}
interface BlogState {
  posts: any[],
}

export default class Blog extends Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);
    this.state = {
      posts: blogData.posts,
    };
  }
  
  render() {
    const { posts } = this.state;
    var urlBase: string = "https://calvang.github.io/blog/post";
    return (
      <div className="App-font w3-container Blog-container parallax-scroll" id="main">
      {/* title page */}
      <header className="w3-content w3-center">
        <div className="vertical-center">
            <h1 className="w3-jumbo"><span className="w3-hide-small">My</span> Blog</h1>
            <p>Where I write about my latest ventures and interests.</p>
        </div>
      </header>
        <div className="w3-justify w3-text-dark-grey"
          style={{ height:"auto" }}>
          <table className="w3-content"
            style={{ marginTop:"-40px", marginBottom:"20px", borderCollapse:"separate", borderSpacing:"32px 64px" }}>
            <tbody>
              {
                posts.map((post, i) => {
                  return (
                    <tr key={post.name} style={{ height: "auto" }}>
                      <td className="w3-white w3-card w3-padding-large w3-hide-small" colSpan={ 2 }
                        style={{ height: "100%"/*, backgroundImage: `url(${postProfiles[i]})`*/ }}>
                        {/* <div style={{ display:"inline-block" }}> */}
                        {/* <div style={{ position:"relative"}}> */}
                        <h3 className="w3-text-black">{post.title}</h3>
                        <hr className="w3-opacity" style={{ width: "200px", borderTop: "1px solid black" }} />
                        <p><i>{post.file.substr(0,10)}</i></p>
                        <p className="w3-padding-bottom ">
                          {post.description}
                        </p>
                        <a className="plain-link" rel="noopener noreferrer" target="_blank" href={urlBase + post.file}
                          style={{ marginLeft: "20px", fontSize: 18 }}>
                          <span style={{ bottom: "6px", position: "relative" }}>View post</span>
                          <i className="fa fa-angle-double-right w3-xxlarge w3-hover-opacity"
                            style={{ marginLeft: "6px" }}></i>
                        </a>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
        </div>
      </div>
    );
  }
}
