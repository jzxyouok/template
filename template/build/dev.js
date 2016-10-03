const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const developmentConf = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    progress: false,
    colors: true,
    proxy: {},
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../client/index.html'),
    }),
  ],
});

module.exports = developmentConf;
