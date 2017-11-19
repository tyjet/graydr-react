const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglify-js-plugin');
const UglifyJSPluginConfig = new UglifyJSPlugin({
  sourceMap: true
});
const common = require('./webpack.common');

module.exports = merge(common, {
  plugins: [
    UglifyJSPluginConfig,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
