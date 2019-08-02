const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'environment': JSON.stringify(process.env.environment)
      }
    })
  ]
};