const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, {mode}) => {
  const config = {
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
      ])
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
