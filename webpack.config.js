const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { join }  = require('path');
const sass = require('node-sass');

module.exports = {
  mode: 'production',
  entry: join(__dirname, './src/entry.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          knownHelpersOnly: false,
          inlineRequires: /\/assets\/(:?images|audio|video)\//ig,
          partialDirs: [join(__dirname, './src/templates')],
        }
      },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            },
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'public' }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery',
      'Backbone': 'backbone',
      _: 'lodash',
      'underscore': 'lodash'
    }),
    new HtmlWebpackPlugin({
      description: 'this is a really great website!',
      title: 'Backbone starter application',
      template: 'src/index.hbs'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.mjs']
  }
};
