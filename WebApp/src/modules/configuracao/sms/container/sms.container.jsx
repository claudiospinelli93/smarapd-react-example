import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  Factory,
  mapStateToProps,
  mapDispatchToProps
} from "../components/sms.factory";

//DDados Iports
import { DDadosTitle, DDadosItem } from "@common/components/ddados";

class SmsContainer extends Factory {
  constructor(props) {
    super(props);
  }

  async onSubmit(e) {
    e.preventDefault();
    const formData = this.getFormValues();
    let dto = {
      IdModulo: formData.Modulo,
      IdProvedorSms: formData.Provedor,
      Usuario: formData.Usuario,
      Senha: formData.Senha
    };
    await this.props.save(dto);
    if (this.props.data.IdConfiguracaoSms)
      this.props.showSuccess("Registro alterado com sucesso!");
    else this.props.showSuccess("Registro incluído com sucesso!");
    
    this.reload();
  }

  render() {
    const DDados = this.getDDados();

    return (
      <div className="row">
        <div className="col-xs-12">
          <DDadosTitle prefix="C" title={DDados.Titulo} />
          <div className="well">
            <form
              className="box-form-cadastro"
              name="dataForm"
              noValidate
              onSubmit={this.onSubmit.bind(this)}
            >
              <div className="row">
                <div className="col-lg-4">
                  <DDadosItem
                    ref="Sistema"
                    {...DDados.Campos.Sistema}
                    value={this.props.data.IdSistema}
                    itens={this.props.sistemas}
                  />
                </div>
                <div className="col-lg-4">
                  <DDadosItem
                    ref="Modulo"
                    {...DDados.Campos.Modulo}
                    value={this.props.data.IdModulo}
                    itens={this.props.modulos}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <DDadosItem
                    ref="Provedor"
                    {...DDados.Campos.Provedor}
                    itens={this.props.provedores}
                    value={this.props.data.IdProvedorSms}
                  />
                </div>
                <div className="col-lg-4">
                  <DDadosItem
                    ref="Usuario"
                    {...DDados.Campos.Usuario}
                    value={this.props.data.Usuario}
                  />
                </div>
                <div className="col-lg-4">
                  <DDadosItem
                    ref="Senha"
                    {...DDados.Campos.Senha}
                    value={this.props.data.Senha}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 btn-forms">
                  <button type="button" className="btn btn-cancel">
                    <i className="fa fa-ban" /> Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="fa fa-save" /> Salvar
                  </button>
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
)(SmsContainer);
