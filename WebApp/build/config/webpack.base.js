var path = require("path");
var config = require("../config");
var webpack = require("webpack");
var fs = require('fs');

function resolve(dir) {
  return path.join(__dirname, "../..", dir);
}

module.exports = {
  entry: { app: "./src/main.js" },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js"
  },
  resolve: {
    alias: {
      "@": resolve("src"),
      "@common": resolve("../Common/src"),
      "@common-scss": resolve("../Common/scss"),
      "@common-nodem": resolve("../Common/node_modules"),      
    },
    extensions: [".js", ".jsx", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: [resolve("src"), path.resolve(__dirname, "../../../Common/src")],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: [/fonts/],
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash:7].[ext]",
            outputPath: resolve("./dist"),
            emitFile: true
          }
        }
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [/flags/],
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash:7].[ext]",
            outputPath: resolve("./dist")
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",      
            options: {
              includePaths: [resolve("./scss"), "@common-nodem", "@common-themes"]
            }      
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ]
};
