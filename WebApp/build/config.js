// see http://vuejs-templates.github.io/webpack for documentation.
var path = require("path");

module.exports = {
  build: {
    env: "production",
    index: path.resolve(__dirname, "../index.html"),
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "./"
  },
  dev: {
    env: "development",
    port: 8081,
    autoOpenBrowser: false,
    assetsSubDirectory: "static",
    assetsPublicPath: ""
  }
};
