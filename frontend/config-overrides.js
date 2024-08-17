const { merge } = require('webpack-merge');
const path = require('path');

module.exports = function override(config, env) {
  return merge(config, {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'), // Include this if you're also encountering buffer-related issues
        // Add other polyfills as needed
      },
      alias: {
        // You can also add aliases if needed
      },
    },
  });
};
