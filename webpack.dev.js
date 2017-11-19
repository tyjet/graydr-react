const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: './dist',
    historyApiFallback: true,
    host: '0.0.0.0',
    noInfo: true,
    port: 3100
  },
});
