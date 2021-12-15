/* eslint-disable no-useless-escape */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPngquant = require('imagemin-pngquant');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
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
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
      use: ['file-loader', 'image-webpack-loader?bypassOnDebug'],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'dist/'),
      }],
    }),
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
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        ImageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new UglifyJsPlugin(
      {
        parallel: true,
        exclude: [/\.min\.js$/gi], // skip pre-minified libs
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      },
    ),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.scss$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
