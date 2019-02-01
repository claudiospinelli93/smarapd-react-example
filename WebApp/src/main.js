import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "@/store/store";

import "jquery";
import "babel-polyfill";

import "@common-scss/themes/theme-default/main.scss";
import "bootstrap";

import Router from "@/router";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("app")
);
