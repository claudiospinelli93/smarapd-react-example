import api from "../services/login.service";
import * as types from "@common/store/authorization/user.actionsType";

export class LoginActions {
  static doLogin(data) {
    return async dispatch => {
      try {
        let result = await api.login(data);
        window.localStorage.setItem(
          "SESSION_INFO_STORAGE_KEY",
          JSON.stringify(result.data),
          "Object"
        );
        dispatch({ type: types.USER_LOGGED, payload: true });
      } catch (err) {
        dispatch({ type: types.USER_LOGGED, payload: false });
        throw err;
      }
    };
  }

  static logout() {
    return dispatch => {
      window.localStorage.removeItem("user-data");
      dispatch({ type: types.USER_LOGGED, payload: false });
    };
  }
}

export default LoginActions;
