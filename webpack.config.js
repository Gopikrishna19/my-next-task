const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    port: 8080,
    stats: 'minimal'
  },
  devtool: 'source-map',
  entry: './src',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new CopyWebpackPlugin([
      {from: 'src/static'}
    ])
  ]
};
