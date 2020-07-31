# calvang.github.io

Github pages personal website for Calvin Huang.

### Description

The client-side web app built using React and Typescript. Page information and data are indexed in `src/resources/data`.
External project data is fetched using REST API calls to a basic Flask backend that retrieves project data. The Github Pages version of this site does not have dynamic server-side processing, so it simply loads the data on rendering rather than fetching it from the API.

### Features

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