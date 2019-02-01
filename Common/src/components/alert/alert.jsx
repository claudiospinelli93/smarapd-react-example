import React, { Component } from "react";
import { connect } from "react-redux";

import * as alertReducer from "@common/store/alert/alert.reducer";
import alertAction from "@common/store/alert/alert.actions";

class AlertComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  render() {
    if (!this.props.show) return <span />;
    else return this.renderAlert();
  }

  renderAlert() {
    return (
      <div
        className={this.props.type == "danger" ? "loading-screen-blocker" : ""}
      >
        <div
          className={`alert fade in ${this.props.type} alert-${
            this.props.type
          }`}
        >
          <button
            type="button"
            className="close"
            onClick={() => this.props.hide()}
          >
            {" "}
            <i className="fa fa-times" />{" "}
          </button>
          {this.props.text}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hide: () => dispatch(alertAction.hide())
  };
};

const AlertMapStateToProps = state => {
  return {
    show: alertReducer.isShow(state),
    type: alertReducer.getType(state),
    text: alertReducer.getText(state)
  };
};

export {AlertComponent, AlertMapStateToProps, mapDispatchToProps};
