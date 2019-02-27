'use strict';

const { join } = require('path');
const HWP = require('html-webpack-plugin');

module.exports = (env) => {
  const dev = !env.production || true;

  const cfg = {
    mode: dev ? 'development' : 'production',
    entry: './src/index',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpe?g|ico|svg|eot|ttf|woff?)$/,
          loader: 'file-loader'
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    plugins: [
      new HWP({
        template: './src/index-template.html',
        minify: {
          collapseWhitespace: true
        }
      })
    ],
  };

  if (dev) {
    cfg.devServer = {
      contentBase: './dist',
      port: 3000,
      stats: 'minimal',
    };
    cfg.devtool = 'source-map';
  };

  return cfg;
};
