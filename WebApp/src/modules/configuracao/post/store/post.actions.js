import api from "../services/post.service";
import * as types from "./post.actionType";

export class Actions {
  static fetchPost(data) {
    return async dispatch => {
      let result = await api.post.getAll();        
        dispatch({ type: types.ALL_POST, payload: result.data });
    };
  }
}

export default Actions;
