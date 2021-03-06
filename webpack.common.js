const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body',
});
const HtmlWebpackPluginPrivacy = new HtmlWebpackPlugin({
  filename: 'privacy.html',
  template: './app/privacy.html',
});
const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    modules: ['./node_modules', './app'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [CleanWebpackPluginConfig, HtmlWebpackPluginConfig, HtmlWebpackPluginPrivacy],
};
