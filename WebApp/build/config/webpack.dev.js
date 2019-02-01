var path = require("path");
var merge = require("webpack-merge");
var config = require("../config");
var webpack = require("webpack");
var baseWebpackConfig = require("./webpack.base");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ["./build/dev-browser.js"].concat(
    baseWebpackConfig.entry[name]
  );
});

module.exports = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    // copy custom static assets
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, "../../static"),
    //     to: config.build.assetsSubDirectory,
    //     ignore: [".*"]
    //   }
    // ])
  ]
});
