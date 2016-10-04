const webpack = require('webpack');
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const productionConf = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/app.[hash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: 'dist/',
  },
  stats: { children: false },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 3 versions']
          }),
        ],
        css: ExtractTextPlugin.extract({
          loader: "css-loader",
          fallbackLoader: "vue-style-loader"
        })
      }
    }),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor_vue.js',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 自动注入 html
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      template: path.resolve(__dirname, '../client/index.html'),
    }),
    // Gzip
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ]
})

module.exports = productionConf
