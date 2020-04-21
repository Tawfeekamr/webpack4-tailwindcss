const webpack = require('webpack');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const Config = require('webpack-chain');

// Instantiate the configuration with a new API
const config = new Config();
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});
module.exports = {
  entry: './dist/js/main.js',
  cache: false,
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:8080/',
        files: ['dist/*.html'],
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    )
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: "css-loader", options: {importLoaders: 1},
          },
          'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: false
  }
};
