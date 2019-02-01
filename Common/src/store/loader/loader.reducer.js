import * as types from "./loader.actionsType";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  loader: false
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOADER_SHOW:
      return state.merge({
        loader: true
      });
    case types.LOADER_HIDE:
      return state.merge({
        loader: false
      });
    default:
      return state;
  }
}

// selectors

export function isLoading(state) {
  return state.loader.loader;
}
