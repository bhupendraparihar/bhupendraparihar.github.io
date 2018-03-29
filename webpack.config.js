var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '/');
var APP_DIR = path.resolve(__dirname, '/');

var config = {
  entry: __dirname+ '/format1.jsx',
  output: {
    path: __dirname + '/script',
    filename: 'format1.js'
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
      loaders: [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
          }
      ]
  }
};

module.exports = config;