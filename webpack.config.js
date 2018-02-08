var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '/');
var APP_DIR = path.resolve(__dirname, '/');

var config = {
  entry: {
    index: __dirname+ '/index.jsx',
    format1: __dirname+ '/format1.jsx'
  },
  output: {
    path: __dirname + '/script',
    filename: '[name].js'
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