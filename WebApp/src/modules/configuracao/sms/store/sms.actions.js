import api from "../services/sms.service";
import * as types from "./sms.actionType";

export class Actions {
  static fetchSistemas(data) {
    return async dispatch => {
      let result = await api.sistema.getAll();        
        dispatch({ type: types.FETCH_SISTEMAS, payload: result.data });
    };
  }

  static fetchProvedores(){
    return async dispatch => {
      let result = await api.provedor.getAll();        
        dispatch({ type: types.FETCH_PROVEDORES, payload: result.data });
    };
  }

  static fetchModulos(idSistema, local = 2){
    return async dispatch => {
      let result = await api.modulos.getAll(idSistema, local);        
        dispatch({ type: types.FETCH_MODULOS, payload: result.data });
    };
  }

  static fetchConfiguracaoByIdModulo(idModulo){
    return async dispatch => {
      let result = await api.configuracao.getByIdModulo(idModulo);        
        dispatch({ type: types.FETCH_CONFIGURACAO, payload: result.data });
    };
  }

  static save(data){
    return async dispatch => {
      let result = await api.configuracao.update(data);        
        dispatch({ type: types.FETCH_CONFIGURACAO, payload: data });
    };
  }  
}

export default Actions;
