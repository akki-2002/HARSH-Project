const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
  return merge(config, {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer/")
        // Add other polyfills if needed
      },
      alias: {
        // You can also add aliases if needed
      },
    },


    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],

    
  });
};
