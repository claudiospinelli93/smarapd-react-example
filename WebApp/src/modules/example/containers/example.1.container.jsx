import React, { Component } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";

class Example extends Component {
  constructor() {
    super();

    this.state = {
      valorA: 0,
      valorB: 0,
      resultado: undefined
    };

    autoBind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let resultadoCalculo =
      parseInt(this.state.valorA) + parseInt(this.state.valorB);
    this.setState({ resultado: resultadoCalculo });
  }

  onChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <input
            type="text"
            name="valorA"
            className="form-control"
            value={this.state.valorA}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="col-lg-12">
          <input
            type="text"
            name="valorB"
            className="form-control"
            value={this.state.valorB}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="col-lg-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Somar
          </button>
          {this.renderResultado()}
        </div>
      </div>
    );
  }

  renderResultado() {
    return (      
      this.state.resultado != undefined && (
        <div className="col-lg-12">
          <h1>
            O resultado de {this.state.valorA} + {this.state.valorB} ={" "}
            {this.state.resultado}
          </h1>
        </div>
      )
    );
  }
}

export default Example;
