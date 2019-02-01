import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import {LoaderContainer , LoaderStateToProps} from "@common/components/loader/loader";
const Loader = connect(LoaderStateToProps)(LoaderContainer);

import {AlertMapStateToProps, AlertComponent} from "@common/components/alert/alert";
const Alert = connect(AlertMapStateToProps)(AlertComponent);

import LayoutContainer from "@/containers/Layout";

import usuarioLogin from "@/modules/usuario/login/login.route";

import configuracaoSms from "@/modules/configuracao/sms/sms.route";
import example from "@/modules/example/example.router";

const routesWithoutMenu = [...usuarioLogin, ...example];
const routesWithMenu = [...configuracaoSms];

const EmptyContainer = props => (
  <div>
    <Loader />
    <Alert />
    {props.children}
  </div>
);

function RouteWithLayout({ layout, component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        React.createElement(
          layout,
          props,
          React.createElement(component, props)
        )
      }
    />
  );
}

function renderRouter() {
  return (
    <Router>
      <Switch>
        {routesWithoutMenu.map((route, i) => (
          <RouteWithLayout layout={EmptyContainer} key={i} {...route} />
        ))}
        {routesWithMenu.map((route, i) => (
          <RouteWithLayout layout={LayoutContainer} key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default renderRouter;
