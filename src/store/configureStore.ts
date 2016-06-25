import { createStore, applyMiddleware, compose, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState = {}) {
  return <Store>finalCreateStore(rootReducer, initialState);
}
