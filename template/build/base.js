const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: path.resolve(__dirname, '../client/entry-client.js'),
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      'element-ui',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js',
      client: path.resolve(__dirname, '../client'),
      views: path.resolve(__dirname, '../client/views'),
      components: path.resolve(__dirname, '../client/components'),
      utils: path.resolve(__dirname, '../client/App/utils'),
    },
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
      include: [path.resolve(__dirname, "../client")],
      exclude: /node_modules/,
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url?limit=10000&name=images/[name].[ext]',
    }, {
      test: /\.(woff|svg|ttf|eot)$/,
      loader: 'url?limit=10000&name=iconfont/[name].[ext]',
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 3 versions']
          }),
        ],
        loaders: {
          scss: 'style!css!sass',
        },
      }
    }),
  ],

}
