import * as types from "./alert.actionsType";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  show: false,
  type: undefined,
  text: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SHOW_SUCCESS:
      return state.merge({
        show: true,
        type: "success",
        text: action.payload
      });
    case types.SHOW_ERROR:
      return state.merge({
        show: true,
        type: "danger",
        text: action.payload
      });
    case types.SHOW_WARNING:
      return state.merge({
        show: true,
        type: "warning",
        text: action.payload
      });
    case types.HIDE:
      return state.merge({
        show: false
      });
    default:
      return state;
  }
}

// selectors

export function isShow(state) {
  return state.alert.show;
}

export function getText(state) {
return state.alert.text;
}
  
export function getType(state) {
return state.alert.type;
}
  
    
