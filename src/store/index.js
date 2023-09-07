import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/user";
import { createStoreHook } from "react-redux";

const allReducers = combineReducers({
  user: userReducer,
});

const store = createStore(allReducers);
export default store;
