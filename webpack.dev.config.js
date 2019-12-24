const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join }  = require('path');
const sass = require('sass');

module.exports = {
  mode: 'development',
  entry: join(__dirname, './src/entry.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
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
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass
            }
          }
        ]
      }
    ]
  },
  plugins: [
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
    })
  ],
  devtool: 'source-map',
  resolve: {
    alias: {
    }
  },
  devServer: {
    contentBase: 'public',
    historyApiFallback: true,
    host: '0.0.0.0'
  }
};
