# Sass in React with Webpack
## Description
This guide is for using Sass (.scss specifically) with your React project. It is assumed that you have a project spun up with webpack and have hot module replacement installed and working. This should reload on changes in your Sass files. If you are building for production, change the "disable" option to "false" in the ExtractTextPlugin configuration in the "plugins" section of the Webpack config file. 

## Installation
_NPM package installation_
* $ npm install sass-loader node-sass css-loader style-loader extract-text-webpack-plugin -D


---
_Changes to webpack.config.js_
--
```
...
const ExtractTextPlugin = require('extract-text-webpack-plugin');
...
```

```
...
module: {
  rules: [
  ...
  {
    test: /\.scss$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "sass-loader" // compiles Sass to CSS
    }]
  }
...
```

```
...
  plugins: [
  ...
    new ExtractTextPlugin('dist/styles/main.css', {
      allChunks: true,
      disable: true
    })
  ]
};
```

---
_Changes to index.jsx_
--
```
...
import style from './styles/main.scss';
...
```

---
