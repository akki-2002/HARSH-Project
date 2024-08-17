const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack'); // Ensure you import webpack

module.exports = function override(config, env) {
  return merge(config, {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/') || false, // Adding the buffer polyfill
        // Add other polyfills if needed
      },
      alias: {
        // You can also add aliases if needed
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'], // Automatically import Buffer
      }),
    ],
  });
};
