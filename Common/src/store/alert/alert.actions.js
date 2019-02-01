import * as types from "./alert.actionsType";

export class Actions {
  static showSuccess(text) {
    return { type: types.SHOW_SUCCESS, payload: text}
  }

  static showError(text){
    return { type: types.SHOW_ERROR, payload: text}
  }

  static showWarning(text){
    return { type: types.SHOW_WARNING, payload: text}
  }

  static hide(){
    return { type: types.HIDE}
  }
}

export default Actions;
