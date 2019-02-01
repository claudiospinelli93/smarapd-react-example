import React, { Component } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { Redirect } from "react-router-dom";
import * as loginReducer from "../store/login.reducer";
import loginFactory from "../store/login.factory";
import BaseComponent from "@common/components/BaseComponent";


class Layout extends BaseComponent {
  constructor() {
    super();

    this.state = {
      username: "rpsilva",
      password: "smarAPD2014",
      invalidLogin: false,
      invalidFields: false
    };
    autoBind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;

    this.setState({
      invalidFields: !username || !password
    });

    this.props.doLogin({
      username: username,
      password: password
    });    
  }

  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/palmeiras/nao/tem/mundial" />;
    }

    return (
      <div className="login-pane">
        <div className="login-container">
          <div className="main-logo">
            <img
              src="http://backoffice.smarapd.com.br/fileserver/fileManager/Image?fileName=BrasaoWeb.png"
              alt="Smarapd"
            />
          </div>
          <div className="text-center">
            <h2>Autenticar Usuário</h2>
          </div>
          <form
            className="row form"
            name="login_form"
            ng-submit="login(credentials)"
            noValidate
            onSubmit={this.onSubmit}
          >
            <div className="form-container">
              {this.state.invalidLogin && (
                <div className="row col-xs-12">
                  <label className="invalidLogin">
                    Usuário e/ou senha inválido(s)!
                  </label>
                </div>
              )}
              <div className="row form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control login-field"
                    name="username"
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Usuário"
                    value={this.state.username}
                    required
                  />
                </div>
                <div className="col-xs-12">
                  <input
                    className="form-control login-field"
                    name="password"
                    type="password"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Senha"
                    required
                    value={this.state.password}
                  />
                </div>
                {this.state.invalidFields && (
                  <div className="col-xs-12">
                    <div>
                      <label className="invalidLogin">
                        Todos os campos devem ser preenchidos.
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="row form-group">
                <div className="col-xs-12">
                  <button
                    type="submit"
                    className="btn btn-primary login-button col-xs-12"
                  >
                    Entrar
                  </button>
                </div>
              </div>
              <div className="forgot-password col-xs-12">
                <a ng-click="forgotPassword()">Esqueci Minha Senha</a>
              </div>
            </div>
          </form>
          <div className="icons-container">
            <ul className="icons-list">
              <li>
                <a
                  href="#/login"
                  className="little-module smarsa-module"
                  data-title="SMARsa"
                />
              </li>
              <li>
                <a
                  href="#/login"
                  className="little-module smarcp-module"
                  data-title="SMARcp"
                />
              </li>
              <li>
                <a
                  href="#/login"
                  className="little-module smarrh-module"
                  data-title="SMARrh"
                />
              </li>
              <li>
                <a
                  href="#/login"
                  className="little-module smartb-module"
                  data-title="SMARtb"
                />
              </li>
              <li>
                <a
                  href="#/login"
                  className="little-module smaram-module small"
                  data-title="SMARam"
                />
              </li>
              <li>
                <a
                  href="#/login"
                  className="little-module smarag-module small"
                  data-title="SMARag"
                />
              </li>
              <li>
                <a
                  href="#/login"
                  className="little-module smarit-module small"
                  data-title="SMARit"
                />
              </li>
              <li>
                <a
                  href="#/login"
                  className="little-module nota-fiscal-module"
                  data-title="Nota Fiscal Eletrônica"
                />
              </li>
              <li>
                <a
                  href="#/login"
                  className="little-module iss-web-module"
                  data-title="IIS Web"
                />
              </li>
            </ul>
          </div>
          <div className="anotation">
            <h6> © 2015 SMARAPD. Todos os direitos reservados</h6>
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    doLogin: data => dispatch(loginFactory.doLogin(data))    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
