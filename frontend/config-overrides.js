const { merge } = require('webpack-merge');
const path = require('path');

module.exports = function override(config, env) {
  return merge(config, {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        "stream": require.resolve("stream-browserify")
        // Add other polyfills if needed
      },
      alias: {
        // You can also add aliases if needed
      },
    },
  });
};
