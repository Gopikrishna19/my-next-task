const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const {version} = require('./package');

const DEVELOPMENT = 'development';

module.exports = (env, {mode}) => {
  const textLoader = mode === DEVELOPMENT ? 'style-loader' : CSSExtractPlugin.loader;

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
            textLoader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[local]--[hash:base64:5]',
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
      path: path.join(__dirname, 'public'),
      publicPath: '/'
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
      }),
      new CopyWebpackPlugin([
        {
          from: 'src/static',
          transform(fileContent, filePath) {
            if (/worker\.js$/.test(filePath)) {
              return fileContent.toString().replace(/{{version}}/, version);
            }

            return fileContent;
          }
        }
      ]),
      new webpack.DefinePlugin({
        'build.mode': JSON.stringify(mode)
      }),
      new CSSExtractPlugin({
        filename: '[id].index.css'
      })
    ]
  };

  if (mode === DEVELOPMENT) {
    config.devServer = {
      contentBase: '/',
      historyApiFallback: true,
      hot: true,
      port: 8080,
      stats: 'minimal'
    };
    config.devtool = 'source-map';
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }

  return config;
};
