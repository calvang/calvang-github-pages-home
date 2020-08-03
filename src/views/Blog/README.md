# Markdown Blog

An automated blog built with with React and Typscript that uses rendered markdown files,

## Description

Data for the main blog page is loaded into a json file (see `../../resources/data/blog.json`), and markdown posts can be placed in the public folder.

## Dependencies

Markdown text is rendered using `markdown-to-jsx` after being fetched from a public directory. To install this dependency to your project, run:

`yarn add markdown-to-jsx @types/markdown-to-jsx` or `npm i --save markdown-to-jsx @types/markdown-to-jsx`

Comments and likes are handled through Facebook plugins since Github Pages does not support raw API calls. To add support for Facebook plugins, add this to the body of your `index.html` file:

```html
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '286386855951889',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v7.0'
    });
  };
</script>
<script async defer crossorigin="anonymous" 
  src="https://connect.facebook.net/en_US/sdk.js"></script>
```