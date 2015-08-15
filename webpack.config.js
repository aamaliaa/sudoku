var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/js/index.js',

  resolve: {
    extensions: ['', '.js', '.css', '.styl']
  },

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('src/css/[name].css')
  ]

};
