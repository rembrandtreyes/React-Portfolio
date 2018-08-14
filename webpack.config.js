const path = require('path')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'

  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    inline: true,
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    //new ExtractTextPlugin(
      //{filename: 'style.[hash].css', disable: false, allChunks: true}
    //),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
    //new SingleEntryPlugin(this.context, template).apply(childCompiler);
  ]
}
