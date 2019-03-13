const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  // mode: devMode ? 'development' : 'production',
  devtool: 'source-map',
  entry: './assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      fallback: 'style-loader',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
        MiniCssExtractPlugin.loader,
        {loader: 'css-loader', options: {url: false, sourceMap: true}}, 
        {loader: 'postcss-loader'}, 
        {loader: 'sass-loader', options: { sourceMap: true }}
        ],
      }
    ]
  }
};
