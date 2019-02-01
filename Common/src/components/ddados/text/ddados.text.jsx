import React, { Component } from "react";
import _ from "lodash";

import DDadosBase from "@common/components/ddados/ddados.base";

class DDadosComponent extends DDadosBase {
  constructor(props) {
    super(props);

    this.state = {
        value: props.value
    }
  }

  renderComponent() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <label>
            {this.props.Label}
            {this.props.Obrigatorio && <span className="required-star" />}
          </label>
          <input
            className="form-control"
            type={this.props.TipoInput || 'text'}
            value={this.state.value || ''}
            disabled={this.props.Desabilitado}
            required={this.props.Obrigatorio}
            onChange={this.onChange.bind(this)}
            maxLength={this.props.Tamanho}
            minLength={this.props.TamanhoMinimo}
            placeholder={this.props.Placeholder || this.props.Label}
          ></input>
        </div>
      </div>
    );
  }

  renderView() {
    return (
      <div className="col-xs-12">
        {!this.props.hideLabel && <label>{this.props.Label}</label>}
        <label className="form-control">{this.value}</label>
      </div>
    );
  }
}

export default DDadosComponent;
