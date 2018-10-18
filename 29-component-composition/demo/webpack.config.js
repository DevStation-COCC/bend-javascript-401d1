const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: '#content'
})

module.exports = {
  devServer: {
    contentBase: './build',
    open: true,
    historyApiFallback: true,
  },
  entry: './src/App.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.[hash].js'
  },
  plugins: [htmlWebpackPluginConfig],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
    ]
  }
}
