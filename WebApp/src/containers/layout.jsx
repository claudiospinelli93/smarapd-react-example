import React, { Component } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import * as loginReducer from "@/modules/usuario/login/store/login.reducer";

import BaseComponent from "@common/components/BaseComponent";

import {LoaderContainer , LoaderStateToProps} from "@common/components/loader/loader";
let Loader = connect(LoaderStateToProps)(LoaderContainer);

import {AlertMapStateToProps, AlertComponent} from "@common/components/alert/alert";
const Alert = connect(AlertMapStateToProps)(AlertComponent);

class Layout extends BaseComponent {
  render() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Loader />
        <Alert />
        <header>
          <div className="container">
            <div className="header-logo">
              <a ng-click="goToMainPage()">
                <img
                  ng-src="http://backoffice.smarapd.com.br/fileserver/fileManager/Image?fileName=BrasaoWeb.png&amp;h=39086"
                  alt="Smarapd"
                  src="http://backoffice.smarapd.com.br/fileserver/fileManager/Image?fileName=BrasaoWeb.png&amp;h=39086"
                />
              </a>
            </div>
            <nav className="nav-header" />
          </div>
        </header>
        <div className="container container-main">
        {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: loginReducer.isLogged(state)
  };
}

export default connect(mapStateToProps)(Layout);
