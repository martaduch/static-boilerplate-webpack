// ----------------------
// webpack.common.js
// ----------------------

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var autoprefixer = require('autoprefixer');
var helpers = require('./helpers');

module.exports = {
  entry: {
    vendor: helpers.root('src/js/vendor.js'),
    main: helpers.root('src/js/main.js')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'autoprefixer-loader',
            'resolve-url-loader',
            'sass-loader?sourceMap'
          ]
        })
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [/(node_modules|bower_components)/],
        options: {
          failOnWarning: false,
          failOnError: false,
        },
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/(node_modules|bower_components)/]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.[hash].css'),
    new CommonsChunkPlugin({
      name: ['main', 'vendor']
    }),
    new HtmlWebpackPlugin({
      title: 'project-name',
      template: 'src/index.html'
    }),
  ],
  performance: {
    hints: false
  },
};
