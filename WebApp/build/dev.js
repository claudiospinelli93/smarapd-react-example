var config = require("./config");

var opn = require("opn");
var path = require("path");
var express = require("express");
var webpack = require("webpack");
var webpackConfig = require("./config/webpack.dev");

// default port where dev server listens for incoming traffic
var port = config.dev.port;
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require("webpack-hot-middleware")(compiler, {
  log: () => {}
});
// force page reload when html-webpack-plugin template changes
compiler.plugin("compilation", function(compilation) {
  compilation.plugin("html-webpack-plugin-after-emit", function(data, cb) {
    hotMiddleware.publish({ action: "reload" });
    cb();
  });
});

// handle fallback for HTML5 history API
app.use(require("connect-history-api-fallback")());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
var staticPath = path.posix.join(
  config.dev.assetsPublicPath,
  config.dev.assetsSubDirectory
);
app.use(staticPath, express.static("./static"));

var uri = "http://localhost:" + port;

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve;
});

console.log("> Starting dev server...");
devMiddleware.waitUntilValid(() => {
  console.log("> Listening at " + uri + "\n");
  if (autoOpenBrowser) {
    opn(uri);
  }
  _resolve();
});

var server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  }
};
