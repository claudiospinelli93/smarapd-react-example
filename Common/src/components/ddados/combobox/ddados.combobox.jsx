import React, { Component } from "react";
import _ from "lodash";

import DDadosBase from "@common/components/ddados/ddados.base";

class BaseComponent extends DDadosBase {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  getViewValue(value) {
    let valuedItem = this.state.optionArray.find(
      item => item[this.props.valueField || "value"] == value
    );
    if (valuedItem) {
      return valuedItem[this.props.textField || "text"];
    } else {
      return value;
    }
  }

  getOptionsArray() {
    return [
      {
        [this.props.valueField || "value"]: "",
        [this.props.textField || "text"]: "Selecione"
      },
      ...(this.props.itens || [])
    ];
  }

  renderComponent() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <label>
            {this.props.Label}
            {this.props.Obrigatorio && <span className="required-star" />}
          </label>
          <select
            className="form-control"
            value={this.state.value}
            disabled={this.props.Desabilitado}
            required={this.props.Obrigatorio}
            onChange={this.onChange.bind(this)}
          >
            {this.getOptionsArray().map((item, i) => {
              return (
                <option key={i} value={item[this.props.valueField || "value"]}>
                  {item[this.props.textField || "text"]}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }

  renderView() {
    return (
      <div className="col-xs-12">
        {!this.props.hideLabel && <label>{this.props.Label}</label>}
        <label className="form-control">
          {this.getViewValue(this.state.value)}
        </label>
      </div>
    );
  }
}

export default BaseComponent;
