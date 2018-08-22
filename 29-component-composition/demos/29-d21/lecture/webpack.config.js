'use strict'

const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackConfig = module.exports = {}

webpackConfig.devtool = 'eval-source-map'
webpackConfig.devServer = { historyApiFallback: true }
webpackConfig.entry = `${__dirname}/src/main.js`
webpackConfig.output = {
  filename: 'bundle-[hash].js',
  path: `${__dirname}/build`,
  publicPath: '/',
}

webpackConfig.plugins = [
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    new ExtractTextPlugin('bundle-[hash].js'),
]

webpackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'scss-loader']),
    },
  ],
}


