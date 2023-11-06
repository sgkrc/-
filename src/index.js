import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";
import { tempSetUser, check } from "./modules/user";
import "bootstrap/dist/css/bootstrap.min.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
function loadUser() {
  try {
    const user = localStorage.getItem("user");
    if (!user) return; // 로그인 상태가 아니라면 아무것도 안함

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log("localStorage is not working");
  }
}

loadUser();
const root = createRoot(document.getElementById("root")); //ReactDOM 이 업데이트 변경됨.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
