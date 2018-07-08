const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, {mode}) => {
  const config = {
    entry: './src',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: [
            CSSExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'all',
            name: 'vendor',
            test: /node_modules/
          }
        }
      }
    },
    output: {
      filename: '[id].index.js',
      path: path.join(__dirname, 'public')
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
      }),
      new CopyWebpackPlugin([
        {from: 'src/static'}
      ]),
      new webpack.DefinePlugin({
        'build.mode': JSON.stringify(mode)
      }),
      new CSSExtractPlugin({
        filename: '[id].index.css'
      })
    ]
  };

  if (mode === 'development') {
    config.devServer = {
      port: 8080,
      stats: 'minimal'
    };
    config.devtool = 'source-map';
  }

  return config;
};
