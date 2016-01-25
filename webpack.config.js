var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extract = new ExtractTextPlugin("[hash]/styles.css", {
  allChunks: true
})

module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    path: path.resolve("./dist"),
    filename: "[hash]/scripts.js"
  },
  externals: {
    "twemoji": "twemoji"
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  vue: {
    loaders: {
      css: extract.extract("css"),
      sass: extract.extract("css!sass")
    }
  },
  plugins: [
    extract,
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
