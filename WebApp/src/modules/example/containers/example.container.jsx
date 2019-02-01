import React, { Component } from "react";
import autoBind from "react-autobind";

class Example extends Component {
  constructor() {
    super();

    this.state = {
      valorA: 0
    };

    autoBind(this);
  }

  textoModificado(e) {
    let valor = e.target.value;
    this.setState({ valorA: valor });
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <label htmlFor="">Valor</label>
          <input
            type="text"
            className="form-control"
            // value={this.state.valorA}
            onChange={this.textoModificado}
          />
        </div>
        <div className="col-lg-12">O valor A = {this.state.valorA}</div>
      </div>
    );
  }
}

export default Example;
