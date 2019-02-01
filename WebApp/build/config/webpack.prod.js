var path = require("path");
var merge = require("webpack-merge");
var config = require("../config");
var baseWebpackConfig = require("./webpack.base");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

var webpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  devtool: "#source-map",
  output: {
    path: path.join(config.build.assetsRoot, "js"),
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(config.build.assetsRoot, "index.html"),
      template: config.build.index,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: "dependency"
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../../static"),
        to: path.resolve(__dirname, "../dist/static"),
        ignore: [".*"]
      }
    ])
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        },
        common: {
          test: /[\\/]Common[\\/]/,
          name: "common",
          chunks: "all"
        }
      }
    }
  }
});

module.exports = webpackConfig;
