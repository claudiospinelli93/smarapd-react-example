import * as types from "./post.actionType";
import * as commonActionType from "@common/store/common/common.actionsType";
import store from "@/store/store";
import Immutable from "seamless-immutable";
import _ from "lodash";

const initialState = Immutable({
  sistemas: [],
  provedores: [],
  posts: [],
  data: {
    Pesquisa: undefined,
    IdSistema: undefined,
    IdModulo: undefined,
    IdProvedorSms: undefined,
    Usuario: undefined,
    Senha: undefined
  }
});


const reduce = (state = initialState, action = {}) => {

  switch (action.type) {
    case types.ALL_POST:
      return state.merge({
        posts: action.payload
      }); 
    default: // need this for default case
      return state 
   }
  
};

export function getConfiguracao(state) {
  return state.configuracao.post.data;
}

export function getPosts(state) {
  return state.configuracao.post.posts;
}

store.registerDynamicModule("configuracao.post", reduce);
