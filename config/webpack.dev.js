// ----------------------
// webpack.dev.js
// ----------------------

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:6080/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map',
  },
  devServer: {
    port: 6080,
    historyApiFallback: true,
    stats: 'minimal'
  }
});
