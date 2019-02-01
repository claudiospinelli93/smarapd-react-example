import React, { Component } from "react";
import _ from "lodash";

import BaseComponent from "@common/components/BaseComponent";

class DDadosBase extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (_.has(nextProps, "value") && nextProps.value != this.state.value)
      this.setState({value: nextProps.value});
  }

  onChange(e) {
    let value = e.target.value;
    this.props.onChange && this.props.onChange(value);
    this.setState({value: value});
  }

  render() {
    if (this.props.isView) return this.renderView();
    else return this.renderComponent();
  }

  renderComponent() {}

  renderView() {}
}

export default DDadosBase;
