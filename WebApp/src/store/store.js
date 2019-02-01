import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import _ from "lodash";
import * as commonReducers from "@common/store/reducers";

const nestedReducers = reducers => {
  let keys = Object.keys(reducers);
  keys.forEach(key => {
    let obj = reducers[key];
    if (!_.isFunction(obj)) {
      reducers[key] = nestedReducers(obj);
    }
  });
  return combineReducers(reducers);
};

const createAppStore = reducerMap => {
  const injectAsyncReducers = (store, name, reducers) => {
    _.set(store.asyncReducers, name, reducers);
    let allReducers = { ...store.asyncReducers, ...reducerMap };
    let finalReducers = nestedReducers(allReducers);    
    store.replaceReducer(
      finalReducers
    );
  };

  const store = createStore(
    combineReducers(reducerMap),
    applyMiddleware(thunk)
  );

  store.asyncReducers = {};

  store.registerDynamicModule = (name, reducers) => {
    injectAsyncReducers(store, name, reducers);
  };

  return store;
};

const createdStore = createAppStore(commonReducers);
export default createdStore;
