import axios from "axios";
import * as loaderActions from "@common/store/loader/loader.actionsType";
import { USER_LOGGED } from "@common/store/authorization/user.actionsType";
// import Swal from "sweetalert2";

const getHttp = (store, baseUrl) => {
  let host = window.location.host;
  let protocol = window.location.protocol;

  const http = axios.create({
    baseURL: baseUrl,
    timeout: 120000
    // headers: {
    //   "Access-Control-Allow-Origin": "*"
    // }
  });

  let requestAdded = 0;
  let requestCompleted = 0;
  let addRequest = () => {
    requestAdded++;
    store.dispatch({ type: loaderActions.LOADER_SHOW });
  };
  let subRequest = () => {
    requestCompleted++;
    if (requestAdded == requestCompleted)
      store.dispatch({ type: loaderActions.LOADER_HIDE });
  };

  http.interceptors.request.use(
    function(config) {
      var localStorage = window.localStorage.getItem(
        "SESSION_INFO_STORAGE_KEY"
      );
      const token = localStorage
        ? JSON.parse(localStorage).access_token
        : undefined;
      if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      //Loading
      if (config && config.params && config.params.shouldNotIntercept) {
        if (config.params) config.params = config.params.data;
        requestAdded++;
        return config;
      }
      addRequest();
      return config;
    },
    function(err) {
      subRequest();
      return Promise.reject(err);
    }
  );

  http.interceptors.response.use(
    function(response) {
      if (response.status == 401) {
        store.dispatch({ type: USER_LOGGED, payload: false });
      }
      subRequest();
      return response;
    },
    function(error) {
      if (error && error.response.status == 401) {
        store.dispatch({ type: USER_LOGGED, payload: false });
      } else {
        if (
          error &&
          error.response &&
          error.response.data &&
          (error.response.data.Message || error.response.data.message)
        ) {
          // Swal(
          //   "Erro!",
          //   `${error.response.data.Message ||
          //     error.response.data.message ||
          //     "Ocorreu um erro inesperado, por favor contate a administração."}`,
          //   "error"
          // );
        }
      }
      subRequest();
      return Promise.reject(error);
    }
  );

  return http;
};
export default getHttp;
