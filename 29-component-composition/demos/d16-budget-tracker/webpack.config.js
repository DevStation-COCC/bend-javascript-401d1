'use strict'
// important webpack concepts entry output plugins loaders

const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
  entry: `${__dirname}/src/main.js`,
  output: {
    publicPath: '/',
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
  },
  plugins: [
    new ExtractPlugin('bundle-[hash].css'),
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
  ],
  module: {
    rules: [
      {
        test:  /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
}











