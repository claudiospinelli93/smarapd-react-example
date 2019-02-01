import _ from "lodash";
import * as smsReducer from "../store/sms.reducer";
import smsActions from "../store/sms.actions";

import BaseComponent from "@common/components/BaseComponent";

import alertAction from "@common/store/alert/alert.actions";
import * as commonActionType from "@common/store/common/common.actionsType";

import DDados from "../sms.ddados";

class Factory extends BaseComponent {
  constructor(props) {
    super(props, DDados);    
  }

  // Lifecycle Events
  componentDDadosMount(){
    this.setDDados("Sistema", {
      valueField: "Id",
      textField: "Nome",
      onChange: this.onChangeSistema.bind(this)
    });

    this.setDDados("Modulo", {
      valueField: "IdModulo",
      textField: "Descricao",
      Desabilitado: true,
      onChange: this.onChangeModulo.bind(this)
    });

    this.setDDados("Provedor", {
      valueField: "Id",
      textField: "Nome",
      Desabilitado: true
    });

    this.setDDados(["Usuario", "Senha"], {
      Desabilitado: true
    });
  }

  componentDidMount() {
    this.props.fetchSistemas();
    this.props.fetchProvedores();
  }

  //Change Events
  onChangeSistema(idSistema) {
    this.setDDados("Modulo", { Desabilitado: !idSistema });
    this.props.fetchModulos(idSistema);
  }

  onChangeModulo(idModulo) {
    this.setDDados(["Provedor", "Usuario", "Senha"], {
      Desabilitado: !idModulo
    });
    this.props.fetchConfiguracaoByIdModulo(idModulo);
  }
}

function mapStateToProps(state) {
  return {
    sistemas: smsReducer.getSistemas(state),
    modulos: smsReducer.getModulos(state),
    provedores: smsReducer.getProvedores(state),
    data: smsReducer.getConfiguracao(state)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    showSuccess: (msg) => dispatch(alertAction.showSuccess(msg)),
    fetchSistemas: () => dispatch(smsActions.fetchSistemas()),
    fetchProvedores: () => dispatch(smsActions.fetchProvedores()),
    fetchModulos: idSistema => dispatch(smsActions.fetchModulos(idSistema)),
    fetchConfiguracaoByIdModulo: idModulo =>
      dispatch(smsActions.fetchConfiguracaoByIdModulo(idModulo)),
    save: data => dispatch(smsActions.save(data)),
    reset: () => dispatch({type: commonActionType.RESET})
  };
};

export { Factory, mapStateToProps, mapDispatchToProps };
