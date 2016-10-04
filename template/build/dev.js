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
    progress: true,
    colors: true,
    proxy: {},
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [
          require('autoprefixer')({
            browsers: ['> 0%']
          }),
          require('precss')(),
        ],
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../client/index.html'),
    }),
  ],
});

module.exports = developmentConf;
