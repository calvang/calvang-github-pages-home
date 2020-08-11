# calvang.github.io

Github pages personal website for Calvin Huang.

### Description

The client-side web app built using React and Typescript. Page information and data are indexed in `src/resources/data`.
The dynamic implementation uses REST API calls to a basic Flask backend that retrieves project and home page data. The Github Pages version of this site does not have dynamic server-side processing, so it simply loads the data on rendering rather than fetching it from the API.

### Features

#### Integrated Terminal

Draggable+resizable terminal for navigation and finding information. For this feature, I attempted to emulate the desktop Linux terminal experience with a floating terminal that allows nagivation of the website and contains a few easter eggs!

View this feature at: https://github.com/calvang/calvang-github-pages-home/tree/master/src/components/DraggableTerminal

#### Markdown Blog

Blog generated from parsing Markdown files with the `markdown-to-jsx` library and rendering the JSX output dynamically. Formatting is adapted to fit the theme of the website. Additional support for Facebook likes and comments are included.

View this feature at: https://github.com/calvang/calvang-github-pages-home/tree/master/src/views/Blog

#### Progressiveness

This web app is optimized for near-native performance on both desktop and mobile devices.
To achieve this, the site utilizes next-gen image formats and a service worker to maximize online and offline performance.
In accordance with Google guidelines, these are the Google Lighthouse scores: 

#### Automatic and Parallax Scrolling

The background images on this website feature parallax scrolling, meaning images are fixed while the page scrolls.
This applies a modern look that is complemented by the automatic scrolling. While home page in particular does have a dotted nav bar for convenience, an automatic scrolling functionality has been implemented from the ground up to automate navigation between page sections.
However, this is disabled on mobile devices because of their decreased readability and the increased page dimensions.

#### Serverless Frontend and Hash Routing

Instead of utilizing browser-routing, React routes are accessed and rendered through Hash Routing, which is necessary due to the static limitations of Gtihub Pages.
As a result, the application runs on the client machine aside from the backend API.
