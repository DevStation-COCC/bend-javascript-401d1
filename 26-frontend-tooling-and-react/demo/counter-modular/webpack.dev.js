// These files almost always written by a single, senior level dev team
// Small changes might be made after the fact, but not too much
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const { HotModuleReplacementPlugin } = require('webpack');

// Start new config object for dev env
const webpackDevConfig = {};
webpackDevConfig.module = {};
webpackDevConfig.mode = 'development';
webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: './build',
  open: true, // When server starts, open default browser to dev url
  hot: true, // Allow for hot module replacement
  historyApiFallback: true, // Keep track of faked URL routes in browser for SPA styles
};

// Add plugins here
webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

webpackDevConfig.module.rules = [{
  // Test for sass files
  test: /\.scss$/,
  // If test passes on file, use the following plugins...
  use: [{
    loader: 'style-loader', // Adds CSS to the DOM by injecting a <style> tag
  },
  {
    loader: 'css-loader', // Interprets @import and url() like import/require() and will resolve them.
    options: {
      sourceMap: true,
    },
  },
  {
    loader: 'sass-loader', // Loads a Sass/SCSS file and compiles it to CSS.
    options: {
      sourceMap: true,
    },
  },
  ],

}];

// Combines both config files into one
// Therefore, if dev 
module.exports = merge(commonConfig, webpackDevConfig);
