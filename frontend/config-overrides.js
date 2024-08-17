const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = function override(config, env) {
  return merge(config, {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        // Add other polyfills as needed
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser', // Add this if you need process polyfill
      }),
    ],
  });
};
