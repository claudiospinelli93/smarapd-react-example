import * as types from "./sms.actionType";
import * as commonActionType from "@common/store/common/common.actionsType";
import store from "@/store/store";
import Immutable from "seamless-immutable";
import _ from "lodash";

const initialState = Immutable({
  sistemas: [],
  provedores: [],
  modulos: [],
  data: {
    IdConfiguracaoSms: undefined,
    IdSistema: undefined,
    IdModulo: undefined,
    IdProvedorSms: undefined,
    Usuario: undefined,
    Senha: undefined
  }
});

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_SISTEMAS:
      return state.merge({
        sistemas: action.payload
      });
    case types.FETCH_PROVEDORES:
      return state.merge({
        provedores: action.payload
      });
    case types.FETCH_MODULOS:
      return state.merge({
        modulos: action.payload
      });
    case types.FETCH_CONFIGURACAO:
      return state.merge({
        data: {
          ...state.data,
          ...action.payload,
          IdConfiguracaoSms: action.payload.IdConfiguracaoSms || action.payload.Id || state.data.IdConfiguracaoSms
        }
      });
    case commonActionType.RESET:
      return initialState;
    default:
      return state;
  }
};

// selectors
export function getSistemas(state) {
  return state.configuracao.sms.sistemas;
}

export function getProvedores(state) {
  return state.configuracao.sms.provedores;
}

export function getModulos(state) {
  return state.configuracao.sms.modulos;
}

export function getConfiguracao(state) {
  return state.configuracao.sms.data;
}

store.registerDynamicModule("configuracao.sms", reduce);
