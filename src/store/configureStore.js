import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";

import {rootReducer} from "./rootReduser";
import {rootSaga} from "./rootSaga";

let store;
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === "production") {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
} else {
  store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));
}

sagaMiddleware.run(rootSaga);

export default store;
