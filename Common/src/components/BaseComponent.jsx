import React, { Component } from "react";
import _ from "lodash";

class BaseComponent extends Component {
  constructor(props, DDados) {
    super(props);

    if (DDados) {
      this.DDados = DDados;
      this.initialDDados = _.clone(DDados);
    }

    this.componentDDadosMount();
  }

  componentDDadosMount() {}

  componentDidMount(){}

  getDDados() {
    return this.DDados;
  }

  reload() {
    this.DDados = _.clone(this.initialDDados);
    this.props.reset();
    this.componentDDadosMount();
    this.componentDidMount();
    this.forceUpdate();
  }

  getFormValues() {
    const keys = _.keys(this.refs);
    let objFormValues = {};
    keys.forEach(key => {
      objFormValues[key] = this.refs[key].getValue();
    });
    return objFormValues;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setDDados(key, props) {
    const setKey = keyValue => {
      this.DDados.Campos[keyValue] = _.merge(
        this.DDados.Campos[keyValue],
        props
      );
    };
    if (_.isArray(key)) {
      key.forEach(setKey);
    } else {
      setKey(key);
    }
  }
}

export default BaseComponent;
