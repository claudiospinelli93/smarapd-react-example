import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  Factory,
  mapStateToProps,
  mapDispatchToProps
} from "../components/post.factory";
import { DDadosTitle, DDadosItem } from "@common/components/ddados";

class PostContainer extends Factory {
  constructor(props) {
    super(props);
  }

  renderRow(row){
    return (<li>{row}</li>)
  }
  render(){
    const DDados = this.getDDados();
    let rows = []
    for(let i=0; i<this.props.posts.length; i++){
      rows.push(this.props.posts[i].title)
    }
    return (
      <div className="row">
        <div className="col-xs-12">
            <div className="well">
              <form
                  className="box-form-cadastro"
                  name="dataForm"
                  noValidate
                  >
                  <div className="row">
                    <div className="col-lg-6">
                        <DDadosItem
                          ref="Pesquisa"
                          {...DDados.Campos.Pesquisa}
                          value={this.props.data.Pesquisa}
                          />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                        <h1>Posts</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                        <ul>
                          {rows.map(this.renderRow)}
                        </ul>
                    </div>
                  </div>
              </form>
            </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);