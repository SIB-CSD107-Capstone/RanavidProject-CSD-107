/* eslint-disable no-useless-escape */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [{
      test: '/\.html$/',
      loader: 'prerender-loader?string',
    },
    {
      test: /\.(scss|css)$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
      ],
    },
    {
      test: /\.(woff|woff2|ttf|eot)$/,
      use: 'file-loader?name=fonts/[name].[ext]!static',
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
      },
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{
        // favicon: path.resolve(__dirname, './src/public/img/favicon.png'),
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'dist/'),
      }],
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new WebpackPwaManifest({
      name: 'Ranavid App',
      short_name: 'Ranavid Lite',
      description: 'Aplikasi Web Pencarian Rumah Sakit Rawat Inap Covid19',
      background_color: '#121E2A',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [{
        src: path.resolve('src/public/img/favicon.png'),
        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
      },
      {
        src: path.resolve('src/public/img/favicon.png'),
        size: '1024x1024',
        purpose: 'maskable',
      },
      {
        src: path.resolve('src/public/img/favicon.png'),
        sizes: [120, 152, 167, 180, 1024],
        destination: path.join('icons', 'ios'),
        ios: true,
      },
      {
        src: path.resolve('src/public/img/favicon.png'),
        size: 1024,
        destination: path.join('icons', 'ios'),
        ios: 'startup',
      },
      {
        src: path.resolve('src/public/img/favicon.png'),
        sizes: [36, 48, 72, 96, 144, 192, 512],
        destination: path.join('icons', 'android'),
      },
      ],
    }),
    new InjectManifest({
      swSrc: './src/scripts/src-sw.js',
      swDest: 'sw.js',
    }),
  ],
};
