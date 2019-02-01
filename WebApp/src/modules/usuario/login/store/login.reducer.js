import * as types from "@common/store/authorization/user.actionsType";
import store from "@/store/store";
import Immutable from "seamless-immutable";
import _ from "lodash";

const initialState = Immutable({
  isLogged: false
});

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.USER_LOGGED:
      return state.merge({
        isLogged: action.payload
      });
    default:
      return state;
  }
};

// selectors
export function isLogged(state) {
  return state.usuario.login.isLogged;
}

store.registerDynamicModule("usuario.login", reduce);
