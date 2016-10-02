var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../client/entry-client.js'),
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      'fastclick',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js',
      client: path.resolve(__dirname, '../client'),
      views: path.resolve(__dirname, '../client/views'),
      components: path.resolve(__dirname, '../client/components'),
      utils: path.resolve(__dirname, '../client/App/utils'),
    },
    extensions: ['.js', '.vue'],
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url?limit=10000&name=images/[name].[ext]',
    }, {
      test: /\.(woff|svg|ttf|eot)$/,
      loader: 'url?limit=10000&name=iconfont/[name].[ext]',
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    }, ],
  },
  eslint: {
    configFile: '.eslintrc',
  },
  vue: {
    postcss: [
      require('postcss-salad'),
    ],
    css: ExtractTextPlugin.extract({
      loader: 'css-loader!postcss-loader',
      fallbackLoader: 'vue-style-loader',
    }),
  },
  plugins: [],
};

if (process.env.NODE_ENV === 'dev') {
  // 配置开发服务器
  module.exports.devServer = {
    historyApiFallback: true,
    hot: true,
    progress: false,
    colors: true,
    proxy: {},
  };
  module.exports.devtool = '#cheap-module-eval-source-map';

  module.exports.plugins = [
    // 自动注入 html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../client/index.html'),
    }),
  ];
}
